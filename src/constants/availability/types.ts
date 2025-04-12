import { SingleDay } from "@/constants/calendar/SingleDay";
import { Times } from "@/constants/events/types";

import { SocialLink } from "@/constants/socialLinks/classes/SocialLink";
import {
  SocialLinkAvailableProps,
  Routes,
} from "@/constants/socialLinks/types";

export enum Operations {
  "Equal" = "Equal",
  "Less" = "Less",
  "LessOrEqueal" = "LessOrEqueal",
  "Greater" = "Greater",
  "GreaterOrEqueal" = "GreaterOrEqueal",
  "IsIn" = "IsIn",
}

export type AvailabilityType = {
  available(props: SocialLinkAvailableProps): boolean;
};

export type AvailabilityProps = {
  socialLink?: SocialLink;
  previousDay: SingleDay;
  currentDay: SingleDay;
  route?: Routes;
  time: Times;
};

export type AvailableType<K> = AvailabilityType & {
  operation: Operations;
  reverse: boolean;

  getRight(props: AvailabilityProps): K | K[];
  getLeft(props: AvailabilityProps): K;
};
