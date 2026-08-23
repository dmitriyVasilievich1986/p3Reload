import dayjs, { type Dayjs } from 'dayjs';
import { cloneElement, isValidElement, useEffect, type ReactElement } from 'react';
import { useSearchParams } from 'react-router';

import holidayIcon from '@assets/holiday.svg';
import moonIcon from '@assets/moon.svg';
import studyIcon from '@assets/study.svg';
import { type CardProps } from '@components/card';
import { DateStepButton, DateStepDirections } from '@components/dateStepButton';
import { Tooltip, TooltipPositions } from '@components/tooltip';
import { DEFAULT_DAY } from '@constants/dates';
import { useMainStore } from '@store/main';

import type { Day } from '@services/day';

function SpecialDayIcon({
  src,
  alt,
  tooltip,
  invert = false,
}: {
  src: string;
  alt: string;
  tooltip: string;
  invert?: boolean;
}) {
  return (
    <Tooltip content={tooltip} position={TooltipPositions.bottom}>
      <img src={src} alt={alt} className={invert ? 'size-6 dark:invert' : 'size-6'} />
    </Tooltip>
  );
}

function SpecialDayIcons({ day }: { day: Day }) {
  return (
    <>
      {day.isFullMoon() ? (
        <SpecialDayIcon src={moonIcon} alt="Full moon" tooltip="A full moon occurs on this day" />
      ) : null}
      {day.isDayOff() ? (
        <SpecialDayIcon
          src={holidayIcon}
          alt="Holiday"
          tooltip="School is closed on this day"
          invert
        />
      ) : null}
      {day.isExamDay() ? (
        <SpecialDayIcon
          src={studyIcon}
          alt="Exam day"
          tooltip="Exams are held on this day"
          invert
        />
      ) : null}
    </>
  );
}

/**
 * Center column of the main app body.
 */
export function CenterPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentDay, calendar, selectedEvent, setCurrentDay, setSelectedEvent } = useMainStore();

  useEffect(() => {
    if (calendar === null) {
      return;
    }

    const dayParam = searchParams.get('day') ?? DEFAULT_DAY;

    if (!searchParams.has('day')) {
      setSearchParams(
        (prev) => {
          if (!prev.has('day')) {
            prev.set('day', DEFAULT_DAY);
          }

          return prev;
        },
        { replace: true }
      );
    }

    if (currentDay === null || !currentDay?.date.isSame(dayjs(dayParam), 'day')) {
      try {
        const { currentDay: day } = calendar.getDay(dayjs(dayParam));
        setCurrentDay(day);
      } catch {
        setCurrentDay(undefined);
      }
    }
  }, [calendar, currentDay, searchParams, setSearchParams, setCurrentDay]);

  if (currentDay === null) {
    return (
      <section
        aria-label="Center panel"
        className="min-h-0 min-w-0 flex-[2] overflow-y-auto border-slate-200 p-4 dark:border-slate-800"
      />
    );
  }

  if (currentDay === undefined) {
    return (
      <section
        aria-label="Center panel"
        className="min-h-0 min-w-0 flex-[2] overflow-y-auto border-slate-200 p-4 dark:border-slate-800"
      >
        <div className="text-center text-sm font-semibold text-slate-900 dark:text-slate-50">
          Date not found
        </div>
      </section>
    );
  }

  let previousDate: Dayjs | undefined;
  let nextDate: Dayjs | undefined;

  if (calendar !== null) {
    try {
      const { previousDayIndex, nextDayIndex } = calendar.getDay(currentDay.date);
      previousDate = calendar.days[previousDayIndex]?.date;
      nextDate = calendar.days[nextDayIndex]?.date;
    } catch {
      previousDate = undefined;
      nextDate = undefined;
    }
  }

  return (
    <section
      aria-label="Center panel"
      className="min-h-0 min-w-0 flex-[2] overflow-y-auto border-slate-200 p-4 dark:border-slate-800"
    >
      <header
        aria-label="Day navigation"
        className="sticky top-0 z-10 -mx-4 mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-800 dark:bg-slate-950"
      >
        <div className="flex justify-start">
          <DateStepButton date={previousDate} direction={DateStepDirections.left} />
        </div>
        <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-slate-50">
          <span>{currentDay.date.format('MMMM D, dddd')}</span>
          <SpecialDayIcons day={currentDay} />
        </div>
        <div className="flex justify-end">
          <DateStepButton date={nextDate} direction={DateStepDirections.right} />
        </div>
      </header>

      {calendar !== null ? (
        <ul className="flex flex-col gap-4">
          {currentDay.events.map((event) => {
            const props = calendar.getIsAvailableProps(currentDay.date, event.time);
            const node = event.render(props);
            const content =
              event.isChangeable && isValidElement(node)
                ? cloneElement(node as ReactElement<CardProps>, {
                    onClick: () =>
                      setSelectedEvent(selectedEvent?.getName() === event.getName() ? null : event),
                    isSelected:
                      selectedEvent?.getName() === event.getName() &&
                      selectedEvent.time === event.time,
                  })
                : node;

            return <li key={event.time}>{content}</li>;
          })}
        </ul>
      ) : null}
    </section>
  );
}
