import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vite-plus/test';

import { Arcanas } from '@constants/arcanas';
import {
  createCharacterStatsFixture,
  createDayFixture,
  createDormActivitiesStatsFixture,
  createEpisodesStatsFixture,
  createSocialLinkStatsFixture,
  createStatsFixture,
} from '@services/fixtures';
import { SocialLinkLevel } from '@services/stats';
import { CharacterStatsNames } from '@services/stats/characterStats';
import { DormActivitiesNames } from '@services/stats/dormActivities';
import { EpisodeSocialLinkNames } from '@services/stats/episodesStats';
import { useMainStore } from '@store/main';

import { LeftPanelTabNames } from './constants';
import { getStatPointsTooltipRows } from './getStatPointsTooltipRows';
import { LeftPanel } from './LeftPanel';

function rowFor(name: string) {
  return screen.getByText(name).closest('li');
}

function createMagicianSocialLinkStats(currentPoints = 12) {
  return createSocialLinkStatsFixture({
    [Arcanas.Magician]: {
      level: 1,
      isRomantic: false,
      currentPoints,
      currentSocialLinkLevel: new SocialLinkLevel({
        level: 1,
        pointsToNextLevel: 30,
        nextLevelPointsToNextLevel: 0,
        previousLevelPointsToNextLevel: 0,
        isRomantic: false,
        isFork: false,
        questions: [],
      }),
    },
  });
}

function createCharacterDay(
  characterStats: {
    [CharacterStatsNames.Academics]?: number;
    [CharacterStatsNames.Courage]?: number;
    [CharacterStatsNames.Charm]?: number;
  },
  previousCharacterStats?: {
    [CharacterStatsNames.Academics]?: number;
    [CharacterStatsNames.Courage]?: number;
    [CharacterStatsNames.Charm]?: number;
  }
) {
  const statsAtEndOfDay = createStatsFixture({
    characterStats: createCharacterStatsFixture(characterStats),
  });

  return createDayFixture({
    statsAtStartOfDay: createStatsFixture({
      characterStats: createCharacterStatsFixture(previousCharacterStats ?? characterStats),
    }),
    statsAtEndOfDay,
  });
}

describe('getStatPointsTooltipRows', () => {
  it('includes current points, next-level threshold, and remaining points', () => {
    expect(getStatPointsTooltipRows(45, 60)).toEqual([
      { label: 'Current', value: '45 pts.' },
      { label: 'Next', value: '60 pts.' },
      { label: 'Left', value: '15 pts.' },
    ]);
  });

  it('treats a null next-level threshold as max with nothing left', () => {
    expect(getStatPointsTooltipRows(230, null)).toEqual([
      { label: 'Current', value: '230 pts.' },
      { label: 'Next', value: 'max' },
      { label: 'Left', value: '0 pts.' },
    ]);
  });

  it('does not report negative remaining points', () => {
    expect(getStatPointsTooltipRows(25, 20)).toEqual([
      { label: 'Current', value: '25 pts.' },
      { label: 'Next', value: '20 pts.' },
      { label: 'Left', value: '0 pts.' },
    ]);
  });

  it('shows a previous-to-current range when points changed from the previous day', () => {
    expect(getStatPointsTooltipRows(25, 60, 15)).toEqual([
      { label: 'Current', value: '15 -> 25 pts.' },
      { label: 'Next', value: '60 pts.' },
      { label: 'Left', value: '35 pts.' },
    ]);
  });

  it('shows only current points when they match the previous day', () => {
    expect(getStatPointsTooltipRows(15, 60, 15)).toEqual([
      { label: 'Current', value: '15 pts.' },
      { label: 'Next', value: '60 pts.' },
      { label: 'Left', value: '45 pts.' },
    ]);
  });
});

describe('LeftPanel', () => {
  beforeEach(() => {
    useMainStore.setState({
      isLoading: false,
      calendar: null,
      currentDay: null,
      selectedEvent: null,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders an empty panel when currentDay is null', () => {
    render(<LeftPanel />);

    expect(screen.getByRole('region', { name: 'Left panel' })).toBeInTheDocument();
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
  });

  it('renders an empty panel when currentDay is undefined', () => {
    useMainStore.setState({ currentDay: undefined });

    render(<LeftPanel />);

    expect(screen.getByRole('region', { name: 'Left panel' })).toBeInTheDocument();
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
  });

  it('shows Character stats from statsAtEndOfDay with the level in a Badge', () => {
    const day = createCharacterDay({
      [CharacterStatsNames.Academics]: 230,
      [CharacterStatsNames.Courage]: 45,
      [CharacterStatsNames.Charm]: 15,
    });
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    expect(screen.getByRole('tab', { name: LeftPanelTabNames.Character })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('list', { name: 'Character stats' })).toBeInTheDocument();

    const academics = rowFor('Academics: Genius');
    expect(academics).not.toBeNull();
    expect(within(academics!).getByText('6')).toHaveClass('rounded-full');

    const courage = rowFor('Courage: Tough');
    expect(courage).not.toBeNull();
    expect(within(courage!).getByText('4')).toHaveClass('rounded-full');

    const charm = rowFor('Charm: Unpolished');
    expect(charm).not.toBeNull();
    expect(within(charm!).getByText('2')).toHaveClass('rounded-full');
  });

  it('shows a points tooltip when hovering a Character badge', async () => {
    const user = userEvent.setup();
    const day = createCharacterDay({
      [CharacterStatsNames.Academics]: 230,
      [CharacterStatsNames.Courage]: 45,
      [CharacterStatsNames.Charm]: 15,
    });
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    await user.hover(within(rowFor('Courage: Tough')!).getByText('4'));

    const courageTooltip = screen.getByRole('tooltip');
    expect(courageTooltip.querySelector('dl')).toHaveClass('flex', 'flex-col');
    getStatPointsTooltipRows(45, 60).forEach((row) => {
      const pair = within(courageTooltip).getByText(row.label).parentElement;
      expect(pair).toHaveClass('flex', 'justify-between');
      expect(within(pair!).getByText(row.value)).toBeInTheDocument();
    });

    await user.unhover(within(rowFor('Courage: Tough')!).getByText('4'));
    await user.hover(within(rowFor('Academics: Genius')!).getByText('6'));

    const geniusTooltip = screen.getByRole('tooltip');
    expect(within(geniusTooltip).getByText('Current')).toBeInTheDocument();
    expect(within(geniusTooltip).getByText('230 pts.')).toBeInTheDocument();
    expect(within(geniusTooltip).getByText('max')).toBeInTheDocument();
  });

  it('shows a previous-to-current range in the Character tooltip when points changed', async () => {
    const user = userEvent.setup();
    const day = createCharacterDay(
      {
        [CharacterStatsNames.Academics]: 230,
        [CharacterStatsNames.Courage]: 25,
        [CharacterStatsNames.Charm]: 15,
      },
      {
        [CharacterStatsNames.Academics]: 230,
        [CharacterStatsNames.Courage]: 15,
        [CharacterStatsNames.Charm]: 15,
      }
    );
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    await user.hover(within(rowFor('Courage: Ordinary')!).getByText('2'));

    expect(within(screen.getByRole('tooltip')).getByText('15 -> 25 pts.')).toBeInTheDocument();
  });

  it('shows Social Link stats from statsAtEndOfDay with the level in a Badge', async () => {
    const user = userEvent.setup();
    const socialLinkStats = createMagicianSocialLinkStats();
    const day = createDayFixture({
      statsAtStartOfDay: createStatsFixture({ socialLinkStats }),
      statsAtEndOfDay: createStatsFixture({ socialLinkStats }),
    });
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    await user.click(screen.getByRole('tab', { name: LeftPanelTabNames.SocialLinks }));

    expect(screen.getByRole('tab', { name: LeftPanelTabNames.SocialLinks })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('list', { name: 'Social link stats' })).toBeInTheDocument();
    expect(screen.queryByRole('list', { name: 'Character stats' })).not.toBeInTheDocument();

    const magician = rowFor('Magician');
    expect(magician).not.toBeNull();
    expect(within(magician!).getByText('1')).toHaveClass('rounded-full');

    const fool = rowFor('Fool');
    expect(fool).not.toBeNull();
    expect(within(fool!).getByText('0')).toHaveClass('rounded-full');
  });

  it('shows a points tooltip when hovering a Social Link badge', async () => {
    const user = userEvent.setup();
    const socialLinkStats = createMagicianSocialLinkStats();
    const day = createDayFixture({
      statsAtStartOfDay: createStatsFixture({ socialLinkStats }),
      statsAtEndOfDay: createStatsFixture({ socialLinkStats }),
    });
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    await user.click(screen.getByRole('tab', { name: LeftPanelTabNames.SocialLinks }));
    await user.hover(within(rowFor('Magician')!).getByText('1'));

    expect(screen.getByRole('tooltip').querySelector('dl')).toHaveClass('flex', 'flex-col');
    getStatPointsTooltipRows(12, 30).forEach((row) => {
      const pair = within(screen.getByRole('tooltip')).getByText(row.label).parentElement;
      expect(pair).toHaveClass('flex', 'justify-between');
      expect(within(pair!).getByText(row.value)).toBeInTheDocument();
    });
  });

  it('shows a previous-to-current range in the Social Link tooltip when points changed', async () => {
    const user = userEvent.setup();
    const day = createDayFixture({
      statsAtStartOfDay: createStatsFixture({
        socialLinkStats: createMagicianSocialLinkStats(12),
      }),
      statsAtEndOfDay: createStatsFixture({
        socialLinkStats: createMagicianSocialLinkStats(20),
      }),
    });
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    await user.click(screen.getByRole('tab', { name: LeftPanelTabNames.SocialLinks }));
    await user.hover(within(rowFor('Magician')!).getByText('1'));

    expect(within(screen.getByRole('tooltip')).getByText('12 -> 20 pts.')).toBeInTheDocument();
  });

  it('shows Episodes stats from statsAtEndOfDay with the level in a Badge', async () => {
    const user = userEvent.setup();
    const episodesStats = createEpisodesStatsFixture({
      [EpisodeSocialLinkNames.Iori]: 2,
      [EpisodeSocialLinkNames.Sanada]: 1,
    });
    const day = createDayFixture({
      statsAtStartOfDay: createStatsFixture({ episodesStats }),
      statsAtEndOfDay: createStatsFixture({ episodesStats }),
    });
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    await user.click(screen.getByRole('tab', { name: LeftPanelTabNames.Episodes }));

    expect(screen.getByRole('tab', { name: LeftPanelTabNames.Episodes })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('list', { name: 'Episodes stats' })).toBeInTheDocument();
    expect(screen.queryByRole('list', { name: 'Character stats' })).not.toBeInTheDocument();

    const iori = rowFor(EpisodeSocialLinkNames.Iori);
    expect(iori).not.toBeNull();
    expect(within(iori!).getByText('2')).toHaveClass('rounded-full');

    const amada = rowFor(EpisodeSocialLinkNames.Amada);
    expect(amada).not.toBeNull();
    expect(within(amada!).getByText('0')).toHaveClass('rounded-full');
  });

  it('shows Dorm activites stats from statsAtEndOfDay with the level in a Badge', async () => {
    const user = userEvent.setup();
    const DormActivitiesStats = createDormActivitiesStatsFixture({
      [DormActivitiesNames.IoriGarden]: 2,
      [DormActivitiesNames.AragakiKitchen]: 1,
    });
    const day = createDayFixture({
      statsAtStartOfDay: createStatsFixture({ DormActivitiesStats }),
      statsAtEndOfDay: createStatsFixture({ DormActivitiesStats }),
    });
    useMainStore.setState({ currentDay: day });

    render(<LeftPanel />);

    await user.click(screen.getByRole('tab', { name: LeftPanelTabNames.DormActivities }));

    expect(screen.getByRole('tab', { name: LeftPanelTabNames.DormActivities })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    expect(screen.getByRole('list', { name: 'Dorm activites stats' })).toBeInTheDocument();
    expect(screen.queryByRole('list', { name: 'Character stats' })).not.toBeInTheDocument();

    const ioriGarden = rowFor(DormActivitiesNames.IoriGarden);
    expect(ioriGarden).not.toBeNull();
    expect(within(ioriGarden!).getByText('2')).toHaveClass('rounded-full');

    const koromaruDvd = rowFor(DormActivitiesNames.KoromaruDVD);
    expect(koromaruDvd).not.toBeNull();
    expect(within(koromaruDvd!).getByText('0')).toHaveClass('rounded-full');
  });
});
