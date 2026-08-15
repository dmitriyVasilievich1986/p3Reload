import classNames from 'classnames';
import { useSearchParams } from 'react-router';

import leftIcon from '@assets/left.svg';
import { DatesFormat } from '@constants/dates';

import { DateStepDirections, type DateStepButtonProps } from './types';

/**
 * Button that steps the `day` URL search param left or right to a provided date.
 */
export function DateStepButton({ date, direction, className }: DateStepButtonProps) {
  const [, setSearchParams] = useSearchParams();

  if (date === undefined) {
    return null;
  }

  const targetDate = date;
  const isLeft = direction === DateStepDirections.left;
  const label = targetDate.format('MMMM D');

  function handleClick() {
    setSearchParams(
      (prev) => {
        prev.set('day', targetDate.format(DatesFormat));
        return prev;
      },
      { replace: true }
    );
  }

  const arrow = (
    <img
      src={leftIcon}
      alt=""
      aria-hidden="true"
      className={classNames('size-4 dark:invert', !isLeft && 'rotate-180')}
    />
  );

  return (
    <button
      type="button"
      aria-label={isLeft ? `Previous day, ${label}` : `Next day, ${label}`}
      onClick={handleClick}
      className={classNames(
        'inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm',
        'text-slate-900 dark:text-slate-50',
        'hover:bg-slate-200 dark:hover:bg-slate-800',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-500',
        className
      )}
    >
      {isLeft ? (
        <>
          {arrow}
          <span>{label}</span>
        </>
      ) : (
        <>
          <span>{label}</span>
          {arrow}
        </>
      )}
    </button>
  );
}
