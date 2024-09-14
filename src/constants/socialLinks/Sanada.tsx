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

class SanadaMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isTime = props.time === Times.Evening;
    let days = [DaysNames.monday, DaysNames.friday];

    switch (previousLink.level) {
      case 0:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 4, 29).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 6, 10).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 1:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 6, 24).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 7, 31).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 2:
        return (
          props.currentDay.date.getTime() <= new Date(2009, 10, 2).getTime() &&
          props.currentDay.date.getTime() >= new Date(2009, 9, 9).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 4:
        return (
          props.currentDay.date.getTime() >= new Date(2009, 11, 12).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 11, 26).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 3:
        days = [DaysNames.monday, DaysNames.tuesday, DaysNames.saturday];
        return (
          props.currentDay.date.getTime() <= new Date(2010, 0, 29).getTime() &&
          props.currentDay.date.getTime() >= new Date(2010, 0, 4).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      default:
        return false;
    }
  }
}

class SanadaSocialLink extends SocialLinkEpisodes {
  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const previousLink = props.previousDay!.links[this.linkName];
    let currentStats = props.currentDay.stats;

    switch (previousLink.level) {
      case 1:
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
      case 1:
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

export const Sanada = new SanadaSocialLink(
  SocialLinkNames.Sanada,
  { name: "Akihiko Sanada" },
  { mainLevels: new SanadaMainLevels() }
);
