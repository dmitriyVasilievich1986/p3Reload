import { AkihikoSanadaEpisodes } from "./AkihikoSanadaEpisodes";
import { statsEventsAcademics } from "./statsEventsAcademics";
import { statsEventsCourage } from "./statsEventsCourage";
import { JunpeiIoriEpisodes } from "./JunpeiIoriEpisodes";
import { statsEventsCharm } from "./statsEventsCharm";
import { specialEvents } from "./specialEvents";
import { pcPrograms } from "./pcPrograms";
import { linkEvents } from "./linkEvents";

export const events = {
  ...linkEvents,
  ...specialEvents,
  ...pcPrograms,
  ...statsEventsAcademics,
  ...statsEventsCourage,
  ...statsEventsCharm,
  ...JunpeiIoriEpisodes,
  ...AkihikoSanadaEpisodes,
};
