import { SocialLinkAvailableProps, SocialLinkType, Routes } from "../types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsNames, stats } from "@/constants/stats";

export class CardNeededCalculator {
  cardMultiplier: number = 1.51;
  nextLevelPoints: number;
  maxPoints: number[];
  multiplier: number;

  constructor(props: {
    nextLevelPoints: number;
    maxPoints: number[];
    multiplier: number;
    cardMultiplier?: number;
  }) {
    this.cardMultiplier = props?.cardMultiplier ?? this.cardMultiplier;
    this.nextLevelPoints = props.nextLevelPoints;
    this.multiplier = props.multiplier;
    this.maxPoints = props.maxPoints;
  }

  static maxPointsSum(maxPoints: number[], multiplier: number): number {
    return maxPoints.reduce((a, b) => a + Math.floor(b * multiplier), 0);
  }

  static nextLevelRounds(
    nextLevelPoints: number,
    maxPointsSum: number,
    multiplier: number
  ): number {
    const diff = nextLevelPoints - maxPointsSum;
    return Math.floor(diff / Math.floor(10 * multiplier) + 0.99);
  }

  isCardNeeded(): boolean {
    const maxPointsSumWOCard = CardNeededCalculator.maxPointsSum(
      this.maxPoints,
      this.multiplier
    );
    const nextLevelRoundsWOCard = CardNeededCalculator.nextLevelRounds(
      this.nextLevelPoints,
      maxPointsSumWOCard,
      this.multiplier
    );

    const maxPointsSumWCard = CardNeededCalculator.maxPointsSum(
      this.maxPoints,
      this.multiplier * this.cardMultiplier
    );
    const nextLevelRoundsWCard = CardNeededCalculator.nextLevelRounds(
      this.nextLevelPoints,
      maxPointsSumWCard,
      this.multiplier * this.cardMultiplier
    );

    return (
      nextLevelRoundsWCard < nextLevelRoundsWOCard &&
      maxPointsSumWOCard < this.nextLevelPoints
    );
  }
}

export function getCalulateFunction(
  maxMultiplier: number,
  isNewLevel: boolean,
  maxPoints: number[],
  socialLink: SocialLinkType,
  props: SocialLinkAvailableProps & {
    previousWeek?: SingleDay;
  },
  route: Routes
) {
  const linkName = socialLink.linkName;
  const previousLink = props.previousDay!.links[linkName];
  const currentLink = props.currentDay.links[linkName];
  const charmMax = stats[StatsNames.Charm].levels[5].value;

  const level = isNewLevel ? previousLink.level + 1 : previousLink.level;
  let points = isNewLevel ? 0 : currentLink.points;

  const examMultiplier = currentLink.multiplier === 1 ? 1 : maxMultiplier;
  const cardMultiplier = maxMultiplier;
  const maxCharmMultiplier =
    props.currentDay.stats[StatsNames.Charm] >= charmMax ? maxMultiplier : 1;

  let multiplier = examMultiplier * maxCharmMultiplier;

  const newLevel = socialLink.getLevel({
    ...previousLink,
    romance: route,
    level,
  });

  const cardNeeded = new CardNeededCalculator({
    nextLevelPoints: newLevel.points - points,
    cardMultiplier: cardMultiplier,
    multiplier,
    maxPoints,
  });

  if (props.currentDay.arcanes.includes(linkName)) {
    multiplier *= cardMultiplier;
  } else if (cardNeeded.isCardNeeded()) {
    multiplier *= cardMultiplier;
    props.currentDay.arcanes.push(linkName);
  }

  points += CardNeededCalculator.maxPointsSum(maxPoints, multiplier);

  return {
    links: {
      ...props.currentDay.links,
      [linkName]: {
        ...previousLink,
        multiplier: currentLink.multiplier,
        romance: route,
        points,
        level,
      },
    },
  };
}
