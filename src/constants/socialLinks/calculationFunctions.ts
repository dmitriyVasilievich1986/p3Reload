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
      this.multiplier
    );

    return (
      nextLevelRoundsWCard < nextLevelRoundsWOCard &&
      maxPointsSumWOCard < this.nextLevelPoints
    );
  }
}
