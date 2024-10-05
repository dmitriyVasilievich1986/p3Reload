import { Times, Event } from "@/constants/events/types";
import { SingleDay } from "@/constants/calendar";

export type AvailableTimes = Times.Morning | Times.Day | Times.Evening;

export type ActivitiesPerDay = {
  [key in AvailableTimes]: Event[];
};

export type SettingsProps = {
  calendar: SingleDay[];
  setCalendar: React.Dispatch<React.SetStateAction<SingleDay[]>>;
};
