import classNames from 'classnames';
import { useId, useState } from 'react';

import type { BadgeColor } from '../badge';
import type { TabsProps } from './types';

const colorClasses: Record<BadgeColor, string> = {
  gold: 'bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:hover:bg-amber-900',
  green:
    'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-950 dark:text-emerald-200 dark:hover:bg-emerald-900',
  blue: 'bg-sky-100 text-sky-800 hover:bg-sky-200 dark:bg-sky-950 dark:text-sky-200 dark:hover:bg-sky-900',
  red: 'bg-rose-100 text-rose-800 hover:bg-rose-200 dark:bg-rose-950 dark:text-rose-200 dark:hover:bg-rose-900',
  violet:
    'bg-violet-100 text-violet-800 hover:bg-violet-200 dark:bg-violet-950 dark:text-violet-200 dark:hover:bg-violet-900',
  teal: 'bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-950 dark:text-teal-200 dark:hover:bg-teal-900',
  orange:
    'bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-950 dark:text-orange-200 dark:hover:bg-orange-900',
  slate:
    'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
};

const selectedRingClasses: Record<BadgeColor, string> = {
  gold: 'ring-amber-400 dark:ring-amber-500',
  green: 'ring-emerald-400 dark:ring-emerald-500',
  blue: 'ring-sky-400 dark:ring-sky-500',
  red: 'ring-rose-400 dark:ring-rose-500',
  violet: 'ring-violet-400 dark:ring-violet-500',
  teal: 'ring-teal-400 dark:ring-teal-500',
  orange: 'ring-orange-400 dark:ring-orange-500',
  slate: 'ring-slate-400 dark:ring-slate-500',
};

const bodyBorderClasses: Record<BadgeColor, string> = {
  gold: 'border-amber-400 dark:border-amber-500',
  green: 'border-emerald-400 dark:border-emerald-500',
  blue: 'border-sky-400 dark:border-sky-500',
  red: 'border-rose-400 dark:border-rose-500',
  violet: 'border-violet-400 dark:border-violet-500',
  teal: 'border-teal-400 dark:border-teal-500',
  orange: 'border-orange-400 dark:border-orange-500',
  slate: 'border-slate-400 dark:border-slate-500',
};

/**
 * Vertical mnemonic tabs with a full-width body panel.
 * Tabs collapse to the first letter and expand on hover/focus; the body border matches the selected tab.
 */
export function Tabs({
  tabs,
  body,
  value,
  defaultValue,
  onChange,
  className,
  'aria-label': ariaLabel = 'Tabs',
}: TabsProps) {
  const panelId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.name);
  const selected = value ?? internalValue;
  const selectedTab = tabs.find((tab) => tab.name === selected) ?? tabs[0];
  const selectedColor = selectedTab?.color ?? 'slate';

  function selectTab(name: string) {
    if (value === undefined) {
      setInternalValue(name);
    }
    onChange?.(name);
  }

  return (
    <div className={classNames('flex w-full items-stretch', className)}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation="vertical"
        className="relative z-20 flex w-9 shrink-0 flex-col gap-1 py-1"
      >
        {tabs.map((tab) => {
          const isSelected = selected === tab.name;
          const initial = tab.name.charAt(0);

          return (
            <button
              key={tab.name}
              type="button"
              role="tab"
              id={`${panelId}-tab-${tab.name}`}
              aria-controls={panelId}
              aria-selected={isSelected}
              aria-label={tab.name}
              title={tab.name}
              onClick={() => selectTab(tab.name)}
              className="group relative h-9 w-9 shrink-0 focus-visible:outline-none"
            >
              <span
                className={classNames(
                  'absolute left-0 top-0 z-20 flex h-9 w-9 items-center overflow-hidden rounded-md',
                  'text-sm font-semibold shadow-sm transition-[width,box-shadow] duration-200 ease-out',
                  'group-hover:z-30 group-hover:w-max group-focus-visible:z-30 group-focus-visible:w-max',
                  'group-focus-visible:ring-2 group-focus-visible:ring-offset-1',
                  'dark:group-focus-visible:ring-offset-slate-950',
                  colorClasses[tab.color],
                  isSelected && 'ring-2',
                  isSelected && selectedRingClasses[tab.color]
                )}
              >
                <span className="flex size-9 shrink-0 items-center justify-center uppercase">
                  {initial}
                </span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    'max-w-0 overflow-hidden whitespace-nowrap opacity-0',
                    'transition-[max-width,opacity,padding] duration-200 ease-out',
                    'group-hover:max-w-48 group-hover:pr-3 group-hover:opacity-100',
                    'group-focus-visible:max-w-48 group-focus-visible:pr-3 group-focus-visible:opacity-100'
                  )}
                >
                  {tab.name.slice(1)}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={selectedTab ? `${panelId}-tab-${selectedTab.name}` : undefined}
        className={classNames(
          'relative z-0 min-w-0 w-full flex-1 rounded-xl border-2 bg-white p-4',
          'dark:bg-slate-900',
          'transition-colors duration-200',
          bodyBorderClasses[selectedColor]
        )}
      >
        {body}
      </div>
    </div>
  );
}
