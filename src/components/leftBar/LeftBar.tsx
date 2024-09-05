import { useSearchParams } from "react-router-dom";
import { calendar } from "@/constants/calendar";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import MonthBlock from "./MonthBlock";

const cx = classnames.bind(style);

function LeftBar() {
  const allMonths = new Set(calendar.map((c) => c.date.getMonth()));
  const [searchParams, setSearchParams] = useSearchParams();

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
