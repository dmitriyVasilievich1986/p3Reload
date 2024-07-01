import { MonthNames, DaysNamesIndex } from "../../constants/monthsNames";
import { SocialLinkNames } from "../../constants/socialLinks/types";
import { initialCalculataion } from "../../constants/calendar";
import { Times, Event } from "../../constants/events/types";
import { singleDay } from "../../constants/calendar/types";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import SocialLinks from "./SocialLinks";
import { CalendarProps } from "./types";
import * as style from "./style.scss";
import HeroStats from "./HeroStats";
import DayEvent from "./DayEvent";
import Card from "../card/Card";

const cx = classnames.bind(style);

function CurrentDate({ date }: { date: Date }) {
  const dayName = DaysNamesIndex[date.getDay()];
  const month = MonthNames[date.getMonth()];
  const day = date.getDate();

  return <h1>{`${month} ${day} (${dayName})`}</h1>;
}

function Tartarus(props: { previousDay: singleDay }) {
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
  const updateCalendar = ({
    activity,
    arcane,
  }: {
    activity?: { [key in Times]?: Event };
    arcane?: SocialLinkNames;
  }) => {
    props.setCalendarArray((prev: singleDay[]) => {
      const newCalendar: singleDay[] = (prev as Array<singleDay>).map((c) => {
        if (c.date.getTime() === props.date.getTime()) {
          if (activity) {
            return {
              ...c,
              activities: { ...c.activities, ...activity },
            };
          } else if (arcane) {
            return {
              ...c,
              arcanes: c.arcanes.includes(arcane)
                ? c.arcanes.filter((a) => a !== arcane)
                : [...c.arcanes, arcane],
            };
          }
          return c;
        }
        if (c.date.getTime() > props.date.getTime())
          return {
            ...c,
            activities: {
              [Times[Times.Morning]]: c.activities[Times[Times.Morning]]
                ?.special
                ? c.activities[Times[Times.Morning]]
                : events.stayAwakeInClass,
              [Times.AfterSchool]: null,
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

  return (
    <div className={cx("calendar")} id={props.getId()}>
      <Card color="primary">
        <div className={cx("flex-column")}>
          <CurrentDate date={props.date} />
          <Card
            head="morning"
            enable={!props.activities[Times.Morning].special}
          >
            <DayEvent
              {...props}
              event={props.activities[Times.Morning]}
              time={Times.Morning}
              changeHandler={(name) =>
                updateCalendar({ activity: { [Times.Morning]: events[name] } })
              }
            />
          </Card>

          <Tartarus previousDay={props.previousDay} />

          {([Times.Day, Times.Evening] as Array<Times>)
            .filter((time) => !props.activities?.[time])
            .map((time) => (
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
            ))}
        </div>
      </Card>
      <HeroStats {...props} />
      <SocialLinks {...props} changeHandler={updateCalendar} />
    </div>
  );
}

export default Calendar;
