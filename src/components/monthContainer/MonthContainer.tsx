import classNames from 'classnames';
import { useEffect, useRef, useState, type FocusEvent } from 'react';
import { useSearchParams } from 'react-router';

import { DatesFormat } from '@constants/dates';

import { Badge } from '../badge';
import { LEFT_DRAWER_COLLAPSED_WIDTH_PX, useLeftDrawer } from '../leftDrawer';

import type { MonthContainerProps } from './types';

const DATES_COLLAPSE_DELAY_MS = 100;

/**
 * Month header and hover-expanding list of dates. Updates the `day` URL search param on click.
 */
export function MonthContainer({ dates, className }: MonthContainerProps) {
  const { isExpanded: isDrawerExpanded } = useLeftDrawer();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDatesExpanded, setIsDatesExpanded] = useState(false);
  const collapseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sortedDates = [...dates].sort((left, right) => left.valueOf() - right.valueOf());
  const monthDate = sortedDates[0];

  useEffect(() => {
    return () => {
      if (collapseTimeoutRef.current !== null) {
        clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  if (monthDate === undefined) {
    return null;
  }

  const monthName = monthDate.format('MMMM');
  const selectedDay = searchParams.get('day');

  function openDates() {
    if (collapseTimeoutRef.current !== null) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }

    setIsDatesExpanded(true);
  }

  function closeDates() {
    if (collapseTimeoutRef.current !== null) {
      clearTimeout(collapseTimeoutRef.current);
    }

    collapseTimeoutRef.current = setTimeout(() => {
      setIsDatesExpanded(false);
      collapseTimeoutRef.current = null;
    }, DATES_COLLAPSE_DELAY_MS);
  }

  function handleBlurCapture(event: FocusEvent<HTMLElement>) {
    const nextFocus = event.relatedTarget;

    if (nextFocus instanceof Node && event.currentTarget.contains(nextFocus)) {
      return;
    }

    closeDates();
  }

  function handleDateClick(date: (typeof sortedDates)[number]) {
    setSearchParams(
      (prev) => {
        prev.set('day', date.format(DatesFormat));
        return prev;
      },
      { replace: true }
    );
  }

  return (
    <section
      aria-label={monthName}
      onMouseEnter={openDates}
      onMouseLeave={closeDates}
      onFocusCapture={openDates}
      onBlurCapture={handleBlurCapture}
      className={classNames('group flex flex-col', className)}
    >
      <header className="flex h-9 items-center rounded-md transition-colors group-hover:bg-slate-100 dark:group-hover:bg-slate-800">
        <h2
          aria-label={monthName}
          className="flex items-center text-sm font-semibold text-slate-900 dark:text-slate-50"
        >
          <span
            className="flex shrink-0 items-center justify-center"
            style={{ width: LEFT_DRAWER_COLLAPSED_WIDTH_PX }}
          >
            <Badge size="sm" color="slate" text={monthName.charAt(0)} />
          </span>
          {isDrawerExpanded ? <span className="pr-3">{monthName.slice(1)}</span> : null}
        </h2>
      </header>

      {isDatesExpanded ? (
        <ul
          aria-label={`${monthName} dates`}
          className="flex max-h-[300px] flex-col gap-0.5 overflow-y-auto px-2 pb-2"
        >
          {sortedDates.map((date) => {
            const dayParam = date.format(DatesFormat);
            const label = date.format('D, dddd');
            const isSelected = selectedDay === dayParam;

            return (
              <li key={dayParam}>
                <button
                  type="button"
                  aria-label={label}
                  aria-current={isSelected ? 'date' : undefined}
                  onClick={() => handleDateClick(date)}
                  className={classNames(
                    'w-full rounded-md px-2 py-1 text-left text-sm',
                    'text-slate-900 dark:text-slate-50',
                    'hover:bg-slate-100 dark:hover:bg-slate-800',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-500',
                    isSelected &&
                      'bg-sky-100 ring-2 ring-sky-400/70 dark:bg-sky-950 dark:ring-sky-500/60'
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
}
