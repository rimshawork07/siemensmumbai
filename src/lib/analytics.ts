export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

/**
 * Initialize GA4 by inserting the script tag if not already present.
 */
export function initGA() {
  if (typeof window === 'undefined') return;
  if ((window as any).gtag) return; // already initialized

  // Insert the GA4 script
  const scriptId = 'ga4-gtag-js';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.id = scriptId;
    document.head.appendChild(script);
  }

  // Set up dataLayer and gtag function
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(){(window as any).dataLayer.push(arguments);}
  (window as any).gtag = gtag;
  // Configure GA4 – we turn off automatic page_view to manually track later
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
}

/**
 * Track a page view. Call after navigation.
 * @param path The page path including query string.
 */
export function trackPageView(path: string) {
  if (typeof window === 'undefined') return;
  if (!(window as any).gtag) return;
  (window as any).gtag('event', 'page_view', { page_path: path });
}
