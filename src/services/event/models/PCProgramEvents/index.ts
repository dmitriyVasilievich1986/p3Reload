import { AprilPCProgramEvents } from './models/april';
import { SecuritySiteNotePCEvent, LobbyPCProgramsJulyNames } from './models/july';
import { RevengeSiteNotePCEvent, LobbyPCProgramsJuneNames } from './models/june';
import { OctoberPCProgramEvents } from './models/october';
import { SeptemberPCProgramEvents } from './models/september';

export const PCProgramEvents = {
  ...AprilPCProgramEvents,
  ...SeptemberPCProgramEvents,
  ...OctoberPCProgramEvents,
  [LobbyPCProgramsJulyNames.securitySiteNote]: SecuritySiteNotePCEvent,
  [LobbyPCProgramsJuneNames.revengeSiteNote]: RevengeSiteNotePCEvent,
} as const;
