export type StatPointsTooltipRow = {
  label: string;
  value: string;
};

const POINTS_UNIT = 'pts.';

function formatPoints(points: number): string {
  return `${points} ${POINTS_UNIT}`;
}

/**
 * Builds label/value rows for a stat-badge tooltip.
 */
export function getStatPointsTooltipRows(
  currentPoints: number,
  pointsToNextLevel: number | null,
  previousPoints?: number
): StatPointsTooltipRow[] {
  const nextLabel = pointsToNextLevel == null ? 'max' : formatPoints(pointsToNextLevel);
  const pointsLeft = pointsToNextLevel == null ? 0 : Math.max(0, pointsToNextLevel - currentPoints);
  const currentValue =
    previousPoints != null && previousPoints !== currentPoints
      ? `${previousPoints} -> ${formatPoints(currentPoints)}`
      : formatPoints(currentPoints);

  return [
    { label: 'Current', value: currentValue },
    { label: 'Next', value: nextLabel },
    { label: 'Left', value: formatPoints(pointsLeft) },
  ];
}
