import { SocialLinkAvailableProps } from "@/constants/socialLinks/types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { Times } from "@/constants/events/types";

export enum Operations {
  "Equal" = "Equal",
  "Less" = "Less",
  "LessOrEqueal" = "LessOrEqueal",
  "Greater" = "Greater",
  "GreaterOrEqueal" = "GreaterOrEqueal",
  "IsIn" = "IsIn",
}

export type AvailabilityProps = {
  previousDay: SingleDay;
  currentDay: SingleDay;
  time: Times;
};

export type AvailableType<K> = {
  operation: Operations;
  reverse: boolean;

  getRight(props: AvailabilityProps): K | K[];
  getLeft(props: AvailabilityProps): K;
  available(props: AvailabilityProps): boolean;
};

export type AvailabilityType = {
  availabilities: (AvailableType<any> | AvailabilityType)[];
  available(props: SocialLinkAvailableProps): boolean;
};
