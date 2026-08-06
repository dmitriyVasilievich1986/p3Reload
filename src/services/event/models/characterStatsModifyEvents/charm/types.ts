export const charmStatModifyNames = {
  chagallCafeCharm: 'ChagalCafeCharmEvent',
  gameParadeCharm: 'GameParadeCharmEvent',
  hagakureRamen: 'HagakureRamenEvent',
  hagakureRamenSpecial: 'HagakureRamenSpecialEvent',
} as const;

export type CharmStatModifyNamesType =
  (typeof charmStatModifyNames)[keyof typeof charmStatModifyNames];
