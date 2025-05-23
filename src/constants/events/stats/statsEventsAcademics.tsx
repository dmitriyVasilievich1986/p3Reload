import { StatsRepresentation, StatsNames } from "@/constants/stats";
import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";

import { StatsEvents } from "@/constants/events/stats/statsClass";
import { EventClass } from "@/constants/events/EventClass";
import {
  statsEventsAcademicsNames,
  Categories,
  Times,
  Event,
} from "@/constants/events/types";

class WakatsuSingleEvent extends StatsEvents {
  upgrade(props: any) {
    const payload = super.upgrade(props);
    const days = [
      DaysNames.monday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.sunday,
    ];
    const isFirstTime =
      !props.currentDay.singleTimeEvents.includes(
        statsEventsAcademicsNames.wakatsuKitchen
      ) &&
      props.time === Times.Evening &&
      days.includes(props.currentDay.dayName);
    const singleTimeEvents = isFirstTime
      ? props.currentDay.singleTimeEvents
      : [
          ...props.currentDay.singleTimeEvents,
          statsEventsAcademicsNames.wakatsuKitchen,
        ];

    return {
      ...payload,
      singleTimeEvents,
    };
  }
}

export const statsEventsAcademics: {
  [key in statsEventsAcademicsNames]: Event;
} = {
  [statsEventsAcademicsNames.stayAwakeInClass]: new EventClass({
    availability: new availables.AvailableTimesIsIn({ times: [Times.Morning] }),
    stats: [new StatsRepresentation(StatsNames.Academics, 2)],
    name: statsEventsAcademicsNames.stayAwakeInClass,
    place: "Gekkoukan High School",
    category: Categories.Stats,
    time: Times.Morning,
  }),
  [statsEventsAcademicsNames.studyAtLibrary]: new StatsEvents({
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day] }),
      new availables.AvailableIsDayOff({ reverse: true }),
    ]),
    stats: [new StatsRepresentation(StatsNames.Academics, 2)],
    name: statsEventsAcademicsNames.studyAtLibrary,
    place: "Gekkoukan High School",
  }),
  [statsEventsAcademicsNames.quest75]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 2)],
    name: statsEventsAcademicsNames.quest75,
    availability: new availables.False_(),
    place: "Gekkoukan High School",
    time: Times.AfterSchool,
    special: true,
  }),
  [statsEventsAcademicsNames.studyAtHome]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 2)],
    name: statsEventsAcademicsNames.studyAtHome,
    place: "Protagonist's Room",
    time: Times.Evening,
    availability: new availables.Or_([
      new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
      new availables.AvailableIsDayOff(),
    ]),
  }),
  [statsEventsAcademicsNames.summerSchool]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 3)],
    name: statsEventsAcademicsNames.summerSchool,
    availability: new availables.False_(),
    place: "Gekkoukan High School",
    time: Times.WholeDay,
    special: true,
    wide: true,
  }),
  [statsEventsAcademicsNames.wakatsuKitchen]: new WakatsuSingleEvent({
    stats: [new StatsRepresentation(StatsNames.Academics, 3)],
    name: statsEventsAcademicsNames.wakatsuKitchen,
    place: "Iwatodai Strip Mall",
    time: Times.Evening,
    price: 680,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableDaysNamesIsIn({
        days: [
          DaysNames.monday,
          DaysNames.wednesday,
          DaysNames.thursday,
          DaysNames.friday,
          DaysNames.saturday,
          DaysNames.sunday,
        ],
      }),
    ]),
  }),
  [statsEventsAcademicsNames.cinemaTheaterAcademics]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 4)],
    name: statsEventsAcademicsNames.cinemaTheaterAcademics,
    place: "Port Island Station",
    price: 1_500,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day] }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.wednesday, DaysNames.saturday],
      }),
    ]),
  }),
  [statsEventsAcademicsNames.wakatsuKitchenSpecial]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 4)],
    name: statsEventsAcademicsNames.wakatsuKitchenSpecial,
    place: "Iwatodai Strip Mall",
    time: Times.Evening,
    price: 900,
    availability: new availables.And_([
      new availables.AvailableStatGreater({ name: StatsNames.Charm, level: 2 }),
      new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: statsEventsAcademicsNames.wakatsuKitchen,
      }),
      new availables.AvailableDaysNamesIsIn({
        days: [
          DaysNames.monday,
          DaysNames.thursday,
          DaysNames.friday,
          DaysNames.sunday,
        ],
      }),
    ]),
  }),
  [statsEventsAcademicsNames.gameParadeAcademics]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 4)],
    name: statsEventsAcademicsNames.gameParadeAcademics,
    place: "Paulownia Mall",
    time: Times.Evening,
    price: 3_000,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.wednesday, DaysNames.saturday],
      }),
    ]),
  }),
  [statsEventsAcademicsNames.dormExamStudyingGroup]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 4)],
    name: statsEventsAcademicsNames.dormExamStudyingGroup,
    time: Times.Evening,
    place: "Dorm",
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
      new availables.AvailableDateIsIn({
        date: [
          new Date(2009, 4, 15),
          new Date(2009, 4, 16),
          new Date(2009, 6, 9),
          new Date(2009, 6, 10),
          new Date(2009, 9, 8),
          new Date(2009, 9, 9),
          new Date(2009, 9, 11),
          new Date(2009, 11, 9),
          new Date(2009, 11, 11),
          new Date(2009, 11, 12),
        ],
      }),
    ]),
  }),
  [statsEventsAcademicsNames.dormExamStudyingTeam]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 5)],
    name: statsEventsAcademicsNames.dormExamStudyingTeam,
    time: Times.Evening,
    place: "Dorm",
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
      new availables.AvailableDateIsIn({
        date: [
          new Date(2009, 4, 17),
          new Date(2009, 6, 13),
          new Date(2009, 9, 12),
          new Date(2009, 11, 13),
        ],
      }),
    ]),
  }),
};
