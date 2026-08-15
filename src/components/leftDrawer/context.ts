import { createContext, useContext } from 'react';

export type LeftDrawerContextValue = {
  isExpanded: boolean;
};

export const LeftDrawerContext = createContext<LeftDrawerContextValue>({
  isExpanded: false,
});

/**
 * Expand state of the nearest {@link LeftDrawer}. Defaults to collapsed when used outside one.
 */
export function useLeftDrawer(): LeftDrawerContextValue {
  return useContext(LeftDrawerContext);
}
