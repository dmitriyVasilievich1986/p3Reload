import { SocialLinkNames } from "../../constants/socialLinks/types";
import { socialLinks } from "@/constants/socialLinks";
import BadgeTooltip from "./BadgeTooltip";
import classnames from "classnames/bind";
import { DayEventProps } from "./types";
import * as style from "./style.scss";
import { Tooltip } from "../tootlip";
import { Badge } from "../badge";
import Card from "../card/Card";

const cx = classnames.bind(style);

function LinkBadge(props: DayEventProps) {
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
        {props.event.label({
          currentDay: props.currentDay,
          fullCard: true,
        })}
      </div>
    </Card>
  );
}

export default DayEvent;
