export const DormActivitiesNames = {
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

export type DormActivitiesNamesTypes =
  (typeof DormActivitiesNames)[keyof typeof DormActivitiesNames];

export type DormActivitiesStatsProps = {
  [DormActivitiesNames.IoriGarden]?: number;
  [DormActivitiesNames.IoriBook]?: number;
  [DormActivitiesNames.SanadaKitchen]?: number;
  [DormActivitiesNames.SanadaDVD]?: number;
  [DormActivitiesNames.AmadaKitchen]?: number;
  [DormActivitiesNames.AmadaDVD]?: number;
  [DormActivitiesNames.AragakiKitchen]?: number;
  [DormActivitiesNames.AragakiGarden]?: number;
  [DormActivitiesNames.KoromaruDVD]?: number;
  [DormActivitiesNames.KoromaruBrush]?: number;
  [DormActivitiesNames.MitsuruKitchen]?: number;
  [DormActivitiesNames.MitsuruBook]?: number;
  [DormActivitiesNames.YukariKitchen]?: number;
  [DormActivitiesNames.YukariDVD]?: number;
  [DormActivitiesNames.FuukaGarden]?: number;
  [DormActivitiesNames.FuukaBook]?: number;
  [DormActivitiesNames.AigisGarden]?: number;
  [DormActivitiesNames.AigisBook]?: number;
};
