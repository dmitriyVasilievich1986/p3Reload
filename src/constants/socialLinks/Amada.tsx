import { SingleDay } from "@/constants/calendar/SingleDay";
import { SocialLinkEpisodes } from "./classes/SocialLink";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";
import { EventCard } from "@/components";

import {
  LinkMainLevelsEpisodes,
  DormHangoutLevels,
} from "./classes/LinkLevels";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  LabelHeadPrefixes,
  SocialLinkLevel,
  SocialLinkNames,
  SocialLinkType,
  Routes,
} from "./types";

class AmadaKitchenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.KitchenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 8, 6).getTime(),
    new Date(2009, 8, 13).getTime(),
    new Date(2009, 8, 27).getTime(),
    new Date(2009, 9, 18).getTime(),
    new Date(2009, 9, 25).getTime(),
    new Date(2009, 10, 1).getTime(),
  ];
}

class AmadaDVDActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.DVDActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 8, 4).getTime(),
    new Date(2009, 8, 11).getTime(),
    new Date(2009, 8, 25).getTime(),
    new Date(2009, 9, 2).getTime(),
    new Date(2009, 9, 23).getTime(),
    new Date(2009, 9, 30).getTime(),
    new Date(2009, 10, 13).getTime(),
  ];

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
      stats: {
        ...props.currentDay.stats,
        [StatsNames.Courage]: props.currentDay.stats[StatsNames.Courage] + 2,
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
          stats={`${StatsNames.Courage} +2`}
          name={socialLink.linkDetails.name}
          place="Dorm"
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

class AmadaMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isTime = props.time === Times.Evening;
    let days = [DaysNames.tuesday, DaysNames.wednesday];

    switch (previousLink.level) {
      case 0:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 8).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 8, 30).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 1:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 15).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 8, 30).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 2:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 10, 10).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 11, 2).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 4:
        return (
          props.currentDay.date.getTime() >= new Date(2010, 0, 19).getTime() &&
          props.currentDay.date.getTime() <= new Date(2010, 0, 27).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 3:
        days = [
          DaysNames.monday,
          DaysNames.tuesday,
          DaysNames.wednesday,
          DaysNames.friday,
          DaysNames.saturday,
        ];
        return (
          props.currentDay.date.getTime() >= new Date(2009, 11, 22).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 11, 30).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      default:
        return false;
    }
  }

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    let currentStats = props.currentDay.stats;

    switch (previousLink.level) {
      case 0:
        currentStats = {
          ...currentStats,
          [StatsNames.Academics]: currentStats[StatsNames.Academics] + 2,
        };
        break;
      case 1:
        currentStats = {
          ...currentStats,
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 2,
        };
        break;
      case 2:
        currentStats = {
          ...currentStats,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 2,
        };
        break;
    }

    return {
      stats: currentStats,
      links: {
        ...props.currentDay.links,
        [linkName]: { ...previousLink, level: previousLink.level + 1 },
      },
    };
  }

  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps
  ): React.ReactNode {
    if (!props.previousDay) return null;

    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    let additionalStats: string | undefined = undefined;
    const level = this.levels[5][Routes.Platonic] as SocialLinkLevel;

    switch (previousLink.level) {
      case 0:
        additionalStats = `${StatsNames.Academics} +2`;
        break;
      case 1:
        additionalStats = `${StatsNames.Courage} +2`;
        break;
      case 2:
        additionalStats = `${StatsNames.Charm} +2`;
        break;
    }

    return (
      <div>
        <EventCard
          head={`${linkName} (Episode)`}
          name={socialLink.linkDetails.name}
          stats={additionalStats}
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

export const Amada = new SocialLinkEpisodes(
  SocialLinkNames.Amada,
  { name: "Ken Amada" },
  {
    dormHangout1: new AmadaKitchenActivityLevels(),
    dormHangout2: new AmadaDVDActivityLevels(),
    mainLevels: new AmadaMainLevels(),
  }
);
