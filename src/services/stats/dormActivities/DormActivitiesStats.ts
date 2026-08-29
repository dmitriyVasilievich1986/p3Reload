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
  }

  increaseLevel(linkName: DormActivitesNamesTypes, levelsAmount?: number): DormActivitesStats {
    const levelsToIncrease = levelsAmount ?? 1;
    return new DormActivitesStats({
      ...this,
      [linkName]: this[linkName] + levelsToIncrease,
    });
  }
}
