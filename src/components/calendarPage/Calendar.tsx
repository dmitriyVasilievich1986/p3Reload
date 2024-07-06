import { MonthNames, DaysNamesIndex } from "../../constants/monthsNames";
import { CalendarProps, TartarusProps, DateProps } from "./types";
import { Times, Event } from "../../constants/events/types";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import SocialLinks from "./SocialLinks";
import * as style from "./style.scss";
import HeroStats from "./HeroStats";
import DayEvent from "./DayEvent";
import Card from "../card/Card";

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
                return (
                  <Tartarus previousDay={props.previousDay} key={"tartarus"} />
                );
              return (
                <Card
                  enable={!props.activities[time]!.special}
                  head={time}
                  key={time}
                >
                  <DayEvent
                    event={props.activities[time] as Event}
                    onClick={() => props.setDayConstants(time)}
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
