import { DayConstants } from "@/components/modalWindow/types";
import { CalendarPage, LeftBar } from "@/components";
import { Routes, Route } from "react-router-dom";
import { SingleDay } from "@/constants/calendar";
import React from "react";

import {
  initialCalculataion,
  calendar as initialCalendar,
} from "@/constants/calendar";

function App() {
  const [calendar, setCalendar] = React.useState<SingleDay[]>([]);
  const [dayConstants, setDayConstants] = React.useState<DayConstants | null>(
    null
  );

  React.useEffect(() => {
    setCalendar(initialCalculataion(initialCalendar));
  }, []);

  return (
    <React.Fragment>
      <LeftBar />
      <Routes>
        <Route
          path="/"
          element={
            <CalendarPage
              setDayConstants={setDayConstants}
              dayConstants={dayConstants}
              setCalendar={setCalendar}
              calendar={calendar}
            />
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
