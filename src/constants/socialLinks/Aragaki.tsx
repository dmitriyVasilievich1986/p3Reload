import { LinkMainLevelsEpisodes, SocialLinkEpisodes } from "./baseFunctions";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";
import { EventCard } from "@/components";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinkLevel,
  SocialLinkStats,
  SocialLinkNames,
  SocialLinkType,
} from "./types";

class AragakiMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
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
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 4).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
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
          props.currentDay.date.getTime() >= new Date(2009, 9, 5).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 9, 31).getTime() &&
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
    const currentLevel = props.currentDay.links[linkName] as SocialLinkStats;
    const level = this.levels[currentLevel.level][
      currentLevel.romance
    ] as SocialLinkLevel;

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

export const Aragaki = new SocialLinkEpisodes(
  SocialLinkNames.Aragaki,
  { name: "Shinjiro Aragaki" },
  {
    mainLevels: new AragakiMainLevels(),
  }
);
