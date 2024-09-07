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
import { Akihiko } from "./Akihiko";
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
  [SocialLinkNames.Akihiko]: Akihiko,
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

export {
  CardNeededCalculator,
  SocialLinkNames,
  mainCharName,
  socialLinks,
  SocialLink,
  Routes,
};
