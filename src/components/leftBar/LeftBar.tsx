import { dayIndexParams } from "@/components/supportComponents";
import { calendar } from "@/constants/calendar";

import classnames from "classnames/bind";
import * as style from "./style.scss";
import MonthBlock from "./MonthBlock";

const cx = classnames.bind(style);

function LeftBar() {
  const allMonths = new Set(calendar.map((c) => c.date.getMonth()));
  const [_, updateDayIndex] = dayIndexParams();

  return (
    <div className={cx("left-bar")}>
      <div>
        {Array.from(allMonths).map((m) => (
          <MonthBlock
            days={calendar.filter((c) => c.date.getMonth() === m)}
            clickHandler={updateDayIndex}
            key={m}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
