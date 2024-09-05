import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { InvitationsType } from "@/constants/socialLinks/types";
import { StatsNames, stats } from "@/constants/stats";
import { Event, LabelProps } from "../types";
import { EventCard } from "@/components";

function EventCardBase({
  showPlace = true,
  currentDay,
  fullCard,
  ...props
}: Event & LabelProps & { showPlace?: boolean }) {
  const linkName = props.linkName as SocialLinkNames;
  const charmLevel = stats[StatsNames.Charm].levels[5].value;

  return (
    <EventCard
      charm={
        fullCard &&
        currentDay?.stats &&
        currentDay.stats[StatsNames.Charm] >= charmLevel
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

function CardWithMultiplier(this: Event, props: LabelProps) {
  const linkName = this.linkName as SocialLinkNames;

  const LevelUp = () => {
    return socialLinks[linkName]
      .getLevel({
        ...props.currentDay.links[linkName],
        level: props.currentDay.links[linkName].level - 1,
      })
      .element({ key: linkName });
  };

  return (
    <div>
      <EventCardBase {...this} {...props} />
      {props.fullCard && <LevelUp />}
    </div>
  );
}

function CardWithoutMultiplier(this: Event, props: LabelProps) {
  return <EventCardBase {...this} {...{ ...props, fullCard: false }} />;
}

function InvitationCard(this: Event, props: LabelProps) {
  const linkName = this.linkName as SocialLinkNames;
  const level = props.currentDay.links[linkName].level;

  const Invitation = () => {
    return (socialLinks[linkName].invitations as InvitationsType)[level][
      props.currentDay.links[linkName].romance
    ];
  };

  return (
    <div>
      <EventCardBase {...this} {...{ ...props, showPlace: false }} />
      {props.fullCard && <Invitation />}
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
