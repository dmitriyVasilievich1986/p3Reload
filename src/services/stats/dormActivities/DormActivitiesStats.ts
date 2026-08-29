import {
  DormActivitiesNames,
  type DormActivitiesNamesTypes,
  type DormActivitiesStatsProps,
} from './types';

export class DormActivitiesStats {
  [DormActivitiesNames.IoriGarden]!: number;
  [DormActivitiesNames.IoriBook]!: number;
  [DormActivitiesNames.SanadaKitchen]!: number;
  [DormActivitiesNames.SanadaDVD]!: number;
  [DormActivitiesNames.AmadaKitchen]!: number;
  [DormActivitiesNames.AmadaDVD]!: number;
  [DormActivitiesNames.KoromaruDVD]!: number;
  [DormActivitiesNames.KoromaruBrush]!: number;
  [DormActivitiesNames.AragakiKitchen]!: number;
  [DormActivitiesNames.AragakiGarden]!: number;
  [DormActivitiesNames.MitsuruKitchen]!: number;
  [DormActivitiesNames.MitsuruBook]!: number;
  [DormActivitiesNames.YukariKitchen]!: number;
  [DormActivitiesNames.YukariDVD]!: number;
  [DormActivitiesNames.FuukaGarden]!: number;
  [DormActivitiesNames.FuukaBook]!: number;
  [DormActivitiesNames.AigisGarden]!: number;
  [DormActivitiesNames.AigisBook]!: number;

  constructor(props?: DormActivitiesStatsProps) {
    this[DormActivitiesNames.IoriGarden] = props?.[DormActivitiesNames.IoriGarden] ?? 0;
    this[DormActivitiesNames.IoriBook] = props?.[DormActivitiesNames.IoriBook] ?? 0;
    this[DormActivitiesNames.SanadaKitchen] = props?.[DormActivitiesNames.SanadaKitchen] ?? 0;
    this[DormActivitiesNames.SanadaDVD] = props?.[DormActivitiesNames.SanadaDVD] ?? 0;
    this[DormActivitiesNames.AmadaKitchen] = props?.[DormActivitiesNames.AmadaKitchen] ?? 0;
    this[DormActivitiesNames.AmadaDVD] = props?.[DormActivitiesNames.AmadaDVD] ?? 0;
    this[DormActivitiesNames.KoromaruDVD] = props?.[DormActivitiesNames.KoromaruDVD] ?? 0;
    this[DormActivitiesNames.KoromaruBrush] = props?.[DormActivitiesNames.KoromaruBrush] ?? 0;
    this[DormActivitiesNames.AragakiKitchen] = props?.[DormActivitiesNames.AragakiKitchen] ?? 0;
    this[DormActivitiesNames.AragakiGarden] = props?.[DormActivitiesNames.AragakiGarden] ?? 0;
    this[DormActivitiesNames.MitsuruKitchen] = props?.[DormActivitiesNames.MitsuruKitchen] ?? 0;
    this[DormActivitiesNames.MitsuruBook] = props?.[DormActivitiesNames.MitsuruBook] ?? 0;
    this[DormActivitiesNames.YukariKitchen] = props?.[DormActivitiesNames.YukariKitchen] ?? 0;
    this[DormActivitiesNames.YukariDVD] = props?.[DormActivitiesNames.YukariDVD] ?? 0;
    this[DormActivitiesNames.FuukaGarden] = props?.[DormActivitiesNames.FuukaGarden] ?? 0;
    this[DormActivitiesNames.FuukaBook] = props?.[DormActivitiesNames.FuukaBook] ?? 0;
    this[DormActivitiesNames.AigisGarden] = props?.[DormActivitiesNames.AigisGarden] ?? 0;
    this[DormActivitiesNames.AigisBook] = props?.[DormActivitiesNames.AigisBook] ?? 0;
  }

  increaseLevel(linkName: DormActivitiesNamesTypes, levelsAmount?: number): DormActivitiesStats {
    const levelsToIncrease = levelsAmount ?? 1;
    return new DormActivitiesStats({
      ...this,
      [linkName]: this[linkName] + levelsToIncrease,
    });
  }
}
