import { DormHangoutLevels } from "@/constants/socialLinks/classes/LinkLevels";
import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";

import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

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
    if (currentDay.links[name][level] >= 3) return "- characteristic gained";
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
      <div className={cx("stat")} key="dorm-hangout-stats">
        {hangoutsLinks.map((l) => {
          const dormHangouts = socialLinks[l].levels.filter(
            (level) => level instanceof DormHangoutLevels
          ) as DormHangoutLevels[];
          return (
            <React.Fragment key={l}>
              {dormHangouts.map((dorm) => (
                <div key={dorm.dormName} className={cx("stat-item")}>
                  {getBadge(l, dorm.dormName)}
                  <label>
                    {l}
                    {dorm.headPostfix as string}
                  </label>
                  {getLevel(l, dorm.dormName)}
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </Card>
  );
}
