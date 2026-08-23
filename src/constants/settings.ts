/**
 * URL search param keys and defaults for user-configurable app settings.
 * Every setting lives entirely in the URL so the current configuration is
 * always shareable and bookmarkable.
 */
export const SettingsParams = {
  mainCharName: 'mainCharName',
  showSpoilers: 'showSpoilers',
} as const;

export type SettingsParam = (typeof SettingsParams)[keyof typeof SettingsParams];

/** Default protagonist name shown when the `mainCharName` URL param is unset. */
export const DEFAULT_MAIN_CHAR_NAME = 'Protagonist';

/** Default value for the `showSpoilers` URL param when unset. */
export const DEFAULT_SHOW_SPOILERS = false;
