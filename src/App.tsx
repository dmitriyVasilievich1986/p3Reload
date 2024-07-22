import { DayConstants } from "./components/modalWindow/types";
import { singleDay } from "./constants/calendar/types";
import { Calendar } from "./components/calendarPage";
import { Modal } from "./components/modalWindow";
import { LeftBar } from "./components/leftBar";
import classnames from "classnames/bind";
import * as style from "./App.scss";
import React from "react";

import {
  initialCalculataion,
  calendar as initialCalendar,
} from "./constants/calendar";
import { Times } from "./constants/events/types";

const cx = classnames.bind(style);

function App() {
  const [calendar, setCalendar] = React.useState<singleDay[]>([]);
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const [dayConstants, setDayConstants] = React.useState<DayConstants | null>(
    null
  );

  React.useEffect(() => {
    setCalendar(initialCalculataion(initialCalendar));
  }, []);

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
          <div />
          {calendar.map((c, i) => (
            <Calendar
              key={c.date.getTime()}
              previousDay={calendar?.[i - 1]}
              setDayConstants={(time: Times) =>
                setDayConstants({ time, day: c.date })
              }
              {...c}
            />
          ))}
          <div />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
