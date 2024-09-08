import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";

import { Tooltip } from "@/components/tootlip";
import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

import { BadgeTooltip } from "./BadgeTooltip";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

export function SocialLinksStats({
  previousDay,
  currentDay,
}: {
  previousDay: SingleDay;
  currentDay: SingleDay;
}) {
  const getLevel = (name: SocialLinkNames) => {
    if (currentDay.links[name].level === 0) return "- not established";
    if (currentDay.links[name].level >= socialLinks[name].maxLevel)
      return "- max level";
    return null;
  };

  const isLeveledUp = (name: SocialLinkNames) => {
    if (previousDay === undefined) return false;
    return previousDay.links[name].level !== currentDay.links[name].level;
  };

  const getBadge = (name: SocialLinkNames) => {
    const color = isLeveledUp(name) ? "green" : "blue";
    return (
      <Badge
        value={String(currentDay.links[name].level)}
        color={color}
        size="small"
      />
    );
  };

  const StatsTooltip = ({ name }: { name: SocialLinkNames }) => {
    const nextLevelPoints = socialLinks[name].getLevel({
      ...currentDay.links[name],
    }).points;
    return (
      <BadgeTooltip
        points={currentDay.links[name].points}
        nextLevel={nextLevelPoints}
      />
    );
  };

  return (
    <Card head="Links" color="primary">
      <div className={cx("stat")}>
        {(Object.keys(currentDay.links) as Array<SocialLinkNames>)
          .sort((l) => (isLeveledUp(l) ? -1 : 1))
          .map((l) => (
            <div key={l} className={cx("stat-item")}>
              <Tooltip position="right" tooltip={<StatsTooltip name={l} />}>
                {getBadge(l)}
              </Tooltip>
              <label>{l}</label>
              {getLevel(l)}
            </div>
          ))}
      </div>
    </Card>
  );
}
