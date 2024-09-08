import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

export function BadgeTooltip(props: {
  points: string | number;
  nextLevel: string | number;
}) {
  return (
    <div className={cx("stats-tooltip-wrapper")}>
      <div>
        <label>Points:</label>
        {props.points} pts.
      </div>
      <div>
        <label>Next Level:</label>
        {props.nextLevel} pts.
      </div>
    </div>
  );
}
