import { monthNames, daysNamesIndex } from "Constants/monthsNames";
import React from "react";
import "./App.css";
import { calendar, initialCalculataion } from "./constants/calendar";
import { events } from "./constants/events";
import { stats } from "./constants/stats";

function DailyEvent(props) {
  if (props.event.category === "special") return props.event.label();
  const availableEvents = Object.keys(events).filter(
    (e) =>
      events[e].available({
        currentStats: props.stats,
        currentDate: props.date,
        currentTime: props.time,
      }) && events[e].category !== "special"
  );
  return (
    <select
      value={Object.keys(events).find((e) => e.name === props.event.name)}
      onChange={props.changeHandler}
    >
      {availableEvents.map((e) => (
        <option key={e} value={e}>
          {events[e].name}
        </option>
      ))}
    </select>
  );
}

function HeroStats(props) {
  const getLevel = (statName) => {
    const currentName = stats[statName].getLevel(props.stats[statName]).name;
    const previousName = props.previousDay
      ? stats[statName].getLevel(props.previousDay.stats[statName]).name
      : stats[statName].levels[0].name;
    return previousName === currentName
      ? currentName
      : `${previousName} -> ${currentName}`;
  };

  return (
    <div>
      <div>
        Academics: {getLevel(stats.Academics.name)}(
        {props.stats[stats.Academics.name]} pts.)
      </div>
      <div>
        Charm: {getLevel(stats.Charm.name)}({props.stats[stats.Charm.name]}{" "}
        pts.)
      </div>
      <div>
        Courage: {getLevel(stats.Courage.name)}(
        {props.stats[stats.Courage.name]} pts.)
      </div>
    </div>
  );
}

function Calendar(props) {
  const changeHandler = (name, time) => {
    const newEvent = events[name];
    props.setCalendarArray((prev) => {
      const newCalendar = prev.map((c) => {
        if (c.date.getTime() === props.date.getTime())
          c.activities[time] = newEvent;
        if (
          c.date.getTime() > props.date.getTime() &&
          c.activities[time].category !== "special"
        )
          c.activities[time] = events.empty;
        return c;
      });
      return initialCalculataion(newCalendar);
    });
  };

  return (
    <div>
      <div
        style={{
          width: "500px",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >
        <h1>
          {monthNames[props.date.getMonth()]} {props.date.getDate()} (
          {daysNamesIndex[props.date.getDay()]})
        </h1>
        <DailyEvent
          changeHandler={(e) => changeHandler(e.target.value, "morning")}
          event={props.activities.morning}
          stats={props.stats}
          date={props.date}
          time="morning"
        />
        <DailyEvent
          changeHandler={(e) => changeHandler(e.target.value, "day")}
          event={props.activities.day}
          stats={props.stats}
          date={props.date}
          time="day"
        />
        <DailyEvent
          changeHandler={(e) => changeHandler(e.target.value, "evening")}
          event={props.activities.evening}
          stats={props.stats}
          date={props.date}
          time="evening"
        />
      </div>
      <HeroStats stats={props.stats} previousDay={props.previousDay} />
    </div>
  );
}

function App() {
  const [calendarArray, setCalendarArray] = React.useState(null);

  React.useEffect(() => {
    setCalendarArray(initialCalculataion(calendar));
  }, []);

  if (calendarArray === null) return null;
  return (
    <React.Fragment>
      <div style={{ width: "100vw", overflow: "scroll" }}>
        <div
          style={{
            width: "fit-content",
            display: "flex",
            gap: "10px",
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
