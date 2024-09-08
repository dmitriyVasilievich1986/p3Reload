import { MonthNames, DaysNamesIndex } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { Times } from "@/constants/events/types";

import { Tooltip } from "@/components/tootlip";
import { Card } from "@/components/card";

import classnames from "classnames/bind";
import { Activity } from "./Activity";
import * as style from "./style.scss";
import moonIcon from "./moon.png";

const cx = classnames.bind(style);

export function CurrentDate({ currentDay }: { currentDay: SingleDay }) {
  const dayName = DaysNamesIndex[currentDay.date.getDay()];
  const month = MonthNames[currentDay.date.getMonth()];
  const day = currentDay.date.getDate();

  return (
    <div className={cx("date", { ...currentDay })}>
      <h1>{`${month} ${day} (${dayName})`}</h1>
      <Tooltip
        position="bottom"
        tooltip={
          <div style={{ width: "70px", textAlign: "center" }}>Full Moon</div>
        }
      >
        {!!currentDay.foolMoon && <img src={moonIcon} />}
      </Tooltip>
    </div>
  );
}

export function ActivitesList(props: {
  clickHandler: (time: Times) => void;
  previousDay: SingleDay;
  currentDay: SingleDay;
  highlitedTime?: Times;
  showStats?: boolean;
}) {
  return (
    <Card color="primary">
      <div className={cx("flex-column")}>
        <CurrentDate {...props} />
        {props.currentDay.activities.map((activity, i) => (
          <Activity
            highlited={props.highlitedTime === activity.time}
            event={activity}
            {...props}
            key={i}
          />
        ))}
      </div>
    </Card>
  );
}
