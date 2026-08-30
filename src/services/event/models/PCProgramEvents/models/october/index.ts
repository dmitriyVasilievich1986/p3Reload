import {
  LobbyPCTVeggieBlogNoteEvent,
  lobbyPCMentalInstructorEvent,
  lobbyPCImageMuscleTrainerEvent,
} from './models';
import { LobbyPCProgramsOctoberNames } from './types';

export {
  LobbyPCTVeggieBlogNoteEvent,
  lobbyPCMentalInstructorEvent,
  lobbyPCImageMuscleTrainerEvent,
};

export const OctoberPCProgramEvents = {
  [LobbyPCProgramsOctoberNames.lobbyPCTVeggieBlogNote]: LobbyPCTVeggieBlogNoteEvent,
  [LobbyPCProgramsOctoberNames.lobbyPCMentalInstructor]: lobbyPCMentalInstructorEvent,
  [LobbyPCProgramsOctoberNames.lobbyPCImageMuscleTrainer]: lobbyPCImageMuscleTrainerEvent,
};
