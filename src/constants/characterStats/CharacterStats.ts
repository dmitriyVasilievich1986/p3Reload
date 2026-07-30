import _ from 'lodash';

import {
  CharacterStatsNames,
  type CharacterStatsProps,
  type CharacterStatsModifierType,
} from './types';

export class CharacterStats {
  [CharacterStatsNames.Academics]!: number;
  [CharacterStatsNames.Courage]!: number;
  [CharacterStatsNames.Charm]!: number;

  constructor(props?: CharacterStatsProps) {
    this[CharacterStatsNames.Academics] = props?.[CharacterStatsNames.Academics] ?? 0;
    this[CharacterStatsNames.Courage] = props?.[CharacterStatsNames.Courage] ?? 0;
    this[CharacterStatsNames.Charm] = props?.[CharacterStatsNames.Charm] ?? 0;
  }

  private applyModifier(
    currentStats: CharacterStats,
    modifier: CharacterStatsModifierType
  ): CharacterStats {
    let newValue = 0;
    switch (modifier.operator) {
      case '+':
        newValue = currentStats[modifier.name] + modifier.value;
        break;
      case '-':
        newValue = currentStats[modifier.name] - modifier.value;
        break;
      default:
        console.warn(`Invalid operator: ${modifier.operator}`);
        break;
    }
    return new CharacterStats({
      ...currentStats,
      [modifier.name]: newValue,
    });
  }

  modify(this: CharacterStats, modifiers: CharacterStatsModifierType[]): CharacterStats {
    return _.reduce(modifiers, (acc, modifier) => this.applyModifier(acc, modifier), this);
  }
}
