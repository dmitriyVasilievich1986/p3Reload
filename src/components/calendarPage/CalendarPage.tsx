import { SingleDay } from "@/constants/calendar";
import { Times } from "@/constants/events";

import { dayIndexParams } from "@/components/supportComponents";
import { Modal } from "@/components/modalWindow";

import * as style from "./style.scss";
import Calendar from "./Calendar";

import classnames from "classnames/bind";
import React from "react";

const cx = classnames.bind(style);

function CalendarPage(props: {
  calendar: SingleDay[];
  setDayConstants: (props: { time: Times; day: Date } | null) => void;
  setCalendar: React.Dispatch<React.SetStateAction<SingleDay[]>>;
  dayConstants: {
    time: Times;
    day: Date;
  } | null;
}) {
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const [dayIndex, _] = dayIndexParams();

  React.useEffect(() => {
    if (!!dayIndex && calendarRef.current) {
      const element = (calendarRef.current as HTMLDivElement).querySelector(
        `#${dayIndex}`
      );
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [dayIndex, calendarRef.current]);

  return (
    <div className={cx("App")}>
      <Modal
        calendar={props.calendar}
        setCalendar={props.setCalendar}
        dayConstants={props.dayConstants}
        setDayConstants={props.setDayConstants}
      />
      <div ref={calendarRef}>
        {props.calendar.map((c, i) => (
          <Calendar
            previousDay={props.calendar?.[i - 1]}
            key={c.date.getTime()}
            currentDay={c}
            clickHandler={(time: Times) =>
              props.setDayConstants({ time, day: c.date })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
