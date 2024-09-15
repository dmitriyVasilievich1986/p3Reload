import { dayIndexParams } from "@/components/supportComponents";
import { SingleDay } from "@/constants/calendar";

import classnames from "classnames/bind";
import * as style from "./style.scss";
import MonthBlock from "./MonthBlock";
import { Input } from "../input";
import React from "react";

const cx = classnames.bind(style);

function LeftBar(props: { calendar: SingleDay[] }) {
  const [filter, setFilter] = React.useState("");
  const [_, updateDayIndex] = dayIndexParams();
  const [filteredCalendar, setFilteredCalendar] = React.useState<SingleDay[]>(
    []
  );

  React.useEffect(() => {
    if (filter === "") {
      setFilteredCalendar(props.calendar);
    } else {
      const newCalendar = props.calendar.filter((c) => {
        const names = c.activities.map((a) =>
          (a.name.toLowerCase() as String).includes(filter.toLowerCase())
        );
        return names.includes(true);
      });
      setFilteredCalendar(newCalendar);
    }
  }, [props.calendar, filter]);

  const allMonths = new Set(filteredCalendar.map((c) => c.date.getMonth()));

  return (
    <div className={cx("left-bar")}>
      <div className={cx("events-filter")}>
        <div>
          <Input onChange={setFilter} value={filter} />
        </div>
      </div>
      <div>
        {Array.from(allMonths).map((m) => (
          <MonthBlock
            days={filteredCalendar.filter((c) => c.date.getMonth() === m)}
            clickHandler={updateDayIndex}
            key={m}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
