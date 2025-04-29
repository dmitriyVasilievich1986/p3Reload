import { AvailabilityType } from "@/constants/availability/types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsRepresentation } from "@/constants/stats";
import { CharStats } from "@/constants/stats/types";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinksStatsArray,
  SocialLinkNames,
} from "@/constants/socialLinks/types";

export enum Categories {
  Prerequisits = "Prerequisits",
  Invitation = "Invitation",
  Tartarus = "Tartarus",
  Special = "Special",
  Links = "Links",
  Empty = "Empty",
  Exams = "Exams",
  Stats = "Stats",
}

export enum Times {
  Prerequisits = "Prerequisits",
  Morning = "Morning",
  AfterSchool = "After School",
  Day = "Day",
  EveningFreeTime = "Evening (Free Time)",
  Evening = "Evening",
  DarkHour = "Dark Hour",
  WholeDay = "Whole Day",
}

export enum SpecialEventsNames {
  Special = "Special Event",
  DoNothing = "Do Nothing",
  Tartarus = "Tartarus",
  Exams = "Exams",
  Notes = "Notes",
}

export enum PrerequisitsEventsNames {
  HierophantPrerequisit = "HierophantPrerequisit",
  HangedManPrerequisit = "HangedManPrerequisit",
  JusticePrerequisit1 = "JusticePrerequisit1",
  JusticePrerequisit2 = "JusticePrerequisit2",
  JusticePrerequisit3 = "JusticePrerequisit3",
  TowerPrerequisit = "TowerPrerequisit",
  MoonPrerequisit = "MoonPrerequisit",
}

export enum pcProgramsNames {
  lobbyPCAssassinWebsiteNote = 'Lobby PC ("Assassin Website Note")',
  lobbyPCLessonsInEtiquette = 'Lobby PC ("Lessons in Etiquette")',
  lobbyPCHistoryWebsiteNote = 'Lobby PC ("History Website Note")',
  lobbyPCImageMuscleTrainer = 'Lobby PC ("Image Muscle Trainer")',
  lobbyPCDigitalCramSchool = 'Lobby PC ("Digital Cram School")',
  lobbyPCIwatodaiForumNote = 'Lobby PC ("Iwatodai Forum Note")',
  lobbyPCLanguageMadeEasy = 'Lobby PC ("Language Made Easy")',
  lobbyPCSecuritySiteNote = 'Lobby PC ("Security Site Note")',
  lobbyPCSchoolXSiteNote = 'Lobby PC ("School X Site Note")',
  lobbyPCMindfulBootCamp = 'Lobby PC ("Mindful Boot Camp")',
  lobbyPCVeggieFarmerSim = 'Lobby PC ("Veggie Farmer Sim")',
  lobbyPCRevengeSiteNote = 'Lobby PC ("Revenge Site Note")',
  lobbyPCMentalInstructor = 'Lobby PC ("Mental Instructor")',
  lobbyPCTVeggieBlogNote = 'Lobby PC ("Veggie Blog Note")',
  lobbyPCMuscleBootCamp = 'Lobby PC ("Muscle Boot Camp")',
  lobbyPCUmiushiFanBook = 'Lobby PC ("Umiushi Fan Book")',
  lobbyPCAnimalOthello = 'Lobby PC ("Animal Othello")',
  ninjaFansiteNote = 'Lobby PC ("Ninja Fansite Note")',
  lobbyPCVirtualDiet = 'Lobby PC ("Virtual Diet")',
  lobbyPCTypinGhoul = 'Lobby PC ("Typin Ghoul")',
}

export enum statsEventsAcademicsNames {
  wakatsuKitchenSpecial = "Wakatsu Kitchen (Seafood Full Course)",
  wakatsuKitchen = "Wakatsu Kitchen (Prodigy Platter)",
  gameParadeAcademics = 'Game Parade (Play "You\'re the Answer")',
  cinemaTheaterAcademics = 'Cinema ("Unresolved Mysteries")',
  dormExamStudyingGroup = "Dorm exam studying (Group)",
  dormExamStudyingTeam = "Dorm exam studying (Team)",
  stayAwakeInClass = "Stay awake in class",
  studyAtLibrary = "Study at library",
  quest75 = "Elizabeth's Request #75",
  summerSchool = "Summer School",
  studyAtHome = "Study at home",
}

export enum statsEventsCharmNames {
  hagakureRamenSpecial = "Hagakure Ramen (Special Hagakure Bowl)",
  hagakureRamen = "Hagakure Ramen (Pork Ramen)",
  gameParadeCharm = 'Game Parade (Play "High School of Youth")',
  // chagallCafePartTimeWork = "Chagall Cafe(Part-time work)",
  chagallCafeCharm = "Chagall Cafe (Pheromone Coffee)",
  cinemaTheaterCharm = 'Cinema ("Thy Name")',
  schoolQuestionCharm = "School Question",
  // beBlueV = "Be Blue V (Part-time work)",
}
export enum statsEventsCourageNames {
  wilduckBurgeWeekendWilduckSet = "Wilduck Burger (Weekend Wilduck Set)",
  wilduckBigEaterChallenge = "Wilduck Burger (Big Eater Challenge)",
  wilduckBurgeMysteryBurger = "Wilduck Burger (Mystery Burger)",
  gameParadeCourage = 'Game Parade (Play "House of the Deceased")',
  cinemaTheaterCourage = 'Cinema ("The School of No Wonder")',
  drinkMedicine = "Drink Mr. Edogawa's medicine",
  Mandragora = "Mandragora (Sing solo karaoke)",
  sleepDuringClass = "Sleep during class",
}
export enum socialLinkRomanceNames {
  PriestessRomance = "Priestess (Romance)",
  StrengthRomance = "Strength (Romance)",
  EmpressRomance = "Empress (Romance)",
  JusticeRomance = "Justice (Romance)",
  LoversRomance = "Lovers (Romance)",
  AeonRomance = "Aeon (Romance)",
}

const allNames = {
  ...SpecialEventsNames,
  ...pcProgramsNames,
  ...statsEventsAcademicsNames,
  ...statsEventsCharmNames,
  ...statsEventsCourageNames,
  ...SocialLinkNames,
  ...socialLinkRomanceNames,
  ...PrerequisitsEventsNames,
};

export type allEventsNames = (typeof allNames)[keyof typeof allNames];

export type upgradeResponse = {
  stats?: CharStats;
  links?: SocialLinksStatsArray;
  singleTimeEvents?: allEventsNames[];
};

export type LabelProps = {
  previousDay: SingleDay;
  currentDay: SingleDay;
  fullCard?: boolean;
};

export type Event = {
  time: Times;
  special?: boolean;
  name: allEventsNames;
  category: Categories;
  linkName?: SocialLinkNames;
  label: (props: SocialLinkElementProps) => React.ReactNode;
  available: (props: SocialLinkAvailableProps) => boolean;
  upgrade: (
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) => upgradeResponse;
};

export type eventProps = {
  availability: AvailabilityType;
  category: Categories;
  name: allEventsNames;
  time: Times;
  stats?: (StatsRepresentation | string)[];
  special?: boolean;
  place?: string;
  price?: number;
  wide?: boolean;
};
