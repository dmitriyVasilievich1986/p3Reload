import {
  DormActivitesNames,
  type DormActivitesNamesTypes,
  type DormActivitesStatsProps,
} from './types';

export class DormActivitesStats {
  [DormActivitesNames.IoriGarden]!: number;
  [DormActivitesNames.IoriBook]!: number;
  [DormActivitesNames.SanadaKitchen]!: number;
  [DormActivitesNames.SanadaDVD]!: number;
  [DormActivitesNames.AmadaKitchen]!: number;
  [DormActivitesNames.AmadaDVD]!: number;
  [DormActivitesNames.KoromaruDVD]!: number;
  [DormActivitesNames.KoromaruBrush]!: number;
  [DormActivitesNames.AragakiKitchen]!: number;
  [DormActivitesNames.AragakiGarden]!: number;
  [DormActivitesNames.MitsuruKitchen]!: number;
  [DormActivitesNames.MitsuruBook]!: number;
  [DormActivitesNames.YukariKitchen]!: number;
  [DormActivitesNames.YukariDVD]!: number;
  [DormActivitesNames.FuukaGarden]!: number;
  [DormActivitesNames.FuukaBook]!: number;
  [DormActivitesNames.AigisGarden]!: number;
  [DormActivitesNames.AigisBook]!: number;

  constructor(props?: DormActivitesStatsProps) {
    this[DormActivitesNames.IoriGarden] = props?.[DormActivitesNames.IoriGarden] ?? 0;
    this[DormActivitesNames.IoriBook] = props?.[DormActivitesNames.IoriBook] ?? 0;
    this[DormActivitesNames.SanadaKitchen] = props?.[DormActivitesNames.SanadaKitchen] ?? 0;
    this[DormActivitesNames.SanadaDVD] = props?.[DormActivitesNames.SanadaDVD] ?? 0;
    this[DormActivitesNames.AmadaKitchen] = props?.[DormActivitesNames.AmadaKitchen] ?? 0;
    this[DormActivitesNames.AmadaDVD] = props?.[DormActivitesNames.AmadaDVD] ?? 0;
    this[DormActivitesNames.KoromaruDVD] = props?.[DormActivitesNames.KoromaruDVD] ?? 0;
    this[DormActivitesNames.KoromaruBrush] = props?.[DormActivitesNames.KoromaruBrush] ?? 0;
    this[DormActivitesNames.AragakiKitchen] = props?.[DormActivitesNames.AragakiKitchen] ?? 0;
    this[DormActivitesNames.AragakiGarden] = props?.[DormActivitesNames.AragakiGarden] ?? 0;
    this[DormActivitesNames.MitsuruKitchen] = props?.[DormActivitesNames.MitsuruKitchen] ?? 0;
    this[DormActivitesNames.MitsuruBook] = props?.[DormActivitesNames.MitsuruBook] ?? 0;
    this[DormActivitesNames.YukariKitchen] = props?.[DormActivitesNames.YukariKitchen] ?? 0;
    this[DormActivitesNames.YukariDVD] = props?.[DormActivitesNames.YukariDVD] ?? 0;
    this[DormActivitesNames.FuukaGarden] = props?.[DormActivitesNames.FuukaGarden] ?? 0;
    this[DormActivitesNames.FuukaBook] = props?.[DormActivitesNames.FuukaBook] ?? 0;
    this[DormActivitesNames.AigisGarden] = props?.[DormActivitesNames.AigisGarden] ?? 0;
    this[DormActivitesNames.AigisBook] = props?.[DormActivitesNames.AigisBook] ?? 0;
  }

  increaseLevel(linkName: DormActivitesNamesTypes, levelsAmount?: number): DormActivitesStats {
    const levelsToIncrease = levelsAmount ?? 1;
    return new DormActivitesStats({
      ...this,
      [linkName]: this[linkName] + levelsToIncrease,
    });
  }
}
