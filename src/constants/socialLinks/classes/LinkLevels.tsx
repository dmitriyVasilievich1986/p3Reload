import { EventCard } from "@/components";

import { upgradeResponse, Times } from "@/constants/events/types";
import availables from "@/constants/availability/AvailableClass";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsNames, stats } from "@/constants/stats";

import { getCalulateFunction } from "@/constants/socialLinks/classes/calculationFunctions";
import {
  SpendingTimeObject,
  createBondObject,
  LinkMaxedObject,
  ChooseAnyObject,
  SpendingTime,
} from "@/constants/socialLinks/classes/GenericCard.tsx";
import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  EventAvailableProps,
  LabelHeadPrefixes,
  SocialLinkStats,
  SocialLinkLevel,
  SocialLinkType,
  LevelsType,
  Routes,
} from "@/constants/socialLinks/types";

export abstract class LinkLevels {
  abstract levels: LevelsType;

  abstract calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ): upgradeResponse;

  abstract element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps,
    route: Routes
  ): React.ReactNode;

  abstract isAvailable(props: EventAvailableProps): boolean;
}

export class EmptyLevels extends LinkLevels {
  levels: LevelsType = {};

  calculate() {
    return {};
  }

  element() {
    return null;
  }

  isAvailable = new availables.False_().available;
}

export abstract class LinkMainLevels extends LinkLevels {
  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps,
    route: Routes
  ): React.ReactNode {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const previousLevel = props.previousDay.links[linkName] as SocialLinkStats;
    const headPostfix =
      route === Routes.Romantic ? ` (${Routes.Romantic})` : "";
    const isNewLevel = socialLink.isNewLevel(previousLevel);
    const level = socialLink.getLevel({
      ...previousLevel,
      romance: route,
    }) as SocialLinkLevel;

    const Card = () => {
      if (!props.fullCard) return null;
      if (isNewLevel) return level.element({ key: linkName });
      return SpendingTime();
    };

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[linkName].multiplier
              : undefined
          }
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          place={socialLink.linkDetails.place}
          name={socialLink.linkDetails.name}
          head={`${linkName}${headPostfix}`}
        />
        <Card />
      </div>
    );
  }

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const previousLevel = socialLink.getLevel(previousLink);
    const maxPoints = isNewLevel ? previousLevel.maxPoints : [10];

    return getCalulateFunction(
      1.51,
      isNewLevel,
      maxPoints,
      socialLink,
      props,
      route
    );
  }
}

export abstract class LinkMainLevelsEpisodes extends LinkMainLevels {
  levels: LevelsType = {
    5: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  };
}

export class LinkMainLevelsChooseAny extends LinkMainLevels {
  isAvailable = new availables.False_().available;

  calculate(socialLink: SocialLinkType, props: SocialLinkAvailableProps) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];

    return {
      links: {
        ...props.currentDay.links,
        [linkName]: { ...previousLink, level: previousLink.level + 1 },
      },
    };
  }

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    10: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  };
}

export abstract class InvitationLevels extends LinkLevels {
  abstract dates: number[];

  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;

    return (
      props.previousDay!.links[linkName].romance === props.route &&
      props.currentDay.links[linkName].level in this.levels &&
      this.dates.includes(props.currentDay.date.getTime()) &&
      props.time === Times.Day
    );
  }

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    return getCalulateFunction(1.51, false, [30], socialLink, props, route);
  }

  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps
  ): React.ReactNode {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const currentLevel = props.currentDay.links[linkName] as SocialLinkStats;
    const level = this.levels[currentLevel.level][
      currentLevel.romance
    ] as SocialLinkLevel;

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[linkName].multiplier
              : undefined
          }
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          name={socialLink.linkDetails.name}
          head={`${linkName} (Invitation)`}
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

export abstract class KoromaruWalkLevels extends LinkLevels {
  abstract dates: number[];

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: SpendingTimeObject,
    },
  };

  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;

    return (
      props.previousDay!.links[linkName].romance === props.route &&
      this.dates.includes(props.currentDay.date.getTime()) &&
      props.time === Times.Evening
    );
  }

  calculate(
    _socialLink: SocialLinkType,
    _props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    _route: Routes
  ) {
    return {};
  }

  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps
  ): React.ReactNode {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const level = this.levels[0][Routes.Platonic] as SocialLinkLevel;

    return (
      <div>
        <EventCard
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          head={`${linkName} (Koromaru walk)`}
          name={socialLink.linkDetails.name}
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

export abstract class KoromaruWalkSocialLinkLevels extends KoromaruWalkLevels {
  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    return getCalulateFunction(1.51, false, [15], socialLink, props, route);
  }

  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps
  ): React.ReactNode {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const level = this.levels[0][Routes.Platonic] as SocialLinkLevel;

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[linkName].multiplier
              : undefined
          }
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          head={`${linkName} (Koromaru walk)`}
          name={socialLink.linkDetails.name}
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

export class ShrineLevels extends LinkLevels {
  levels: LevelsType = {
    0: {
      [Routes.Platonic]: SpendingTimeObject,
    },
  };

  isAvailable = new availables.And_([
    new availables.AvailableLinkIsNewLevel({ reverse: true }),
    new availables.AvailableTimesIsIn({ times: [Times.Day] }),
    new availables.AvailableLinkMaxLevel({ reverse: true }),
    new availables.AvailableLinkLevelGreater({ level: 1 }),
  ]).available;

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    return getCalulateFunction(1.51, false, [10], socialLink, props, route);
  }

  element(socialLink: SocialLinkType, props: SocialLinkElementProps) {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[linkName].multiplier
              : undefined
          }
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          head={`${linkName} (Naganaki shrine)`}
          name={socialLink.linkDetails.name}
          place="Naganaki shrine"
        />
      </div>
    );
  }
}

export abstract class DormHangoutLevels extends LinkLevels {
  abstract headPostfix: LabelHeadPrefixes;
  abstract dormName: "dorm1" | "dorm2";
  abstract dates: number[];

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: ChooseAnyObject,
    },
    1: {
      [Routes.Platonic]: ChooseAnyObject,
    },
    2: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  };

  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];

    return (
      this.dates.includes(props.currentDay.date.getTime()) &&
      previousLink[this.dormName] < 3 &&
      previousLink.romance === props.route &&
      props.time === Times.Evening
    );
  }

  calculate(socialLink: SocialLinkType, props: SocialLinkAvailableProps) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];

    return {
      links: {
        ...props.currentDay.links,
        [linkName]: {
          ...previousLink,
          [this.dormName]: previousLink[this.dormName] + 1,
        },
      },
    };
  }

  element(socialLink: SocialLinkType, props: SocialLinkElementProps) {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const level = this.levels[previousLink[this.dormName]][
      previousLink.romance
    ] as SocialLinkLevel;

    return (
      <div>
        <EventCard
          head={`${socialLink.linkName}${this.headPostfix}`}
          name={socialLink.linkDetails.name}
          place="Dorm"
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}
