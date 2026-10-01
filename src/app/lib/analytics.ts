// Google Analytics helpers. The gtag script itself is loaded by index.html (see vite.config.ts and public/ga.js).
const GA_TRACKING_ID = "G-Y6X0LLS4FD";

// Track page views
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

// Track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
