import { SocialLinkNames } from "@/constants/socialLinks/types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { LinksStats } from "./LinksStats";

export function SocialLinksStats(props: {
  previousDay: SingleDay;
  currentDay: SingleDay;
}) {
  const mainLinks: SocialLinkNames[] = [
    SocialLinkNames.Fool,
    SocialLinkNames.Magician,
    SocialLinkNames.Priestess,
    SocialLinkNames.Empress,
    SocialLinkNames.Emperor,
    SocialLinkNames.Hierophant,
    SocialLinkNames.Lovers,
    SocialLinkNames.Chariot,
    SocialLinkNames.Justice,
    SocialLinkNames.Hermit,
    SocialLinkNames.Fortune,
    SocialLinkNames.Strength,
    SocialLinkNames.HangedMan,
    SocialLinkNames.Death,
    SocialLinkNames.Temperance,
    SocialLinkNames.Devil,
    SocialLinkNames.Tower,
    SocialLinkNames.Star,
    SocialLinkNames.Moon,
    SocialLinkNames.Sun,
    SocialLinkNames.Aeon,
  ];

  return LinksStats({ ...props, linksNames: mainLinks, head: "Links" });
}
