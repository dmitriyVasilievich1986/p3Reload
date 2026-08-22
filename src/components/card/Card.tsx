import classNames from 'classnames';
import { Children, isValidElement, type KeyboardEvent } from 'react';

import charismaticCharacterIcon from '@assets/charismatic-character.svg';
import studyIcon from '@assets/study.svg';
import tarotCardIcon from '@assets/tarot-card.svg';
import { Times, type TimesType } from '@constants/times';

import { Badge, type BadgeColor } from '../badge';
import { Tooltip, TooltipPositions } from '../tooltip';
import { CardIcons, type CardIconName, type CardProps } from './types';

const timeBadgeColors: Record<TimesType, BadgeColor> = {
  [Times.Morning]: 'gold',
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

/**
 * Selectable shell for nested content (e.g. QuestionCard), with time and optional badges.
 */
export function Card({
  header,
  body,
  time,
  badge,
  icons,
  isSelected = false,
  isSelectable = true,
  isTall = false,
  onClick,
  className,
}: CardProps) {
  const bodyItems = Children.toArray(body);
  const isInteractive = isSelectable && onClick != null;
  const displayIcons = icons ?? [];
  const hasIcons = displayIcons.length > 0;

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    onClick?.();
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

      {header || hasIcons ? (
        <header
          className={classNames(
            'rounded-t-xl border-b border-slate-200 px-4 pb-3 pt-5',
            'text-slate-900 dark:border-slate-700 dark:text-slate-50',
            isSelectable ? 'bg-slate-50 dark:bg-slate-800' : 'bg-slate-200 dark:bg-slate-700'
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              {typeof header === 'string' || typeof header === 'number' ? (
                <h2 className="text-base font-semibold leading-snug">{header}</h2>
              ) : (
                header
              )}
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
