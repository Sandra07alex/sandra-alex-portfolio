/**
 * Record a custom GoatCounter event (e.g. a click on the contact email).
 * Events appear in the GoatCounter dashboard under their `name`.
 * No-op if the script hasn't loaded or was blocked.
 */
export function trackEvent(name: string, title?: string) {
  window.goatcounter?.count({ path: name, title: title ?? name, event: true });
}
