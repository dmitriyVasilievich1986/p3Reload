import type { LabelRowProps } from './types';

/**
 * Flex row with a bold label (30%) and text value (70%).
 */
export function LabelRow({ label, text }: LabelRowProps) {
  return (
    <div className="flex w-full items-start gap-2 text-sm text-slate-800 dark:text-slate-100">
      <span className="w-[20%] shrink-0 font-bold leading-snug">{label}</span>
      <span className="w-[80%] leading-snug">{text}</span>
    </div>
  );
}
