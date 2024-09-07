import { useSearchParams, Routes, Route } from "react-router-dom";
import { DayConstants } from "@/components/modalWindow/types";
import { CalendarPage, LeftBar } from "@/components";
import { SingleDay } from "@/constants/calendar";
import React from "react";

import {
  initialCalculataion,
  calendar as initialCalendar,
} from "@/constants/calendar";

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
      <LeftBar />
      <Routes>
        <Route
          path="/"
          element={
            <CalendarPage
              setDayConstants={setDayConstants}
              dayConstants={dayConstants}
              calendarRef={calendarRef}
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
