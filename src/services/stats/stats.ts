import { AdditionalStats } from './additionalStats';
import { CharacterStats } from './characterStats';
import { DormActivitesStats } from './dormActivities';
import { EpisodesStats } from './episodesStats';
import { SocialLinkStats } from './socialLinkStats';

import type { StatsProps } from './types';

export class Stats {
  additionalStats: AdditionalStats;
  characterStats: CharacterStats;
  socialLinkStats: SocialLinkStats;
  episodesStats: EpisodesStats;
  dormActivitesStats: DormActivitesStats;

  constructor(props?: StatsProps) {
    this.additionalStats = props?.additionalStats ?? new AdditionalStats();
    this.characterStats = props?.characterStats ?? new CharacterStats();
    this.socialLinkStats = props?.socialLinkStats ?? new SocialLinkStats();
    this.episodesStats = props?.episodesStats ?? new EpisodesStats();
    this.dormActivitesStats = props?.dormActivitesStats ?? new DormActivitesStats();
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

  updateDormActivitesStats(dormActivitesStats: DormActivitesStats) {
    return new Stats({
      ...this,
      dormActivitesStats,
    });
  }
}
