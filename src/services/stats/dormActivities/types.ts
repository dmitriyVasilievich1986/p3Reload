export const DormActivitesNames = {
  IoriGarden: 'IoriGarden',
  IoriBook: 'IoriBook',
  SanadaKitchen: 'SanadaKitchen',
  SanadaDVD: 'SanadaDVD',
  AmadaKitchen: 'AmadaKitchen',
  AmadaDVD: 'AmadaDVD',
  KoromaruDVD: 'KoromaruDVD',
  KoromaruBrush: 'KoromaruBrush',
  AragakiKitchen: 'AragakiKitchen',
  AragakiGarden: 'AragakiGarden',
} as const;

export type DormActivitesNamesTypes = (typeof DormActivitesNames)[keyof typeof DormActivitesNames];

export type DormActivitesStatsProps = {
  [DormActivitesNames.IoriGarden]?: number;
  [DormActivitesNames.IoriBook]?: number;
  [DormActivitesNames.SanadaKitchen]?: number;
  [DormActivitesNames.SanadaDVD]?: number;
  [DormActivitesNames.AmadaKitchen]?: number;
  [DormActivitesNames.AmadaDVD]?: number;
  [DormActivitesNames.AragakiKitchen]?: number;
  [DormActivitesNames.AragakiGarden]?: number;
  [DormActivitesNames.KoromaruDVD]?: number;
  [DormActivitesNames.KoromaruBrush]?: number;
};
