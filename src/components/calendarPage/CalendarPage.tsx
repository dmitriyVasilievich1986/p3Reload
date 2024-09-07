import { Modal } from "@/components/modalWindow";
import { SingleDay } from "@/constants/calendar";
import { Times } from "@/constants/events";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import Calendar from "./Calendar";

const cx = classnames.bind(style);

function CalendarPage(props: {
  calendarRef: React.RefObject<HTMLDivElement>;
  calendar: SingleDay[];
  setDayConstants: (props: { time: Times; day: Date } | null) => void;
  setCalendar: React.Dispatch<React.SetStateAction<SingleDay[]>>;
  dayConstants: {
    time: Times;
    day: Date;
  } | null;
}) {
  return (
    <div className={cx("App")}>
      <Modal
        calendar={props.calendar}
        setCalendar={props.setCalendar}
        dayConstants={props.dayConstants}
        setDayConstants={props.setDayConstants}
      />
      <div ref={props.calendarRef}>
        {props.calendar.map((c, i) => (
          <Calendar
            previousDay={props.calendar?.[i - 1]}
            key={c.date.getTime()}
            currentDay={c}
            setDayConstants={(time: Times) =>
              props.setDayConstants({ time, day: c.date })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
