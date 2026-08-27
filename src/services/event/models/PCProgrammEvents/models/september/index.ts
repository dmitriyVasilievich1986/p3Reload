/**
 * September lobby PC programs models.
 */

import {
  VeggieFarmerSimPCEvent,
  HistoryWebsiteNotePCEvent,
  AssassinWebsiteNotePCEvent,
} from './models';
import { LobbyPCProgramsSeptemberNames } from './types';

export {
  VeggieFarmerSimPCEvent,
  HistoryWebsiteNotePCEvent,
  AssassinWebsiteNotePCEvent,
  LobbyPCProgramsSeptemberNames,
};

export const SeptemberPCProgrammEvents = {
  [LobbyPCProgramsSeptemberNames.veggieFarmerSim]: VeggieFarmerSimPCEvent,
  [LobbyPCProgramsSeptemberNames.historyWebsiteNote]: HistoryWebsiteNotePCEvent,
  [LobbyPCProgramsSeptemberNames.assassinWebsiteNote]: AssassinWebsiteNotePCEvent,
} as const;
