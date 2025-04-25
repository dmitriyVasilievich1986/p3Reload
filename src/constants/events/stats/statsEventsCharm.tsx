import { StatsRepresentation, StatsNames } from "@/constants/stats";
import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";

import { statsEventsCharmNames, Times, Event } from "@/constants/events/types";
import { StatsEvents } from "@/constants/events/stats/statsClass";

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
    availability: new availables.Or_([
      new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
      new availables.And_([
        new availables.AvailableTimesIsIn({ times: [Times.Day] }),
        new availables.AvailableDaysNamesIsIn({
          days: [DaysNames.monday, DaysNames.tuesday],
        }),
      ]),
    ]),
  }),
  [statsEventsCharmNames.schoolQuestionCharm]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Charm, 2)],
    name: statsEventsCharmNames.schoolQuestionCharm,
    place: "Gekkoukan High School",
    availability: new availables.False_(),
    time: Times.Morning,
    special: true,
  }),
  [statsEventsCharmNames.hagakureRamen]: new HagakureSingleEvent({
    stats: [new StatsRepresentation(StatsNames.Charm, 3)],
    name: statsEventsCharmNames.hagakureRamen,
    place: "Iwatodai Strip Mall",
    time: Times.Evening,
    price: 900,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableDaysNamesIsIn({
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
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day] }),
      new availables.AvailableDaysNamesIsIn({
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
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
      new availables.AvailableStatGreater({
        name: StatsNames.Courage,
        level: 2,
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: statsEventsCharmNames.hagakureRamen,
      }),
      new availables.AvailableDaysNamesIsIn({
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
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.monday, DaysNames.thursday],
      }),
    ]),
  }),
};
