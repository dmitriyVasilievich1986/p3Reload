import { ShinjiroAragakiEpisodes } from "./ShinjiroAragakiEpisodes";
import { RyojiMochizukiEpisodes } from "./RyojiMochizukiEpisodes";
import { AkihikoSanadaEpisodes } from "./AkihikoSanadaEpisodes";
import { statsEventsAcademics } from "./statsEventsAcademics";
import { statsEventsCourage } from "./statsEventsCourage";
import { JunpeiIoriEpisodes } from "./JunpeiIoriEpisodes";
import { statsEventsCharm } from "./statsEventsCharm";
import { KoromaruEpisodes } from "./KoromaruEpisodes";
import { KenAmadaEpisodes } from "./KenAmadaEpisodes";
import { linkEvents } from "./socialLinksEvents";
import { specialEvents } from "./specialEvents";
import { pcPrograms } from "./pcPrograms";

import { allEventsNames, Categories, Times, Event } from "./types";

const events: { [key in allEventsNames]: Event } = {
  ...linkEvents,
  ...specialEvents,
  ...pcPrograms,
  ...statsEventsAcademics,
  ...statsEventsCourage,
  ...statsEventsCharm,
  ...JunpeiIoriEpisodes,
  ...AkihikoSanadaEpisodes,
  ...KoromaruEpisodes,
  ...KenAmadaEpisodes,
  ...RyojiMochizukiEpisodes,
  ...ShinjiroAragakiEpisodes,
};

export { Categories, Times, events };
