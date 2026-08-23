import classNames from 'classnames';
import _ from 'lodash';
import {
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
} from 'react';
import { useSearchParams } from 'react-router';

import searchIcon from '@assets/search.svg';
import trashBinIcon from '@assets/trash-bin.svg';
import { type CardProps } from '@components/card';
import { BaseEvent } from '@services/event/base';
import { eventFactory } from '@services/event/factory';
import { useMainStore } from '@store/main';

import { Tabs, type TabItem } from '../tabs';
import { events } from './constants';

import type { RightPanelTab } from './types';

type RightPanelEventClass = RightPanelTab['events'][number];

/**
 * Best-effort human-readable label for an event class, used to search across
 * tabs. Falls back through the display fields different event bases expose.
 */
function getEventLabel(event: RightPanelEventClass): string {
  const candidate = event as RightPanelEventClass & { header?: string; arcana?: string };
  return candidate.header ?? candidate.arcana ?? candidate.name;
}

export function RightPanel() {
  const { selectedEvent, calendar, currentDay, setCalendar, setCurrentDay, setSelectedEvent } =
    useMainStore();
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();
  const dayParam = searchParams.get('day');

  useEffect(() => {
    setSelectedEvent(null);
  }, [dayParam, setSelectedEvent]);

  const { isAvailableProps, tabs } = useMemo(() => {
    if (selectedEvent === null || calendar === null || currentDay == null) {
      return { isAvailableProps: null, tabs: null };
    }

    const time = selectedEvent.time;
    if (!(time in events)) {
      throw new Error(`No events found for time: ${time}`);
    }

    const props = calendar.getIsAvailableProps(currentDay.date, time);
    const filteredTabs = events[time]
      .map((tab) => ({
        ...tab,
        events: tab.events.filter(
          (event) => event.name !== selectedEvent.getName() && event.isAvailable(props)
        ),
      }))
      .filter((tab) => tab.events.length > 0);

    return { isAvailableProps: props, tabs: filteredTabs };
  }, [selectedEvent, calendar, currentDay]);

  function onClick(event: RightPanelTab['events'][number]) {
    if (selectedEvent === null || calendar === null || currentDay == null) {
      return;
    }

    const newEvent = eventFactory(event.name, {
      time: selectedEvent.time,
      skipCheck: selectedEvent.skipCheck,
      isChangeable: selectedEvent.isChangeable,
    });
    const nextCalendar = calendar.replaceEvent(currentDay.date, selectedEvent.time, newEvent);
    const { currentDay: nextDay } = nextCalendar.getDay(currentDay.date);
    setCalendar(nextCalendar);
    setCurrentDay(nextDay);
    setSelectedEvent(nextDay.getEvent(selectedEvent.time));
  }

  if (
    selectedEvent === null ||
    isAvailableProps === null ||
    tabs === null ||
    calendar === null ||
    currentDay == null
  )
    return (
      <section
        aria-label="Right panel"
        className="min-h-0 min-w-0 flex-1 overflow-y-auto border-l border-slate-200 p-4 dark:border-slate-800"
      />
    );

  const searchQuery = search.trim().toLowerCase();
  const searchedTabs = searchQuery
    ? tabs
        .map((tab) => ({
          ...tab,
          events: tab.events.filter((event) =>
            getEventLabel(event).toLowerCase().includes(searchQuery)
          ),
        }))
        .filter((tab) => tab.events.length > 0)
    : tabs;

  const selectedTab = searchedTabs.find((tab) => tab.name === selected) ?? searchedTabs[0];
  const selectedNode = (selectedEvent.constructor as typeof BaseEvent).render(isAvailableProps);
  const selectedContent = isValidElement(selectedNode)
    ? cloneElement(selectedNode as ReactElement<CardProps>, { isSelected: true })
    : selectedNode;

  return (
    <section
      aria-label="Right panel"
      className="min-h-0 min-w-0 flex-1 overflow-y-auto border-l border-slate-200 p-4 dark:border-slate-800"
    >
      <div className="sticky top-0 z-10 -mx-4 mb-4 bg-inherit px-4 pb-2">{selectedContent}</div>

      <div className="mb-2 flex items-center gap-2">
        <div className="relative flex-1">
          <img
            src={searchIcon}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 dark:invert"
          />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search events"
            aria-label="Search events"
            className={classNames(
              'w-full rounded-md border border-slate-200 bg-white py-1.5 pl-8 pr-2 text-sm',
              'text-slate-900 placeholder:text-slate-400',
              'focus:outline-none focus:ring-2 focus:ring-sky-400',
              'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500'
            )}
          />
        </div>

        <button
          type="button"
          aria-label="Clear search"
          onClick={() => setSearch('')}
          className={classNames(
            'inline-flex size-8 shrink-0 items-center justify-center rounded-md',
            'text-slate-900 dark:text-slate-50',
            'hover:bg-slate-200 dark:hover:bg-slate-800',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400',
            'dark:focus-visible:ring-slate-500'
          )}
        >
          <img src={trashBinIcon} alt="" aria-hidden="true" className="size-4 dark:invert" />
        </button>
      </div>

      {selectedTab ? (
        <Tabs
          tabs={_.map(searchedTabs, (tab) => ({ name: tab.name, color: tab.color }) as TabItem)}
          value={selectedTab.name}
          onChange={setSelected}
          body={
            <div className="flex flex-col gap-2">
              {selectedTab.events.map((event) => {
                const node = event.render(isAvailableProps);
                if (!isValidElement(node)) {
                  return node;
                }

                return cloneElement(node as ReactElement<CardProps>, {
                  onClick: () => onClick(event),
                });
              })}
            </div>
          }
        />
      ) : null}
    </section>
  );
}
