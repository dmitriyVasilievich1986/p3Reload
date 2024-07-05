import { MonthNames, DaysNamesIndex } from "../../constants/monthsNames";
import { initialCalculataion } from "../../constants/calendar";
import { Times, Event } from "../../constants/events/types";
import { singleDay } from "../../constants/calendar/types";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import SocialLinks from "./SocialLinks";
import * as style from "./style.scss";
import HeroStats from "./HeroStats";
import DayEvent from "./DayEvent";
import Card from "../card/Card";

import {
  UpdateCalendarProps,
  CalendarProps,
  TartarusProps,
  DateProps,
} from "./types";

const cx = classnames.bind(style);

function CurrentDate({ date }: DateProps) {
  const dayName = DaysNamesIndex[date.getDay()];
  const month = MonthNames[date.getMonth()];
  const day = date.getDate();

  return <h1>{`${month} ${day} (${dayName})`}</h1>;
}

function Tartarus(props: TartarusProps) {
  if (
    ![
      props.previousDay?.activities[Times.Day].category,
      props.previousDay?.activities[Times.Evening].category,
    ].includes(events.Tartarus.category)
  )
    return null;

  return <Card head="after school">{events.drinkMedicine.label()}</Card>;
}

function Calendar(props: CalendarProps) {
  const updateCalendar = ({ activity }: UpdateCalendarProps) => {
    props.setCalendarArray((prev: singleDay[]) => {
      const newCalendar: singleDay[] = (prev as Array<singleDay>).map((c) => {
        if (c.date.getTime() === props.date.getTime()) {
          return {
            ...c,
            activities: { ...c.activities, ...activity },
          };
        } else if (c.date.getTime() > props.date.getTime())
          return {
            ...c,
            arcanes: [],
            activities: {
              [Times.Morning]: c.activities[Times.Morning]?.special
                ? c.activities[Times.Morning]
                : events.stayAwakeInClass,
              [Times.AfterSchool]: c.activities[Times.AfterSchool]?.special
                ? c.activities[Times.AfterSchool]
                : null,
              [Times.Day]: c.activities[Times.Day]?.special
                ? c.activities[Times.Day]
                : events.DoNothing,
              [Times.Evening]: c.activities[Times.Evening]?.special
                ? c.activities[Times.Evening]
                : events.DoNothing,
            },
          };
        return c;
      });
      return initialCalculataion(newCalendar);
    });
  };

  const timesValues: (Times | null)[] = [
    Times.Morning,
    null,
    Times.AfterSchool,
    Times.Day,
    Times.Evening,
  ];

  return (
    <div className={cx("calendar")} id={props.getId()}>
      <Card color="primary">
        <div className={cx("flex-column")}>
          <CurrentDate date={props.date} />
          {timesValues
            .filter((time) => time === null || !!props.activities?.[time])
            .map((time) => {
              if (time === null)
                return <Tartarus previousDay={props.previousDay} key={time} />;
              return (
                <Card
                  enable={!props.activities[time]!.special}
                  head={time}
                  key={time}
                >
                  <DayEvent
                    time={time}
                    event={props.activities[time] as Event}
                    changeHandler={(name) =>
                      updateCalendar({ activity: { [time]: events[name] } })
                    }
                    {...props}
                  />
                </Card>
              );
            })}
        </div>
      </Card>
      <HeroStats {...props} />
      <SocialLinks {...props} />
    </div>
  );
}

export default Calendar;
