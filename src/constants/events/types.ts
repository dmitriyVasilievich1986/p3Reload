import { SocialLinksStatsArray, SocialLinkNames } from "../socialLinks/types";
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
  Evening = "Evening",
  DarkHour = "Dark Hour",
  WholeDay = "Whole Day",
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

export enum JunpeiIoriEpisodesNames {
  JunpeiIori1 = "JunpeiIori1",
  JunpeiIori2 = "JunpeiIori2",
  JunpeiIori3 = "JunpeiIori3",
  JunpeiIori35 = "JunpeiIori35",
  JunpeiIori4 = "JunpeiIori4",
  JunpeiIori5 = "JunpeiIori5",
}

export enum ShinjiroAragakiEpisodesNames {
  ShinjiroAragaki1 = "ShinjiroAragaki1",
  ShinjiroAragaki2 = "ShinjiroAragaki2",
  ShinjiroAragaki3 = "ShinjiroAragaki3",
  ShinjiroAragaki35 = "ShinjiroAragaki35",
  ShinjiroAragaki4 = "ShinjiroAragaki4",
  ShinjiroAragaki5 = "ShinjiroAragaki5",
}

export enum AkihikoSanadaEpisodesNames {
  AkihikoSanada1 = "AkihikoSanada1",
  AkihikoSanada2 = "AkihikoSanada2",
  AkihikoSanada3 = "AkihikoSanada3",
  AkihikoSanada4 = "AkihikoSanada4",
  AkihikoSanada5 = "AkihikoSanada5",
}

export enum KoromaruEpisodesNames {
  Koromaru1 = "Koromaru1",
  Koromaru2 = "Koromaru2",
  Koromaru3 = "Koromaru3",
  Koromaru4 = "Koromaru4",
  Koromaru5 = "Koromaru5",
}

export enum KenAmadaEpisodesNames {
  KenAmada1 = "KenAmada1",
  KenAmada2 = "KenAmada2",
  KenAmada3 = "KenAmada3",
  KenAmada4 = "KenAmada4",
  KenAmada5 = "KenAmada5",
}

export enum statsEventsAcademicsNames {
  cinemaTheaterAcademics = "cinemaTheaterAcademics",
  wakatsuKitchenSpecial = "wakatsuKitchenSpecial",
  dormExamStudyingGroup = "dormExamStudyingGroup",
  dormExamStudyingTeam = "dormExamStudyingTeam",
  gameParadeAcademics = "gameParadeAcademics",
  wakatsuKitchenDay = "wakatsuKitchenDay",
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

export enum socialLinkInvitationNames {
  TemperanceInvitation = "TemperanceInvitation",
  PriestessInvitation = "PriestessInvitation",
  MagicianInvitation = "MagicianInvitation",
  StrengthInvitation = "StrengthInvitation",
  JusticeInvitation = "JusticeInvitation",
  ChariotInvitation = "ChariotInvitation",
  FortuneInvitation = "FortuneInvitation",
  EmpressInvitation = "EmpressInvitation",
  LoversInvitation = "LoversInvitation",
}

const allNames = {
  ...SpecialEventsNames,
  ...pcProgramsNames,
  ...JunpeiIoriEpisodesNames,
  ...AkihikoSanadaEpisodesNames,
  ...KoromaruEpisodesNames,
  ...KenAmadaEpisodesNames,
  ...ShinjiroAragakiEpisodesNames,
  ...statsEventsAcademicsNames,
  ...statsEventsCharmNames,
  ...statsEventsCourageNames,
  ...SocialLinkNames,
  ...socialLinkRomanceNames,
  ...socialLinkInvitationNames,
};

export type allEventsNames = (typeof allNames)[keyof typeof allNames];

export type availableProps = {
  currentLinks: SocialLinksStatsArray;
  currentStats: CharStats;
  currentTime: Times;
  currentDate: Date;
  previousDay: any;
  singleTimeEvents: allEventsNames[];
};

export type upgradeProps = {
  currentLinks: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  currentStats: CharStats;
  weekAgoStats: CharStats;
  singleTimeEvents: allEventsNames[];
};

export type upgradeResponse = {
  stats?: CharStats;
  links?: SocialLinksStatsArray;
  singleTimeEvents?: allEventsNames[];
};

export type LabelProps = {
  stats?: CharStats;
  arcanes: SocialLinkNames[];
  links?: SocialLinksStatsArray;
};

export type Event = {
  time: Times;
  category: Categories;
  special?: boolean;
  upgrade: (props: upgradeProps) => upgradeResponse;
  available: (props: availableProps) => boolean;
  label: (props: LabelProps) => React.ReactNode;
  name: allEventsNames;
  linkName?: SocialLinkNames;
  _invitationsDates?: number[];
};
