export const specialEventsNames = {
  Empty: 'EmptyEvent',
} as const;

export type specialEventsNamesType = (typeof specialEventsNames)[keyof typeof specialEventsNames];
