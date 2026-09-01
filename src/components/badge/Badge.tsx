import classNames from 'classnames';

import type { BadgeColor, BadgeProps, BadgeSize } from './types';

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3.5 py-1.5 text-base',
};

const colorClasses: Record<BadgeColor, string> = {
  gold: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
  green: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
  blue: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200',
  red: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200',
  violet: 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200',
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-200',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200',
  slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
};

/**
 * Round label chip for status, tags, and short metadata.
 */
export function Badge({ size, color, text }: BadgeProps) {
  return (
    <span
      className={classNames(
        'inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap cursor-default',
        sizeClasses[size],
        colorClasses[color]
      )}
    >
      {text}
    </span>
  );
}
