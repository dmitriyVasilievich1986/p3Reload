import { calendar } from "../../constants/calendar";
import classnames from "classnames/bind";
import { LeftBarProps } from "./types";
import * as style from "./style.scss";
import MonthBlock from "./MonthBlock";

const cx = classnames.bind(style);

function LeftBar(props: LeftBarProps) {
  if (props.calendarRef.current === null) return;

  const allMonths = new Set(calendar.map((c) => c.date.getMonth()));

  const clickHandler = (id: string) => {
    const element = (props.calendarRef.current as HTMLDivElement).querySelector(
      `#${id}`
    );
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={cx("left-bar")}>
      <div>
        {Array.from(allMonths).map((m) => (
          <MonthBlock
            days={calendar.filter((c) => c.date.getMonth() === m)}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
