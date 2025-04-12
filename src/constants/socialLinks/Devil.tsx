import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";
import { StatsNames } from "@/constants/stats";

import { SocialLinkAlwaysLevelUp } from "@/constants/socialLinks/classes/SocialLink";
import { LinkMainLevelsChooseAny } from "@/constants/socialLinks/classes/LinkLevels";
import { SocialLinkNames } from "@/constants/socialLinks/types";

class DevilMainLevels extends LinkMainLevelsChooseAny {
  isAvailable = new availables.And_([
    new availables.AvailableStatGreater({ name: StatsNames.Charm, level: 3 }),
    new availables.AvailableDateGreater({ date: new Date(2009, 4, 16) }),
    new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
    new availables.AvailableLinkIsNewLevel(),
    new availables.AvailableLinkLevelGreater({
      name: SocialLinkNames.Hermit,
      level: 4,
    }),
    new availables.AvailableDaysNamesIsIn({
      days: [DaysNames.tuesday, DaysNames.saturday],
    }),
  ]).available;
}

export const Devil = new SocialLinkAlwaysLevelUp(
  { name: "President Tanaka", place: "Paulownia Mall" },
  SocialLinkNames.Devil,
  [new DevilMainLevels()]
);
