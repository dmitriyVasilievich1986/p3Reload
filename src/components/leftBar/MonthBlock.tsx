import { MonthNames } from "../../constants/monthsNames";
import { MonthBlockProps } from "./types";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

function MonthBlock(props: MonthBlockProps) {
  const [show, setShow] = React.useState(false);

  return (
    <div
      className={cx("month-wrapper")}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div>{MonthNames[props.days[0].date.getMonth()]}</div>
      <div className={cx("dates", { show })}>
        {props.days.map((d) => (
          <label onClick={() => props.clickHandler(d.getId())}>
            {MonthNames[d.date.getMonth()]} {d.date.getDate()}
          </label>
        ))}
      </div>
    </div>
  );
}

export default MonthBlock;
