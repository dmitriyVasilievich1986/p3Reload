import { getStatPointsTooltipRows } from './getStatPointsTooltipRows';

/**
 * Column of label + value pairs for a stat-badge tooltip.
 */
export function StatPointsTooltipContent({
  currentPoints,
  pointsToNextLevel,
  previousPoints,
}: {
  currentPoints: number;
  pointsToNextLevel: number | null;
  previousPoints?: number;
}) {
  return (
    <dl className="flex flex-col gap-0.5">
      {getStatPointsTooltipRows(currentPoints, pointsToNextLevel, previousPoints).map((row) => (
        <div key={row.label} className="flex justify-between gap-3">
          <dt>{row.label}</dt>
          <dd className="m-0">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
