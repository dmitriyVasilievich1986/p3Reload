import { Times, Event } from "@/constants/events/types";
import { SingleDay } from "@/constants/calendar";

export type DateProps = {
  date: Date;
};

export type TartarusProps = {
  previousDay: SingleDay;
};

export type UpdateCalendarProps = {
  activity: { [key in Times]?: Event };
};

export type DayEventProps = {
  onClick: (time: Times) => void;
  currentDay: SingleDay;
  event: Event;
} & TartarusProps;

export type CalendarProps = {
  setDayConstants: (time: Times) => void;
  previousDay: SingleDay;
  currentDay: SingleDay;
};
