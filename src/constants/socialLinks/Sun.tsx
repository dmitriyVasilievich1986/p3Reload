import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";

import { SocialLinkAlwaysLevelUp } from "@/constants/socialLinks/classes/SocialLink";
import { LinkMainLevelsChooseAny } from "@/constants/socialLinks/classes/LinkLevels";
import { SocialLinkNames } from "@/constants/socialLinks/types";

class SunMainLevels extends LinkMainLevelsChooseAny {
  isAvailable = new availables.And_([
    new availables.AvailableDateGreater({ date: new Date(2009, 7, 9) }),
    new availables.AvailableDaysNamesIsIn({ days: [DaysNames.sunday] }),
    new availables.AvailableTimesIsIn({ times: [Times.Day] }),
    new availables.AvailableLinkIsNewLevel(),
    new availables.AvailableLinkLevelGreater({
      name: SocialLinkNames.HangedMan,
      level: 3,
    }),
    new availables.AvailableStatGreater({
      name: StatsNames.Academics,
      level: 3,
    }),
  ]).available;
}

export const Sun = new SocialLinkAlwaysLevelUp(
  { name: "Akinari Kamiki", place: "Naganaki Shrine" },
  SocialLinkNames.Sun,
  [new SunMainLevels()]
);
