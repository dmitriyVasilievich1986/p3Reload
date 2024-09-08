import { ActivitesList, CurrentDate } from "@/components/DailyCards";
import { dayIndexParams } from "@/components/supportComponents";

import { SingleDay } from "@/constants/calendar";
import { Times } from "@/constants/events/types";

import { AvailableTimes } from "./types";
import * as style from "./style.scss";

import classnames from "classnames/bind";
import React from "react";

const cx = classnames.bind(style);

function DateNavigation(props: { calendar: SingleDay[]; dateId: number }) {
  const [_, setDayIndex] = dayIndexParams();
  if (props.calendar?.[props.dateId] === undefined) return null;

  return (
    <CurrentDate
      onClick={() => setDayIndex(props.calendar[props.dateId].getId())}
      currentDay={props.calendar[props.dateId]}
    />
  );
}

export function CenterTab(props: {
  setShowTime: React.Dispatch<React.SetStateAction<AvailableTimes | null>>;
  showTime: AvailableTimes | null;
  calendar: SingleDay[];
  dateId: number;
}) {
  const clickHandler = (time: Times) => {
    if (props.showTime === time) props.setShowTime(null);
    else props.setShowTime(time as AvailableTimes);
  };

  return (
    <>
      <ActivitesList
        previousDay={props.calendar?.[props.dateId - 1]}
        highlitedTime={props.showTime ?? undefined}
        currentDay={props.calendar[props.dateId]}
        clickHandler={clickHandler}
      />

      <div className={cx("date-navigation")}>
        <div className={cx("date-navigation-left")}>
          <DateNavigation calendar={props.calendar} dateId={props.dateId - 1} />
        </div>
        <div className={cx("date-navigation-right")}>
          <DateNavigation calendar={props.calendar} dateId={props.dateId + 1} />
        </div>
      </div>
    </>
  );
}