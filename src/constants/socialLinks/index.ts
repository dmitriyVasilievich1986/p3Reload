import { CardNeededCalculator } from "./calculationFunctions";
import { mainCharName, SocialLink } from "./baseFunctions";
import { SocialLinkNames, Routes } from "./types";

import { Hierophant } from "./Hierophant";
import { Temperance } from "./Temperance";
import { Priestess } from "./Priestess";
import { HangedMan } from "./HangedMan";
import { Strength } from "./Strength";
import { Magician } from "./Magician";
import { Chariot } from "./Chariot";
import { Emperor } from "./Emperor";
import { Empress } from "./Empress";
import { Fortune } from "./Fortune";
import { Justice } from "./Justice";
import { Lovers } from "./Lovers";
import { Hermit } from "./Hermit";
import { Tower } from "./Tower";
import { Devil } from "./Devil";
import { Death } from "./Death";
import { Aeon } from "./Aeon";
import { Fool } from "./Fool";
import { Moon } from "./Moon";
import { Star } from "./Star";
import { Sun } from "./Sun";

const socialLinks: { [key in SocialLinkNames]: SocialLink } = {
  [SocialLinkNames.Aeon]: Aeon,
  [SocialLinkNames.Chariot]: Chariot,
  [SocialLinkNames.Devil]: Devil,
  [SocialLinkNames.Emperor]: Emperor,
  [SocialLinkNames.Empress]: Empress,
  [SocialLinkNames.Fool]: Fool,
  [SocialLinkNames.Fortune]: Fortune,
  [SocialLinkNames.Hermit]: Hermit,
  [SocialLinkNames.HangedMan]: HangedMan,
  [SocialLinkNames.Hierophant]: Hierophant,
  [SocialLinkNames.Justice]: Justice,
  [SocialLinkNames.Lovers]: Lovers,
  [SocialLinkNames.Magician]: Magician,
  [SocialLinkNames.Moon]: Moon,
  [SocialLinkNames.Priestess]: Priestess,
  [SocialLinkNames.Star]: Star,
  [SocialLinkNames.Sun]: Sun,
  [SocialLinkNames.Strength]: Strength,
  [SocialLinkNames.Temperance]: Temperance,
  [SocialLinkNames.Tower]: Tower,
  [SocialLinkNames.Death]: Death,
};

export {
  CardNeededCalculator,
  SocialLinkNames,
  mainCharName,
  socialLinks,
  SocialLink,
  Routes,
};
