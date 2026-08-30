import { LobbyPCProgramsAprilNames } from './models/april/types';
import { LobbyPCProgramsJulyNames } from './models/july/types';
import { LobbyPCProgramsJuneNames } from './models/june/types';
import { LobbyPCProgramsNovemberNames } from './models/november/types';
import { LobbyPCProgramsOctoberNames } from './models/october/types';
import { LobbyPCProgramsSeptemberNames } from './models/september/types';

export const PCProgramEventsNames = {
  ...LobbyPCProgramsAprilNames,
  ...LobbyPCProgramsJulyNames,
  ...LobbyPCProgramsJuneNames,
  ...LobbyPCProgramsSeptemberNames,
  ...LobbyPCProgramsOctoberNames,
  ...LobbyPCProgramsNovemberNames,
} as const;

export type PCProgramEventsNamesType =
  (typeof PCProgramEventsNames)[keyof typeof PCProgramEventsNames];
