import { monthNames, daysNamesIndex } from "../../constants/monthsNames";
import { initialCalculataion } from "../../constants/calendar";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import SocialLinks from "./SocialLinks";
import * as style from "./style.scss";
import HeroStats from "./HeroStats";
import DayEvent from "./DayEvent";
import Card from "../card/Card";
import React from "react";

const cx = classnames.bind(style);

function CurrentDate({ date }) {
  const dayName = daysNamesIndex[date.getDay()];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return <h1>{`${month} ${day} (${dayName})`}</h1>;
}

function Tartarus(props) {
  if (
    ![
      props.previousDay?.activities.day.category,
      props.previousDay?.activities.evening.category,
    ].includes(events.tartarus.category)
  )
    return null;

  return <Card head="after school">{events.drinkMedicine.label()}</Card>;
}

function Calendar(props) {
  const updateCalendar = ({ activity = null, arcane = null }) => {
    props.setCalendarArray((prev) => {
      const newCalendar = prev.map((c) => {
        if (c.date.getTime() === props.date.getTime()) {
          if (activity) {
            return { ...c, activities: { ...c.activities, ...activity } };
          } else {
            return {
              ...c,
              arcanes: c.arcanes.includes(arcane)
                ? c.arcanes.filter((a) => a !== arcane)
                : [...c.arcanes, arcane],
            };
          }
        }
        if (c.date.getTime() > props.date.getTime())
          return {
            ...c,
            activities: {
              morning: c.activities.morning?.special
                ? c.activities.morning
                : events.stayAwakeInClass,
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

  return (
    <div className={cx("calendar")}>
      <Card color="primary">
        <div className={cx("flex-column")}>
          <CurrentDate date={props.date} />
          <Card head="morning" enable={!props.activities.morning.special}>
            <DayEvent
              {...props}
              event={props.activities.morning}
              time="morning"
              changeHandler={(name) =>
                updateCalendar({ activity: { morning: events[name] } })
              }
            />
          </Card>
          <Tartarus previousDay={props.previousDay} />
          {["day", "evening"].map((time) => (
            <Card
              enable={!props.activities[time].special}
              head={time}
              key={time}
            >
              <DayEvent
                {...props}
                time={time}
                event={props.activities[time]}
                changeHandler={(name) =>
                  updateCalendar({ activity: { [time]: events[name] } })
                }
              />
            </Card>
          ))}
        </div>
      </Card>
      <HeroStats {...props} />
      <SocialLinks {...props} changeHandler={updateCalendar} />
    </div>
  );
}

export default Calendar;
