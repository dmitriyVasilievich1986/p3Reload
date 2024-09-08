import { Times, Event } from "@/constants/events/types";

export type AvailableTimes = Times.Morning | Times.Day | Times.Evening;

export type ActivitiesPerDay = {
  [key in AvailableTimes]: Event[];
};
