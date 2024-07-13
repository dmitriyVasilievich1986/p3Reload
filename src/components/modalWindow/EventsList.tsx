import { Event } from "../../constants/events/types";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import { Card } from "../card";

const cx = classnames.bind(style);

function EventsList(props: {
  head: string;
  events: Event[];
  onClick: (props: { event: Event }) => void;
}) {
  if (props.events.length === 0) return null;
  return (
    <div className={cx("events-list")}>
      <Card head={props.head}>
        <div className={cx("events-wrapper")}>
          {props.events.map((e) => (
            <div onClick={() => props.onClick({ event: e })} key={e.name}>
              {e.label({ arcanes: [] })}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default EventsList;
