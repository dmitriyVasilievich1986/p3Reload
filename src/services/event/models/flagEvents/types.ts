export const FlagEventsNames = {
  MoonFlag: 'MoonFlagEvent',
  TowerFlag: 'TowerFlagEvent',
  JusticeFlag1: 'JusticeFlag1Event',
  JusticeFlag2: 'JusticeFlag2Event',
  JusticeFlag3: 'JusticeFlag3Event',
  HangedManFlag: 'HangedManFlagEvent',
} as const;

export type FlagEventsNamesType = (typeof FlagEventsNames)[keyof typeof FlagEventsNames];
