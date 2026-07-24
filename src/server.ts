import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { SITE } from "./lib/site";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

async function handleBookingNotification(request: Request): Promise<Response> {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Expected JSON body." }), {
      status: 400,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
      status: 400,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  const customerName = String(payload.customer_name ?? "").trim();
  const phoneNumber = String(payload.phone_number ?? "").trim();
  const locality = String(payload.locality ?? "").trim();
  const brand = String(payload.washing_machine_brand ?? "").trim();
  const problem = String(payload.problem_description ?? "").trim();

  if (!customerName || !phoneNumber || !locality || !brand || !problem) {
    return new Response(JSON.stringify({ error: "Missing required booking fields." }), {
      status: 400,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  const subject = `New booking request from ${customerName}`;
  const replyToEmail = phoneNumber.includes("@") ? phoneNumber : undefined;
  const textBody = [
    `Customer name: ${customerName}`,
    `Phone number: ${phoneNumber}`,
    `Locality: ${locality}`,
    `Address / landmark: ${String(payload.address_landmark ?? "Not provided")}`,
    `Brand: ${brand}`,
    `Problem: ${problem}`,
    `Preferred date: ${String(payload.preferred_service_date ?? "Not provided")}`,
    `Preferred time slot: ${String(payload.preferred_time_slot ?? "Not provided")}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
      <h2 style="margin-bottom: 12px;">New booking request</h2>
      <p><strong>Customer name:</strong> ${customerName}</p>
      <p><strong>Phone number:</strong> ${phoneNumber}</p>
      <p><strong>Locality:</strong> ${locality}</p>
      <p><strong>Address / landmark:</strong> ${String(payload.address_landmark ?? "Not provided")}</p>
      <p><strong>Brand:</strong> ${brand}</p>
      <p><strong>Problem:</strong> ${problem}</p>
      <p><strong>Preferred date:</strong> ${String(payload.preferred_service_date ?? "Not provided")}</p>
      <p><strong>Preferred time slot:</strong> ${String(payload.preferred_time_slot ?? "Not provided")}</p>
    </div>
  `;

  const resendApiKey = process.env.RESEND_API_KEY;
  const emailFrom = process.env.EMAIL_FROM ?? "onboarding@resend.dev";

  if (!resendApiKey) {
    console.error("Booking notification failed: RESEND_API_KEY is not configured.");
    return new Response(JSON.stringify({ error: "Notification delivery is not configured." }), {
      status: 500,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: emailFrom,
      to: [SITE.notificationEmail],
      ...(replyToEmail ? { reply_to: replyToEmail } : {}),
      subject,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Booking notification failed", errorText);
    return new Response(JSON.stringify({ error: "Notification delivery failed." }), {
      status: 502,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      if (new URL(request.url).pathname === "/api/booking-notify") {
        return await handleBookingNotification(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
