import { monthNames, daysNamesIndex } from "Constants/monthsNames";
import React from "react";
import "./App.css";
import { calendar, initialCalculataion } from "./constants/calendar";
import { events } from "./constants/events";
import { stats } from "./constants/stats";

function outsideClickWrapper(props) {
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (props.ref.current && !props.ref.current.contains(event.target)) {
        props.clickHandler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.ref]);
}

function DailyEvent(props) {
  const [show, setShow] = React.useState(false);
  const blockRef = React.useRef(null);
  outsideClickWrapper({ ref: blockRef, clickHandler: () => setShow(false) });

  const availableEvents = Object.keys(events).filter(
    (e) =>
      events[e].available({
        currentStats: props.stats,
        currentDate: props.date,
        currentTime: props.time,
      }) && events[e].category !== "special"
  );
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
        position: "relative",
      }}
      ref={blockRef}
    >
      <label
        style={{
          position: "absolute",
          top: "-10px",
          left: "15px",
          backgroundColor: "white",
          fontWeight: "bold",
          padding: "0 5px",
        }}
      >
        {props.label}
      </label>
      <div
        style={{
          maxHeight: "300px",
          height: "fit-content",
          overflowX: "auto",
          border: "1px solid black",
          position: "absolute",
          backgroundColor: "white",
          width: "100%",
          zIndex: "99",
          top: "calc(100% + 5px)",
          display: show ? "block" : "none",
          padding: "5px",
        }}
      >
        {availableEvents.map((e, i) => (
          <div
            key={i}
            onClick={() => {
              setShow(false);
              props.changeHandler(e);
            }}
          >
            {events[e].label()}
          </div>
        ))}
      </div>
      <div
        style={{ width: "100%", padding: "5px" }}
        onClick={() => {
          if (props.event.category !== "special") setShow((s) => !s);
        }}
      >
        <div>{props.event.label()}</div>
      </div>
    </div>
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
          c.activities[time] = events.doNothing;
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
          changeHandler={(e) => changeHandler(e, "morning")}
          event={props.activities.morning}
          stats={props.stats}
          date={props.date}
          label="at school"
          time="morning"
        />
        <DailyEvent
          changeHandler={(e) => changeHandler(e, "day")}
          event={props.activities.day}
          stats={props.stats}
          date={props.date}
          time="day"
          label="day"
        />
        <DailyEvent
          changeHandler={(e) => changeHandler(e, "evening")}
          event={props.activities.evening}
          stats={props.stats}
          date={props.date}
          time="evening"
          label="evening"
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
      <div style={{ width: "100vw", overflow: "scroll", height: "900px" }}>
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
