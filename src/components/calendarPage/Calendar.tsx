import { MonthNames, DaysNamesIndex } from "../../constants/monthsNames";
import classnames from "classnames/bind";
import { CalendarProps } from "./types";
import SocialLinks from "./SocialLinks";
import * as style from "./style.scss";
import { Tooltip } from "../tootlip";
import HeroStats from "./HeroStats";
import DayEvent from "./DayEvent";
import moonIcon from "./moon.png";
import Card from "../card/Card";

const cx = classnames.bind(style);

function CurrentDate({ foolMoon, isDayOff, exams, date }: CalendarProps) {
  const dayName = DaysNamesIndex[date.getDay()];
  const month = MonthNames[date.getMonth()];
  const day = date.getDate();

  return (
    <div className={cx("date", { foolMoon, isDayOff, exams })}>
      <h1>{`${month} ${day} (${dayName})`}</h1>
      <Tooltip
        position="bottom"
        tooltip={
          <div style={{ width: "70px", textAlign: "center" }}>Full Moon</div>
        }
      >
        {!!foolMoon && <img src={moonIcon} />}
      </Tooltip>
    </div>
  );
}

function Calendar(props: CalendarProps) {
  return (
    <div className={cx("calendar")} id={props.getId()}>
      <Card color="primary">
        <div className={cx("flex-column")}>
          <CurrentDate {...props} />
          {props.activities.map((activity, i) => (
            <DayEvent
              onClick={props.setDayConstants}
              event={activity}
              {...props}
              key={i}
            />
          ))}
        </div>
      </Card>
      <HeroStats {...props} />
      <SocialLinks {...props} />
    </div>
  );
}

export default Calendar;
