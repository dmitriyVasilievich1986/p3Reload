export const SpecialEventsNames = {
  Empty: 'EmptyEvent',
} as const;

export type SpecialEventsNamesType = (typeof SpecialEventsNames)[keyof typeof SpecialEventsNames];
