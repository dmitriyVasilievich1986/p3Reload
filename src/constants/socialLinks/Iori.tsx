import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";

import { EventCard } from "@/components";

import { SocialLinkEpisodes } from "./classes/SocialLink";

import {
  LinkMainLevelsEpisodes,
  KoromaruWalkLevels,
  DormHangoutLevels,
} from "./classes/LinkLevels";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  EventAvailableProps,
  LabelHeadPrefixes,
  SocialLinkLevel,
  SocialLinkNames,
  SocialLinkType,
  Routes,
} from "./types";

class IoriGardenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.GardenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 5, 20).getTime(),
    new Date(2009, 5, 27).getTime(),
    new Date(2009, 6, 4).getTime(),
    new Date(2009, 6, 18).getTime(),
    new Date(2009, 7, 1).getTime(),
    new Date(2009, 7, 8).getTime(),
    new Date(2009, 7, 15).getTime(),
    new Date(2009, 7, 22).getTime(),
    new Date(2009, 7, 25).getTime(),
    new Date(2009, 8, 26).getTime(),
    new Date(2009, 9, 3).getTime(),
    new Date(2009, 9, 17).getTime(),
    new Date(2009, 9, 29).getTime(),
    new Date(2009, 9, 31).getTime(),
    new Date(2009, 11, 2).getTime(),
    new Date(2010, 0, 16).getTime(),
    new Date(2010, 0, 23).getTime(),
  ];
}

class IoriBookActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.BookActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 5, 16).getTime(),
    new Date(2009, 5, 22).getTime(),
    new Date(2009, 5, 29).getTime(),
    new Date(2009, 7, 3).getTime(),
    new Date(2009, 7, 17).getTime(),
    new Date(2009, 7, 24).getTime(),
    new Date(2009, 8, 14).getTime(),
    new Date(2009, 8, 21).getTime(),
    new Date(2009, 8, 28).getTime(),
    new Date(2009, 9, 20).getTime(),
    new Date(2009, 9, 26).getTime(),
    new Date(2009, 10, 14).getTime(),
    new Date(2009, 11, 26).getTime(),
    new Date(2009, 11, 28).getTime(),
    new Date(2010, 0, 4).getTime(),
    new Date(2010, 0, 18).getTime(),
    new Date(2010, 0, 26).getTime(),
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

class IoriMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isTime = props.time === Times.Day;
    let days = [DaysNames.tuesday, DaysNames.friday];

    switch (previousLink.level) {
      case 0:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 4, 12).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 6, 3).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 1:
        days = [
          new Date(2009, 7, 9).getTime(),
          new Date(2009, 7, 11).getTime(),
          new Date(2009, 7, 14).getTime(),
          new Date(2009, 7, 18).getTime(),
          new Date(2009, 7, 21).getTime(),
          new Date(2009, 7, 25).getTime(),
          new Date(2009, 7, 28).getTime(),
        ];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      case 2:
        days = [
          new Date(2009, 10, 7).getTime(),
          new Date(2009, 10, 10).getTime(),
          new Date(2009, 10, 11).getTime(),
          new Date(2009, 10, 13).getTime(),
        ];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      case 3:
        days = [
          new Date(2009, 11, 19).getTime(),
          new Date(2009, 11, 22).getTime(),
          new Date(2009, 11, 25).getTime(),
          new Date(2009, 11, 26).getTime(),
        ];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      case 4:
        days = [
          new Date(2010, 0, 15).getTime(),
          new Date(2010, 0, 18).getTime(),
          new Date(2010, 0, 22).getTime(),
          new Date(2010, 0, 23).getTime(),
          new Date(2010, 0, 25).getTime(),
          new Date(2010, 0, 26).getTime(),
          new Date(2010, 0, 28).getTime(),
          new Date(2010, 0, 29).getTime(),
        ];
        return days.includes(props.currentDay.date.getTime()) && isTime;
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
      case 1:
        currentStats = {
          ...currentStats,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 2,
        };
        break;
      case 2:
        currentStats = {
          ...currentStats,
          [StatsNames.Academics]: currentStats[StatsNames.Academics] + 2,
        };
        break;
      case 3:
        currentStats = {
          ...currentStats,
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 2,
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
      case 1:
        additionalStats = `${StatsNames.Charm} +2`;
        break;
      case 2:
        additionalStats = `${StatsNames.Academics} +2`;
        break;
      case 3:
        additionalStats = `${StatsNames.Courage} +2`;
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

class IoriKoromaruWalkLevels extends KoromaruWalkLevels {
  dates = [new Date(2009, 7, 27).getTime(), new Date(2009, 11, 27).getTime()];
}

export const Iori = new SocialLinkEpisodes(
  { name: "Junpei Iori" },
  SocialLinkNames.Iori,
  [
    new IoriGardenActivityLevels(),
    new IoriKoromaruWalkLevels(),
    new IoriBookActivityLevels(),
    new IoriMainLevels(),
  ]
);
