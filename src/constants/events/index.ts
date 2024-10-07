import { socialLinksEvents } from "./socialLinks";
import { specialEvents } from "./specialEvents";
import { pcPrograms } from "./pcPrograms";

import {
  statsEventsAcademics,
  statsEventsCourage,
  statsEventsCharm,
} from "./stats";

import { allEventsNames, Categories, Times, Event } from "./types";

const events: { [key in allEventsNames]: Event } = {
  ...socialLinksEvents,
  ...specialEvents,
  ...pcPrograms,
  ...statsEventsAcademics,
  ...statsEventsCourage,
  ...statsEventsCharm,
};

export { Categories, Times, events };
