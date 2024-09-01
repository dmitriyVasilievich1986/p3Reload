import { useSearchParams } from "react-router-dom";
import { calendar } from "@/constants/calendar";
import classnames from "classnames/bind";
import { LeftBarProps } from "./types";
import * as style from "./style.scss";
import MonthBlock from "./MonthBlock";

const cx = classnames.bind(style);

function LeftBar(props: LeftBarProps) {
  if (props.calendarRef.current === null) return;
  const [searchParams, setSearchParams] = useSearchParams();

  const allMonths = new Set(calendar.map((c) => c.date.getMonth()));

  const clickHandler = (id: string) => {
    searchParams.set("dateId", id);
    setSearchParams(searchParams);
  };

  return (
    <div className={cx("left-bar")}>
      <div>
        {Array.from(allMonths).map((m) => (
          <MonthBlock
            days={calendar.filter((c) => c.date.getMonth() === m)}
            clickHandler={clickHandler}
            key={m}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
