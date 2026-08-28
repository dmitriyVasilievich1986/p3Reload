import { LobbyPCProgramsAprilNames } from './models/april/types';
import { LobbyPCProgramsJulyNames } from './models/july/types';
import { LobbyPCProgramsJuneNames } from './models/june/types';
import { LobbyPCProgramsSeptemberNames } from './models/september/types';

export const PCProgramEventsNames = {
  ...LobbyPCProgramsAprilNames,
  ...LobbyPCProgramsJulyNames,
  ...LobbyPCProgramsJuneNames,
  ...LobbyPCProgramsSeptemberNames,
} as const;

export type PCProgramEventsNamesType =
  (typeof PCProgramEventsNames)[keyof typeof PCProgramEventsNames];
