import {
  AvailableTimesIsIn,
  AvailableDateIsIn,
  False_,
  And_,
} from "@/constants/availability/AvailableClass";

import { SpecialEventsNames, Categories, Times, Event } from "./types";
import { EventClass } from "./EventClass";

export const specialEvents: { [key in SpecialEventsNames]: Event } = {
  [SpecialEventsNames.DoNothing]: new EventClass({
    name: SpecialEventsNames.DoNothing,
    category: Categories.Empty,
    time: Times.Day,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Day, Times.Evening] }),
    ]),
  }),
  [SpecialEventsNames.Special]: new EventClass({
    name: SpecialEventsNames.Special,
    category: Categories.Special,
    availability: new False_(),
    time: Times.Day,
    special: true,
  }),
  [SpecialEventsNames.Exams]: new EventClass({
    name: SpecialEventsNames.Exams,
    category: Categories.Exams,
    availability: new False_(),
    time: Times.WholeDay,
    special: true,
  }),
  [SpecialEventsNames.Tartarus]: new EventClass({
    name: SpecialEventsNames.Tartarus,
    category: Categories.Tartarus,
    time: Times.Evening,
    availability: new And_([
      new AvailableTimesIsIn({ times: [Times.Evening] }),
      new AvailableDateIsIn({
        reverse: true,
        date: [
          new Date(2009, 4, 16),
          new Date(2009, 4, 17),
          new Date(2009, 4, 25),
          new Date(2009, 4, 30),
          new Date(2009, 5, 1),
          new Date(2009, 5, 9),
          new Date(2009, 5, 10),
          new Date(2009, 5, 11),
          new Date(2009, 5, 12),
          new Date(2009, 5, 21),
          new Date(2009, 5, 28),
          new Date(2009, 6, 8),
          new Date(2009, 6, 9),
          new Date(2009, 6, 10),
          new Date(2009, 6, 11),
          new Date(2009, 6, 12),
          new Date(2009, 6, 13),
          new Date(2009, 6, 19),
          new Date(2009, 6, 23),
          new Date(2009, 6, 29),
          new Date(2009, 7, 2),
          new Date(2009, 9, 5),
          new Date(2009, 9, 6),
          new Date(2009, 9, 12),
          new Date(2009, 10, 5),
          new Date(2009, 10, 20),
          new Date(2009, 10, 22),
          new Date(2009, 10, 30),
          new Date(2009, 11, 2),
          new Date(2009, 11, 3),
          new Date(2009, 11, 4),
          new Date(2009, 11, 5),
          new Date(2009, 11, 6),
          new Date(2009, 11, 7),
          new Date(2009, 11, 8),
          new Date(2009, 11, 9),
        ],
      }),
    ]),
  }),
};
