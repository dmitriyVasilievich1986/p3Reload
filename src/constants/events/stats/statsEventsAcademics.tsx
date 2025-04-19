import { StatsRepresentation, StatsNames } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";

import {
  AvailableSingleTimeEventsIsIn,
  AvailableDaysNamesIsIn,
  AvailableStatGreater,
  AvailableTimesIsIn,
  AvailableDateIsIn,
  False_,
  And_,
} from "@/constants/availability/AvailableClass";

import { statsEventsAcademicsNames, Times, Event } from "../types";
import { StatsEvents } from "./statsClass";

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
  [statsEventsAcademicsNames.stayAwakeInClass]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 2)],
    name: statsEventsAcademicsNames.stayAwakeInClass,
    place: "Gekkoukan High School",
    time: Times.Morning,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Morning] }),
    ]),
  }),
  [statsEventsAcademicsNames.studyAtLibrary]: new StatsEvents({
    availability: new And_([new AvailableTimesIsIn({ times: [Times.Day] })]),
    stats: [new StatsRepresentation(StatsNames.Academics, 2)],
    name: statsEventsAcademicsNames.studyAtLibrary,
    place: "Gekkoukan High School",
  }),
  [statsEventsAcademicsNames.studyAtHome]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 2)],
    name: statsEventsAcademicsNames.studyAtHome,
    place: "Protagonist's Room",
    time: Times.Evening,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Evening] }),
    ]),
  }),
  [statsEventsAcademicsNames.summerSchool]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 3)],
    name: statsEventsAcademicsNames.summerSchool,
    availability: new And_([new False_()]),
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
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new AvailableDaysNamesIsIn({
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
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Day] }),
      new AvailableDaysNamesIsIn({
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
    availability: new And_([
      new AvailableStatGreater({ name: StatsNames.Charm, level: 2 }),
      new AvailableTimesIsIn({ times: [Times.Evening] }),
      new AvailableSingleTimeEventsIsIn({
        name: statsEventsAcademicsNames.wakatsuKitchen,
      }),
      new AvailableDaysNamesIsIn({
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
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
      new AvailableDaysNamesIsIn({
        days: [DaysNames.wednesday, DaysNames.saturday],
      }),
    ]),
  }),
  [statsEventsAcademicsNames.dormExamStudyingGroup]: new StatsEvents({
    stats: [new StatsRepresentation(StatsNames.Academics, 4)],
    name: statsEventsAcademicsNames.dormExamStudyingGroup,
    time: Times.Evening,
    place: "Dorm",
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Evening] }),
      new AvailableDateIsIn({
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
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Evening] }),
      new AvailableDateIsIn({
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
