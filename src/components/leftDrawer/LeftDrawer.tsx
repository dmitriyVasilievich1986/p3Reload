import classNames from 'classnames';
import { useState, type FocusEvent } from 'react';

import { LeftDrawerContext } from './context';
import {
  LEFT_DRAWER_COLLAPSED_WIDTH_PX,
  LEFT_DRAWER_EXPANDED_WIDTH_PX,
  type LeftDrawerProps,
} from './types';

const APP_VERSION = import.meta.env.VITE_APP_VERSION;
const GAME_VERSION = import.meta.env.VITE_GAME_VERSION;

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

          <footer className="mt-auto whitespace-nowrap border-t px-2 py-3 text-xs border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono">{APP_VERSION}</span>
              <span>App version</span>
            </div>
            <div className="mt-1 flex items-center justify-between gap-3">
              <span className="font-mono">{GAME_VERSION}</span>
              <span>Game version</span>
            </div>
          </footer>
        </div>
      </LeftDrawerContext.Provider>
    </aside>
  );
}
