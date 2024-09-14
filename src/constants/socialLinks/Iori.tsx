import { LinkMainLevelsEpisodes, SocialLinkEpisodes } from "./baseFunctions";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";
import { EventCard } from "@/components";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinkNames,
  SocialLinkType,
} from "./types";

class IoriMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
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
        return days.includes(props.currentDay.date.getDay()) && isTime;
      case 2:
        days = [
          new Date(2009, 10, 7).getTime(),
          new Date(2009, 10, 10).getTime(),
          new Date(2009, 10, 11).getTime(),
          new Date(2009, 10, 13).getTime(),
        ];
        return days.includes(props.currentDay.date.getDay()) && isTime;
      case 3:
        days = [
          new Date(2009, 11, 19).getTime(),
          new Date(2009, 11, 22).getTime(),
          new Date(2009, 11, 25).getTime(),
          new Date(2009, 11, 26).getTime(),
        ];
        return days.includes(props.currentDay.date.getDay()) && isTime;
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
        return days.includes(props.currentDay.date.getDay()) && isTime;
      default:
        return false;
    }
  }
}

class IoriSocialLink extends SocialLinkEpisodes {
  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const previousLink = props.previousDay!.links[this.linkName];
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
          [StatsNames.Academics]: currentStats[StatsNames.Charm] + 2,
        };
        break;
      case 3:
        currentStats = {
          ...currentStats,
          [StatsNames.Courage]: currentStats[StatsNames.Charm] + 2,
        };
        break;
    }

    return {
      stats: currentStats,
      links: {
        ...props.currentDay.links,
        [this.linkName]: { ...previousLink, level: previousLink.level + 1 },
      },
    };
  }

  element(props: SocialLinkElementProps) {
    if (!props.previousDay) return null;

    const previousLink = props.previousDay!.links[this.linkName];
    let additionalStats: string | undefined = undefined;

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
          head={`${this.linkName} (Episode)`}
          name={this.linkDetails.name}
          stats={additionalStats}
        />
        {props.fullCard &&
          this.getLevel().element({
            key: this.linkName,
          })}
      </div>
    );
  }
}

export const Iori = new IoriSocialLink(
  SocialLinkNames.Iori,
  { name: "Junpei Iori" },
  { mainLevels: new IoriMainLevels() }
);
