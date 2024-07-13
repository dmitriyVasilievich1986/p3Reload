import { SocialLinkNames } from "../../constants/socialLinks/types";
import { Categories } from "../../constants/events/types";
import { socialLinks } from "../../constants/socialLinks";
import BadgeTooltip from "./BadgeTooltip";
import classnames from "classnames/bind";
import { DayEventProps } from "./types";
import * as style from "./style.scss";
import { Tooltip } from "../tootlip";
import { Badge } from "../badge";
import Card from "../card/Card";

const cx = classnames.bind(style);

function LinkElement(props: DayEventProps) {
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
}

function LinkBadge(props: DayEventProps) {
  if (props.event.category !== Categories.Links) return null;

  const linkName = props.event.linkName as SocialLinkNames;
  const color =
    props.links[linkName].points >=
    socialLinks[linkName].getlevel({
      ...props.links[linkName],
    }).points
      ? "green"
      : "yellow";

  return (
    <Tooltip
      tooltip={
        <BadgeTooltip
          points={props.links[linkName].points}
          nextLevel={
            socialLinks[linkName].getlevel({
              ...props.links[linkName],
            }).points
          }
        />
      }
    >
      <Badge color={color} value={props.links[linkName].level} />
    </Tooltip>
  );
}

function DayEvent(props: DayEventProps) {
  const clickHandler = () => {
    if (!props.event?.special) {
      props.onClick(props.event.time);
    }
  };

  return (
    <Card
      badge={<LinkBadge {...props} />}
      enable={!props.event.special}
      head={props.event.time}
      onClick={clickHandler}
    >
      <div className={cx("flex-column")}>
        {props.event.label({ arcanes: props.arcanes })}
        <LinkElement {...props} />
      </div>
    </Card>
  );
}

export default DayEvent;
