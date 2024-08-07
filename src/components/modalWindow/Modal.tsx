import { initialCalculataion } from "../../constants/calendar";
import { singleDay } from "../../constants/calendar/types";
import { OutsideClick } from "../supportComponents";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import { DayConstants } from "./types";
import EventsList from "./EventsList";
import * as style from "./style.scss";
import { Input } from "../input";
import React from "react";

import {
  AkihikoSanadaEpisodesNames,
  statsEventsAcademicsNames,
  JunpeiIoriEpisodesNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  KoromaruEpisodesNames,
  SpecialEventsNames,
  pcProgramsNames,
  allEventsNames,
  Categories,
  Event,
  Times,
} from "../../constants/events/types";

const cx = classnames.bind(style);

function Modal(props: {
  calendar: singleDay[];
  setDayConstants: (dayConstants: DayConstants | null) => void;
  dayConstants: DayConstants | null;
  setCalendar: React.Dispatch<React.SetStateAction<singleDay[]>>;
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
    props.setCalendar((prev: singleDay[]) => {
      const newCalendar: singleDay[] = (prev as Array<singleDay>).map(
        (c, i) => {
          if (i === currentDayIndex) {
            return {
              ...c,
              activities: c.activities.map((a) =>
                a.time === dayConstants.time
                  ? { ...event, time: props.dayConstants?.time as Times }
                  : a
              ),
            };
          } else if (
            i > currentDayIndex &&
            event.category === Categories.Tartarus
          ) {
            const activities = c.activities
              .filter((a) => a !== events.drinkMedicine)
              .map((a) =>
                a.special ? a : { ...events.DoNothing, time: a.time }
              );
            activities.splice(1, 0, events.drinkMedicine);

            return { ...c, activities };
          } else if (i > currentDayIndex)
            return {
              ...c,
              arcanes: [],
              activities: c.activities
                .filter((a) => a !== events.drinkMedicine)
                .map((a) => {
                  if (a.special) return a;
                  else if (a.time === Times.Morning)
                    return events.stayAwakeInClass;
                  return { ...events.DoNothing, time: a.time };
                }),
            };
          return c;
        }
      );
      return initialCalculataion(newCalendar);
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
            onClick={updateCalendar}
            head="Social Links"
            filter={filter}
          />
          <EventsList
            events={availableEvents.filter(
              (e) =>
                e.name in AkihikoSanadaEpisodesNames ||
                e.name in JunpeiIoriEpisodesNames ||
                e.name in KoromaruEpisodesNames ||
                e.name in SpecialEventsNames
            )}
            onClick={updateCalendar}
            filter={filter}
            head="Special"
          />
          <EventsList
            events={availableEvents.filter(
              (e) =>
                e.name in statsEventsAcademicsNames ||
                e.name in statsEventsCourageNames ||
                e.name in statsEventsCharmNames
            )}
            onClick={updateCalendar}
            filter={filter}
            head="Stats"
          />
          <EventsList
            events={availableEvents.filter((e) => e.name in pcProgramsNames)}
            onClick={updateCalendar}
            filter={filter}
            head="Lobby PC"
          />
        </div>
      </OutsideClick>
    </div>
  );
}

export default Modal;
