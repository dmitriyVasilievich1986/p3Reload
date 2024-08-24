import { SocialLinkNames } from "@/constants/socialLinks";
import { LabelProps, Event } from "../events/types";
import { EventCard } from "@/components";
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
  SocialLinkNames.Fortune,
  SocialLinkNames.Priestess,
  SocialLinkNames.Empress,
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

export function LabelExamGrade(this: Event, { currentDay }: LabelProps) {
  function Grade() {
    let grade = "Average";
    const classmateLink = classmates[0];
    if (currentDay.links[classmateLink].multiplier === 1.51)
      grade = "Top class";
    else if (currentDay.links[classmateLink].multiplier === 1.21)
      grade = "Top 10";
    return <h3 style={{ textAlign: "center" }}>{grade}</h3>;
  }

  return (
    <div>
      <EventCard head="Exam results" />
      <Grade />
    </div>
  );
}
