import { describe, expect, it } from 'vite-plus/test';

import { priceFormatter } from './priceFormatter';

describe('priceFormatter', () => {
  it('returns undefined when the value is undefined', () => {
    expect(priceFormatter(undefined)).toBeUndefined();
  });

  it('formats a number as a yen price tag', () => {
    expect(priceFormatter(1500)).toBe('￥1,500');
  });

  it('does not add grouping separators for values under 1000', () => {
    expect(priceFormatter(680)).toBe('￥680');
  });
});
