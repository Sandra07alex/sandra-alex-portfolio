/// <reference types="vite/client" />

declare global {
  interface Window {
    goatcounter?: {
      count: (vars?: { path?: string; title?: string; referrer?: string; event?: boolean }) => void;
    };
  }
}

export {};
