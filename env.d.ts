// / <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_ENDPOINT: string;
    readonly VITE_ADMIN_API_ENDPOINT: string;
    readonly VITE_CUSTOMER_ID: string;
    readonly BASE_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  