import { DayConstants } from "@/components/modalWindow/types";
import { Calendar, LeftBar, Modal } from "@/components";
import { useSearchParams } from "react-router-dom";
import { SingleDay } from "@/constants/calendar";
import { Times } from "@/constants/events";
import classnames from "classnames/bind";
import * as style from "./App.scss";
import React from "react";

import {
  initialCalculataion,
  calendar as initialCalendar,
} from "@/constants/calendar";

const cx = classnames.bind(style);

function App() {
  const [calendar, setCalendar] = React.useState<SingleDay[]>([]);
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const [dayConstants, setDayConstants] = React.useState<DayConstants | null>(
    null
  );

  const [searchParams, _] = useSearchParams();

  React.useEffect(() => {
    setCalendar(initialCalculataion(initialCalendar));
  }, []);

  React.useEffect(() => {
    const dateId = searchParams.get("dateId");
    if (dateId && calendarRef.current) {
      const element = (calendarRef.current as HTMLDivElement).querySelector(
        `#${dateId}`
      );
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams, calendarRef.current]);

  return (
    <React.Fragment>
      <Modal
        calendar={calendar}
        setCalendar={setCalendar}
        dayConstants={dayConstants}
        setDayConstants={setDayConstants}
      />
      <LeftBar calendarRef={calendarRef} />
      <div className={cx("App")}>
        <div ref={calendarRef}>
          {calendar.map((c, i) => (
            <Calendar
              previousDay={calendar?.[i - 1]}
              key={c.date.getTime()}
              currentDay={c}
              setDayConstants={(time: Times) =>
                setDayConstants({ time, day: c.date })
              }
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
