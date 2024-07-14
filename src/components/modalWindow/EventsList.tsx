import { Event } from "../../constants/events/types";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import { Input } from "../input";
import { Card } from "../card";

const cx = classnames.bind(style);

function EventsList({
  available = true,
  ...props
}: {
  head: string;
  events: Event[];
  available?: boolean;
  onClick: (props: { event: Event }) => void;
  filter?: string;
  setFilter?: React.Dispatch<React.SetStateAction<string>>;
}) {
  if (props.events.length === 0) return null;
  return (
    <div className={cx("events-list")}>
      {props?.filter !== undefined && (
        <Input
          onChange={(e) => props.setFilter!(e)}
          placeholder="Social link name"
          value={props.filter}
          label="filter"
        />
      )}
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
                  {e.label({ arcanes: [] })}
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EventsList;
