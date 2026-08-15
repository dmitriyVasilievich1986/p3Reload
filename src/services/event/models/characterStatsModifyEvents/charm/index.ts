import { ChagalCafeCharmEvent } from './ChagalCafe';
import { GameParadeCharmEvent } from './GameParadeCharm';
import { HagakureRamenEvent } from './HagakureRamenEvent';
import { HagakureRamenSpecialEvent } from './HagakureRamenSpecialEvent';
import { CharmStatModifyNames, type CharmStatModifyNamesType } from './types';

export {
  CharmStatModifyNames,
  type CharmStatModifyNamesType,
  ChagalCafeCharmEvent,
  GameParadeCharmEvent,
  HagakureRamenEvent,
  HagakureRamenSpecialEvent,
};

export const CharmStatModifyEvents = {
  [CharmStatModifyNames.chagallCafeCharm]: ChagalCafeCharmEvent,
  [CharmStatModifyNames.gameParadeCharm]: GameParadeCharmEvent,
  [CharmStatModifyNames.hagakureRamen]: HagakureRamenEvent,
  [CharmStatModifyNames.hagakureRamenSpecial]: HagakureRamenSpecialEvent,
} as const;
