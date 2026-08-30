import { AprilPCProgramEvents } from './models/april';
import { SecuritySiteNotePCEvent, LobbyPCProgramsJulyNames } from './models/july';
import { RevengeSiteNotePCEvent, LobbyPCProgramsJuneNames } from './models/june';
import { LobbyPCProgramsNovemberNames, NinjaFansiteNoteEvent } from './models/november';
import { OctoberPCProgramEvents } from './models/october';
import { SeptemberPCProgramEvents } from './models/september';

export const PCProgramEvents = {
  ...AprilPCProgramEvents,
  ...SeptemberPCProgramEvents,
  ...OctoberPCProgramEvents,
  [LobbyPCProgramsNovemberNames.ninjaFansiteNote]: NinjaFansiteNoteEvent,
  [LobbyPCProgramsJulyNames.securitySiteNote]: SecuritySiteNotePCEvent,
  [LobbyPCProgramsJuneNames.revengeSiteNote]: RevengeSiteNotePCEvent,
} as const;
