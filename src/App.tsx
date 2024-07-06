import { singleDay } from "./constants/calendar/types";
import { Calendar } from "./components/calendarPage";
import { LeftBar } from "./components/leftBar";
import React from "react";
import "./App.css";

import {
  initialCalculataion,
  calendar as initialCalendar,
} from "./constants/calendar";

function App() {
  const [calendar, setCalendar] = React.useState<singleDay[]>([]);
  const calendarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setCalendar(initialCalculataion(initialCalendar));
  }, []);

  return (
    <React.Fragment>
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
              {...c}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
