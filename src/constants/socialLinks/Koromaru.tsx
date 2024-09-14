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

class KoromaruMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isTime = props.time === Times.Day;
    let days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
    let additionalDays = [];
    let isDay = false;

    switch (previousLink.level) {
      case 0:
        additionalDays = [
          new Date(2010, 0, 23).getTime(),
          new Date(2010, 0, 28).getTime(),
          new Date(2010, 0, 30).getTime(),
        ];
        isDay =
          days.includes(props.currentDay.date.getDay()) ||
          additionalDays.includes(props.currentDay.date.getTime());
        return (
          props.currentDay.date.getTime() >= new Date(2009, 7, 22).getTime() &&
          props.currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          isTime &&
          isDay
        );
      case 1:
        additionalDays = [
          new Date(2010, 0, 28).getTime(),
          new Date(2010, 0, 30).getTime(),
        ];
        isDay =
          days.includes(props.currentDay.date.getDay()) ||
          additionalDays.includes(props.currentDay.date.getTime());
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 4).getTime() &&
          props.currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          isTime &&
          isDay
        );
      case 2:
        additionalDays = [
          new Date(2010, 0, 28).getTime(),
          new Date(2010, 0, 30).getTime(),
        ];
        isDay =
          days.includes(props.currentDay.date.getDay()) ||
          additionalDays.includes(props.currentDay.date.getTime());
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 15).getTime() &&
          props.currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          isTime &&
          isDay
        );
      case 3:
        additionalDays = [
          new Date(2010, 0, 28).getTime(),
          new Date(2010, 0, 30).getTime(),
        ];
        isDay =
          days.includes(props.currentDay.date.getDay()) ||
          additionalDays.includes(props.currentDay.date.getTime());
        return (
          props.currentDay.date.getTime() >= new Date(2009, 8, 16).getTime() &&
          props.currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          isTime &&
          isDay
        );
      case 4:
        additionalDays = [
          new Date(2010, 0, 28).getTime(),
          new Date(2010, 0, 29).getTime(),
          new Date(2010, 0, 30).getTime(),
        ];
        isDay =
          days.includes(props.currentDay.date.getDay()) ||
          additionalDays.includes(props.currentDay.date.getTime());
        return (
          props.currentDay.date.getTime() >= new Date(2010, 0, 5).getTime() &&
          props.currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          isTime &&
          isDay
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
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 2,
        };
        break;
      case 1:
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
    const currentLevel = props.currentDay.links[linkName] as SocialLinkStats;
    const level = this.levels[currentLevel.level][
      currentLevel.romance
    ] as SocialLinkLevel;

    switch (previousLink.level) {
      case 0:
        additionalStats = `${StatsNames.Charm} +2`;
        break;
      case 1:
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

export const Koromaru = new SocialLinkEpisodes(
  SocialLinkNames.Koromaru,
  { name: "Koromaru" },
  { mainLevels: new KoromaruMainLevels() }
);
