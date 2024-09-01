import { SocialLinksStatsArray, SocialLinkNames } from "../socialLinks/types";
import { SingleDay } from "../calendar/SingleDay";
import { CharStats } from "../stats/types";

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

export enum AkihikoSanadaEpisodesNames {
  AkihikoSanada1 = "Akihiko Sanada (Episode 1)",
  AkihikoSanada2 = "Akihiko Sanada (Episode 2)",
  AkihikoSanada3 = "Akihiko Sanada (Episode 3)",
  AkihikoSanada4 = "Akihiko Sanada (Episode 4)",
  AkihikoSanada5 = "Akihiko Sanada (Episode 5)",
}

export enum KoromaruEpisodesNames {
  Koromaru1 = "Koromaru (Episode 1)",
  Koromaru2 = "Koromaru (Episode 2)",
  Koromaru3 = "Koromaru (Episode 3)",
  Koromaru4 = "Koromaru (Episode 4)",
  Koromaru5 = "Koromaru (Episode 5)",
}

export enum KenAmadaEpisodesNames {
  KenAmada1 = "KenAmada (Episode 1)",
  KenAmada2 = "KenAmada (Episode 2)",
  KenAmada3 = "KenAmada (Episode 3)",
  KenAmada4 = "KenAmada (Episode 4)",
  KenAmada5 = "KenAmada (Episode 5)",
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
  wakatsuKitchenDay = "Wakatsu Kitchen Day(Prodigy Platter)",
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

export enum socialLinkInvitationNames {
  TemperanceInvitation = "Temperance (Invitation)",
  PriestessInvitation = "Priestess (Invitation)",
  MagicianInvitation = "Magician (Invitation)",
  StrengthInvitation = "Strength (Invitation)",
  JusticeInvitation = "Justice (Invitation)",
  ChariotInvitation = "Chariot (Invitation)",
  FortuneInvitation = "Fortune (Invitation)",
  EmpressInvitation = "Empress (Invitation)",
  LoversInvitation = "Lovers (Invitation)",
}

export enum socialLinkSpendTimeNames {
  TowerSpendTime = "Tower (Spending Time)",
}

export enum socialLinkShrineNames {
  HierophantShrineTime = "Hierophant (Naganaki shrine)",
  TemperanceShrineTime = "Temperance (Naganaki shrine)",
  HangedManShrineTime = "Hanged Man (Naganaki shrine)",
  PriestessShrineTime = "Priestess (Naganaki shrine)",
  StrengthShrineTime = "Strength (Naganaki shrine)",
  MagicianShrineTime = "Magician (Naganaki shrine)",
  EmpressShrineTime = "Empress (Naganaki shrine)",
  ChariotShrineTime = "Chariot (Naganaki shrine)",
  EmperorShrineTime = "Emperor (Naganaki shrine)",
  FortuneShrineTime = "Fortune (Naganaki shrine)",
  JusticeShrineTime = "Justice (Naganaki shrine)",
  LoversShrineTime = "Lovers (Naganaki shrine)",
  HermitShrineTime = "Hermit (Naganaki shrine)",
  TowerShrineTime = "Tower (Naganaki shrine)",
  AeonShrineTime = "Aeon (Naganaki shrine)",
  MoonShrineTime = "Moon (Naganaki shrine)",
  StarShrineTime = "Star (Naganaki shrine)",
}

const allNames = {
  ...SpecialEventsNames,
  ...pcProgramsNames,
  ...JunpeiIoriEpisodesNames,
  ...AkihikoSanadaEpisodesNames,
  ...KoromaruEpisodesNames,
  ...KenAmadaEpisodesNames,
  ...RyojiMochizukiEpisodesNames,
  ...ShinjiroAragakiEpisodesNames,
  ...statsEventsAcademicsNames,
  ...statsEventsCharmNames,
  ...statsEventsCourageNames,
  ...SocialLinkNames,
  ...socialLinkRomanceNames,
  ...socialLinkInvitationNames,
  ...socialLinkSpendTimeNames,
  ...socialLinkShrineNames,
};

export type allEventsNames = (typeof allNames)[keyof typeof allNames];

export type upgradeResponse = {
  stats?: CharStats;
  links?: SocialLinksStatsArray;
  singleTimeEvents?: allEventsNames[];
};

export type LabelProps = {
  currentDay: SingleDay;
  fullCard?: boolean;
};

export type Event = {
  time: Times;
  special?: boolean;
  name: allEventsNames;
  category: Categories;
  linkName?: SocialLinkNames;
  label: (props: LabelProps) => React.ReactNode;
  upgrade: (props: {
    previousWeek?: SingleDay;
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) => upgradeResponse;
  available: (props: {
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) => boolean;
};
