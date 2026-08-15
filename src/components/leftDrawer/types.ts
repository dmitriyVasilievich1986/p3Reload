import type { ReactNode } from 'react';

/** Collapsed rail width: 30px icons with 12px padding on each side. */
export const LEFT_DRAWER_COLLAPSED_WIDTH_PX = 54;

/** Fully extracted drawer width. */
export const LEFT_DRAWER_EXPANDED_WIDTH_PX = 256;

export type LeftDrawerProps = {
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};
