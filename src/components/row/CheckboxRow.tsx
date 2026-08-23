import type { CheckboxRowProps } from './types';

/**
 * Flex row with a checkbox on the left and text on the right.
 */
export function CheckboxRow({ text }: CheckboxRowProps) {
  return (
    <label className="flex w-full items-center justify-start gap-2 text-sm text-slate-800 dark:text-slate-100">
      <input
        type="checkbox"
        onClick={(event) => event.stopPropagation()}
        className="size-4 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-400 dark:border-slate-600 dark:bg-slate-800"
      />
      <span className="leading-snug">{text}</span>
    </label>
  );
}
