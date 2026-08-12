import type { LabelRowProps } from './types';

/**
 * Flex row with a bold label (20%) and text value (80%).
 * Returns null when `text` is undefined.
 */
export function LabelRow({ label, text }: LabelRowProps) {
  if (text === undefined) {
    return null;
  }

  return (
    <div className="flex w-full items-start gap-2 text-sm text-slate-800 dark:text-slate-100">
      <span className="w-[20%] shrink-0 font-bold leading-snug">{label}</span>
      <span className="w-[80%] leading-snug">{text}</span>
    </div>
  );
}
