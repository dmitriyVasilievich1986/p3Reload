export const EpisodeSocialLinkNames = {
  Iori: 'Iori',
  Amada: 'Amada',
  Aragaki: 'Aragaki',
  Koromaru: 'Koromaru',
  Mochizuki: 'Mochizuki',
  Sanada: 'Sanada',
} as const;

export type EpisodeSocialLinkNamesTypes =
  (typeof EpisodeSocialLinkNames)[keyof typeof EpisodeSocialLinkNames];

export type EpisodesStatsProps = {
  [EpisodeSocialLinkNames.Iori]?: number;
  [EpisodeSocialLinkNames.Amada]?: number;
  [EpisodeSocialLinkNames.Aragaki]?: number;
  [EpisodeSocialLinkNames.Koromaru]?: number;
  [EpisodeSocialLinkNames.Mochizuki]?: number;
  [EpisodeSocialLinkNames.Sanada]?: number;
};
