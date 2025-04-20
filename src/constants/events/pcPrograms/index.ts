import { StatsRepresentation, StatsNames } from "@/constants/stats";

import availables from "@/constants/availability/AvailableClass";
import { pcProgramSuspicious, pcProgram } from "./pcProgramClass";
import { pcProgramsNames, Event, Times } from "../types";

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
  [pcProgramsNames.lobbyPCVeggieFarmerSim]: new pcProgram({
    stats: ["More vegetables when harvesting rooftop planters"],
    name: pcProgramsNames.lobbyPCVeggieFarmerSim,
    startDate: new Date(2009, 8, 6),
    price: 4_500,
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
  [pcProgramsNames.lobbyPCSecuritySiteNote]: new pcProgramSuspicious({
    name: pcProgramsNames.lobbyPCSecuritySiteNote,
    stats: ["Unlocks Ambush ability"],
    startDate: new Date(2009, 7, 9),
    price: 12_000,
  }),
  [pcProgramsNames.lobbyPCHistoryWebsiteNote]: new pcProgramSuspicious({
    stats: ["Ambushes add to Theurgy Gauge"],
    name: pcProgramsNames.lobbyPCHistoryWebsiteNote,
    price: 8_000,
    availability: new availables.And_([
      new availables.AvailableSingleTimeEventsIsIn({
        name: pcProgramsNames.lobbyPCSecuritySiteNote,
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: pcProgramsNames.lobbyPCHistoryWebsiteNote,
        reverse: true,
      }),
      new availables.AvailableDateGreater({ date: new Date(2009, 8, 10) }),
      new availables.Or_([
        new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
        new availables.AvailableIsDayOff(),
      ]),
    ]),
  }),
  [pcProgramsNames.lobbyPCAssassinWebsiteNote]: new pcProgramSuspicious({
    stats: [
      "Ambush is guaranteed to Distress at least one Shadow (when Distress is possible)",
    ],
    name: pcProgramsNames.lobbyPCAssassinWebsiteNote,
    price: 8_000,
    availability: new availables.And_([
      new availables.AvailableSingleTimeEventsIsIn({
        name: pcProgramsNames.lobbyPCSecuritySiteNote,
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: pcProgramsNames.lobbyPCAssassinWebsiteNote,
        reverse: true,
      }),
      new availables.AvailableDateGreater({ date: new Date(2009, 8, 10) }),
      new availables.Or_([
        new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
        new availables.AvailableIsDayOff(),
      ]),
    ]),
  }),
  [pcProgramsNames.ninjaFansiteNote]: new pcProgramSuspicious({
    stats: ["Ambush requires 1 second of dashing"],
    name: pcProgramsNames.ninjaFansiteNote,
    price: 12_000,
    availability: new availables.And_([
      new availables.AvailableSingleTimeEventsIsIn({
        name: pcProgramsNames.lobbyPCSecuritySiteNote,
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: pcProgramsNames.ninjaFansiteNote,
        reverse: true,
      }),
      new availables.AvailableDateGreater({ date: new Date(2009, 10, 5) }),
      new availables.Or_([
        new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
        new availables.AvailableIsDayOff(),
      ]),
    ]),
  }),
};
