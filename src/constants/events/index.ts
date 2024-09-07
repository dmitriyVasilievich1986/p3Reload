import { ShinjiroAragakiEpisodes } from "./ShinjiroAragakiEpisodes";
import { statsEventsAcademics } from "./statsEventsAcademics";
import { statsEventsCourage } from "./statsEventsCourage";
import { JunpeiIoriEpisodes } from "./JunpeiIoriEpisodes";
import { socialLinksEvents } from "./socialLinksEvents";
import { statsEventsCharm } from "./statsEventsCharm";
import { specialEvents } from "./specialEvents";
import { pcPrograms } from "./pcPrograms";

import { allEventsNames, Categories, Times, Event } from "./types";

const events: { [key in allEventsNames]: Event } = {
  ...socialLinksEvents,
  ...specialEvents,
  ...pcPrograms,
  ...statsEventsAcademics,
  ...statsEventsCourage,
  ...statsEventsCharm,
  ...JunpeiIoriEpisodes,
  ...ShinjiroAragakiEpisodes,
};

export { Categories, Times, events };
