import { SocialLinkNames } from "../../constants/socialLinks/types";
import { Categories } from "../../constants/events/types";
import { socialLinks } from "../../constants/socialLinks";
import classnames from "classnames/bind";
import { DayEventProps } from "./types";
import * as style from "./style.scss";
import { Badge } from "../badge";
import Card from "../card/Card";

const cx = classnames.bind(style);

function DayEvent(props: DayEventProps) {
  const card =
    props.event.linkName && props.arcanes.includes(props.event.linkName);

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

  const LinkBadge = () => {
    if (props.event.category !== Categories.Links) return null;

    const linkName = props.event.linkName as SocialLinkNames;
    const color =
      props.links[linkName].points >=
      socialLinks[linkName].getlevel({
        ...props.links[linkName],
      }).points
        ? "green"
        : "yellow";
    return <Badge color={color} value={props.links[linkName].level} />;
  };

  const clickHandler = () => {
    if (!props.event?.special) {
      props.onClick(props.event.time);
    }
  };

  return (
    <Card
      enable={!props.event.special}
      head={props.event.time}
      onClick={clickHandler}
      badge={<LinkBadge />}
    >
      <div className={cx("flex-column")}>
        {props.event.label({ card })}
        <LinkElement />
      </div>
    </Card>
  );
}

export default DayEvent;
