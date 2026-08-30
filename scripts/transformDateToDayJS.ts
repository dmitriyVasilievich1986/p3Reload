import dayjs from 'dayjs';

const DatesFormat = 'YYYY-MM-DD';

const datesInDateFormat: Date[] = [];

const datesInNumericFormat: number[] = [];

function getStringFromDates(dates: number[]): string {
  const formattedDates = dates.map((date) => {
    const formattedDate = dayjs(date).format(DatesFormat);
    return `dayjs('${formattedDate}')`;
  });
  return formattedDates.join(',\n');
}

if (datesInDateFormat.length > 0) {
  console.log(getStringFromDates(datesInDateFormat.map((date) => date.getTime())));
}

if (datesInNumericFormat.length > 0) {
  console.log(getStringFromDates(datesInNumericFormat));
}
