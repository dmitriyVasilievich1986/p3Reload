import { HangedManFlagEvent } from './HangedManFlagEvent';
import { JusticeFlag1Event } from './JusticeFlag1Event';
import { JusticeFlag2Event } from './JusticeFlag2Event';
import { JusticeFlag3Event } from './JusticeFlag3Event';
import { MoonFlagEvent } from './MoonFlagEvent';
import { TowerFlagEvent } from './TowerFlagEvent';
import { FlagEventsNames } from './types';

export const FlagEvents = {
  [FlagEventsNames.MoonFlag]: MoonFlagEvent,
  [FlagEventsNames.TowerFlag]: TowerFlagEvent,
  [FlagEventsNames.JusticeFlag1]: JusticeFlag1Event,
  [FlagEventsNames.JusticeFlag2]: JusticeFlag2Event,
  [FlagEventsNames.JusticeFlag3]: JusticeFlag3Event,
  [FlagEventsNames.HangedManFlag]: HangedManFlagEvent,
} as const;

export type FlagEventsType = (typeof FlagEvents)[keyof typeof FlagEvents];

export { MoonFlagEvent } from './MoonFlagEvent';
export { TowerFlagEvent } from './TowerFlagEvent';
export { HangedManFlagEvent } from './HangedManFlagEvent';
export { JusticeFlag1Event } from './JusticeFlag1Event';
export { JusticeFlag2Event } from './JusticeFlag2Event';
export { JusticeFlag3Event } from './JusticeFlag3Event';
export { FlagEventsNames, type FlagEventsNamesType } from './types';
