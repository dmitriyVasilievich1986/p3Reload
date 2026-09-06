import { MoonFlagEvent } from './MoonFlagEvent';
import { TowerFlagEvent } from './TowerFlagEvent';
import { FlagEventsNames } from './types';

export const FlagEvents = {
  [FlagEventsNames.MoonFlag]: MoonFlagEvent,
  [FlagEventsNames.TowerFlag]: TowerFlagEvent,
} as const;

export type FlagEventsType = (typeof FlagEvents)[keyof typeof FlagEvents];

export { MoonFlagEvent } from './MoonFlagEvent';
export { TowerFlagEvent } from './TowerFlagEvent';
export { FlagEventsNames, type FlagEventsNamesType } from './types';
