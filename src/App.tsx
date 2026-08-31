import {
  CenterPanel,
  LEFT_DRAWER_COLLAPSED_WIDTH_PX,
  LeftDrawer,
  LeftPanel,
  RightPanel,
} from '@components';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { Calendar } from '@services/calendar/Calendar';
import AprilData from '@services/calendar/data/april.json';
import AugustData from '@services/calendar/data/august.json';
import DecemberData from '@services/calendar/data/december.json';
import JanuaryData from '@services/calendar/data/january.json';
import JulyData from '@services/calendar/data/july.json';
import JuneData from '@services/calendar/data/june.json';
import MayData from '@services/calendar/data/may.json';
import NovemberData from '@services/calendar/data/november.json';
import OctoberData from '@services/calendar/data/october.json';
import SeptemberData from '@services/calendar/data/september.json';
import { useMainStore } from '@store/main';

import type { DaySerializedType } from '@services/day/types';

function getSystemDarkTheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function isDarkThemeEnabled(value: string | null): boolean {
  return value === 'true';
}

export function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDarkTheme = isDarkThemeEnabled(searchParams.get('darkTheme'));
  const { calendar, setCalendar } = useMainStore();

  useEffect(() => {
    if (calendar === null) {
      const calendar = Calendar.deserialize([
        ...(AprilData as DaySerializedType[]),
        ...(MayData as DaySerializedType[]),
        ...(JuneData as DaySerializedType[]),
        ...(JulyData as DaySerializedType[]),
        ...(AugustData as DaySerializedType[]),
        ...(SeptemberData as DaySerializedType[]),
        ...(OctoberData as DaySerializedType[]),
        ...(NovemberData as DaySerializedType[]),
        ...(DecemberData as DaySerializedType[]),
        ...(JanuaryData as DaySerializedType[]),
      ]);
      setCalendar(Calendar.calculateStats(calendar, undefined, false, false));
    }
  }, [calendar, setCalendar]);

  useEffect(() => {
    if (searchParams.has('darkTheme')) {
      return;
    }

    setSearchParams(
      (prev) => {
        if (!prev.has('darkTheme')) {
          prev.set('darkTheme', String(getSystemDarkTheme()));
        }

        return prev;
      },
      { replace: true }
    );
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <LeftDrawer />

      <main
        className="flex min-h-0 min-w-0 flex-1"
        style={{ marginLeft: LEFT_DRAWER_COLLAPSED_WIDTH_PX }}
      >
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </main>
    </div>
  );
}
