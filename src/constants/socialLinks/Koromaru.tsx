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

class KoromaruDVDActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.DVDActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 7, 17).getTime(),
    new Date(2009, 7, 24).getTime(),
    new Date(2009, 7, 31).getTime(),
    new Date(2009, 8, 7).getTime(),
    new Date(2009, 8, 14).getTime(),
    new Date(2009, 8, 21).getTime(),
    new Date(2009, 8, 24).getTime(),
    new Date(2009, 8, 28).getTime(),
    new Date(2009, 9, 19).getTime(),
    new Date(2009, 9, 26).getTime(),
    new Date(2009, 10, 9).getTime(),
    new Date(2009, 10, 16).getTime(),
    new Date(2009, 11, 28).getTime(),
    new Date(2010, 0, 4).getTime(),
    new Date(2010, 0, 11).getTime(),
    new Date(2010, 0, 18).getTime(),
    new Date(2010, 0, 25).getTime(),
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
        [StatsNames.Academics]:
          props.currentDay.stats[StatsNames.Academics] + 2,
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
          stats={`${StatsNames.Academics} +2`}
          name={socialLink.linkDetails.name}
          place="Dorm"
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

class KoromaruBrushLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.Brush;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 8, 9).getTime(),
    new Date(2009, 8, 17).getTime(),
    new Date(2009, 8, 24).getTime(),
    new Date(2009, 9, 1).getTime(),
    new Date(2009, 9, 22).getTime(),
    new Date(2009, 9, 29).getTime(),
    new Date(2009, 10, 12).getTime(),
    new Date(2009, 10, 27).getTime(),
    new Date(2009, 11, 4).getTime(),
    new Date(2009, 11, 6).getTime(),
    new Date(2009, 11, 10).getTime(),
    new Date(2009, 11, 24).getTime(),
    new Date(2010, 0, 14).getTime(),
    new Date(2010, 0, 28).getTime(),
    new Date(2010, 0, 30).getTime(),
  ];
}

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
          new Date(2009, 7, 22).getTime(),
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
    const level = this.levels[5][Routes.Platonic] as SocialLinkLevel;

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
  {
    dormHangout1: new KoromaruDVDActivityLevels(),
    dormHangout2: new KoromaruBrushLevels(),
    mainLevels: new KoromaruMainLevels(),
  }
);
