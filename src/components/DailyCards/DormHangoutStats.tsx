import { DormHangoutLevels } from "@/constants/socialLinks/classes/LinkLevels";
import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";

import { Tooltip } from "@/components/tootlip";
import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

import { BadgeTooltip } from "./BadgeTooltip";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

export function DormHangoutStats({
  previousDay,
  currentDay,
}: {
  previousDay: SingleDay;
  currentDay: SingleDay;
}) {
  const getLevel = (name: SocialLinkNames, level: "dorm1" | "dorm2") => {
    if (currentDay.links[name][level] === 0) return "- not started";
    const levelName: "dormHangout1" | "dormHangout2" =
      level === "dorm1" ? "dormHangout1" : "dormHangout2";

    const maxLevel = Math.max(
      ...Object.keys(socialLinks[name][levelName].levels).map((k) =>
        parseInt(k)
      )
    );
    if (currentDay.links[name][level] >= maxLevel)
      return "- characteristic gained";
    return null;
  };

  const isLeveledUp = (name: SocialLinkNames, level: "dorm1" | "dorm2") => {
    if (previousDay === undefined) return false;
    return previousDay.links[name][level] !== currentDay.links[name][level];
  };

  const getBadge = (name: SocialLinkNames, level: "dorm1" | "dorm2") => {
    const color = isLeveledUp(name, level) ? "green" : "blue";
    return (
      <Badge
        value={String(currentDay.links[name][level])}
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

  const hangoutsLinks: SocialLinkNames[] = [
    SocialLinkNames.Iori,
    SocialLinkNames.Sanada,
    SocialLinkNames.Empress,
    SocialLinkNames.Lovers,
    SocialLinkNames.Priestess,
    SocialLinkNames.Aeon,
    SocialLinkNames.Amada,
    SocialLinkNames.Koromaru,
  ];

  return (
    <Card head="Dorm Hangouts" color="primary">
      <div className={cx("stat")}>
        {hangoutsLinks.map((l) => (
          <>
            <div key={l} className={cx("stat-item")}>
              <Tooltip position="right" tooltip={<StatsTooltip name={l} />}>
                {getBadge(l, "dorm1")}
              </Tooltip>
              <label>
                {l}
                {
                  (socialLinks[l].dormHangout1 as DormHangoutLevels)
                    .headPostfix as string
                }
              </label>
              {getLevel(l, "dorm1")}
            </div>
            <div key={l} className={cx("stat-item")}>
              <Tooltip position="right" tooltip={<StatsTooltip name={l} />}>
                {getBadge(l, "dorm2")}
              </Tooltip>
              <label>
                {l}
                {
                  (socialLinks[l].dormHangout2 as DormHangoutLevels)
                    .headPostfix as string
                }
              </label>
              {getLevel(l, "dorm2")}
            </div>
          </>
        ))}
      </div>
    </Card>
  );
}
