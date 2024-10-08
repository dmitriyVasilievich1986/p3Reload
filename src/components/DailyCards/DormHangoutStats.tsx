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
        {hangoutsLinks.map((l) => (
          <React.Fragment key={l}>
            <div className={cx("stat-item")}>
              {getBadge(l, "dorm1")}
              <label>
                {l}
                {
                  (socialLinks[l].dormHangout1 as DormHangoutLevels)
                    .headPostfix as string
                }
              </label>
              {getLevel(l, "dorm1")}
            </div>
            <div key={`${l}-dorm2`} className={cx("stat-item")}>
              {getBadge(l, "dorm2")}
              <label>
                {l}
                {
                  (socialLinks[l].dormHangout2 as DormHangoutLevels)
                    .headPostfix as string
                }
              </label>
              {getLevel(l, "dorm2")}
            </div>
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
}
