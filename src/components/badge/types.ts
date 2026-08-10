export const BadgeSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export type BadgeSize = (typeof BadgeSizes)[keyof typeof BadgeSizes];

export const BadgeColors = {
  gold: 'gold',
  green: 'green',
  blue: 'blue',
  red: 'red',
  violet: 'violet',
  teal: 'teal',
  orange: 'orange',
  slate: 'slate',
} as const;

export type BadgeColor = (typeof BadgeColors)[keyof typeof BadgeColors];

export type BadgeProps = {
  size: BadgeSize;
  color: BadgeColor;
  text: string;
};
