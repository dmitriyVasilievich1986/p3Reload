import OutsideClick from "../supportComponents/outsideClick";
import { socialLinks } from "../../constants/socialLinks";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

function DropBox(props) {
  return (
    <div className={cx("drop-box", { show: props.show })}>{props.children}</div>
  );
}

function DayEvent(props) {
  const [show, setShow] = React.useState(false);

  const availableEvents = Object.keys(events).filter((e) =>
    events[e].available({
      previousDay: props.previousDay,
      currentStats: props.stats,
      currentLinks: props.links,
      currentDate: props.date,
      currentTime: props.time,
    })
  );

  const LinkElement = () => {
    if (props.event.category !== "links") return null;
    if (
      props.previousDay.links[props.event.name].level ===
      props.links[props.event.name].level
    )
      return socialLinks[props.event.name].getStaleLevel();
    return socialLinks[props.event.name]
      .getlevel({
        romance: props.links[props.event.name].romance,
        level: props.links[props.event.name].level - 1,
      })
      .element();
  };

  return (
    <OutsideClick
      clickHandler={() => setShow(false)}
      onClick={() => setShow((p) => !p)}
      className={cx("flex-column")}
    >
      <DropBox show={show}>
        {availableEvents.map((e) => (
          <div
            key={e}
            onClick={() => {
              props.changeHandler(e);
            }}
          >
            {events[e].label()}
          </div>
        ))}
      </DropBox>

      {props.event.label()}
      <LinkElement />
    </OutsideClick>
  );
}

export default DayEvent;
