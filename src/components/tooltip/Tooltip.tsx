import classNames from 'classnames';
import { useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { TooltipPositions, type TooltipPosition, type TooltipProps } from './types';

const GAP_PX = 8;

type TooltipCoords = {
  top: number;
  left: number;
  transform: string;
};

function getCoords(triggerRect: DOMRect, position: TooltipPosition): TooltipCoords {
  switch (position) {
    case TooltipPositions.bottom:
      return {
        top: triggerRect.bottom + GAP_PX,
        left: triggerRect.left + triggerRect.width / 2,
        transform: 'translateX(-50%)',
      };
    case TooltipPositions.left:
      return {
        top: triggerRect.top + triggerRect.height / 2,
        left: triggerRect.left - GAP_PX,
        transform: 'translate(-100%, -50%)',
      };
    case TooltipPositions.right:
      return {
        top: triggerRect.top + triggerRect.height / 2,
        left: triggerRect.right + GAP_PX,
        transform: 'translateY(-50%)',
      };
    case TooltipPositions.top:
    default:
      return {
        top: triggerRect.top - GAP_PX,
        left: triggerRect.left + triggerRect.width / 2,
        transform: 'translate(-50%, -100%)',
      };
  }
}

/**
 * Hover/focus label that can be anchored around its trigger.
 *
 * Renders through a portal into `document.body`, positioned with `fixed`
 * coordinates computed from the trigger's bounding rect. This keeps the
 * tooltip from being clipped or visually covered when the trigger sits
 * inside a scrolling or narrow container (e.g. a Card near a panel edge).
 */
export function Tooltip({
  content,
  position = TooltipPositions.top,
  children,
  className,
}: TooltipProps) {
  const tooltipId = useId();
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState<TooltipCoords | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!isVisible) {
      return;
    }

    function updateCoords() {
      if (triggerRef.current === null) {
        return;
      }

      setCoords(getCoords(triggerRef.current.getBoundingClientRect(), position));
    }

    updateCoords();
    window.addEventListener('scroll', updateCoords, true);
    window.addEventListener('resize', updateCoords);

    return () => {
      window.removeEventListener('scroll', updateCoords, true);
      window.removeEventListener('resize', updateCoords);
    };
  }, [isVisible, position]);

  return (
    <span
      ref={triggerRef}
      className={classNames('relative inline-flex', className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <span className="w-full" aria-describedby={isVisible ? tooltipId : undefined}>
        {children}
      </span>

      {isVisible && coords
        ? createPortal(
            <div
              id={tooltipId}
              role="tooltip"
              style={{ top: coords.top, left: coords.left, transform: coords.transform }}
              className={classNames(
                'pointer-events-none fixed z-[9999] max-w-xs whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium shadow-sm',
                'bg-slate-900 text-slate-50',
                'dark:bg-slate-100 dark:text-slate-900'
              )}
            >
              {content}
            </div>,
            document.body
          )
        : null}
    </span>
  );
}
