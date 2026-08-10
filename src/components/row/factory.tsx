import { CheckboxRow } from './CheckboxRow';
import { LabelRow } from './LabelRow';
import { TextRow } from './TextRow';

import type { CheckboxRowProps, LabelRowProps, TextRowProps } from './types';
import type { ReactElement } from 'react';

export const RowNames = {
  LabelRow: 'LabelRow',
  CheckboxRow: 'CheckboxRow',
  TextRow: 'TextRow',
} as const;

export type RowName = (typeof RowNames)[keyof typeof RowNames];

type RowPropsByName = {
  [RowNames.LabelRow]: LabelRowProps;
  [RowNames.CheckboxRow]: CheckboxRowProps;
  [RowNames.TextRow]: TextRowProps;
};

/**
 * Creates a row element by name with the props for that row type.
 */
export function rowFactory<N extends RowName>(name: N, props: RowPropsByName[N]): ReactElement {
  switch (name) {
    case RowNames.LabelRow:
      return <LabelRow {...(props as LabelRowProps)} />;
    case RowNames.CheckboxRow:
      return <CheckboxRow {...(props as CheckboxRowProps)} />;
    case RowNames.TextRow:
      return <TextRow {...(props as TextRowProps)} />;
    default: {
      const _exhaustive: never = name;
      throw new Error(`Unknown row: ${_exhaustive}`);
    }
  }
}
