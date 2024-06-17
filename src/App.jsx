import { monthNames, daysNamesIndex } from "Constants/monthsNames";
import React from "react";
import "./App.css";
import { calendar, initialCalculataion } from "./constants/calendar";
import { events } from "./constants/events";
import { stats } from "./constants/stats";
import { socialLinks } from "./constants/socialLinks";

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
        previousDay: props.previousDay,
        currentStats: props.stats,
        currentLinks: props.links,
        currentDate: props.date,
        currentTime: props.time,
      }) && !events[e]?.special
  );

  const LinkElement = () => {
    if (props.event.category !== "links") return null;
    if (
      props.previousDay.links[props.event.name].level ===
      props.links[props.event.name].level
    )
      return socialLinks[props.event.name].getStaleLevel();
    return socialLinks[props.event.name]
      .getlevel({
        romance: props.links[props.event.name].romance,
        level: props.links[props.event.name].level - 1,
      })
      .element();
  };

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
          if (!props.event?.special) setShow((s) => !s);
        }}
      >
        <div>{props.event.label()}</div>
        <LinkElement />
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

  const getPoints = (statName) => {
    if (props.stats[statName] >= stats[statName].maxPoints) return "max level";
    const level = stats[statName].getLevel(props.stats[statName]);
    return ` (${props.stats[statName]}/${level.nextLevel} pts.)`;
  };

  return (
    <div>
      <div>
        Academics: {getLevel(stats.Academics.name)}
        {getPoints(stats.Academics.name)}
      </div>
      <div>
        Charm: {getLevel(stats.Charm.name)}
        {getPoints(stats.Charm.name)}
      </div>
      <div>
        Courage: {getLevel(stats.Courage.name)}
        {getPoints(stats.Courage.name)}
      </div>
    </div>
  );
}

function SocialLinks(props) {
  const getLevel = (name) => {
    if (props.links[name].level === 0) return "not established";
    if (props.links[name].level >= socialLinks[name].maxLevel)
      return "max level";
    return `${props.links[name].level} (${props.links[name].points}/${
      socialLinks[name].getlevel({
        ...props.links[name],
      }).points
    } pts.)`;
  };
  return (
    <div>
      {Object.keys(props.links).map((l) => (
        <div key={l}>
          <input
            type="checkbox"
            checked={props.arcanes.includes(l)}
            onChange={() => props.changeHandler(l)}
          />
          {l}: {getLevel(l)}
        </div>
      ))}
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
        if (c.date.getTime() > props.date.getTime())
          c.activities = {
            morning: c.activities.morning?.special
              ? c.activities.morning
              : events.doNothing,
            day: c.activities.day?.special
              ? c.activities.day
              : events.doNothing,
            evening: c.activities.evening?.special
              ? c.activities.evening
              : events.doNothing,
          };
        return c;
      });
      return initialCalculataion(newCalendar);
    });
  };

  const changeArcaneHandler = (name) => {
    props.setCalendarArray((prev) => {
      const newCalendar = prev.map((c) => {
        if (c.date.getTime() === props.date.getTime())
          return {
            ...c,
            arcanes: c.arcanes.includes(name)
              ? c.arcanes.filter((a) => a !== name)
              : [...c.arcanes, name],
          };
        if (c.date.getTime() > props.date.getTime())
          return {
            ...c,
            activities: {
              morning: c.activities.morning?.special
                ? c.activities.morning
                : events.doNothing,
              day: c.activities.day?.special
                ? c.activities.day
                : events.doNothing,
              evening: c.activities.evening?.special
                ? c.activities.evening
                : events.doNothing,
            },
          };
        return c;
      });
      return initialCalculataion(newCalendar);
    });
  };

  const isAfterTartarus = [
    props.previousDay?.activities.day.category,
    props.previousDay?.activities.evening.category,
  ].includes(events.tartarus.category);

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
          previousDay={props.previousDay}
          stats={props.stats}
          links={props.links}
          date={props.date}
          label="at school"
          time="morning"
        />
        {isAfterTartarus && (
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              margin: "10px",
              position: "relative",
            }}
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
              After school
            </label>
            {events.drinkMedicine.label()}
          </div>
        )}
        <DailyEvent
          changeHandler={(e) => changeHandler(e, "day")}
          previousDay={props.previousDay}
          event={props.activities.day}
          links={props.links}
          stats={props.stats}
          date={props.date}
          time="day"
          label="day"
        />
        <DailyEvent
          changeHandler={(e) => changeHandler(e, "evening")}
          event={props.activities.evening}
          previousDay={props.previousDay}
          links={props.links}
          stats={props.stats}
          date={props.date}
          time="evening"
          label="evening"
        />
      </div>
      <HeroStats stats={props.stats} previousDay={props.previousDay} />
      <SocialLinks
        links={props.links}
        previousDay={props.previousDay}
        arcanes={props.arcanes}
        changeHandler={changeArcaneHandler}
      />
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
