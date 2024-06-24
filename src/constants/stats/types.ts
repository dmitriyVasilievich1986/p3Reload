export enum StatsNames {
  Academics = "Academics",
  Courage = "Courage",
  Charm = "Charm",
}

export type statsLevel = {
  nextLevel: number;
  value: number;
  name: string;
};

export type statsLevels = {
  [key in StatsNames]: {
    levels: statsLevel[];
    maxPoints: number;
    name: StatsNames;
    getLevel: (points: number) => statsLevel;
  };
};
