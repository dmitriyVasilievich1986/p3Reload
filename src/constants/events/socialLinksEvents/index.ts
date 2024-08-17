import { magicianEvents } from "./Magician";
import { priestessEvents } from "./Priestess";
import { empressEvents } from "./Empress";
import { emperorEvents } from "./Emperor";
import { hierophantEvents } from "./Hierophant";
import { loversEvents } from "./Lovers";
import { chariotEvents } from "./Chariot";
import { justiceEvents } from "./Justice";
import { hermitEvents } from "./Hermit";
import { fortuneEvents } from "./Fortune";
import { strengthEvents } from "./Strength";
import { hangedManEvents } from "./HangedMan";
import { TemperanceEvents } from "./Temperance";
import { devilEvents } from "./Devil";
import { towerEvents } from "./Tower";
import { starEvents } from "./Star";
import { moonEvents } from "./Moon";
import { sunEvents } from "./Sun";
import { aeonEvents } from "./Aeon";
import { foolEvents } from "./Fool";
import { deathEvents } from "./Death";

import { SocialLinkNames } from "../../socialLinks/types";

import {
  socialLinkInvitationNames,
  socialLinkSpendTimeNames,
  socialLinkRomanceNames,
  socialLinkShrineNames,
  Event,
} from "../types";

export const linkEvents: {
  [key in
    | SocialLinkNames
    | socialLinkShrineNames
    | socialLinkRomanceNames
    | socialLinkSpendTimeNames
    | socialLinkInvitationNames]: Event;
} = {
  ...magicianEvents,
  ...priestessEvents,
  ...empressEvents,
  ...emperorEvents,
  ...hierophantEvents,
  ...loversEvents,
  ...chariotEvents,
  ...justiceEvents,
  ...hermitEvents,
  ...fortuneEvents,
  ...strengthEvents,
  ...hangedManEvents,
  ...TemperanceEvents,
  ...devilEvents,
  ...towerEvents,
  ...starEvents,
  ...moonEvents,
  ...sunEvents,
  ...aeonEvents,
  ...foolEvents,
  ...deathEvents,
};
