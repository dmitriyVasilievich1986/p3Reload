import { initialCalculataion } from "../../constants/calendar";
import { singleDay } from "../../constants/calendar/types";
import { OutsideClick } from "../supportComponents";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import { DayConstants } from "./types";
import EventsList from "./EventsList";
import * as style from "./style.scss";

import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  SpecialEventsNames,
  allEventsNames,
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
  if (props.dayConstants === null) return null;

  const dayConstants = props.dayConstants as DayConstants;
  const previousDay = props.calendar.find(
    (c) => c.date.getTime() === dayConstants.day.getTime() - 86400000
  ) as singleDay;

  const updateCalendar = ({ event }: { event: Event }) => {
    props.setCalendar((prev: singleDay[]) => {
      const newCalendar: singleDay[] = (prev as Array<singleDay>).map((c) => {
        if (c.date.getTime() === dayConstants.day.getTime()) {
          return {
            ...c,
            activities: {
              ...c.activities,
              [dayConstants.time]: event,
            },
          };
        } else if (c.date.getTime() > dayConstants.day.getTime())
          return {
            ...c,
            arcanes: [],
            activities: {
              [Times.Morning]: c.activities[Times.Morning]?.special
                ? c.activities[Times.Morning]
                : events.stayAwakeInClass,
              [Times.AfterSchool]: c.activities[Times.AfterSchool]?.special
                ? c.activities[Times.AfterSchool]
                : null,
              [Times.Day]: c.activities[Times.Day]?.special
                ? c.activities[Times.Day]
                : events.DoNothing,
              [Times.Evening]: c.activities[Times.Evening]?.special
                ? c.activities[Times.Evening]
                : events.DoNothing,
            },
          };
        return c;
      });
      return initialCalculataion(newCalendar);
    });
    props.setDayConstants(null);
  };

  const currentDay = props.calendar.find(
    (c) => c.date.getTime() === dayConstants.day.getTime()
  ) as singleDay;
  const availableParams = {
    singleTimeEvents: currentDay.singleTimeEvents,
    currentStats: currentDay.stats,
    currentLinks: currentDay.links,
    currentTime: dayConstants.time,
    currentDate: dayConstants.day,
    previousDay,
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
        <div className={cx("wrapper")}>
          <EventsList
            events={availableEvents.filter((e) => e.name in SpecialEventsNames)}
            onClick={updateCalendar}
            head="Special"
          />
          <EventsList
            events={availableEvents.filter((e) => e.linkName)}
            onClick={updateCalendar}
            head="Social Links"
          />
          <EventsList
            events={availableEvents.filter(
              (e) =>
                e.name in statsEventsAcademicsNames ||
                e.name in statsEventsCourageNames ||
                e.name in statsEventsCharmNames
            )}
            onClick={updateCalendar}
            head="Stats"
          />
        </div>
      </OutsideClick>
    </div>
  );
}

export default Modal;
