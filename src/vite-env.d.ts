/// <reference types="vite/client" />

declare global {
  interface Window {
    goatcounter?: {
      count: (url: string) => void;
    };
  }
}

export {};

