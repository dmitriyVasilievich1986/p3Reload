import { useState, type ReactNode } from 'react';

import { Arcanas } from '@constants/arcanas';
import { CharacterStats, CharacterStatsNames } from '@services/stats/characterStats';
import { DormActivitiesNames } from '@services/stats/dormActivities';
import { EpisodeSocialLinkNames } from '@services/stats/episodesStats';
import { useMainStore } from '@store/main';

import { Badge, type BadgeColor } from '../badge';
import { Tabs } from '../tabs';
import { Tooltip, TooltipPositions } from '../tooltip';
import { CHARACTER_STAT_BADGE_COLORS, LEFT_PANEL_TABS, LeftPanelTabNames } from './constants';
import { StatPointsTooltipContent } from './StatPointsTooltipContent';

const sectionClassName =
  'min-h-0 min-w-0 flex-1 overflow-y-auto border-r border-slate-200 p-4 dark:border-slate-800';

function StatRow({
  level,
  name,
  color,
  tooltip,
}: {
  level: number;
  name: string;
  color: BadgeColor;
  tooltip?: ReactNode;
}) {
  const badge = <Badge size="sm" color={color} text={String(level)} />;

  return (
    <li className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-100">
      {tooltip ? (
        <Tooltip content={tooltip} position={TooltipPositions.right}>
          {badge}
        </Tooltip>
      ) : (
        badge
      )}
      <span>{name}</span>
    </li>
  );
}

/**
 * Left column of the main app body. Shows end-of-day character and social-link stats.
 */
export function LeftPanel() {
  const { currentDay } = useMainStore();
  const [selected, setSelected] = useState<string>(LeftPanelTabNames.Character);

  if (currentDay == null) {
    return <section aria-label="Left panel" className={sectionClassName} />;
  }

  const { characterStats, socialLinkStats, episodesStats, DormActivitiesStats } =
    currentDay.statsAtEndOfDay;
  const { characterStats: previousCharacterStats, socialLinkStats: previousSocialLinkStats } =
    currentDay.statsAtStartOfDay;
  const selectedTab = LEFT_PANEL_TABS.find((tab) => tab.name === selected) ?? LEFT_PANEL_TABS[0];

  let body: ReactNode;
  if (selectedTab.name === LeftPanelTabNames.Character) {
    body = (
      <ul className="flex flex-col gap-2" aria-label="Character stats">
        {Object.values(CharacterStatsNames).map((statName) => {
          const currentPoints = characterStats[statName];
          const level = CharacterStats.getCharacterStatsLevelFromPoints(statName, currentPoints);

          return (
            <StatRow
              key={statName}
              level={level.level}
              name={`${statName}: ${level.name}`}
              color={CHARACTER_STAT_BADGE_COLORS[statName]}
              tooltip={
                <StatPointsTooltipContent
                  currentPoints={currentPoints}
                  previousPoints={previousCharacterStats[statName]}
                  pointsToNextLevel={level.nextLevelPoints}
                />
              }
            />
          );
        })}
      </ul>
    );
  } else if (selectedTab.name === LeftPanelTabNames.SocialLinks) {
    body = (
      <ul className="flex flex-col gap-2" aria-label="Social link stats">
        {Object.values(Arcanas).map((arcana) => {
          const { level, currentPoints, currentSocialLinkLevel } = socialLinkStats[arcana];

          return (
            <StatRow
              key={arcana}
              level={level}
              name={arcana}
              color="gold"
              tooltip={
                <StatPointsTooltipContent
                  currentPoints={currentPoints}
                  previousPoints={previousSocialLinkStats[arcana].currentPoints}
                  pointsToNextLevel={currentSocialLinkLevel.pointsToNextLevel}
                />
              }
            />
          );
        })}
      </ul>
    );
  } else if (selectedTab.name === LeftPanelTabNames.Episodes) {
    body = (
      <ul className="flex flex-col gap-2" aria-label="Episodes stats">
        {Object.values(EpisodeSocialLinkNames).map((linkName) => (
          <StatRow key={linkName} level={episodesStats[linkName]} name={linkName} color="blue" />
        ))}
      </ul>
    );
  } else {
    body = (
      <ul className="flex flex-col gap-2" aria-label="Dorm activites stats">
        {Object.values(DormActivitiesNames).map((activityName) => (
          <StatRow
            key={activityName}
            level={DormActivitiesStats[activityName]}
            name={activityName}
            color="teal"
          />
        ))}
      </ul>
    );
  }

  return (
    <section aria-label="Left panel" className={sectionClassName}>
      <Tabs
        tabs={LEFT_PANEL_TABS}
        value={selectedTab.name}
        onChange={setSelected}
        body={body}
        aria-label="Day stats"
      />
    </section>
  );
}
