import { SocialLinkNames, Routes } from "@/constants/socialLinks/types";
import { socialLinkRomanceNames, Times, Event } from "./types";
import { SocialLinkEvent } from "./SocialLinkEventClass";

export const socialLinksEvents: {
  [key in socialLinkRomanceNames | SocialLinkNames]: Event;
} = {
  [SocialLinkNames.Sanada]: new SocialLinkEvent({
    name: SocialLinkNames.Sanada,
    time: Times.Evening,
  }),
  [SocialLinkNames.Koromaru]: new SocialLinkEvent({
    name: SocialLinkNames.Koromaru,
  }),
  [SocialLinkNames.Amada]: new SocialLinkEvent({
    name: SocialLinkNames.Amada,
    time: Times.Evening,
  }),
  [SocialLinkNames.Mochizuki]: new SocialLinkEvent({
    name: SocialLinkNames.Mochizuki,
  }),
  [SocialLinkNames.Iori]: new SocialLinkEvent({
    name: SocialLinkNames.Iori,
  }),
  [SocialLinkNames.Fool]: new SocialLinkEvent({
    name: SocialLinkNames.Fool,
    time: Times.DarkHour,
    special: true,
  }),
  [SocialLinkNames.Magician]: new SocialLinkEvent({
    name: SocialLinkNames.Magician,
  }),
  [SocialLinkNames.Priestess]: new SocialLinkEvent({
    name: SocialLinkNames.Priestess,
  }),
  [socialLinkRomanceNames.PriestessRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.PriestessRomance,
    linkName: SocialLinkNames.Priestess,
    romance: Routes.Romantic,
  }),
  [SocialLinkNames.Empress]: new SocialLinkEvent({
    name: SocialLinkNames.Empress,
  }),
  [socialLinkRomanceNames.EmpressRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.EmpressRomance,
    linkName: SocialLinkNames.Empress,
    romance: Routes.Romantic,
  }),
  [SocialLinkNames.Emperor]: new SocialLinkEvent({
    name: SocialLinkNames.Emperor,
  }),
  [SocialLinkNames.Hierophant]: new SocialLinkEvent({
    name: SocialLinkNames.Hierophant,
  }),
  [SocialLinkNames.Lovers]: new SocialLinkEvent({
    name: SocialLinkNames.Lovers,
  }),
  [socialLinkRomanceNames.LoversRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.LoversRomance,
    linkName: SocialLinkNames.Lovers,
    romance: Routes.Romantic,
  }),
  [SocialLinkNames.Chariot]: new SocialLinkEvent({
    name: SocialLinkNames.Chariot,
  }),
  [SocialLinkNames.Justice]: new SocialLinkEvent({
    name: SocialLinkNames.Justice,
  }),
  [socialLinkRomanceNames.JusticeRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.JusticeRomance,
    linkName: SocialLinkNames.Justice,
    romance: Routes.Romantic,
  }),
  [SocialLinkNames.Hermit]: new SocialLinkEvent({
    name: SocialLinkNames.Hermit,
  }),
  [SocialLinkNames.Fortune]: new SocialLinkEvent({
    name: SocialLinkNames.Fortune,
  }),
  [SocialLinkNames.Strength]: new SocialLinkEvent({
    name: SocialLinkNames.Strength,
  }),
  [socialLinkRomanceNames.StrengthRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.StrengthRomance,
    linkName: SocialLinkNames.Strength,
    romance: Routes.Romantic,
  }),
  [SocialLinkNames.HangedMan]: new SocialLinkEvent({
    name: SocialLinkNames.HangedMan,
  }),
  [SocialLinkNames.Death]: new SocialLinkEvent({
    name: SocialLinkNames.Death,
    time: Times.DarkHour,
    special: true,
  }),
  [SocialLinkNames.Temperance]: new SocialLinkEvent({
    name: SocialLinkNames.Temperance,
  }),
  [SocialLinkNames.Devil]: new SocialLinkEvent({
    name: SocialLinkNames.Devil,
    time: Times.Evening,
  }),
  [SocialLinkNames.Tower]: new SocialLinkEvent({
    name: SocialLinkNames.Tower,
    time: Times.Evening,
  }),
  [SocialLinkNames.Star]: new SocialLinkEvent({
    name: SocialLinkNames.Star,
  }),
  [SocialLinkNames.Moon]: new SocialLinkEvent({
    name: SocialLinkNames.Moon,
  }),
  [SocialLinkNames.Sun]: new SocialLinkEvent({
    name: SocialLinkNames.Sun,
  }),
  [SocialLinkNames.Aeon]: new SocialLinkEvent({
    name: SocialLinkNames.Aeon,
  }),
  [socialLinkRomanceNames.AeonRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.AeonRomance,
    linkName: SocialLinkNames.Aeon,
    romance: Routes.Romantic,
  }),
};
