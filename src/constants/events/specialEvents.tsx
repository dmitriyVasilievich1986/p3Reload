import { SpecialEventsNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { initialUpgrade } from "./base";

export const specialEvents: { [key in SpecialEventsNames]: Event } = {
  [SpecialEventsNames.DoNothing]: {
    ...initialUpgrade,
    time: Times.Day,
    name: SpecialEventsNames.DoNothing,
    category: Categories.Empty,
    available: ({ currentTime }) => currentTime !== Times.Morning,
    label: () => <EventCard head="Free Time" />,
  },
  [SpecialEventsNames.NoControl]: {
    ...initialUpgrade,
    time: Times.Morning,
    special: true,
    name: SpecialEventsNames.NoControl,
    category: Categories.Empty,
    available: () => false,
    label: () => <EventCard head="Control Not Available" />,
  },
  [SpecialEventsNames.Special]: {
    ...initialUpgrade,
    time: Times.Day,
    name: SpecialEventsNames.Special,
    category: Categories.Special,
    special: true,
    available: () => false,
    label: () => <EventCard head="Special Event" />,
  },
  [SpecialEventsNames.Tartarus]: {
    ...initialUpgrade,
    time: Times.Evening,
    name: SpecialEventsNames.Tartarus,
    category: Categories.Tartarus,
    available: ({ currentTime }) => currentTime !== Times.Morning,
    label: () => <EventCard head="Tartarus" />,
  },
  [SpecialEventsNames.Exams]: {
    ...initialUpgrade,
    time: Times.WholeDay,
    name: SpecialEventsNames.Exams,
    category: Categories.Exams,
    special: true,
    available: () => false,
    label: () => <EventCard head="Exam" />,
  },
};
