import { stats } from "../../constants/stats";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import Card from "../card/Card";
import React from "react";

const cx = classnames.bind(style);

function HeroStats(props) {
  const getLevel = (name) => {
    const currentName = stats[name].getLevel(props.stats[name]).name;
    const previousName = props.previousDay
      ? stats[name].getLevel(props.previousDay.stats[name]).name
      : stats[name].levels[0].name;
    return previousName === currentName
      ? currentName
      : `${previousName} -> ${currentName}`;
  };

  const getPoints = (name) => {
    if (props.stats[name] >= stats[name].maxPoints) return "max level";
    const level = stats[name].getLevel(props.stats[name]);
    return ` (${props.stats[name]}/${level.nextLevel} pts.)`;
  };

  return (
    <Card head="Stats" color="primary">
      <div className={cx("stat")}>
        {[stats.Academics.name, stats.Charm.name, stats.Courage.name].map(
          (stat) => (
            <div key={stat}>
              <label>{stat}</label>: {getLevel(stats[stat].name)}
              {getPoints(stats[stat].name)}
            </div>
          )
        )}
      </div>
    </Card>
  );
}

export default HeroStats;
