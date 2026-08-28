import { LabelRow } from './LabelRow';

import type { ModifiersRowProps } from './types';

export function ModifiersRow({ modifiers }: ModifiersRowProps) {
  if (modifiers.length === 0) {
    return null;
  }

  return (
    <>
      <LabelRow key="stats" label="Stats:" text={''} />
      <ul className="list-disc pl-5 text-sm text-slate-800 dark:text-slate-100">
        {modifiers.map((modifier, index) => (
          <li key={`${modifier}-${index}`}>{modifier}</li>
        ))}
      </ul>
    </>
  );
}
