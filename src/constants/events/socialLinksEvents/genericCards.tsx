import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { InvitationsType } from "@/constants/socialLinks/types";
import { StatsNames } from "@/constants/stats";
import { Event, LabelProps } from "../types";
import { EventCard } from "@/components";

function EventCardBase({
  showPlace = true,
  currentDay,
  fullCard,
  ...props
}: Event & LabelProps & { showPlace?: boolean }) {
  const linkName = props.linkName as SocialLinkNames;

  return (
    <EventCard
      charm={
        fullCard &&
        currentDay?.stats &&
        currentDay.stats[StatsNames.Charm] >= 100
      }
      multiplier={
        fullCard
          ? currentDay.links && currentDay.links[linkName].multiplier
          : undefined
      }
      place={showPlace ? socialLinks[linkName].linkDetails.place : undefined}
      card={fullCard && currentDay.arcanes.includes(linkName)}
      name={socialLinks[linkName].linkDetails.name}
      head={props.name}
    />
  );
}

function CardSpendTime(this: Event, props: LabelProps) {
  return <EventCardBase {...this} {...props} />;
}

function CardShrine(this: Event, props: LabelProps) {
  return <EventCardBase {...this} {...props} showPlace={false} />;
}

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
      <EventCardBase {...this} fullCard={fullCard} currentDay={currentDay} />
      {fullCard && <LevelUp />}
    </div>
  );
}

function CardWithoutMultiplier(this: Event, { currentDay }: LabelProps) {
  return <EventCardBase currentDay={currentDay} fullCard={false} {...this} />;
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
      <EventCardBase
        currentDay={currentDay}
        fullCard={fullCard}
        showPlace={false}
        {...this}
      />
      {fullCard && <Invitation />}
    </div>
  );
}

export {
  CardWithoutMultiplier,
  CardWithMultiplier,
  InvitationCard,
  CardSpendTime,
  CardShrine,
};
