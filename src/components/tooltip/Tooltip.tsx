import classNames from 'classnames';
import { useId, useState } from 'react';

import { TooltipPositions, type TooltipPosition, type TooltipProps } from './types';

const positionClasses: Record<TooltipPosition, string> = {
  [TooltipPositions.top]: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  [TooltipPositions.bottom]: 'top-full left-1/2 mt-2 -translate-x-1/2',
  [TooltipPositions.left]: 'right-full top-1/2 mr-2 -translate-y-1/2',
  [TooltipPositions.right]: 'left-full top-1/2 ml-2 -translate-y-1/2',
};

/**
 * Hover/focus label that can be anchored around its trigger.
 */
export function Tooltip({
  content,
  position = TooltipPositions.top,
  children,
  className,
}: TooltipProps) {
  const tooltipId = useId();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className={classNames('relative inline-flex', className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <span className="w-full" aria-describedby={isVisible ? tooltipId : undefined}>
        {children}
      </span>

      {isVisible ? (
        <span
          id={tooltipId}
          role="tooltip"
          className={classNames(
            'pointer-events-none absolute z-50 max-w-xs whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium shadow-sm',
            'bg-slate-900 text-slate-50',
            'dark:bg-slate-100 dark:text-slate-900',
            positionClasses[position]
          )}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
