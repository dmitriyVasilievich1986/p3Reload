import { SpecialEventsNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { initialUpgrade } from "./base";

export const specialEvents: { [key in SpecialEventsNames]: Event } = {
  [SpecialEventsNames.DoNothing]: {
    ...initialUpgrade,
    name: SpecialEventsNames.DoNothing,
    category: Categories.Empty,
    available: ({ currentTime }) => currentTime !== Times.Morning,
    label: () => <EventCard head="Free Time" />,
  },
  [SpecialEventsNames.NoControl]: {
    ...initialUpgrade,
    special: true,
    name: SpecialEventsNames.NoControl,
    category: Categories.Empty,
    available: () => false,
    label: () => <EventCard head="Control Not Available" />,
  },
  [SpecialEventsNames.Special]: {
    ...initialUpgrade,
    name: SpecialEventsNames.Special,
    category: Categories.Special,
    special: true,
    available: () => false,
    label: () => <EventCard head="Special Event" />,
  },
  [SpecialEventsNames.Tartarus]: {
    ...initialUpgrade,
    name: SpecialEventsNames.Tartarus,
    category: Categories.Tartarus,
    available: ({ currentTime }) => currentTime !== Times.Morning,
    label: () => <EventCard head="Tartarus" />,
  },
  [SpecialEventsNames.Exams]: {
    ...initialUpgrade,
    name: SpecialEventsNames.Exams,
    category: Categories.Exams,
    special: true,
    available: () => false,
    label: () => <EventCard head="Exam" />,
  },
};
