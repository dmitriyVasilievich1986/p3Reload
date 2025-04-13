import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { Times, Event, Categories } from "@/constants/events/types";
import { SingleDay } from "@/constants/calendar/SingleDay";

import { Tooltip } from "@/components/tootlip";
import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

import { BadgeTooltip } from "./BadgeTooltip";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function LinkBadge(props: { currentDay: SingleDay; event: Event }) {
  if (!props.event.linkName) return null;

  const linkName = props.event.linkName as SocialLinkNames;
  const color =
    props.currentDay.links[linkName].points >=
    socialLinks[linkName].getLevel({
      ...props.currentDay.links[linkName],
    }).points
      ? "green"
      : "yellow";

  return (
    <Tooltip
      position="left"
      tooltip={
        <BadgeTooltip
          points={props.currentDay.links[linkName].points}
          nextLevel={
            socialLinks[linkName].getLevel({
              ...props.currentDay.links[linkName],
            }).points
          }
        />
      }
    >
      <Badge color={color} value={props.currentDay.links[linkName].level} />
    </Tooltip>
  );
}

export function Activity(props: {
  clickHandler: (time: Times) => void;
  previousDay: SingleDay;
  currentDay: SingleDay;
  event: Event;
  highlited?: boolean;
}) {
  const clickHandler = () => {
    if (!props.event?.special) {
      props.clickHandler(props.event.time);
    }
  };

  return (
    <Card
      badge={<LinkBadge {...props} />}
      enable={
        !props.event.special && props.event.category !== Categories.Prerequisits
      }
      highlited={props.highlited}
      head={props.event.time}
      onClick={clickHandler}
    >
      <div className={cx("flex-column")}>
        {props.event.label({
          previousDay: props.previousDay,
          currentDay: props.currentDay,
          time: props.event.time,
          fullCard: true,
        })}
      </div>
    </Card>
  );
}
