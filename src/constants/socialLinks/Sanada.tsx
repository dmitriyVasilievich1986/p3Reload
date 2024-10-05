import { SingleDay } from "@/constants/calendar/SingleDay";
import { SocialLinkEpisodes } from "./classes/SocialLink";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";
import { EventCard } from "@/components";

import {
  LinkMainLevelsEpisodes,
  KoromaruWalkLevels,
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

class SanadaKitchenActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.KitchenActivity;
  dormName: "dorm1" | "dorm2" = "dorm1";

  dates: number[] = [
    new Date(2009, 7, 5).getTime(),
    new Date(2009, 7, 19).getTime(),
    new Date(2009, 8, 16).getTime(),
    new Date(2009, 8, 23).getTime(),
    new Date(2009, 8, 30).getTime(),
    new Date(2009, 9, 17).getTime(),
    new Date(2009, 9, 21).getTime(),
    new Date(2009, 9, 28).getTime(),
    new Date(2009, 10, 11).getTime(),
    new Date(2009, 11, 23).getTime(),
    new Date(2010, 0, 6).getTime(),
    new Date(2010, 0, 13).getTime(),
    new Date(2010, 0, 20).getTime(),
    new Date(2010, 0, 27).getTime(),
  ];
}

class SanadaDVDActivityLevels extends DormHangoutLevels {
  headPostfix: LabelHeadPrefixes = LabelHeadPrefixes.DVDActivity;
  dormName: "dorm1" | "dorm2" = "dorm2";

  dates: number[] = [
    new Date(2009, 7, 8).getTime(),
    new Date(2009, 7, 22).getTime(),
    new Date(2009, 8, 12).getTime(),
    new Date(2009, 8, 26).getTime(),
    new Date(2009, 9, 3).getTime(),
    new Date(2009, 9, 24).getTime(),
    new Date(2009, 9, 31).getTime(),
    new Date(2009, 10, 14).getTime(),
    new Date(2009, 10, 21).getTime(),
    new Date(2009, 11, 26).getTime(),
    new Date(2010, 0, 2).getTime(),
    new Date(2010, 0, 23).getTime(),
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
          props.currentDay.date.getTime() <= new Date(2010, 0, 29).getTime() &&
          props.currentDay.date.getTime() >= new Date(2010, 0, 4).getTime() &&
          days.includes(props.currentDay.date.getDay()) &&
          isTime
        );
      case 3:
        days = [DaysNames.monday, DaysNames.tuesday, DaysNames.saturday];
        return (
          props.currentDay.date.getTime() >= new Date(2009, 11, 12).getTime() &&
          props.currentDay.date.getTime() <= new Date(2009, 11, 26).getTime() &&
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

class SanadaKoromaruWalkLevels extends KoromaruWalkLevels {
  dates = [new Date(2009, 7, 23).getTime(), new Date(2009, 8, 27).getTime()];
}

export const Sanada = new SocialLinkEpisodes(
  SocialLinkNames.Sanada,
  { name: "Akihiko Sanada" },
  {
    dormHangout1: new SanadaKitchenActivityLevels(),
    koromaruWalks: new SanadaKoromaruWalkLevels(),
    dormHangout2: new SanadaDVDActivityLevels(),
    mainLevels: new SanadaMainLevels(),
  }
);
