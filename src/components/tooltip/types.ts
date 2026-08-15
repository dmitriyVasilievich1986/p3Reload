import type { ReactNode } from 'react';

export const TooltipPositions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
} as const;

export type TooltipPosition = (typeof TooltipPositions)[keyof typeof TooltipPositions];

export type TooltipProps = {
  content: ReactNode;
  position?: TooltipPosition;
  children: ReactNode;
  className?: string;
};
