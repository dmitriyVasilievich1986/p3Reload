import {
  type EpisodeSocialLinkNamesTypes,
  EpisodeSocialLinkNames,
} from '@services/stats/episodesStats';

import { AmadaEvent } from './models/Amada';
import { AragakiEvent } from './models/Aragaki';
import { IoriEvent } from './models/Iori';
import { KoromaruEvent } from './models/Koromaru';
import { MochizukiEvent } from './models/Mochizuki';
import { SanadaEvent } from './models/Sanada';

export { AmadaEvent, AragakiEvent, IoriEvent, KoromaruEvent, MochizukiEvent, SanadaEvent };

export const EpisodesEventModels = {
  [EpisodeSocialLinkNames.Amada]: AmadaEvent,
  [EpisodeSocialLinkNames.Aragaki]: AragakiEvent,
  [EpisodeSocialLinkNames.Iori]: IoriEvent,
  [EpisodeSocialLinkNames.Koromaru]: KoromaruEvent,
  [EpisodeSocialLinkNames.Mochizuki]: MochizukiEvent,
  [EpisodeSocialLinkNames.Sanada]: SanadaEvent,
} as const;

export type EpisodesEventModelsType = {
  [key in EpisodeSocialLinkNamesTypes]: (typeof EpisodesEventModels)[key];
};
