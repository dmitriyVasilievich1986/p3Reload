import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

import dayIcon from '@assets/day.svg';
import nightIcon from '@assets/night.svg';

import type { DarkThemeSwitchProps } from './types';

/**
 * Button that toggles the `darkTheme` URL search param, with a click spin animation.
 */
export function DarkThemeSwitch({ className }: DarkThemeSwitchProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDarkTheme = searchParams.get('darkTheme') === 'true';
  const [spinToken, setSpinToken] = useState(0);

  function handleClick() {
    setSpinToken((token) => token + 1);
    setSearchParams(
      (prev) => {
        prev.set('darkTheme', String(!isDarkTheme));
        return prev;
      },
      { replace: true }
    );
  }

  return (
    <button
      type="button"
      aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDarkTheme}
      onClick={handleClick}
      className={classNames(
        'inline-flex size-[30px] items-center justify-center rounded-md',
        'text-slate-900 dark:text-slate-50',
        'hover:bg-slate-100 dark:hover:bg-slate-800',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-500',
        className
      )}
    >
      <img
        key={spinToken}
        src={isDarkTheme ? dayIcon : nightIcon}
        alt=""
        aria-hidden="true"
        className={classNames(
          'size-[30px] dark:invert',
          spinToken > 0 && 'animate-[spin_0.5s_ease-in-out]'
        )}
      />
    </button>
  );
}
