import { EventCard, WideEvent } from "@/components";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

export const august: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 7, 1),
    activities: [
      { ...events.Special },
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 2),
    isDayOff: true,
    activities: [
      { ...events.Special },
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 3),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 4),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 5),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 6),
    foolMoon: true,
    isDayOff: true,
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Chariot and Justice Boss Fight" place="Tartarus" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 7),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      events.Death,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 8),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 9),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 10),
    isDayOff: true,
    activities: [events.summerSchool],
  }),
  new SingleDay({
    date: new Date(2009, 7, 11),
    isDayOff: true,
    activities: [events.summerSchool],
  }),
  new SingleDay({
    date: new Date(2009, 7, 12),
    isDayOff: true,
    activities: [events.summerSchool],
  }),
  new SingleDay({
    date: new Date(2009, 7, 13),
    isDayOff: true,
    activities: [events.summerSchool],
  }),
  new SingleDay({
    date: new Date(2009, 7, 14),
    isDayOff: true,
    activities: [events.summerSchool],
  }),
  new SingleDay({
    date: new Date(2009, 7, 15),
    isDayOff: true,
    activities: [
      { ...events.summerSchool, time: Times.Day },
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 16),
    isDayOff: true,
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
  new SingleDay({
    date: new Date(2009, 7, 17),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 18),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 19),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 20),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 21),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 22),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 23),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 24),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 25),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 26),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 27),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 28),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 29),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 30),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 31),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
];
