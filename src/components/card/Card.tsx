import classNames from 'classnames';
import { Children, isValidElement } from 'react';

import { Times, type TimesType } from '@constants/times';

import { Badge, type BadgeColor } from '../badge';

import type { CardProps } from './types';

const timeBadgeColors: Record<TimesType, BadgeColor> = {
  [Times.Morning]: 'gold',
  [Times.DayFreeTime]: 'orange',
  [Times.Day]: 'orange',
  [Times.EveningFreeTime]: 'violet',
  [Times.Evening]: 'violet',
  [Times.Night]: 'slate',
  [Times.DarkHour]: 'red',
};

/**
 * Selectable shell for nested content (e.g. QuestionCard), with time and optional badges.
 */
export function Card({
  header,
  body,
  time,
  badge,
  isSelected = false,
  isSelectable = true,
  isTall = false,
  onClick,
  className,
}: CardProps) {
  const bodyItems = Children.toArray(body);

  return (
    <article
      aria-disabled={!isSelectable}
      aria-selected={isSelected}
      onClick={isSelectable ? onClick : undefined}
      className={classNames(
        'relative flex flex-col rounded-xl border shadow-sm',
        'border-slate-200 dark:border-slate-700 dark:shadow-none',
        'transition-[box-shadow,border-color,background-color] duration-150 ease-out',
        isSelectable
          ? 'cursor-pointer bg-white hover:border-slate-300 hover:shadow-md active:shadow-sm dark:bg-slate-900 dark:hover:border-slate-600'
          : 'cursor-not-allowed bg-slate-100 dark:bg-slate-800',
        isSelected &&
          'border-sky-400 ring-2 ring-sky-400/70 dark:border-sky-500 dark:ring-sky-500/60',
        isTall && 'min-h-[300px]',
        className
      )}
    >
      {time ? (
        <div className="absolute left-3 top-0 z-10 -translate-y-1/2">
          <Badge size="sm" color={timeBadgeColors[time]} text={time} />
        </div>
      ) : null}

      {badge ? (
        <div className="absolute right-3 top-0 z-10 -translate-y-1/2">
          <Badge {...badge} />
        </div>
      ) : null}

      {header ? (
        <header
          className={classNames(
            'rounded-t-xl border-b border-slate-200 px-4 pb-3 pt-5',
            'text-slate-900 dark:border-slate-700 dark:text-slate-50',
            isSelectable ? 'bg-slate-50 dark:bg-slate-800' : 'bg-slate-200 dark:bg-slate-700'
          )}
        >
          {typeof header === 'string' || typeof header === 'number' ? (
            <h2 className="text-base font-semibold leading-snug">{header}</h2>
          ) : (
            header
          )}
        </header>
      ) : (
        <div className="h-3" aria-hidden="true" />
      )}

      <div className="flex h-full flex-1 flex-col items-center justify-center gap-2 p-3">
        {bodyItems.map((item, index) => (
          <div className="w-full" key={isValidElement(item) && item.key != null ? item.key : index}>
            {item}
          </div>
        ))}
      </div>
    </article>
  );
}
