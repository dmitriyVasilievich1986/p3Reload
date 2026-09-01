/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** App version, injected from `package.json` at build time. */
  readonly VITE_APP_VERSION: string;
  /** Game version this data set targets. */
  readonly VITE_GAME_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
