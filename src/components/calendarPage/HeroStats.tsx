import { StatsNames } from "../../constants/stats/types";
import { stats } from "../../constants/stats";
import { HeroStatsProps } from "./types";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import { Tooltip } from "../tootlip";
import { Badge } from "../badge";
import Card from "../card/Card";

const cx = classnames.bind(style);

function HeroStats(props: HeroStatsProps) {
  const getLevel = (name: StatsNames) => {
    const currentName = stats[name].getLevel(props.stats[name]).name;
    const previousName = props.previousDay
      ? stats[name].getLevel(props.previousDay.stats[name]).name
      : stats[name].levels[0].name;
    return previousName === currentName
      ? currentName
      : `${previousName} -> ${currentName}`;
  };

  const getBadge = (name: StatsNames) => {
    const levelName = stats[name].getLevel(props.stats[name]).name;
    const previousName = props.previousDay
      ? stats[name].getLevel(props.previousDay.stats[name]).name
      : stats[name].levels[0].name;
    const color = previousName === levelName ? "blue" : "green";
    const level = stats[name].levels.map((l) => l.name).indexOf(levelName) + 1;
    return <Badge value={String(level)} color={color} size="small" />;
  };

  const StatsTooltip = ({ name }: { name: StatsNames }) => {
    const level = stats[name].getLevel(props.stats[name]);
    return (
      <div className={cx("stats-tooltip-wrapper")}>
        <div>
          <label>Points:</label>
          {props.stats[name]} pts.
        </div>
        <div>
          <label>Next level:</label>
          {level.nextLevel} pts.
        </div>
      </div>
    );
  };

  return (
    <Card head="Stats" color="primary">
      <div className={cx("stat")}>
        {(Object.keys(StatsNames) as Array<StatsNames>).map((stat) => (
          <div key={stat} className={cx("stat-item")}>
            <Tooltip tooltip={<StatsTooltip name={stat} />}>
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

export default HeroStats;
