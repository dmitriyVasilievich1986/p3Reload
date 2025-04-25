import { StatsRepresentation, StatsNames } from "@/constants/stats";
import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";

import { EventClass } from "@/constants/events/EventClass";
import {
  wilduckBigEaterChallengeEvent,
  StatsEvents,
} from "@/constants/events/stats/statsClass";
import {
  statsEventsCourageNames,
  SpecialEventsNames,
  Categories,
  Times,
  Event,
} from "@/constants/events/types";

export const statsEventsCourage: {
  [key in statsEventsCourageNames]: Event;
} = {
  [statsEventsCourageNames.drinkMedicine]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Courage, 2)],
    name: statsEventsCourageNames.drinkMedicine,
    place: "Nurse's Office",
    time: Times.AfterSchool,
    special: true,
    availability: new availables.And_([
      new availables.AvailablePreviousDayContains({
        name: SpecialEventsNames.Tartarus,
      }),
      new availables.AvailableFreeTime({ time: Times.Day }),
    ]),
  }),
  [statsEventsCourageNames.sleepDuringClass]: new EventClass({
    availability: new availables.AvailableTimesIsIn({ times: [Times.Morning] }),
    stats: [new StatsRepresentation(StatsNames.Courage, 2)],
    name: statsEventsCourageNames.sleepDuringClass,
    place: "Gekkoukan High School",
    category: Categories.Stats,
    time: Times.Morning,
  }),
  [statsEventsCourageNames.Mandragora]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Courage, 2)],
    name: statsEventsCourageNames.Mandragora,
    place: "Paulownia Mall",
    time: Times.Evening,
    price: 800,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableDaysNamesIsIn({
        days: [
          DaysNames.monday,
          DaysNames.tuesday,
          DaysNames.wednesday,
          DaysNames.thursday,
          DaysNames.friday,
          DaysNames.saturday,
        ],
      }),
    ]),
  }),
  [statsEventsCourageNames.wilduckBurgeMysteryBurger]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Courage, 3)],
    name: statsEventsCourageNames.wilduckBurgeMysteryBurger,
    place: "Iwatodai Strip Mall",
    time: Times.Evening,
    price: 1_000,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableDaysNamesIsIn({
        days: [
          DaysNames.monday,
          DaysNames.tuesday,
          DaysNames.wednesday,
          DaysNames.friday,
          DaysNames.saturday,
          DaysNames.sunday,
        ],
      }),
    ]),
  }),
  [statsEventsCourageNames.gameParadeCourage]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Courage, 4)],
    name: statsEventsCourageNames.gameParadeCourage,
    place: "Paulownia Mall",
    time: Times.Evening,
    price: 3_000,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.tuesday, DaysNames.friday],
      }),
    ]),
  }),
  [statsEventsCourageNames.wilduckBurgeWeekendWilduckSet]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Courage, 4)],
    name: statsEventsCourageNames.wilduckBurgeWeekendWilduckSet,
    place: "Iwatodai Strip Mall",
    time: Times.Evening,
    price: 1_200,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: statsEventsCourageNames.wilduckBigEaterChallenge,
      }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.saturday, DaysNames.sunday],
      }),
    ]),
  }),
  [statsEventsCourageNames.cinemaTheaterCourage]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Courage, 4)],
    name: statsEventsCourageNames.cinemaTheaterCourage,
    place: "Port Island Station",
    time: Times.Day,
    price: 1_500,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day] }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.monday, DaysNames.thursday],
      }),
    ]),
  }),
  [statsEventsCourageNames.wilduckBigEaterChallenge]:
    new wilduckBigEaterChallengeEvent({
      name: statsEventsCourageNames.wilduckBigEaterChallenge,
      place: "Port Island Station",
      time: Times.Evening,
      price: 1_800,
      stats: [
        new StatsRepresentation(StatsNames.Courage, 4),
        new StatsRepresentation(StatsNames.Charm, 4),
        new StatsRepresentation(StatsNames.Academics, 4),
      ],
      availability: new availables.And_([
        new availables.AvailableStatGreater({
          name: StatsNames.Courage,
          level: 3,
        }),
        new availables.AvailableDateGreater({ date: new Date(2009, 4, 10) }),
        new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
        new availables.AvailableSingleTimeEventsIsIn({
          name: statsEventsCourageNames.wilduckBigEaterChallenge,
          reverse: true,
        }),
        new availables.AvailableDaysNamesIsIn({
          days: [
            DaysNames.monday,
            DaysNames.tuesday,
            DaysNames.wednesday,
            DaysNames.friday,
            DaysNames.saturday,
            DaysNames.sunday,
          ],
        }),
      ]),
    }),
};
