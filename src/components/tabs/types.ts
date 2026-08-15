import type { BadgeColor } from '../badge';
import type { ReactNode } from 'react';

export type TabItem = {
  /** Full tab label; the first character is shown when collapsed. */
  name: string;
  /** Mnemonic color for the tab. */
  color: BadgeColor;
};

export type TabsProps = {
  /** Tabs to render (vertical). Names should be unique. */
  tabs: TabItem[];
  /** Bordered panel content; border color follows the selected tab. */
  body?: ReactNode;
  /** Controlled selected tab name. */
  value?: string;
  /** Uncontrolled initial selected tab name. Defaults to the first tab. */
  defaultValue?: string;
  /** Called when the selected tab changes. */
  onChange?: (name: string) => void;
  className?: string;
  /** Accessible name for the tab list. */
  'aria-label'?: string;
};
