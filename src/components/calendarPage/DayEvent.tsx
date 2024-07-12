import { SocialLinkNames } from "../../constants/socialLinks/types";
import { Categories } from "../../constants/events/types";
import { socialLinks } from "../../constants/socialLinks";
import classnames from "classnames/bind";
import { DayEventProps } from "./types";
import * as style from "./style.scss";
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
    >
      <div className={cx("flex-column")}>
        {props.event.label({ card })}
        <LinkElement />
      </div>
    </Card>
  );
}

export default DayEvent;
