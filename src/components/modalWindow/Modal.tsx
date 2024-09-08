import { getCalculatedCalendar } from "@/constants/calendar/baseFunctions";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { events } from "@/constants/events";
import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  SpecialEventsNames,
  pcProgramsNames,
  allEventsNames,
  Event,
} from "@/constants/events/types";

import { OutsideClick } from "@/components/supportComponents";
import { Input } from "@/components/input";

import { DayConstants } from "./types";
import EventsList from "./EventsList";
import * as style from "./style.scss";

import classnames from "classnames/bind";
import React from "react";

const cx = classnames.bind(style);

function Modal(props: {
  calendar: SingleDay[];
  setDayConstants: (dayConstants: DayConstants | null) => void;
  dayConstants: DayConstants | null;
  setCalendar: React.Dispatch<React.SetStateAction<SingleDay[]>>;
}) {
  const [filter, setFilter] = React.useState<string>("");
  if (props.dayConstants === null) return null;

  const dayConstants = props.dayConstants as DayConstants;
  const currentDayIndex: number = props.calendar.findIndex(
    (c) => c.date.getTime() === dayConstants.day.getTime()
  );
  const currentDay = props.calendar[currentDayIndex];
  const previousDay = props.calendar?.[currentDayIndex - 1];

  const updateCalendar = ({ event }: { event: Event }) => {
    props.setCalendar((prev: SingleDay[]) => {
      return getCalculatedCalendar({
        previousCalendar: prev,
        dayIndex: currentDayIndex,
        newEvent: event,
        time: dayConstants.time,
      });
    });
    props.setDayConstants(null);
  };

  const availableParams = {
    time: dayConstants.time,
    previousDay,
    currentDay,
  };
  const availableEvents = (Object.keys(events) as Array<allEventsNames>)
    .map((e) => events[e])
    .filter((e) => !e.special && e.available(availableParams));

  return (
    <div className={cx("modal-window")}>
      <OutsideClick
        className={cx("inner-window")}
        clickHandler={() => props.setDayConstants(null)}
      >
        <div className={cx("filter-wrapper")}>
          <div>
            <Input
              placeholder="Event name"
              onChange={setFilter}
              value={filter}
              label="filter"
            />
          </div>
        </div>
        <div className={cx("wrapper")}>
          <EventsList
            events={availableEvents.filter((e) => e.linkName)}
            previousDay={previousDay}
            onClick={updateCalendar}
            time={dayConstants.time}
            currentDay={currentDay}
            head="Social Links"
            filter={filter}
          />
          <EventsList
            events={availableEvents.filter((e) =>
              (Object.values(SpecialEventsNames) as Array<string>).includes(
                e.name
              )
            )}
            previousDay={previousDay}
            onClick={updateCalendar}
            time={dayConstants.time}
            currentDay={currentDay}
            filter={filter}
            head="Special"
          />
          <EventsList
            events={availableEvents.filter(
              (e) =>
                (
                  Object.values(statsEventsAcademicsNames) as Array<string>
                ).includes(e.name) ||
                (
                  Object.values(statsEventsCourageNames) as Array<string>
                ).includes(e.name) ||
                (
                  Object.values(statsEventsCharmNames) as Array<string>
                ).includes(e.name)
            )}
            previousDay={previousDay}
            onClick={updateCalendar}
            time={dayConstants.time}
            currentDay={currentDay}
            filter={filter}
            head="Stats"
          />
          <EventsList
            events={availableEvents.filter((e) =>
              (Object.values(pcProgramsNames) as Array<string>).includes(e.name)
            )}
            previousDay={previousDay}
            onClick={updateCalendar}
            time={dayConstants.time}
            currentDay={currentDay}
            filter={filter}
            head="Lobby PC"
          />
        </div>
      </OutsideClick>
    </div>
  );
}

export default Modal;
