import { SingleDay } from "@/constants/calendar/SingleDay";
import { SocialLinkEpisodes } from "./baseFunctions";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { ChooseAnyObject } from "./GenericCard";
import { StatsNames } from "@/constants/stats";
import { EventCard } from "@/components";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinkNames,
  Routes,
} from "./types";

class KoromaruSocialLink extends SocialLinkEpisodes {
  isLinkAvailable(props: SocialLinkAvailableProps): boolean {
    const previousLink = props.previousDay!.links[this.linkName];
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
        ...props.previousDay!.links,
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

export const Koromaru = new KoromaruSocialLink(
  SocialLinkNames.Koromaru,
  { name: "Koromaru" },
  {
    5: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  }
);
