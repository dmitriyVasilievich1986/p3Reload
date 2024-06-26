import { SocialLinksStatsArray, SocialLinkNames } from "../socialLinks/types";
import { CharStats } from "../stats/types";

export enum Categories {
  Tartarus = "Tartarus",
  Special = "Special",
  Links = "Links",
  Empty = "Empty",
  Exams = "Exams",
  Stats = "Stats",
}

export enum Times {
  Morning = "Morning",
  AfterSchool = "AfterSchool",
  Day = "Day",
  Evening = "Evening",
}

export enum SpecialEventsNames {
  DoNothing = "DoNothing",
  NoControl = "NoControl",
  Special = "Special",
  Tartarus = "Tartarus",
  Exams = "Exams",
}

export enum pcProgramsNames {
  lobbyPCLessonsInEtiquette = "lobbyPCLessonsInEtiquette",
  lobbyPCDigitalCramSchool = "lobbyPCDigitalCramSchool",
  lobbyPCLanguageMadeEasy = "lobbyPCLanguageMadeEasy",
  lobbyPCAnimalOthello = "lobbyPCAnimalOthello",
  lobbyPCVirtualDiet = "lobbyPCVirtualDiet",
  lobbyPCTypinGhoul = "lobbyPCTypinGhoul",
}

export enum statsEventsAcademicsNames {
  cinemaTheaterAcademics = "cinemaTheaterAcademics",
  wakatsuKitchenSpecial = "wakatsuKitchenSpecial",
  dormExamStudyingGroup = "dormExamStudyingGroup",
  dormExamStudyingTeam = "dormExamStudyingTeam",
  gameParadeAcademics = "gameParadeAcademics",
  stayAwakeInClass = "stayAwakeInClass",
  studyAtLibrary = "studyAtLibrary",
  wakatsuKitchen = "wakatsuKitchen",
  studyAtHome = "studyAtHome",
}

export enum statsEventsCharmNames {
  chagallCafePartTimeWork = "chagallCafePartTimeWork",
  hagakureRamenSpecial = "hagakureRamenSpecial",
  schoolQuestionCharm = "schoolQuestionCharm",
  cinemaTheaterCharm = "cinemaTheaterCharm",
  chagallCafeCharm = "chagallCafeCharm",
  gameParadeCharm = "gameParadeCharm",
  hagakureRamen = "hagakureRamen",
  beBlueV = "beBlueV",
}
export enum statsEventsCourageNames {
  wilduckBurgeWeekendWilduckSet = "wilduckBurgeWeekendWilduckSet",
  wilduckBurgeMysteryBurger = "wilduckBurgeMysteryBurger",
  cinemaTheaterCourage = "cinemaTheaterCourage",
  gameParadeCourage = "gameParadeCourage",
  sleepDuringClass = "sleepDuringClass",
  drinkMedicine = "drinkMedicine",
  Mandragora = "Mandragora",
}
export enum socialLinkRomanceNames {
  PriestessRomance = "PriestessRomance",
  StrengthRomance = "StrengthRomance",
  EmpressRomance = "EmpressRomance",
  JusticeRomance = "JusticeRomance",
  LoversRomance = "LoversRomance",
  AeonRomance = "AeonRomance",
}

type availableProps = {
  currentLinks: SocialLinksStatsArray;
  currentStats: CharStats;
  currentTime: Times;
  currentDate: Date;
  previousDay: any;
  singleTimeEvents: (
    | SpecialEventsNames
    | pcProgramsNames
    | statsEventsAcademicsNames
    | statsEventsCharmNames
    | statsEventsCourageNames
    | SocialLinkNames
    | socialLinkRomanceNames
  )[];
};

export type upgradeProps = {
  currentLinks: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  currentStats: CharStats;
  weekAgoStats: CharStats;
  singleTimeEvents: (
    | SpecialEventsNames
    | pcProgramsNames
    | statsEventsAcademicsNames
    | statsEventsCharmNames
    | statsEventsCourageNames
    | SocialLinkNames
    | socialLinkRomanceNames
  )[];
};

export type upgradeResponse = {
  stats?: CharStats;
  links?: SocialLinksStatsArray;
  singleTimeEvents?: (
    | SpecialEventsNames
    | pcProgramsNames
    | statsEventsAcademicsNames
    | statsEventsCharmNames
    | statsEventsCourageNames
    | SocialLinkNames
    | socialLinkRomanceNames
  )[];
};

export type Event = {
  category: Categories;
  special?: boolean;
  upgrade: (props: upgradeProps) => upgradeResponse;
  available: (props: availableProps) => boolean;
  label: () => React.ReactNode;
  name:
    | SpecialEventsNames
    | pcProgramsNames
    | statsEventsAcademicsNames
    | statsEventsCharmNames
    | statsEventsCourageNames
    | SocialLinkNames
    | socialLinkRomanceNames;
};
