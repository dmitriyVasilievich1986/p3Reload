import { AdditionalStats } from './additionalStats';
import { CharacterStats } from './characterStats';
import { DormActivitiesStats } from './dormActivities';
import { EpisodesStats } from './episodesStats';
import { SocialLinkStats } from './socialLinkStats';

import type { StatsProps } from './types';

export class Stats {
  additionalStats: AdditionalStats;
  characterStats: CharacterStats;
  socialLinkStats: SocialLinkStats;
  episodesStats: EpisodesStats;
  DormActivitiesStats: DormActivitiesStats;

  constructor(props?: StatsProps) {
    this.additionalStats = props?.additionalStats ?? new AdditionalStats();
    this.characterStats = props?.characterStats ?? new CharacterStats();
    this.socialLinkStats = props?.socialLinkStats ?? new SocialLinkStats();
    this.episodesStats = props?.episodesStats ?? new EpisodesStats();
    this.DormActivitiesStats = props?.DormActivitiesStats ?? new DormActivitiesStats();
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

  updateDormActivitiesStats(DormActivitiesStats: DormActivitiesStats) {
    return new Stats({
      ...this,
      DormActivitiesStats,
    });
  }
}
