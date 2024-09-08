import { MonthNames, DaysNamesIndex } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { Times } from "@/constants/events/types";

import { Tooltip } from "@/components/tootlip";
import { Card } from "@/components/card";

import { CurrentDate } from "./CurrentDate";
import classnames from "classnames/bind";
import { Activity } from "./Activity";
import * as style from "./style.scss";
import moonIcon from "./moon.png";

const cx = classnames.bind(style);

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
