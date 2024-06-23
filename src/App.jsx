import calendar, { initialCalculataion } from "./constants/calendar";
import Calendar from "./components/calendarPage/Calendar";
import React from "react";
import "./App.css";

function App() {
  const [calendarArray, setCalendarArray] = React.useState(null);

  React.useEffect(() => {
    setCalendarArray(initialCalculataion(calendar));
  }, []);

  if (calendarArray === null) return null;
  return (
    <React.Fragment>
      <div
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
          {calendarArray.map((c, i) => (
            <Calendar
              key={i}
              {...c}
              previousDay={calendarArray?.[i - 1]}
              setCalendarArray={setCalendarArray}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
