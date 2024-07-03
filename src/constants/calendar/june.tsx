import { EventCard } from "../../components/eventCard";
import { baseCalendar } from "./baseFunctions";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const june: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 5, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.Special,
        label: () => (
          <EventCard head="Empress And Emperror Boss Fight" place="Tartarus" />
        ),
      },
      [Times.Day]: {
        ...events.Special,
        label: () => (
          <EventCard head="Empress And Emperror Boss Fight" place="Tartarus" />
        ),
      },
      [Times.Evening]: {
        ...events.Special,
        label: () => (
          <EventCard head="Empress And Emperror Boss Fight" place="Tartarus" />
        ),
      },
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
];
