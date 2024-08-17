import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { InvitationsType } from "@/constants/socialLinks/types";
import { Event, LabelProps } from "../types";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";

function CardWithMultiplier(this: Event, { currentDay, fullCard }: LabelProps) {
  const linkName = this.linkName as SocialLinkNames;

  const LevelUp = () => {
    return socialLinks[linkName]
      .getLevel({
        ...currentDay.links[linkName],
        level: currentDay.links[linkName].level - 1,
      })
      .element({ key: linkName });
  };

  return (
    <div>
      <EventCard
        charm={
          fullCard &&
          currentDay?.stats &&
          currentDay.stats[stats.Charm.name] >= 100
        }
        multiplier={
          fullCard
            ? currentDay.links && currentDay.links[linkName].multiplier
            : undefined
        }
        card={fullCard && currentDay.arcanes.includes(linkName)}
        {...socialLinks[linkName].linkDetails}
        head={this.name}
      />
      {fullCard && <LevelUp />}
    </div>
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

function InvitationCard(this: Event, { currentDay, fullCard }: LabelProps) {
  const linkName = this.linkName as SocialLinkNames;
  const level = currentDay.links[linkName].level;

  const Invitation = () => {
    return (socialLinks[linkName].invitations as InvitationsType)[level][
      currentDay.links[linkName].romance
    ];
  };

  return (
    <div>
      <EventCard
        name={socialLinks[this.linkName as SocialLinkNames].linkDetails.name}
        head={this.name}
      />
      {fullCard && <Invitation />}
    </div>
  );
}

export { CardWithoutMultiplier, CardWithMultiplier, InvitationCard };
