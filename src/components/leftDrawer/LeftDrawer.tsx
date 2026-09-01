import classNames from 'classnames';
import { useState, type FocusEvent } from 'react';

import searchIcon from '@assets/search.svg';
import { useMainStore } from '@store/main';

import { DarkThemeSwitch } from '../darkThemeSwitch/DarkThemeSwitch';
import { MonthContainer } from '../monthContainer/MonthContainer';
import { Settings } from '../settings/Settings';
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
 *
 * Owns the whole rail: the theme/settings controls, the day filter, the
 * per-month date navigation (from the store calendar), and the version footer.
 */
export function LeftDrawer({ className, 'aria-label': ariaLabel = 'Navigation' }: LeftDrawerProps) {
  const { calendar } = useMainStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const [dayFilter, setDayFilter] = useState('');

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
          <div
            className="flex flex-col items-start gap-2 pt-3"
            style={{ marginLeft: (LEFT_DRAWER_COLLAPSED_WIDTH_PX - 30) / 2 }}
          >
            <DarkThemeSwitch />
            <Settings />
          </div>

          <div className="flex items-center gap-2 px-2 pt-3">
            <img
              src={searchIcon}
              alt=""
              aria-hidden="true"
              className="size-6 shrink-0 dark:invert mx-2"
            />
            <input
              type="search"
              value={dayFilter}
              onChange={(event) => setDayFilter(event.target.value)}
              placeholder="Filter days by event"
              aria-label="Filter days by event"
              className={classNames(
                'w-full rounded-md border px-2 py-1.5 text-sm',
                'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400',
                'focus:outline-none focus:ring-2 focus:ring-sky-400',
                'dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500'
              )}
            />
          </div>

          <div className="mt-3 flex min-h-0 flex-1 flex-col overflow-y-auto">
            {(calendar?.getDatesByMonth() ?? []).map((days) => {
              const firstDay = days[0];

              return firstDay === undefined ? null : (
                <MonthContainer
                  key={firstDay.date.format('YYYY-MM')}
                  days={days}
                  filterName={dayFilter}
                />
              );
            })}
          </div>

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
