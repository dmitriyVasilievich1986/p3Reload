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

function Calendar(props: CalendarProps) {
  return (
    <div className={cx("calendar")} id={props.getId()}>
      <Card color="primary">
        <div className={cx("flex-column")}>
          <CurrentDate date={props.date} />
          {props.activities.map((activity, i) => (
            <Card enable={!activity.special} head={activity.time} key={i}>
              <DayEvent
                onClick={props.setDayConstants}
                event={activity}
                {...props}
              />
            </Card>
          ))}
        </div>
      </Card>
      <HeroStats {...props} />
      <SocialLinks {...props} />
    </div>
  );
}

export default Calendar;
