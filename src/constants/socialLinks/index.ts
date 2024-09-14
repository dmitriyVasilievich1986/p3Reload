import { mainCharName } from "./classes/mainCharName";
import { SocialLink } from "./classes/SocialLink";
import { SocialLinkNames, Routes } from "./types";

import { Hierophant } from "./Hierophant";
import { Temperance } from "./Temperance";
import { Priestess } from "./Priestess";
import { HangedMan } from "./HangedMan";
import { Mochizuki } from "./Mochizuki";
import { Strength } from "./Strength";
import { Magician } from "./Magician";
import { Koromaru } from "./Koromaru";
import { Aragaki } from "./Aragaki";
import { Chariot } from "./Chariot";
import { Emperor } from "./Emperor";
import { Empress } from "./Empress";
import { Fortune } from "./Fortune";
import { Justice } from "./Justice";
import { Sanada } from "./Sanada";
import { Lovers } from "./Lovers";
import { Hermit } from "./Hermit";
import { Tower } from "./Tower";
import { Devil } from "./Devil";
import { Death } from "./Death";
import { Amada } from "./Amada";
import { Aeon } from "./Aeon";
import { Fool } from "./Fool";
import { Moon } from "./Moon";
import { Star } from "./Star";
import { Iori } from "./Iori";
import { Sun } from "./Sun";

const socialLinks: { [key in SocialLinkNames]: SocialLink } = {
  [SocialLinkNames.Sanada]: Sanada,
  [SocialLinkNames.Koromaru]: Koromaru,
  [SocialLinkNames.Amada]: Amada,
  [SocialLinkNames.Mochizuki]: Mochizuki,
  [SocialLinkNames.Iori]: Iori,
  [SocialLinkNames.Aragaki]: Aragaki,
  [SocialLinkNames.Fool]: Fool,
  [SocialLinkNames.Magician]: Magician,
  [SocialLinkNames.Priestess]: Priestess,
  [SocialLinkNames.Empress]: Empress,
  [SocialLinkNames.Emperor]: Emperor,
  [SocialLinkNames.Hierophant]: Hierophant,
  [SocialLinkNames.Lovers]: Lovers,
  [SocialLinkNames.Chariot]: Chariot,
  [SocialLinkNames.Justice]: Justice,
  [SocialLinkNames.Hermit]: Hermit,
  [SocialLinkNames.Fortune]: Fortune,
  [SocialLinkNames.Strength]: Strength,
  [SocialLinkNames.HangedMan]: HangedMan,
  [SocialLinkNames.Death]: Death,
  [SocialLinkNames.Temperance]: Temperance,
  [SocialLinkNames.Devil]: Devil,
  [SocialLinkNames.Tower]: Tower,
  [SocialLinkNames.Star]: Star,
  [SocialLinkNames.Moon]: Moon,
  [SocialLinkNames.Sun]: Sun,
  [SocialLinkNames.Aeon]: Aeon,
};

export { SocialLinkNames, mainCharName, socialLinks, SocialLink, Routes };
