import dayjs, { type Dayjs } from 'dayjs';

export const DatesFormat = 'YYYY-MM-DD';

export const DEFAULT_DAY = dayjs('2009-04-07').format(DatesFormat);

/** Calendar dates on which a full moon occurs in the game year (2009). */
export const FullMoonDays: Dayjs[] = [
  dayjs('2009-04-09'),
  dayjs('2009-05-09'),
  dayjs('2009-06-08'),
  dayjs('2009-07-07'),
  dayjs('2009-08-06'),
  dayjs('2009-09-05'),
  dayjs('2009-10-04'),
  dayjs('2009-11-03'),
  dayjs('2009-12-02'),
  dayjs('2009-12-31'),
];

/** Calendar dates during the in-game exam period in the game year (2009). */
export const ExamDays: Dayjs[] = [
  dayjs('2009-05-11'),
  dayjs('2009-05-12'),
  dayjs('2009-05-13'),
  dayjs('2009-05-14'),
  dayjs('2009-05-15'),
  dayjs('2009-05-16'),
  dayjs('2009-05-18'),
  dayjs('2009-05-19'),
  dayjs('2009-05-20'),
  dayjs('2009-05-21'),
  dayjs('2009-05-22'),
];

/** Calendar dates designated as school holidays in the game year (2009). */
export const DayOffDays: Dayjs[] = [
  dayjs('2009-04-29'),
  dayjs('2009-05-04'),
  dayjs('2009-05-05'),
  dayjs('2009-08-03'),
  dayjs('2009-08-04'),
  dayjs('2009-08-05'),
  dayjs('2009-08-06'),
  dayjs('2009-08-07'),
  dayjs('2009-08-08'),
  dayjs('2009-08-10'),
  dayjs('2009-08-11'),
  dayjs('2009-08-12'),
  dayjs('2009-08-13'),
  dayjs('2009-08-14'),
  dayjs('2009-08-15'),
  dayjs('2009-08-17'),
  dayjs('2009-08-18'),
  dayjs('2009-08-19'),
  dayjs('2009-08-20'),
  dayjs('2009-08-21'),
  dayjs('2009-08-22'),
  dayjs('2009-08-24'),
  dayjs('2009-08-25'),
  dayjs('2009-08-26'),
  dayjs('2009-08-27'),
  dayjs('2009-08-28'),
  dayjs('2009-08-29'),
  dayjs('2009-08-31'),
  dayjs('2009-12-28'),
  dayjs('2009-12-29'),
  dayjs('2009-12-30'),
  dayjs('2009-12-31'),
  dayjs('2010-01-01'),
  dayjs('2010-01-02'),
  dayjs('2010-01-03'),
  dayjs('2010-01-04'),
  dayjs('2010-01-05'),
  dayjs('2010-01-06'),
  dayjs('2010-01-07'),
  dayjs('2010-01-11'),
];
