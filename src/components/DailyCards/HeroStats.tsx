import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsNames, stats } from "@/constants/stats";

import { Tooltip } from "@/components/tootlip";
import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

import { BadgeTooltip } from "./BadgeTooltip";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

export function HeroStats(props: {
  currentDay: SingleDay;
  previousDay: SingleDay;
}) {
  const getLevel = (name: StatsNames) => {
    const currentName = stats[name].getLevel(props.currentDay.stats[name]).name;
    const previousName = props.previousDay
      ? stats[name].getLevel(props.previousDay.stats[name]).name
      : stats[name].levels[0].name;
    return previousName === currentName
      ? currentName
      : `${previousName} -> ${currentName}`;
  };

  const getBadge = (name: StatsNames) => {
    const levelName = stats[name].getLevel(props.currentDay.stats[name]).name;
    const previousName = props.previousDay
      ? stats[name].getLevel(props.previousDay.stats[name]).name
      : stats[name].levels[0].name;
    const color = previousName === levelName ? "blue" : "green";
    const level = stats[name].levels.map((l) => l.name).indexOf(levelName) + 1;
    return <Badge value={String(level)} color={color} size="small" />;
  };

  const StatsTooltip = ({ name }: { name: StatsNames }) => {
    const level = stats[name].getLevel(props.currentDay.stats[name]);
    return (
      <BadgeTooltip
        points={props.currentDay.stats[name]}
        nextLevel={level.nextLevel}
      />
    );
  };

  return (
    <Card head="Stats" color="primary">
      <div className={cx("stat")}>
        {(Object.keys(StatsNames) as Array<StatsNames>).map((stat) => (
          <div key={stat} className={cx("stat-item")}>
            <Tooltip position="right" tooltip={<StatsTooltip name={stat} />}>
              {getBadge(stat)}
            </Tooltip>
            <label>{stat}:</label>
            {getLevel(stats[stat].name)}
          </div>
        ))}
      </div>
    </Card>
  );
}
