import { SingleDay } from "../calendar/SingleDay";
import { CharStats } from "../stats/types";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinksStatsArray,
  SocialLinkNames,
} from "../socialLinks/types";

export enum Categories {
  Invitation = "Invitation",
  Tartarus = "Tartarus",
  Special = "Special",
  Links = "Links",
  Empty = "Empty",
  Exams = "Exams",
  Stats = "Stats",
}

export enum Times {
  Morning = "Morning",
  AfterSchool = "After School",
  Day = "Day",
  EveningFreeTime = "Evening (Free Time)",
  Evening = "Evening",
  DarkHour = "Dark Hour",
  WholeDay = "Whole Day",
}

export enum SpecialEventsNames {
  DoNothing = "Do Nothing",
  NoControl = "No Control",
  Special = "Special Event",
  Tartarus = "Tartarus",
  Exams = "Exams",
}

export enum pcProgramsNames {
  lobbyPCLessonsInEtiquette = 'Lobby PC ("Lessons in Etiquette")',
  lobbyPCDigitalCramSchool = 'Lobby PC ("Digital Cram School")',
  lobbyPCLanguageMadeEasy = 'Lobby PC ("Language Made Easy")',
  lobbyPCAnimalOthello = 'Lobby PC ("Animal Othello")',
  lobbyPCVirtualDiet = 'Lobby PC ("Virtual Diet")',
  lobbyPCTypinGhoul = 'Lobby PC ("Typin Ghoul")',
}

export enum JunpeiIoriEpisodesNames {
  JunpeiIori1 = "Junpei Iori (Episode 1)",
  JunpeiIori2 = "Junpei Iori (Episode 2)",
  JunpeiIori3 = "Junpei Iori (Episode 3)",
  JunpeiIori35 = "Junpei Iori (Episode 3 extra)",
  JunpeiIori4 = "Junpei Iori (Episode 4)",
  JunpeiIori5 = "Junpei Iori (Episode 5)",
}

export enum ShinjiroAragakiEpisodesNames {
  ShinjiroAragaki1 = "Shinjiro Aragaki (Episode 1)",
  ShinjiroAragaki2 = "Shinjiro Aragaki (Episode 2)",
  ShinjiroAragaki3 = "Shinjiro Aragaki (Episode 3)",
  ShinjiroAragaki35 = "Shinjiro Aragaki (Episode 3 extra)",
  ShinjiroAragaki4 = "Shinjiro Aragaki (Episode 4)",
  ShinjiroAragaki5 = "Shinjiro Aragaki (Episode 5)",
}

export enum RyojiMochizukiEpisodesNames {
  RyojiMochizuki1 = "Ryoji Mochizuki (Episode 1)",
  RyojiMochizuki2 = "Ryoji Mochizuki (Episode 2)",
  RyojiMochizuki3 = "Ryoji Mochizuki (Episode 3)",
  RyojiMochizuki4 = "Ryoji Mochizuki (Episode 4)",
  RyojiMochizuki5 = "Ryoji Mochizuki (Episode 5)",
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
  summerSchool = "Summer School",
  studyAtHome = "Study at home",
}

export enum statsEventsCharmNames {
  hagakureRamenSpecial = "Hagakure Ramen (Special Hagakure Bowl)",
  hagakureRamen = "Hagakure Ramen (Pork Ramen)",
  gameParadeCharm = 'Game Parade (Play "High School of Youth")',
  chagallCafePartTimeWork = "Chagall Cafe(Part-time work)",
  chagallCafeCharm = "Chagall Cafe (Pheromone Coffee)",
  cinemaTheaterCharm = 'Cinema ("Thy Name")',
  schoolQuestionCharm = "School Question",
  beBlueV = "Be Blue V (Part-time work)",
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
  ...JunpeiIoriEpisodesNames,
  ...RyojiMochizukiEpisodesNames,
  ...ShinjiroAragakiEpisodesNames,
  ...statsEventsAcademicsNames,
  ...statsEventsCharmNames,
  ...statsEventsCourageNames,
  ...SocialLinkNames,
  ...socialLinkRomanceNames,
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
