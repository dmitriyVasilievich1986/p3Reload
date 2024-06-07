export const stats = {
  Academics: {
    name: "Academics",
    levels: [
      { name: "Slacker", value: 0 },
      { name: "Average", value: 20 },
      { name: "Above Average", value: 55 },
      { name: "Smart", value: 100 },
      { name: "Intelligent", value: 155 },
      { name: "Genius", value: 230 },
    ],
    getLevel: function (points) {
      const l = this.levels.filter((level) => points >= level.value);
      return l[l.length - 1];
    },
  },
  Charm: {
    name: "Charm",
    levels: [
      { name: "Plain", value: 0 },
      { name: "Unpolished", value: 15 },
      { name: "Confident", value: 30 },
      { name: "Smooth", value: 45 },
      { name: "Popular", value: 70 },
      { name: "Charismatic", value: 100 },
    ],
    getLevel: function (points) {
      const l = this.levels.filter((level) => points >= level.value);
      return l[l.length - 1];
    },
  },
  Courage: {
    name: "Courage",
    levels: [
      { name: "Timid", value: 0 },
      { name: "Ordinary", value: 15 },
      { name: "Determined", value: 30 },
      { name: "Tough", value: 45 },
      { name: "Fearless", value: 60 },
      { name: "Badass", value: 80 },
    ],
    getLevel: function (points) {
      const l = this.levels.filter((level) => points >= level.value);
      return l[l.length - 1];
    },
  },
};
