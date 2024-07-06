import { DayConstants } from "./components/modalWindow/types";
import { singleDay } from "./constants/calendar/types";
import { Calendar } from "./components/calendarPage";
import { Modal } from "./components/modalWindow";
import { LeftBar } from "./components/leftBar";
import React from "react";
import "./App.css";

import {
  initialCalculataion,
  calendar as initialCalendar,
} from "./constants/calendar";
import { Times } from "./constants/events/types";

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
      <div
        ref={calendarRef}
        style={{
          width: "100vw",
          overflow: "scroll",
          height: "calc(100% + 3rem)",
        }}
      >
        <div
          style={{
            width: "fit-content",
            display: "flex",
            gap: "3rem",
          }}
        >
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
