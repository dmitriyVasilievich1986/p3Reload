import { StatsRepresentation, StatsNames } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";

import {
  AvailableSingleTimeEventsIsIn,
  AvailableDaysNamesIsIn,
  AvailableStatGreater,
  AvailableTimesIsIn,
  False_,
  And_,
  Or_,
} from "@/constants/availability/AvailableClass";

import { statsEventsCharmNames, Times, Event } from "../types";
import { StatsEvents } from "./statsClass";

class HagakureSingleEvent extends StatsEvents {
  upgrade(props: any) {
    const payload = super.upgrade(props);
    const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
    const isFirstTime =
      !props.currentDay.singleTimeEvents.includes(
        statsEventsCharmNames.hagakureRamen
      ) &&
      props.time === Times.Evening &&
      days.includes(props.currentDay.dayName);
    const singleTimeEvents = isFirstTime
      ? props.currentDay.singleTimeEvents
      : [
          ...props.currentDay.singleTimeEvents,
          statsEventsCharmNames.hagakureRamen,
        ];

    return {
      ...payload,
      singleTimeEvents,
    };
  }
}

export const statsEventsCharm: {
  [key in statsEventsCharmNames]: Event;
} = {
  [statsEventsCharmNames.chagallCafeCharm]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Charm, 2)],
    name: statsEventsCharmNames.chagallCafeCharm,
    place: "Paulownia Mall",
    time: Times.Evening,
    price: 500,
    availability: new Or_([
      new AvailableTimesIsIn({ times: [Times.Evening] }),
      new And_([
        new AvailableTimesIsIn({ times: [Times.Day] }),
        new AvailableDaysNamesIsIn({
          days: [DaysNames.monday, DaysNames.tuesday],
        }),
      ]),
    ]),
  }),
  [statsEventsCharmNames.schoolQuestionCharm]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Charm, 2)],
    name: statsEventsCharmNames.schoolQuestionCharm,
    place: "Gekkoukan High School",
    availability: new False_(),
    time: Times.Morning,
    special: true,
  }),
  [statsEventsCharmNames.hagakureRamen]: new HagakureSingleEvent({
    stats: [new StatsRepresentation(StatsNames.Charm, 3)],
    name: statsEventsCharmNames.hagakureRamen,
    place: "Iwatodai Strip Mall",
    time: Times.Evening,
    price: 900,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new AvailableDaysNamesIsIn({
        days: [
          DaysNames.monday,
          DaysNames.tuesday,
          DaysNames.wednesday,
          DaysNames.thursday,
          DaysNames.friday,
        ],
      }),
    ]),
  }),
  [statsEventsCharmNames.cinemaTheaterCharm]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Charm, 4)],
    name: statsEventsCharmNames.cinemaTheaterCharm,
    place: "Port Island Station",
    time: Times.Day,
    price: 1_500,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Day] }),
      new AvailableDaysNamesIsIn({
        days: [DaysNames.tuesday, DaysNames.friday],
      }),
    ]),
  }),
  [statsEventsCharmNames.hagakureRamenSpecial]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Charm, 4)],
    name: statsEventsCharmNames.hagakureRamenSpecial,
    place: "Iwatodai Strip Mall",
    time: Times.Evening,
    price: 1_200,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Evening] }),
      new AvailableStatGreater({ name: StatsNames.Courage, level: 2 }),
      new AvailableSingleTimeEventsIsIn({
        name: statsEventsCharmNames.hagakureRamen,
      }),
      new AvailableDaysNamesIsIn({
        days: [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday],
      }),
    ]),
  }),
  [statsEventsCharmNames.gameParadeCharm]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Charm, 4)],
    name: statsEventsCharmNames.gameParadeCharm,
    place: "Paulownia Mall",
    time: Times.Evening,
    price: 1_500,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new AvailableDaysNamesIsIn({
        days: [DaysNames.monday, DaysNames.thursday],
      }),
    ]),
  }),
};
