import { SocialLinkNames } from "@/constants/socialLinks/types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { LinksStats } from "./LinksStats";

export function EpisodesStats(props: {
  previousDay: SingleDay;
  currentDay: SingleDay;
}) {
  const mainLinks: SocialLinkNames[] = [
    SocialLinkNames.Sanada,
    SocialLinkNames.Koromaru,
    SocialLinkNames.Amada,
    SocialLinkNames.Mochizuki,
    SocialLinkNames.Iori,
    SocialLinkNames.Aragaki,
  ];

  return LinksStats({ ...props, linksNames: mainLinks, head: "Episodes" });
}
