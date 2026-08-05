import { expect } from 'vite-plus/test';

import { Arcanas } from '@constants/arcanas';
import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';
import { SocialLinkLevel } from '@services/stats/socialLinkLevel';
import { SocialLinkStats } from '@services/stats/socialLinkStats';

import { IsLevelUpAvailable } from './IsLevelUpAvailable';

function createSocialLinkStatsWithLevelUpReady(isReady: boolean): SocialLinkStats {
  return new SocialLinkStats({
    [Arcanas.Chariot]: {
      level: 1,
      isRomantic: false,
      currentPoints: isReady ? 10 : 0,
      currentSocialLinkLevel: new SocialLinkLevel({
        level: 1,
        pointsToNextLevel: 10,
        nextLevelPointsToNextLevel: 0,
        previousLevelPointsToNextLevel: 0,
        isRomantic: false,
        isFork: false,
        questions: [],
      }),
    },
  });
}

isAvailableFixtures('should be available', () => {
  const socialLinkStats = createSocialLinkStatsWithLevelUpReady(true);
  const availability = new IsLevelUpAvailable({
    name: Arcanas.Chariot,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ socialLinkStats }))).toBe(true);
});

isAvailableFixtures('should be unavailable', () => {
  const socialLinkStats = createSocialLinkStatsWithLevelUpReady(false);
  const availability = new IsLevelUpAvailable({
    name: Arcanas.Chariot,
    isLevelUpAvailable: true,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ socialLinkStats }))).toBe(false);
});

isAvailableFixtures('should be unavailable with reverse logic', () => {
  const socialLinkStats = createSocialLinkStatsWithLevelUpReady(true);
  const availability = new IsLevelUpAvailable({
    name: Arcanas.Chariot,
    isLevelUpAvailable: false,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ socialLinkStats }))).toBe(false);
});

isAvailableFixtures('should be available with reverse logic', () => {
  const socialLinkStats = createSocialLinkStatsWithLevelUpReady(false);
  const availability = new IsLevelUpAvailable({
    name: Arcanas.Chariot,
    isLevelUpAvailable: false,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ socialLinkStats }))).toBe(true);
});
