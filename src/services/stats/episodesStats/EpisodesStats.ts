import {
  EpisodeSocialLinkNames,
  type EpisodeSocialLinkNamesTypes,
  type EpisodesStatsProps,
} from './types';

export class EpisodesStats {
  [EpisodeSocialLinkNames.Iori]!: number;
  [EpisodeSocialLinkNames.Amada]!: number;
  [EpisodeSocialLinkNames.Aragaki]!: number;
  [EpisodeSocialLinkNames.Koromaru]!: number;
  [EpisodeSocialLinkNames.Mochizuki]!: number;
  [EpisodeSocialLinkNames.Sanada]!: number;

  constructor(props?: EpisodesStatsProps) {
    this[EpisodeSocialLinkNames.Iori] = props?.[EpisodeSocialLinkNames.Iori] ?? 0;
    this[EpisodeSocialLinkNames.Amada] = props?.[EpisodeSocialLinkNames.Amada] ?? 0;
    this[EpisodeSocialLinkNames.Aragaki] = props?.[EpisodeSocialLinkNames.Aragaki] ?? 0;
    this[EpisodeSocialLinkNames.Koromaru] = props?.[EpisodeSocialLinkNames.Koromaru] ?? 0;
    this[EpisodeSocialLinkNames.Mochizuki] = props?.[EpisodeSocialLinkNames.Mochizuki] ?? 0;
    this[EpisodeSocialLinkNames.Sanada] = props?.[EpisodeSocialLinkNames.Sanada] ?? 0;
  }

  increaseLevel(linkName: EpisodeSocialLinkNamesTypes, levelsAmount?: number): EpisodesStats {
    const levelsToIncrease = levelsAmount ?? 1;
    return new EpisodesStats({
      ...this,
      [linkName]: this[linkName] + levelsToIncrease,
    });
  }
}
