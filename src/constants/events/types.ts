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

export enum RyojiMochizukiEpisodesNames {
  RyojiMochizuki1 = "RyojiMochizuki1",
  RyojiMochizuki2 = "RyojiMochizuki2",
  RyojiMochizuki3 = "RyojiMochizuki3",
  RyojiMochizuki4 = "RyojiMochizuki4",
  RyojiMochizuki5 = "RyojiMochizuki5",
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
  summerSchool = "summerSchool",
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
  wilduckBigEaterChallenge = "wilduckBigEaterChallenge",
  cinemaTheaterCourage = "cinemaTheaterCourage",
  gameParadeCourage = "gameParadeCourage",
  sleepDuringClass = "sleepDuringClass",
  drinkMedicine = "drinkMedicine",
  Mandragora = "Mandragora",
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
};

export type allEventsNames = (typeof allNames)[keyof typeof allNames];

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
  special?: boolean;
  name: allEventsNames;
  category: Categories;
  linkName?: SocialLinkNames;
  upgrade: (currentDay: SingleDay, previousWeek?: SingleDay) => upgradeResponse;
  label: (props: LabelProps) => React.ReactNode;
  available: (props: {
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) => boolean;
};
