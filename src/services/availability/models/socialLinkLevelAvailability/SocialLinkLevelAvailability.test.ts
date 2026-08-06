import { expect } from 'vite-plus/test';

import { Arcanas } from '@constants/arcanas';
import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';
import { Stats } from '@services/stats';
import { SocialLinkLevel } from '@services/stats/socialLinkLevel';
import { SocialLinkStats } from '@services/stats/socialLinkStats';

import { SocialLinkLevelAvailability } from './SocialLinkLevelAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new SocialLinkLevelAvailability({
    name: Arcanas.Chariot,
    operator: 'gt',
    level: 1,
  });
  const socialLinkStats = new SocialLinkStats({
    [Arcanas.Chariot]: {
      level: 2,
      isRomantic: false,
      currentPoints: 0,
      currentSocialLinkLevel: new SocialLinkLevel({
        level: 2,
        pointsToNextLevel: 10,
        nextLevelPointsToNextLevel: 0,
        previousLevelPointsToNextLevel: 0,
        isRomantic: false,
        isFork: false,
        questions: [],
      }),
    },
  });
  const stats = new Stats({ socialLinkStats });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toEqual(true);
});

isAvailableFixtures('should not be available', () => {
  const availability = new SocialLinkLevelAvailability({
    name: Arcanas.Chariot,
    operator: 'gt',
    level: 1,
  });
  const socialLinkStats = new SocialLinkStats({
    [Arcanas.Chariot]: {
      level: 1,
      isRomantic: false,
      currentPoints: 0,
      currentSocialLinkLevel: new SocialLinkLevel({
        level: 2,
        pointsToNextLevel: 10,
        nextLevelPointsToNextLevel: 0,
        previousLevelPointsToNextLevel: 0,
        isRomantic: false,
        isFork: false,
        questions: [],
      }),
    },
  });
  const stats = new Stats({ socialLinkStats });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toEqual(false);
});
