import { ChagalCafeCharmEvent } from './ChagalCafe';
import { GameParadeCharmEvent } from './GameParadeCharm';
import { HagakureRamenEvent } from './HagakureRamenEvent';
import { HagakureRamenSpecialEvent } from './HagakureRamenSpecialEvent';
import { charmStatModifyNames, type CharmStatModifyNamesType } from './types';

export {
  charmStatModifyNames,
  type CharmStatModifyNamesType,
  ChagalCafeCharmEvent,
  GameParadeCharmEvent,
  HagakureRamenEvent,
  HagakureRamenSpecialEvent,
};

export const charmStatModifyEvents = {
  [charmStatModifyNames.chagallCafeCharm]: ChagalCafeCharmEvent,
  [charmStatModifyNames.gameParadeCharm]: GameParadeCharmEvent,
  [charmStatModifyNames.hagakureRamen]: HagakureRamenEvent,
  [charmStatModifyNames.hagakureRamenSpecial]: HagakureRamenSpecialEvent,
} as const;
