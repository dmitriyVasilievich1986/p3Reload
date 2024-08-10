import { MonthNames } from "@/constants/monthsNames";
import { MonthBlockProps } from "./types";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function MonthBlock(props: MonthBlockProps) {
  return (
    <div className={cx("month-wrapper")}>
      <div className={cx("month-name")}>
        <div className="name-capital">
          {MonthNames[props.days[0].date.getMonth()][0]}
        </div>
        <div className="name-rest">
          {MonthNames[props.days[0].date.getMonth()].slice(1)}
        </div>
      </div>
      <div className={cx("dates")}>
        <div>
          {props.days.map((d) => (
            <label
              key={d.getId()}
              onClick={() => props.clickHandler(d.getId())}
            >
              {MonthNames[d.date.getMonth()]} {d.date.getDate()}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonthBlock;
