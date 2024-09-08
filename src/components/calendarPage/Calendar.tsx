import { SingleDay } from "@/constants/calendar/SingleDay";
import { Times } from "@/constants/events/types";

import classnames from "classnames/bind";
import * as style from "./style.scss";

import {
  SocialLinksStats,
  ActivitesList,
  HeroStats,
} from "@/components/DailyCards";

const cx = classnames.bind(style);

function Calendar(props: {
  clickHandler: (time: Times) => void;
  previousDay: SingleDay;
  currentDay: SingleDay;
}) {
  return (
    <div className={cx("calendar")} id={props.currentDay.getId()}>
      <ActivitesList {...props} />
      <HeroStats {...props} />
      <SocialLinksStats {...props} />
    </div>
  );
}

export default Calendar;
