import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { Arcanas } from '@constants/arcanas';
import {
  createAdditionalStatsFixture,
  createCharacterStatsFixture,
  createIsAvailablePropsFixture,
  createSocialLinkStatsFixture,
  createStatsFixture,
} from '@services/fixtures';
import { CharacterStatsNames } from '@services/stats/characterStats';
import { SocialLinkLevel } from '@services/stats/socialLinkLevel/socialLinkLevel';

import { MagicianEvent } from './magician';

function createCardNeededLevel(): SocialLinkLevel {
  return new SocialLinkLevel({
    level: 0,
    pointsToNextLevel: 4,
    nextLevelPointsToNextLevel: 4,
    previousLevelPointsToNextLevel: 0,
    isRomantic: false,
    isFork: false,
    questions: [
      {
        text: 'Question',
        answers: [{ text: 'Answer', points: 3, isFork: false }],
      },
    ],
  });
}

function renderMagician(overrides?: Parameters<typeof createStatsFixture>[0]) {
  const stats = createStatsFixture(overrides);
  const props = createIsAvailablePropsFixture({ stats });
  // `render()` reads `this.stats`, not `props.stats` - the overrides must go
  // onto the event instance itself or they're silently ignored.
  const event = new MagicianEvent({
    time: props.time,
    skipCheck: true,
    isChangeable: true,
    stats,
  });

  render(<MemoryRouter>{event.render(props)}</MemoryRouter>);
}

describe('SocialLinkEventBase render', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders no modifier icons with default stats', () => {
    renderMagician();

    expect(screen.queryByLabelText('Modifiers')).not.toBeInTheDocument();
  });

  it('shows the charismatic character icon when charm is maxed', () => {
    renderMagician({
      characterStats: createCharacterStatsFixture({ [CharacterStatsNames.Charm]: 100 }),
    });

    expect(screen.getByAltText('Charismatic character')).toBeInTheDocument();
  });

  it('shows the "Top class" tooltip when the after-exam modifier is 1.51', async () => {
    const user = userEvent.setup();
    renderMagician({ additionalStats: createAdditionalStatsFixture({ afterExamModifier: 1.51 }) });

    await user.hover(screen.getByAltText('Exam passed'));

    expect(screen.getByRole('tooltip')).toHaveTextContent(/^Top class:/);
  });

  it('shows an elaborated "Top 10" tooltip when the after-exam modifier is 1.21', async () => {
    const user = userEvent.setup();
    renderMagician({ additionalStats: createAdditionalStatsFixture({ afterExamModifier: 1.21 }) });

    await user.hover(screen.getByAltText('Exam passed'));

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent(/^Top 10:/);
    // The "top 10" label is elaborated into a full explanatory sentence, not left bare.
    expect(tooltip.textContent?.length ?? 0).toBeGreaterThan('Top 10'.length + 20);
  });

  it('shows the tarot card icon when a card is the better way to reach the next rank', () => {
    renderMagician({
      socialLinkStats: createSocialLinkStatsFixture({
        [Arcanas.Magician]: {
          level: 0,
          isRomantic: false,
          currentPoints: 0,
          currentSocialLinkLevel: createCardNeededLevel(),
        },
      }),
    });

    expect(screen.getByAltText('Tarot card')).toBeInTheDocument();
  });
});
