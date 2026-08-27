import { AdditionalStats } from './additionalStats';
import { CharacterStats } from './characterStats';
import { EpisodesStats } from './episodesStats';
import { SocialLinkStats } from './socialLinkStats';

import type { StatsProps } from './types';

export class Stats {
  additionalStats: AdditionalStats;
  characterStats: CharacterStats;
  socialLinkStats: SocialLinkStats;
  episodesStats: EpisodesStats;

  constructor(props?: StatsProps) {
    this.additionalStats = props?.additionalStats ?? new AdditionalStats();
    this.characterStats = props?.characterStats ?? new CharacterStats();
    this.socialLinkStats = props?.socialLinkStats ?? new SocialLinkStats();
    this.episodesStats = props?.episodesStats ?? new EpisodesStats();
  }

  updateAdditionalStats(additionalStats: AdditionalStats) {
    return new Stats({
      ...this,
      additionalStats,
    });
  }

  updateCharacterStats(characterStats: CharacterStats) {
    return new Stats({
      ...this,
      characterStats,
    });
  }

  updateSocialLinkStats(socialLinkStats: SocialLinkStats) {
    return new Stats({
      ...this,
      socialLinkStats,
    });
  }

  updateEpisodesStats(episodesStats: EpisodesStats) {
    return new Stats({
      ...this,
      episodesStats,
    });
  }
}
