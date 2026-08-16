import _ from 'lodash';
import { cloneElement, isValidElement, useMemo, useState, type ReactElement } from 'react';

import { type CardProps } from '@components/card';
import { BaseEvent } from '@services/event/base';
import { eventFactory } from '@services/event/factory';
import { useMainStore } from '@store/main';

import { Tabs, type TabItem } from '../tabs';
import { events } from './constants';

import type { RightPanelTab } from './types';

export function RightPanel() {
  const { selectedEvent, calendar, currentDay, setCalendar, setCurrentDay, setSelectedEvent } =
    useMainStore();
  const [selected, setSelected] = useState<string | null>(null);

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

  const selectedTab = tabs.find((tab) => tab.name === selected) ?? tabs[0];
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
      {selectedTab ? (
        <Tabs
          tabs={_.map(tabs, (tab) => ({ name: tab.name, color: tab.color }) as TabItem)}
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
