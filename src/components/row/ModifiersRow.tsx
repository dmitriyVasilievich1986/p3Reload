import { LabelRow } from './LabelRow';

import type { ModifiersRowProps } from './types';

/**
 * Renders a "Stats:" label followed by a bulleted line with the character-stat modifiers.
 * Returns null when `modifiers` is empty.
 */
export function ModifiersRow({ modifiers }: ModifiersRowProps) {
  if (modifiers.length === 0) {
    return null;
  }

  return (
    <>
      <LabelRow key="stats" label="Stats:" text={''} />
      <ul className="list-disc pl-5 text-sm text-slate-800 dark:text-slate-100">
        {modifiers.map((modifier) => (
          <li key={modifier}>{modifier}</li>
        ))}
      </ul>
    </>
  );
}
