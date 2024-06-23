import EventCard from "../../components/eventCard/EventCard";
import { initialUpgrade } from "./base";
import React from "react";

export const specialEvents = {
  doNothing: {
    ...initialUpgrade,
    name: "doNothing",
    category: "empty",
    available: ({ currentTime }) => currentTime !== "morning",
    label: () => <EventCard head="Free Time" />,
  },
  noControl: {
    ...initialUpgrade,
    name: "noControl",
    category: "empty",
    available: () => false,
    label: () => <EventCard head="Control Not Available" />,
  },
  special: {
    ...initialUpgrade,
    name: "special",
    category: "special",
    special: true,
    available: () => false,
    label: () => <EventCard head="Special Event" />,
  },
  tartarus: {
    ...initialUpgrade,
    name: "tartarus",
    category: "Tartarus",
    available: ({ currentTime }) => currentTime !== "morning",
    label: () => <EventCard head="Tartarus" />,
  },
  exams: {
    ...initialUpgrade,
    name: "exams",
    category: "exams",
    special: true,
    available: () => false,
    label: () => <EventCard head="Exam" />,
  },
};
