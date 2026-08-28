/**
 * Lobby PC Programs april models.
 */

import {
  AnimalOthelloPCEvent,
  TypinGhoulPCEvent,
  VirtualDietPCEvent,
  LanguageMadeEasyPCEvent,
  LessonsInEtiquettePCEvent,
  DigitalCramSchoolPCEvent,
  IwatodaiForumNoteEvent,
  MindfulBootCampPCEvent,
  MuscleBootCampPCEvent,
  UmiushiFanBookPCEvent,
  SchoolXSiteNotePCEvent,
} from './models';
import { LobbyPCProgramsAprilNames } from './types';

export {
  AnimalOthelloPCEvent,
  TypinGhoulPCEvent,
  VirtualDietPCEvent,
  LanguageMadeEasyPCEvent,
  LessonsInEtiquettePCEvent,
  DigitalCramSchoolPCEvent,
  IwatodaiForumNoteEvent,
  MindfulBootCampPCEvent,
  MuscleBootCampPCEvent,
  UmiushiFanBookPCEvent,
  SchoolXSiteNotePCEvent,
};

export const AprilPCProgramEvents = {
  [LobbyPCProgramsAprilNames.animalOthello]: AnimalOthelloPCEvent,
  [LobbyPCProgramsAprilNames.typinGhoul]: TypinGhoulPCEvent,
  [LobbyPCProgramsAprilNames.virtualDiet]: VirtualDietPCEvent,
  [LobbyPCProgramsAprilNames.languageMadeEasy]: LanguageMadeEasyPCEvent,
  [LobbyPCProgramsAprilNames.lessonsInEtiquette]: LessonsInEtiquettePCEvent,
  [LobbyPCProgramsAprilNames.digitalCramSchool]: DigitalCramSchoolPCEvent,
  [LobbyPCProgramsAprilNames.iwatodaiForumNote]: IwatodaiForumNoteEvent,
  [LobbyPCProgramsAprilNames.mindfulBootCamp]: MindfulBootCampPCEvent,
  [LobbyPCProgramsAprilNames.muscleBootCamp]: MuscleBootCampPCEvent,
  [LobbyPCProgramsAprilNames.umiushiFanBook]: UmiushiFanBookPCEvent,
  [LobbyPCProgramsAprilNames.schoolXSiteNote]: SchoolXSiteNotePCEvent,
};
