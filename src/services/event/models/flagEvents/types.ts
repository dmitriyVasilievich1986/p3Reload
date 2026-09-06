export const FlagEventsNames = {
  MoonFlag: 'MoonFlagEvent',
  TowerFlag: 'TowerFlagEvent',
} as const;

export type FlagEventsNamesType = (typeof FlagEventsNames)[keyof typeof FlagEventsNames];
