import { Event, Times } from "@/constants/events/types";
import { SingleDay } from "@/constants/calendar";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import { Card } from "../card";

const cx = classnames.bind(style);

function EventsList({
  available = true,
  ...props
}: {
  time: Times;
  head: string;
  events: Event[];
  available?: boolean;
  currentDay: SingleDay;
  previousDay: SingleDay;
  onClick: (props: { event: Event }) => void;
  filter?: string;
}) {
  if (props.events.length === 0) return null;
  return (
    <div className={cx("events-list")}>
      <Card head={props.head}>
        <div className={cx("events-wrapper")}>
          <div>
            {props.events
              .filter(
                (e) =>
                  !props?.filter ||
                  props.filter === "" ||
                  e.name.toLowerCase().includes(props.filter.toLowerCase())
              )
              .map((e) => (
                <div
                  onClick={() => available && props.onClick({ event: e })}
                  className={cx({ available })}
                  key={e.name}
                >
                  {e.label({
                    previousDay: props.previousDay,
                    currentDay: props.currentDay,
                    time: props.time,
                  })}
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EventsList;
