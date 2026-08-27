import { AprilPCProgrammEvents } from './models/april';
import { SecuritySiteNotePCEvent, LobbyPCProgramsJulyNames } from './models/july';
import { RevengeSiteNotePCEvent, LobbyPCProgramsJuneNames } from './models/june';
import { SeptemberPCProgrammEvents } from './models/september';

export const PCProgrammEvents = {
  ...AprilPCProgrammEvents,
  ...SeptemberPCProgrammEvents,
  [LobbyPCProgramsJulyNames.securitySiteNote]: SecuritySiteNotePCEvent,
  [LobbyPCProgramsJuneNames.revengeSiteNote]: RevengeSiteNotePCEvent,
} as const;
