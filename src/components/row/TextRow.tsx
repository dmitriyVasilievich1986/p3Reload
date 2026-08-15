import classNames from 'classnames';

import { TextAligns, type TextRowProps } from './types';

const textAlignClasses = {
  [TextAligns.left]: 'text-left',
  [TextAligns.center]: 'text-center',
  [TextAligns.right]: 'text-right',
} as const;

/**
 * Flex row that renders a single text line with optional bold and alignment.
 */
export function TextRow({ text, isBold = false, textAlign = TextAligns.left }: TextRowProps) {
  return (
    <div
      className={classNames(
        'flex w-full items-center text-sm text-slate-800 dark:text-slate-100',
        textAlignClasses[textAlign],
        isBold && 'font-bold'
      )}
    >
      <span className="w-full leading-snug">{text}</span>
    </div>
  );
}
