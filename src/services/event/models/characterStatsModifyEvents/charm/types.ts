export const CharmStatModifyNames = {
  chagallCafeCharm: 'ChagalCafeCharmEvent',
  gameParadeCharm: 'GameParadeCharmEvent',
  hagakureRamen: 'HagakureRamenEvent',
  hagakureRamenSpecial: 'HagakureRamenSpecialEvent',
} as const;

export type CharmStatModifyNamesType =
  (typeof CharmStatModifyNames)[keyof typeof CharmStatModifyNames];
