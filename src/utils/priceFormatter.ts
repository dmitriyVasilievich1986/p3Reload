/**
 * Format a yen amount as a price tag string.
 *
 * @param value - Amount to format, or undefined when there is no price.
 * @returns Formatted price such as `"￥1,500"`, or undefined when `value` is undefined.
 */
export function priceFormatter(value: number | undefined): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  return `￥${value.toLocaleString('en-US')}`;
}
