// Lovable CDN assets are served from Lovable's edge at /__l5e/assets-v1/...
// When the app runs outside Lovable hosting (e.g. Vercel via GitHub sync),
// relative paths 404 because that infrastructure lives only on *.lovable.app.
// Always resolve asset URLs against the Lovable published domain so images
// load correctly regardless of where the site is deployed.
const LOVABLE_ASSET_BASE = "https://siemensmumbai.lovable.app";

export function assetUrl(pointer: { url: string }): string {
  const u = pointer.url;
  if (/^https?:\/\//i.test(u)) return u;
  return `${LOVABLE_ASSET_BASE}${u.startsWith("/") ? "" : "/"}${u}`;
}
