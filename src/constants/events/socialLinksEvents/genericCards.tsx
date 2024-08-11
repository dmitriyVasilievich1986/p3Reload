import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { Event, LabelProps } from "../types";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";

function CardWithMultiplier(this: Event, { currentDay }: LabelProps) {
  const linkName = this.linkName as SocialLinkNames;

  return (
    <EventCard
      charm={currentDay?.stats && currentDay.stats[stats.Charm.name] >= 100}
      multiplier={currentDay.links && currentDay.links[linkName].multiplier}
      card={currentDay.arcanes.includes(linkName)}
      {...socialLinks[linkName].linkDetails}
      head={this.name}
    />
  );
}

function CardWithoutMultiplier(this: Event) {
  return (
    <EventCard
      name={socialLinks[this.linkName as SocialLinkNames].linkDetails.name}
      head={this.name}
    />
  );
}

export { CardWithoutMultiplier, CardWithMultiplier };
