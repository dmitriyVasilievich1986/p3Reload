import { Event, Times } from "@/constants/events/types";
import { SingleDay } from "@/constants/calendar";

import { Card } from "@/components/card";

import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

export function ActivitiesList(props: {
  clickHandler: (props: { event: Event }) => void;
  selectedActivity?: string;
  calendar: SingleDay[];
  activities: Event[];
  dayIndex: number;
  head: string;
  time: Times;
}) {
  if (props.activities.length === 0) return null;
  return (
    <Card head={props.head} color="primary">
      <div className={cx("activities-list")}>
        {props.activities.map((a) => {
          return (
            <Card
              key={a.name}
              color="secondary"
              enable
              highlited={a.name === props.selectedActivity}
              onClick={() => props.clickHandler({ event: a })}
            >
              {a.label({
                previousDay: props.calendar?.[props.dayIndex - 1],
                currentDay: props.calendar[props.dayIndex],
                time: props.time,
              })}
            </Card>
          );
        })}
      </div>
    </Card>
  );
}
