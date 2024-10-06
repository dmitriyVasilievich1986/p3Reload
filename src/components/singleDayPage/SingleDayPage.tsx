import { getCalculatedCalendar, SingleDay } from "@/constants/calendar";
import { Event, Times } from "@/constants/events/types";

import { dayIndexParams } from "@/components/supportComponents";
import {
  DormHangoutStats,
  SocialLinksStats,
  EpisodesStats,
  HeroStats,
} from "@/components/DailyCards";

import { AvailableTimes } from "./types";
import { CenterTab } from "./CenterTab";
import { RightTab } from "./RightTab";
import * as style from "./style.scss";
import Settings from "./Settings";

import classnames from "classnames/bind";
import React from "react";

const cx = classnames.bind(style);

function SingleDayPage(props: {
  calendar: SingleDay[];
  setCalendar: React.Dispatch<React.SetStateAction<SingleDay[]>>;
}) {
  const [showTime, setShowTime] = React.useState<AvailableTimes | null>(null);
  const [dateId, setDateId] = React.useState<number>(0);
  const [dayIndex, setDayIndex] = dayIndexParams();

  React.useEffect(() => {
    setShowTime(null);
    if (!!dayIndex && props.calendar.length > 0) {
      const index = props.calendar.findIndex((day) => day.getId() === dayIndex);
      setDateId(index);
    } else if (dayIndex === null && props.calendar.length > 0) {
      setDayIndex(props.calendar[0].getId());
    }
  }, [dayIndex, props.calendar]);

  const updateCalendar = ({ event }: { event: Event }) => {
    props.setCalendar((prev: SingleDay[]) => {
      return getCalculatedCalendar({
        time: showTime as Times,
        previousCalendar: prev,
        dayIndex: dateId,
        newEvent: event,
      });
    });
  };

  if (props.calendar.length === 0) return null;
  return (
    <div className={cx("main-container")}>
      <div className={cx("left-tab")}>
        <div className={cx("tab-main-container")}>
          <Settings {...props} />
          <HeroStats
            previousDay={props.calendar?.[dateId - 1]}
            currentDay={props.calendar[dateId]}
          />
          <SocialLinksStats
            previousDay={props.calendar?.[dateId - 1]}
            currentDay={props.calendar[dateId]}
          />
          <EpisodesStats
            previousDay={props.calendar?.[dateId - 1]}
            currentDay={props.calendar[dateId]}
          />
          <DormHangoutStats
            previousDay={props.calendar?.[dateId - 1]}
            currentDay={props.calendar[dateId]}
          />
        </div>
      </div>
      <div className={cx("center-tab")}>
        <div className={cx("tab-main-container")}>
          <CenterTab
            setShowTime={setShowTime}
            calendar={props.calendar}
            showTime={showTime}
            dateId={dateId}
          />
        </div>
      </div>
      <div className={cx("right-tab")}>
        <div className={cx("tab-main-container")}>
          <RightTab
            clickHandler={updateCalendar}
            calendar={props.calendar}
            showTime={showTime}
            dayIndex={dateId}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleDayPage;
