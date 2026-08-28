import type { CharacterStatsModifierType } from '@services/stats/characterStats/types';

/**
 * Format a list of character-stat modifiers as display strings.
 *
 * @param modifiers - Modifiers to format.
 * @returns One string per modifier such as `["Academics +2", "Courage -1"]`.
 */
export function modifiersFormatter(modifiers: CharacterStatsModifierType[]): string[] {
  return modifiers.map((modifier) => `${modifier.name} ${modifier.operator}${modifier.value}`);
}
