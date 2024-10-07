import { StatsNames, statsLevel, statsLevels } from "./types";

function baseStats(levelsArray: [name: string, value: number][]) {
  const levels: statsLevel[] = levelsArray.map(([name, value]) => ({
    name,
    value,
    nextLevel: 0,
  }));
  levels.reduce(
    (a, b) => {
      a.nextLevel = b.value;
      return b;
    },
    { name: "", value: 0, nextLevel: 0 }
  );

  const maxPoints = levels[levels.length - 1].value;
  return {
    levels,
    maxPoints,
    getLevel: function (points: number) {
      const l = this.levels.filter((level) => points >= level.value);
      return l[l.length - 1];
    },
  };
}

export const stats: statsLevels = {
  [StatsNames.Academics]: {
    name: StatsNames.Academics,
    ...baseStats([
      ["Slacker", 0],
      ["Average", 20],
      ["Above Average", 55],
      ["Smart", 100],
      ["Intelligent", 155],
      ["Genius", 230],
    ]),
  },
  [StatsNames.Charm]: {
    name: StatsNames.Charm,
    ...baseStats([
      ["Plain", 0],
      ["Unpolished", 15],
      ["Confident", 30],
      ["Smooth", 45],
      ["Popular", 70],
      ["Charismatic", 100],
    ]),
  },
  [StatsNames.Courage]: {
    name: StatsNames.Courage,
    ...baseStats([
      ["Timid", 0],
      ["Ordinary", 15],
      ["Determined", 30],
      ["Tough", 45],
      ["Fearless", 60],
      ["Badass", 80],
    ]),
  },
};

export class StatsRepresentation {
  name: StatsNames;
  value?: number;

  constructor(name: StatsNames, value?: number) {
    this.name = name;
    this.value = value;

    this.representation = this.representation.bind(this);
  }

  representation() {
    const value = this.value ? ` +${this.value}` : "";
    return `${this.name}${value}`;
  }
}
