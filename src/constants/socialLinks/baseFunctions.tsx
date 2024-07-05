import { ChoiceProps } from "../../components/choices/types";
import { Choices, Choice } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";

import {
  SocialLinkLevelBase,
  SocialLinkTypeBase,
  SocialLinkLevel,
  SocialLinkNames,
  CalculateProps,
  KeyProps,
} from "./types";

export const mainCharName: string = "Protagonist";

export function choice({
  points = 0,
  ...props
}: ChoiceProps): SocialLinkLevelBase {
  return {
    points,
    element: ({ key }: KeyProps) => (
      <Choice key={key} points={points} {...props} />
    ),
  };
}

export function choices(
  head: string,
  choices: SocialLinkLevelBase[]
): SocialLinkLevelBase {
  const points = Math.max(...choices.map((c) => c.points));

  return {
    points,
    element: ({ key }: KeyProps) => (
      <Choices key={key} label={head}>
        {choices.map((c, i) => c.element({ key: i }))}
      </Choices>
    ),
  };
}

export function LinkLevel(
  points: number = 0,
  levels: SocialLinkLevelBase[] | null = null
): SocialLinkLevel {
  if (levels === null)
    return {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Create bond" />,
    };
  const maxPoints = levels.reduce((acc, level) => acc + level.points, 0);

  return {
    points,
    maxPoints,
    element: () => (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {levels.map((level, i) => level.element({ key: i }))}
      </div>
    ),
  };
}

export const baseSocialLinkCalculation: SocialLinkTypeBase = {
  name: SocialLinkNames.Aeon,
  maxLevel: 10,
  getlevel: function ({ level, romance = false }) {
    return romance ? this.levelsRomance[level] : this.levels[level];
  },
  _calculate: function ({
    currentStats,
    currentLinks,
    arcanes,
  }: CalculateProps) {
    const thisLink = currentLinks[this.name];
    const currentLevel = this.getlevel({
      level: thisLink.level,
      romance: thisLink.romance,
    });
    const isNewlevel =
      thisLink.level < this.maxLevel && thisLink.points >= currentLevel.points;
    const level = isNewlevel ? thisLink.level + 1 : thisLink.level;
    let points;

    if (isNewlevel) {
      let multiplier = thisLink.multiplier;
      const newLevel = this.getlevel({ level, romance: thisLink.romance });
      if (currentStats[StatsNames.Charm] >= 100) multiplier *= 1.51;

      if (arcanes.includes(this.name)) {
        multiplier *= 1.51;
      } else if (
        currentLevel.maxPoints > 0 &&
        currentLevel.maxPoints * multiplier < newLevel.points &&
        Math.floor(newLevel.points - currentLevel.maxPoints * multiplier) %
          10 !==
          0
      ) {
        multiplier *= 1.51;
        arcanes.push(this.name);
      }

      points = Math.floor(currentLevel.maxPoints * multiplier);
    } else {
      points = thisLink.points + 10;
    }

    return {
      links: {
        ...currentLinks,
        [this.name]: {
          ...thisLink,
          points,
          level,
        },
      },
    };
  },
  calculate: function (props: CalculateProps) {
    return this._calculate(props);
  },
  getStaleLevel: function () {
    return <EventCard head="Spending time" />;
  },
  levelsRomance: [],
  levels: [],
};

export const alwaysLevelUp: SocialLinkTypeBase = {
  ...baseSocialLinkCalculation,
  getlevel: function ({ level }) {
    if (level === 10) return this.levels[2];
    if (level === 0) return this.levels[0];
    return this.levels[1];
  },
  calculate: function ({ currentLinks }) {
    const thisLink = currentLinks[this.name];
    const isNewlevel = thisLink.level < this.maxLevel;
    return {
      links: {
        ...currentLinks,
        [this.name]: {
          ...thisLink,
          level: isNewlevel ? thisLink.level + 1 : thisLink.level,
        },
      },
    };
  },
};
