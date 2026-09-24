import classNames from 'classnames';
import { Children, isValidElement, type KeyboardEvent, type MouseEvent } from 'react';

import charismaticCharacterIcon from '@assets/charismatic-character.svg';
import heartFilledIcon from '@assets/heart-filled.svg';
import heartOutlinedIcon from '@assets/heart-outlined.svg';
import studyIcon from '@assets/study.svg';
import tarotCardIcon from '@assets/tarot-card.svg';
import trashBinIcon from '@assets/trash-bin.svg';
import { Times, type TimesType } from '@constants/times';

import { Badge, type BadgeColor } from '../badge';
import { Tooltip, TooltipPositions } from '../tooltip';
import { CardIcons, type CardIconName, type CardProps } from './types';

const timeBadgeColors: Record<TimesType, BadgeColor> = {
  [Times.Morning]: 'gold',
  [Times.ExamResults]: 'gold',
  [Times.DayFreeTime]: 'orange',
  [Times.Day]: 'orange',
  [Times.EveningFreeTime]: 'violet',
  [Times.Evening]: 'violet',
  [Times.Night]: 'slate',
  [Times.DarkHour]: 'red',
};

const iconSources: Record<CardIconName, { src: string; alt: string }> = {
  [CardIcons.CharismaticCharacter]: { src: charismaticCharacterIcon, alt: 'Charismatic character' },
  [CardIcons.TarotCard]: { src: tarotCardIcon, alt: 'Tarot card' },
  [CardIcons.ExamPassed]: { src: studyIcon, alt: 'Exam passed' },
};

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <img
      src={filled ? heartFilledIcon : heartOutlinedIcon}
      alt=""
      aria-hidden="true"
      className={classNames('size-5', !filled && 'dark:invert')}
    />
  );
}

/**
 * Selectable shell for nested content (e.g. QuestionCard), with time and optional badges.
 */
export function Card({
  header,
  body,
  time,
  badge,
  icons,
  isRomantic,
  isRomanticAction,
  isSelected = false,
  isSelectable = true,
  isTall = false,
  onClick,
  onClear,
  className,
}: CardProps) {
  const bodyItems = Children.toArray(body);
  const isInteractive = isSelectable && onClick != null;
  const displayIcons = icons ?? [];
  const hasIcons = displayIcons.length > 0;
  const hasRomanticToggle = isRomantic !== undefined;

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    onClick?.();
  }

  function handleClear(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onClear?.();
  }

  function handleRomanticClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    isRomanticAction?.();
  }

  return (
    <article
      aria-disabled={!isSelectable}
      aria-selected={isSelected}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      className={classNames(
        'relative flex flex-col rounded-xl border shadow-sm',
        'border-slate-200 dark:border-slate-700 dark:shadow-none',
        isSelectable
          ? 'cursor-pointer bg-white transition-[box-shadow,border-color,background-color] duration-150 ease-out hover:border-slate-300 hover:shadow-md active:shadow-sm dark:bg-slate-900 dark:hover:border-slate-600'
          : 'cursor-not-allowed bg-slate-100 dark:bg-slate-800',
        isInteractive &&
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-500',
        isSelected &&
          'border-sky-400 ring-2 ring-sky-400/70 dark:border-sky-500 dark:ring-sky-500/60',
        isTall && 'min-h-[300px]',
        onClear != null && 'group',
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

      {onClear != null ? (
        <button
          type="button"
          aria-label="Clear"
          onClick={handleClear}
          onKeyDown={(event) => event.stopPropagation()}
          className={classNames(
            'absolute bottom-3 right-3 z-20 flex size-9 items-center justify-center',
            'rounded-full bg-red-600 text-white shadow-lg',
            'scale-90 opacity-0 pointer-events-none',
            'transition-[transform,opacity] duration-150 ease-out',
            'hover:bg-red-700',
            'group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto',
            'focus-visible:scale-100 focus-visible:opacity-100 focus-visible:pointer-events-auto',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
          )}
        >
          <img src={trashBinIcon} alt="" aria-hidden="true" className="size-4 invert" />
        </button>
      ) : null}

      {header || hasIcons || hasRomanticToggle ? (
        <header
          className={classNames(
            'rounded-t-xl border-b border-slate-200 px-4 pb-3 pt-5',
            'text-slate-900 dark:border-slate-700 dark:text-slate-50',
            isSelectable ? 'bg-slate-50 dark:bg-slate-800' : 'bg-slate-200 dark:bg-slate-700'
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-1.5">
              {typeof header === 'string' || typeof header === 'number' ? (
                <h2 className="text-base font-semibold leading-snug">{header}</h2>
              ) : (
                header
              )}

              {hasRomanticToggle ? (
                <button
                  type="button"
                  aria-label={isRomantic ? 'Unmark as romantic' : 'Mark as romantic'}
                  aria-pressed={isRomantic}
                  onClick={handleRomanticClick}
                  onKeyDown={(event) => event.stopPropagation()}
                  className={classNames(
                    'flex shrink-0 items-center justify-center rounded-full p-0.5 text-slate-400',
                    'transition-colors hover:text-rose-500 dark:text-slate-500 dark:hover:text-rose-500',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400',
                    isRomantic && 'text-rose-500 dark:text-rose-500'
                  )}
                >
                  <HeartIcon filled={isRomantic} />
                </button>
              ) : null}
            </div>

            {hasIcons ? (
              <div className="flex shrink-0 items-center gap-1.5" aria-label="Modifiers">
                {displayIcons.map(({ icon, tooltip }, index) => {
                  const { src, alt } = iconSources[icon];

                  return (
                    <Tooltip
                      key={`${icon}-${index}`}
                      content={tooltip}
                      position={TooltipPositions.bottom}
                    >
                      <img src={src} alt={alt} className="size-5 dark:invert" />
                    </Tooltip>
                  );
                })}
              </div>
            ) : null}
          </div>
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
