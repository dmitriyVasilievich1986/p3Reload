export const DormActivitesNames = {
  IoriGarden: 'Iori [Garden]',
  IoriBook: 'Iori [Book]',
  SanadaKitchen: 'Sanada [Kitchen]',
  SanadaDVD: 'Sanada [DVD]',
  AmadaKitchen: 'Amada [Kitchen]',
  AmadaDVD: 'Amada [DVD]',
  KoromaruDVD: 'Koromaru [DVD]',
  KoromaruBrush: 'Koromaru [Brush]',
  AragakiKitchen: 'Aragaki [Kitchen]',
  AragakiGarden: 'Aragaki [Garden]',
  MitsuruKitchen: 'Mitsuru [Kitchen]',
  MitsuruBook: 'Mitsuru [Book]',
  YukariKitchen: 'Yukari [Kitchen]',
  YukariDVD: 'Yukari [DVD]',
  FuukaGarden: 'Fuuka [Garden]',
  FuukaBook: 'Fuuka [Book]',
  AigisGarden: 'Aigis [Garden]',
  AigisBook: 'Aigis [Book]',
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
  [DormActivitesNames.MitsuruKitchen]?: number;
  [DormActivitesNames.MitsuruBook]?: number;
  [DormActivitesNames.YukariKitchen]?: number;
  [DormActivitesNames.YukariDVD]?: number;
  [DormActivitesNames.FuukaGarden]?: number;
  [DormActivitesNames.FuukaBook]?: number;
  [DormActivitesNames.AigisGarden]?: number;
  [DormActivitesNames.AigisBook]?: number;
};
