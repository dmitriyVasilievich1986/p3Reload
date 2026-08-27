export const TextAligns = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export type TextAlign = (typeof TextAligns)[keyof typeof TextAligns];

export type LabelRowProps = {
  /** Bold label shown on the left (30% width). */
  label: string;
  /** Text shown on the right (70% width). When omitted, the row is not rendered. */
  text?: string;
};

export type CheckboxRowProps = {
  /** Text shown to the right of the checkbox. */
  text: string;
};

export type TextRowProps = {
  /** Row text content. */
  text: string;
  /** When true, renders the text in bold. Defaults to false. */
  isBold?: boolean;
  /** Horizontal text alignment. Defaults to left. */
  textAlign?: TextAlign;
};

export type ModifiersRowProps = {
  /** Stat modifiers text lines to list. Renders nothing when empty. */
  modifiers: string[];
};
