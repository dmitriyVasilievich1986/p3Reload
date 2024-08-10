import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { Event, LabelProps } from "../types";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";

function CardWithMultiplier(this: Event, props: LabelProps) {
  const linkName = this.linkName as SocialLinkNames;

  return (
    <EventCard
      charm={props?.stats && props.stats[stats.Charm.name] >= 100}
      multiplier={props.links && props.links[linkName].multiplier}
      card={props.arcanes.includes(linkName)}
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
