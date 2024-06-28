import { SocialLinkNames } from "../../constants/socialLinks/types";
import { OutsideClick } from "../supportComponents/OutsideClick";
import { socialLinks } from "../../constants/socialLinks";
import { events } from "../../constants/events";
import classnames from "classnames/bind";
import { DayEventProps } from "./types";
import * as style from "./style.scss";
import React from "react";

import {
  SpecialEventsNames,
  pcProgramsNames,
  statsEventsAcademicsNames,
  statsEventsCharmNames,
  statsEventsCourageNames,
  socialLinkRomanceNames,
  Categories,
} from "../../constants/events/types";

const cx = classnames.bind(style);

function DropBox(props: { show: boolean; children: React.ReactNode }) {
  return (
    <div className={cx("drop-box", { show: props.show })}>{props.children}</div>
  );
}

function DayEvent(props: DayEventProps) {
  const [show, setShow] = React.useState(false);

  const availableEvents = (
    Object.keys(events) as Array<
      | SpecialEventsNames
      | pcProgramsNames
      | statsEventsAcademicsNames
      | statsEventsCharmNames
      | statsEventsCourageNames
      | SocialLinkNames
      | socialLinkRomanceNames
    >
  ).filter((e) =>
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
    if (
      props.event.category !== Categories.Links ||
      !(props.event.name in SocialLinkNames)
    )
      return null;
    if (
      props.previousDay.links[props.event.name as SocialLinkNames].level ===
      props.links[props.event.name as SocialLinkNames].level
    )
      return socialLinks[props.event.name as SocialLinkNames].getStaleLevel();
    return socialLinks[props.event.name as SocialLinkNames]
      .getlevel({
        romance: props.links[props.event.name as SocialLinkNames].romance,
        level: props.links[props.event.name as SocialLinkNames].level - 1,
      })
      .element({ key: props.event.name });
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

      {props.event.label()}
      <LinkElement />
    </OutsideClick>
  );
}

export default DayEvent;
