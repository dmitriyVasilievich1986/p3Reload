import type { BadgeProps } from '../badge';
import type { TimesType } from '@constants/times';
import type { ReactNode } from 'react';

export const CardIcons = {
  CharismaticCharacter: 'charismaticCharacter',
  TarotCard: 'tarotCard',
  ExamPassed: 'examPassed',
} as const;

export type CardIconName = (typeof CardIcons)[keyof typeof CardIcons];

export type CardIcon = {
  /** Which modifier icon to render. */
  icon: CardIconName;
  /** Tooltip text explaining what this icon means in this context. */
  tooltip: string;
};

export type CardProps = {
  /** Optional title/header content above the body. */
  header?: ReactNode;
  /** Body content; typically a list of nested components. */
  body: ReactNode;
  /** Optional time-of-day badge shown at the top-left. */
  time?: TimesType;
  /** Optional badge shown at the top-right. */
  badge?: BadgeProps;
  /** Optional modifier icons shown at the right end of the header, each with its own tooltip. */
  icons?: CardIcon[];
  /** Highlights the card as the current selection. */
  isSelected?: boolean;
  /** When false, the card is disabled and non-interactive. Defaults to true. */
  isSelectable?: boolean;
  /** When true, applies a default min-height (300px) to the card. */
  isTall?: boolean;
  onClick?: () => void;
  /**
   * When provided, a red bin button slides in on the right edge on hover/focus
   * (WhatsApp/Telegram style). Clicking it calls this instead of {@link onClick}.
   */
  onClear?: () => void;
  className?: string;
};
