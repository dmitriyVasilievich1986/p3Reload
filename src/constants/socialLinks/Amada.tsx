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
}

class AmadaSocialLink extends SocialLinkEpisodes {
  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const previousLink = props.previousDay!.links[this.linkName];
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
        [this.linkName]: { ...previousLink, level: previousLink.level + 1 },
      },
    };
  }

  element(props: SocialLinkElementProps) {
    if (!props.previousDay) return null;

    const previousLink = props.previousDay!.links[this.linkName];
    let additionalStats: string | undefined = undefined;

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

export const Amada = new AmadaSocialLink(
  SocialLinkNames.Amada,
  { name: "Ken Amada" },
  { mainLevels: new AmadaMainLevels() }
);
