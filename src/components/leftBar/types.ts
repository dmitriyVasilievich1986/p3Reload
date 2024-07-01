import { singleDay } from "../../constants/calendar/types";

export type MonthBlockProps = {
  clickHandler: (id: string) => void;
  days: singleDay[];
};

export type LeftBarProps = {
  calendarRef: React.RefObject<HTMLDivElement | null>;
};
