import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import { Card } from "../card";

const cx = classnames.bind(style);

function SocialLinks({ currentDay }: { currentDay: SingleDay }) {
  const getLevel = (name: SocialLinkNames) => {
    if (currentDay.links[name].level === 0) return "not established";
    if (currentDay.links[name].level >= socialLinks[name].maxLevel)
      return "max level";
    return `${currentDay.links[name].level} (${currentDay.links[name].points}/${
      socialLinks[name].getLevel({
        ...currentDay.links[name],
      }).points
    } pts.)`;
  };

  return (
    <Card head="Links" color="primary">
      <div className={cx("stat")}>
        {(Object.keys(currentDay.links) as Array<SocialLinkNames>).map((l) => (
          <div key={l}>
            <label>{l}</label>: {getLevel(l)}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default SocialLinks;
