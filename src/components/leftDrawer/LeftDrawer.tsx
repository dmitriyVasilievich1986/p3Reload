import classNames from 'classnames';
import { useState, type FocusEvent } from 'react';

import { LeftDrawerContext } from './context';
import {
  LEFT_DRAWER_COLLAPSED_WIDTH_PX,
  LEFT_DRAWER_EXPANDED_WIDTH_PX,
  type LeftDrawerProps,
} from './types';

/**
 * Fixed left rail that sits above the app. Collapsed to icon width; expands on hover/focus.
 */
export function LeftDrawer({
  children,
  className,
  'aria-label': ariaLabel = 'Navigation',
}: LeftDrawerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleBlurCapture(event: FocusEvent<HTMLElement>) {
    const nextFocus = event.relatedTarget;

    if (nextFocus instanceof Node && event.currentTarget.contains(nextFocus)) {
      return;
    }

    setIsExpanded(false);
  }

  const widthPx = isExpanded ? LEFT_DRAWER_EXPANDED_WIDTH_PX : LEFT_DRAWER_COLLAPSED_WIDTH_PX;

  return (
    <aside
      role="navigation"
      aria-label={ariaLabel}
      aria-expanded={isExpanded}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocusCapture={() => setIsExpanded(true)}
      onBlurCapture={handleBlurCapture}
      style={{ width: widthPx }}
      className={classNames(
        'fixed left-0 top-0 z-50 flex h-full flex-col overflow-hidden border-r shadow-lg',
        'transition-[width] duration-200 ease-out',
        'bg-white text-slate-900 border-slate-200',
        'dark:bg-slate-900 dark:text-slate-50 dark:border-slate-700 dark:shadow-none',
        className
      )}
    >
      <LeftDrawerContext.Provider value={{ isExpanded }}>
        <div className="flex h-full flex-col" style={{ width: LEFT_DRAWER_EXPANDED_WIDTH_PX }}>
          {children}
        </div>
      </LeftDrawerContext.Provider>
    </aside>
  );
}
