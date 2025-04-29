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

class AragakiKitchenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.KitchenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 8, 8).getTime(),
    new Date(2009, 8, 12).getTime(),
    new Date(2009, 8, 15).getTime(),
    new Date(2009, 8, 22).getTime(),
    new Date(2009, 8, 26).getTime(),
    new Date(2009, 8, 29).getTime(),
    new Date(2009, 9, 3).getTime(),
  ];
}

class AragakiGardenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.GardenActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 8, 7).getTime(),
    new Date(2009, 8, 10).getTime(),
    new Date(2009, 8, 14).getTime(),
    new Date(2009, 8, 17).getTime(),
    new Date(2009, 8, 21).getTime(),
    new Date(2009, 8, 24).getTime(),
    new Date(2009, 8, 28).getTime(),
    new Date(2009, 9, 1).getTime(),
  ];
}

class AragakiMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isTime = props.time === Times.Day;
    let days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.sunday,
    ];

    switch (previousLink.level) {
      case 0:
        days = [
          new Date(2009, 8, 4).getTime(),
          new Date(2009, 8, 11).getTime(),
          new Date(2009, 8, 13).getTime(),
          new Date(2009, 8, 14).getTime(),
          new Date(2009, 8, 16).getTime(),
          new Date(2009, 8, 17).getTime(),
          new Date(2009, 8, 21).getTime(),
          new Date(2009, 8, 22).getTime(),
          new Date(2009, 8, 24).getTime(),
          new Date(2009, 8, 25).getTime(),
          new Date(2009, 8, 27).getTime(),
          new Date(2009, 8, 28).getTime(),
          new Date(2009, 8, 29).getTime(),
          new Date(2009, 8, 30).getTime(),
          new Date(2009, 9, 2).getTime(),
        ];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      case 1:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 11).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 2:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 13).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
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
          props.currentDay.date.getTime() >= new Date(2009, 8, 14).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 4:
        return (
          props.currentDay.date.getTime() === new Date(2009, 9, 6).getTime() &&
          props.time === Times.AfterSchool
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
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 2,
        };
        break;
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
        ...props.previousDay!.links,
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
        additionalStats = `${StatsNames.Courage} +2`;
        break;
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

class AragakiKoromaruWalkLevels extends KoromaruWalkLevels {
  dates = [new Date(2009, 8, 16).getTime(), new Date(2009, 8, 23).getTime()];
}

export const Aragaki = new SocialLinkEpisodes(
  { name: "Shinjiro Aragaki" },
  SocialLinkNames.Aragaki,
  [
    new AragakiKitchenActivityLevels(),
    new AragakiGardenActivityLevels(),
    new AragakiKoromaruWalkLevels(),
    new AragakiMainLevels(),
  ]
);
