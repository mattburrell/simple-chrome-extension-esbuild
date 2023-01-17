export {};

declare global {
  interface Window {
    IS_PRODUCTION: boolean;
  }
}
window.IS_PRODUCTION = window.IS_PRODUCTION || {};
