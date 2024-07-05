import { allEventsNames, Categories } from "../../constants/events/types";
import { SocialLinkNames } from "../../constants/socialLinks/types";
import { OutsideClick } from "../supportComponents/OutsideClick";
import { socialLinks } from "../../constants/socialLinks";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import { DayEventProps } from "./types";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

function DropBox(props: { show: boolean; children: React.ReactNode }) {
  return (
    <div className={cx("drop-box", { show: props.show })}>{props.children}</div>
  );
}

function DayEvent(props: DayEventProps) {
  const [show, setShow] = React.useState(false);
  const card =
    props.event.linkName && props.arcanes.includes(props.event.linkName);

  const availableEvents = (Object.keys(events) as Array<allEventsNames>).filter(
    (e) =>
      events[e].available({
        singleTimeEvents: props.singleTimeEvents,
        previousDay: props.previousDay,
        currentStats: props.stats,
        currentLinks: props.links,
        currentDate: props.date,
        currentTime: props.time,
      })
  );

  const LinkElement = () => {
    if (props.event.category !== Categories.Links) return null;

    const linkName = props.event.linkName as SocialLinkNames;
    if (props.previousDay.links[linkName].level === props.links[linkName].level)
      return socialLinks[linkName].getStaleLevel();

    return socialLinks[linkName]
      .getlevel({
        romance: props.links[linkName].romance,
        level: props.links[linkName].level - 1,
      })
      .element({ key: linkName });
  };

  return (
    <OutsideClick
      clickHandler={() => setShow(false)}
      onClick={() => {
        !props.event.special && setShow((p) => !p);
      }}
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

      {props.event.label({ card })}
      <LinkElement />
    </OutsideClick>
  );
}

export default DayEvent;
