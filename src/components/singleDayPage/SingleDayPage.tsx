import { getCalculatedCalendar, SingleDay } from "@/constants/calendar";
import { Event, Times } from "@/constants/events/types";

import {
  SocialLinksStats,
  ActivitesList,
  HeroStats,
} from "@/components/DailyCards";

import { AvailableTimes } from "./types";
import { RightTab } from "./RightTab";
import * as style from "./style.scss";

import { useSearchParams } from "react-router-dom";
import classnames from "classnames/bind";
import React from "react";

const cx = classnames.bind(style);

function SingleDayPage(props: {
  calendar: SingleDay[];
  setCalendar: React.Dispatch<React.SetStateAction<SingleDay[]>>;
}) {
  const [showTime, setShowTime] = React.useState<AvailableTimes | null>(null);
  const [dayIndex, setDayIndex] = React.useState<number>(0);
  const [searchParams, _] = useSearchParams();

  React.useEffect(() => {
    setShowTime(null);
    const dateId = searchParams.get("dateId");
    if (!!dateId && props.calendar.length > 0) {
      const index = props.calendar.findIndex((day) => day.getId() === dateId);
      setDayIndex(index);
    }
  }, [searchParams, props.calendar]);

  const updateCalendar = ({ event }: { event: Event }) => {
    props.setCalendar((prev: SingleDay[]) => {
      return getCalculatedCalendar({
        previousCalendar: prev,
        dayIndex,
        newEvent: event,
        time: showTime as Times,
      });
    });
  };

  if (props.calendar.length === 0) return null;
  return (
    <div className={cx("main-container")}>
      <div className={cx("left-tab")}>
        <div className={cx("tab-main-container")}>
          <HeroStats
            previousDay={props.calendar?.[dayIndex - 1]}
            currentDay={props.calendar[dayIndex]}
          />
          <SocialLinksStats
            previousDay={props.calendar?.[dayIndex - 1]}
            currentDay={props.calendar[dayIndex]}
          />
        </div>
      </div>
      <div className={cx("center-tab")}>
        <div className={cx("tab-main-container")}>
          <ActivitesList
            previousDay={props.calendar?.[dayIndex - 1]}
            highlitedTime={showTime ?? undefined}
            currentDay={props.calendar[dayIndex]}
            clickHandler={(t) =>
              setShowTime((o) => (o === t ? null : (t as AvailableTimes)))
            }
          />
        </div>
      </div>
      <div className={cx("right-tab")}>
        <div className={cx("tab-main-container")}>
          <RightTab
            clickHandler={updateCalendar}
            calendar={props.calendar}
            showTime={showTime}
            dayIndex={dayIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleDayPage;
