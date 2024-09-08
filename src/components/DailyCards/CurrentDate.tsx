import { MonthNames, DaysNamesIndex } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar/SingleDay";

import { FullMoonIcon } from "@/components/icons";
import { Tooltip } from "@/components/tootlip";

import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function FoolMoonTooltip() {
  return <div className={cx("full-moon-tooltip")}>Full Moon</div>;
}

export function CurrentDate({
  currentDay,
  ...props
}: {
  currentDay: SingleDay;
  onClick?: () => void;
}) {
  const dayName = DaysNamesIndex[currentDay.date.getDay()];
  const month = MonthNames[currentDay.date.getMonth()];
  const day = currentDay.date.getDate();

  return (
    <div
      onClick={props.onClick}
      className={cx("date", {
        ...currentDay,
        clickable: props?.onClick !== undefined,
      })}
    >
      <h1>{`${month} ${day} (${dayName})`}</h1>
      <Tooltip tooltip={<FoolMoonTooltip />} position="bottom">
        {!!currentDay.foolMoon && <FullMoonIcon />}
      </Tooltip>
    </div>
  );
}
