import { SocialLinkNames, SocialLinkType } from "./types";

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
import { Aeon } from "./Aeon";
import { Fool } from "./Fool";
import { Moon } from "./Moon";
import { Star } from "./Star";
import { Sun } from "./Sun";

export const socialLinks: { [key in SocialLinkNames]: SocialLinkType } = {
  Aeon,
  Chariot,
  Devil,
  Emperor,
  Empress,
  Fool,
  Fortune,
  Hermit,
  HangedMan,
  Hierophant,
  Justice,
  Lovers,
  Magician,
  Moon,
  Priestess,
  Star,
  Sun,
  Strength,
  Temperance,
  Tower,
};
