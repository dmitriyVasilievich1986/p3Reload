import { LobbyPCProgramsAprilNames } from './models/april/types';
import { LobbyPCProgramsJulyNames } from './models/july/types';
import { LobbyPCProgramsJuneNames } from './models/june/types';
import { LobbyPCProgramsSeptemberNames } from './models/september/types';

export const PCProgrammEventsNames = {
  ...LobbyPCProgramsAprilNames,
  ...LobbyPCProgramsJulyNames,
  ...LobbyPCProgramsJuneNames,
  ...LobbyPCProgramsSeptemberNames,
} as const;

export type PCProgrammEventsNamesType =
  (typeof PCProgrammEventsNames)[keyof typeof PCProgrammEventsNames];
