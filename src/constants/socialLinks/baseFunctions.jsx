import { Choices, Choice } from "../../components/choices/Choices";
import { stats } from "../stats";
import React from "react";

export const mainCharName = "Protagonist";

export function choice({ points = 0, ...props }) {
  return {
    points,
    element: ({ key }) => <Choice key={key} points={points} {...props} />,
  };
}

export function choices(head, choices) {
  const points = Math.max(...choices.map((c) => c.points));

  return {
    points,
    element: ({ key }) => (
      <Choices key={key} label={head}>
        {choices.map((c, i) => c.element({ key: i }))}
      </Choices>
    ),
  };
}

export function LinkLevel(points = 0, levels = null) {
  if (levels === null)
    return {
      points: 0,
      maxPoints: 0,
      element: () => <h3 style={{ textAlign: "center" }}>Create bond</h3>,
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

export const baseSocialLinkCalculation = {
  maxLevel: 10,
  getlevel: function ({ level, romance = false }) {
    return this[romance ? "levelsRomance" : "levels"][level];
  },
  calculate: function ({ currentStats, currentLinks, arcanes, name }) {
    const thisLink = currentLinks[name];
    const currentLevel = this.getlevel({
      level: thisLink.level,
      romance: thisLink.romance,
    });
    const isNewlevel =
      thisLink.level < this.maxLevel && thisLink.points >= currentLevel.points;

    let multiplier = thisLink.multiplier;
    if (arcanes.includes(name)) multiplier *= 1.51;
    if (currentStats[stats.Charm.name] >= 100) multiplier *= 1.51;

    const newPoints = Math.floor(
      isNewlevel
        ? currentLevel.maxPoints * multiplier
        : thisLink.points + 10 * multiplier
    );
    return {
      links: {
        ...currentLinks,
        [name]: {
          ...thisLink,
          level: isNewlevel ? thisLink.level + 1 : thisLink.level,
          points: newPoints,
        },
      },
    };
  },
  getStaleLevel: function () {
    return <h3>Spending time</h3>;
  },
  levels: [],
};

export const alwaysLevelUp = {
  ...baseSocialLinkCalculation,
  getlevel: function ({ level }) {
    if (level === 10) return this.levels[2];
    if (level === 0) return this.levels[0];
    return this.levels[1];
  },
  calculate: function ({ currentLinks, name }) {
    const thisLink = currentLinks[name];
    const isNewlevel = thisLink.level < this.maxLevel;
    return {
      links: {
        ...currentLinks,
        [name]: {
          ...thisLink,
          level: isNewlevel ? thisLink.level + 1 : thisLink.level,
        },
      },
    };
  },
};
