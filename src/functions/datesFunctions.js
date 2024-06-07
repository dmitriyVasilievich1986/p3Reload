export function datesGenerator(start, end) {
  const dates = new Array();
  while (start <= end) {
    dates.push(new Date(start));
    start.setDate(start.getDate() + 1);
  }
  return dates;
}

export const allDates = datesGenerator(
  new Date(2009, 3, 8),
  new Date(2009, 3, 30)
);
