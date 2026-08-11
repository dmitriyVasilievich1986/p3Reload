import type { Dayjs } from 'dayjs';

export const DateStepDirections = {
  left: 'left',
  right: 'right',
} as const;

export type DateStepDirection = (typeof DateStepDirections)[keyof typeof DateStepDirections];

export type DateStepButtonProps = {
  /** Target date written to the `day` URL param. When undefined, the button is not rendered. */
  date?: Dayjs;
  /** Visual step direction (left / right). */
  direction: DateStepDirection;
  className?: string;
};
