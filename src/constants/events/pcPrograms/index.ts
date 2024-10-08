import { StatsRepresentation, StatsNames } from "@/constants/stats";

import { pcProgramSuspicious, pcProgram } from "./pcProgramClass";
import { pcProgramsNames, Event } from "../types";

export const pcPrograms: { [key in pcProgramsNames]: Event } = {
  [pcProgramsNames.lobbyPCDigitalCramSchool]: new pcProgram({
    stats: [new StatsRepresentation(StatsNames.Academics, 4)],
    name: pcProgramsNames.lobbyPCDigitalCramSchool,
  }),
  [pcProgramsNames.lobbyPCLanguageMadeEasy]: new pcProgram({
    stats: [new StatsRepresentation(StatsNames.Academics, 4)],
    name: pcProgramsNames.lobbyPCLanguageMadeEasy,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCAnimalOthello]: new pcProgram({
    stats: [new StatsRepresentation(StatsNames.Courage, 4)],
    name: pcProgramsNames.lobbyPCAnimalOthello,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCTypinGhoul]: new pcProgram({
    stats: [new StatsRepresentation(StatsNames.Courage, 4)],
    name: pcProgramsNames.lobbyPCTypinGhoul,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCLessonsInEtiquette]: new pcProgram({
    stats: [new StatsRepresentation(StatsNames.Charm, 4)],
    name: pcProgramsNames.lobbyPCLessonsInEtiquette,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCVirtualDiet]: new pcProgram({
    stats: [new StatsRepresentation(StatsNames.Charm, 4)],
    name: pcProgramsNames.lobbyPCVirtualDiet,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCMindfulBootCamp]: new pcProgram({
    name: pcProgramsNames.lobbyPCMindfulBootCamp,
    stats: ["Max SP Boost"],
    price: 2_000,
  }),
  [pcProgramsNames.lobbyPCMuscleBootCamp]: new pcProgram({
    name: pcProgramsNames.lobbyPCMuscleBootCamp,
    stats: ["Max HP Boost"],
    price: 2_000,
  }),
  [pcProgramsNames.lobbyPCUmiushiFanBook]: new pcProgram({
    name: pcProgramsNames.lobbyPCUmiushiFanBook,
    stats: ["Access to Umiushi Beef Bowls"],
    price: 450,
  }),
  [pcProgramsNames.lobbyPCSchoolXSiteNote]: new pcProgramSuspicious({
    name: pcProgramsNames.lobbyPCSchoolXSiteNote,
    stats: ["Lukewarm Taiyaki available"],
    price: 500,
  }),
  [pcProgramsNames.lobbyPCIwatodaiForumNote]: new pcProgramSuspicious({
    stats: ["More drinks in Iwatodai vending machine"],
    name: pcProgramsNames.lobbyPCIwatodaiForumNote,
    price: 500,
  }),
  [pcProgramsNames.ninjaFansiteNote]: new pcProgramSuspicious({
    stats: ["Ambush requires 1 second of dashing "],
    name: pcProgramsNames.ninjaFansiteNote,
    startDate: new Date(2009, 10, 5),
    price: 12_000,
  }),
};
