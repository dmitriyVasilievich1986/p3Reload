import { SingleDay } from "@/constants/calendar/SingleDay";
import { EventCard } from "@/components";

import {
  SpecialEventsNames,
  upgradeResponse,
  Categories,
  Times,
  Event,
} from "./types";

function SpecialEventCard(this: Event) {
  return <EventCard head={this.name} />;
}

const initialUpgrade = {
  upgrade: function ({
    currentDay,
  }: {
    currentDay: SingleDay;
  }): upgradeResponse {
    return { ...currentDay };
  },
};

export const specialEvents: { [key in SpecialEventsNames]: Event } = {
  [SpecialEventsNames.DoNothing]: {
    ...initialUpgrade,
    time: Times.Day,
    name: SpecialEventsNames.DoNothing,
    category: Categories.Empty,
    available: ({ time }) => time !== Times.Morning,
    label: SpecialEventCard,
  },
  [SpecialEventsNames.NoControl]: {
    ...initialUpgrade,
    time: Times.Morning,
    special: true,
    name: SpecialEventsNames.NoControl,
    category: Categories.Empty,
    available: () => false,
    label: SpecialEventCard,
  },
  [SpecialEventsNames.Special]: {
    ...initialUpgrade,
    time: Times.Day,
    name: SpecialEventsNames.Special,
    category: Categories.Special,
    special: true,
    available: () => false,
    label: SpecialEventCard,
  },
  [SpecialEventsNames.Tartarus]: {
    ...initialUpgrade,
    time: Times.Evening,
    name: SpecialEventsNames.Tartarus,
    category: Categories.Tartarus,
    available: function ({ currentDay, time }) {
      const exceptions: number[] = [
        new Date(2009, 9, 5).getTime(),
        new Date(2009, 9, 6).getTime(),
        new Date(2009, 9, 12).getTime(),
        new Date(2009, 10, 5).getTime(),
        new Date(2009, 10, 20).getTime(),
        new Date(2009, 10, 22).getTime(),
        new Date(2009, 10, 30).getTime(),
        new Date(2009, 11, 2).getTime(),
        new Date(2009, 11, 3).getTime(),
        new Date(2009, 11, 4).getTime(),
        new Date(2009, 11, 5).getTime(),
        new Date(2009, 11, 6).getTime(),
        new Date(2009, 11, 7).getTime(),
        new Date(2009, 11, 8).getTime(),
        new Date(2009, 11, 9).getTime(),
      ];
      return (
        time === Times.Evening &&
        !exceptions.includes(currentDay.date.getTime())
      );
    },
    label: SpecialEventCard,
  },
  [SpecialEventsNames.Exams]: {
    ...initialUpgrade,
    time: Times.WholeDay,
    name: SpecialEventsNames.Exams,
    category: Categories.Exams,
    special: true,
    available: () => false,
    label: SpecialEventCard,
  },
};
