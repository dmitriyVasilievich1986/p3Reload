import type { BadgeProps } from '../badge';
import type { TimesType } from '@constants/times';
import type { ReactNode } from 'react';

export type CardProps = {
  /** Optional title/header content above the body. */
  header?: ReactNode;
  /** Body content; typically a list of nested components. */
  body: ReactNode;
  /** Optional time-of-day badge shown at the top-left. */
  time?: TimesType;
  /** Optional badge shown at the top-right. */
  badge?: BadgeProps;
  /** Highlights the card as the current selection. */
  isSelected?: boolean;
  /** When false, the card is disabled and non-interactive. Defaults to true. */
  isSelectable?: boolean;
  /** When true, applies a default min-height (300px) to the card. */
  isTall?: boolean;
  onClick?: () => void;
  className?: string;
};
