import { statsEventsAcademics } from "./statsEventsAcademics";
import { statsEventsCourage } from "./statsEventsCourage";
import { statsEventsCharm } from "./statsEventsCharm";
import { specialEvents } from "./specialEvents";
import { linkEvents } from "./linkEvents";
import { pcPrograms } from "./pcPrograms";

export const events = {
  ...statsEventsAcademics,
  ...statsEventsCourage,
  ...statsEventsCharm,
  ...specialEvents,
  ...linkEvents,
  ...pcPrograms,
};
