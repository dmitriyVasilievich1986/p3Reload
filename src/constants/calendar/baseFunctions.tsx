import { SocialLinkNames } from "../socialLinks/types";
import { SingleDay } from "./SingleDay";

export const classmates: SocialLinkNames[] = [
  SocialLinkNames.Magician,
  SocialLinkNames.Strength,
  SocialLinkNames.Chariot,
  SocialLinkNames.Lovers,
  SocialLinkNames.Emperor,
  SocialLinkNames.Temperance,
  SocialLinkNames.Justice,
  SocialLinkNames.Moon,
];

export function initialCalculataion(calendar: SingleDay[]) {
  (Object.values(calendar) as Array<SingleDay>).forEach((c, i, cArray) => {
    const previousDay: SingleDay = cArray?.[i - 1] || new SingleDay();
    const previousWeek: SingleDay | undefined = cArray?.[i - 1];

    c.singleTimeEvents = previousDay.singleTimeEvents;
    c.stats = previousDay.stats;
    c.links = previousDay.links;

    c.activities.forEach((activity) => {
      const response = activity.upgrade(c, previousWeek);
      c.singleTimeEvents = response?.singleTimeEvents || c.singleTimeEvents;
      c.stats = response?.stats || c.stats;
      c.links = response?.links || c.links;
    });
  });

  return calendar;
}
