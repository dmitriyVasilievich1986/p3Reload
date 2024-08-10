import { SingleDay } from "../../constants/calendar/SingleDay";

export type MonthBlockProps = {
  clickHandler: (id: string) => void;
  days: SingleDay[];
};

export type LeftBarProps = {
  calendarRef: React.RefObject<HTMLDivElement | null>;
};
