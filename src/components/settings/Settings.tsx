import classNames from 'classnames';
import dayjs from 'dayjs';
import { useEffect, useId, useRef, useState, type ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router';

import exportIcon from '@assets/export.svg';
import gearIcon from '@assets/gear.svg';
import importIcon from '@assets/import.svg';
import { DatesFormat } from '@constants/dates';
import { DEFAULT_MAIN_CHAR_NAME, SettingsParams } from '@constants/settings';
import { Calendar } from '@services/calendar/Calendar';
import { useMainStore } from '@store/main';

import type { SettingsProps } from './types';
import type { DaySerializedType } from '@services/day/types';

const ACTION_BUTTON_CLASSNAME = classNames(
  'inline-flex size-8 shrink-0 items-center justify-center rounded-md',
  'text-slate-900 dark:text-slate-50',
  'hover:bg-slate-100 dark:hover:bg-slate-800',
  'disabled:pointer-events-none disabled:opacity-40',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-500'
);

/**
 * Parses an imported file's contents into serialized calendar days.
 *
 * @throws {Error} If the JSON is malformed or isn't an array of days.
 */
function parseCalendarFile(text: string): DaySerializedType[] {
  const data: unknown = JSON.parse(text);

  if (!Array.isArray(data)) {
    throw new Error('Expected a JSON array of calendar days.');
  }

  return data as DaySerializedType[];
}

/**
 * Gear button (for the LeftDrawer) that opens a modal with app-wide settings.
 *
 * The protagonist name and spoiler visibility read from and write directly
 * to URL search params, so that configuration is always shareable and
 * bookmarkable. The calendar row is separate: it lets the user download the
 * current calendar as a JSON file, or load one from disk into the store.
 */
export function Settings({ className }: SettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const titleId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<{
    type: 'error' | 'success';
    text: string;
  } | null>(null);

  const { calendar, setCalendar, setCurrentDay, setSelectedEvent } = useMainStore();

  const mainCharName = searchParams.get(SettingsParams.mainCharName) ?? '';
  const showSpoilers = searchParams.get(SettingsParams.showSpoilers) === 'true';

  useEffect(() => {
    if (!isOpen) {
      setImportStatus(null);
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function handleMainCharNameChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setSearchParams(
      (prev) => {
        if (value === '') {
          prev.delete(SettingsParams.mainCharName);
        } else {
          prev.set(SettingsParams.mainCharName, value);
        }

        return prev;
      },
      { replace: true }
    );
  }

  function handleShowSpoilersToggle() {
    setSearchParams(
      (prev) => {
        prev.set(SettingsParams.showSpoilers, String(!showSpoilers));
        return prev;
      },
      { replace: true }
    );
  }

  function handleImportClick() {
    fileInputRef.current?.click();
  }

  async function handleImportFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return;
    }

    try {
      const days = parseCalendarFile(await file.text());
      const importedCalendar = Calendar.calculateStats(
        Calendar.deserialize(days),
        undefined,
        false,
        false
      );

      setCalendar(importedCalendar);
      setCurrentDay(null);
      setSelectedEvent(null);
      setImportStatus({ type: 'success', text: `Calendar imported (${days.length} days).` });
    } catch {
      setImportStatus({
        type: 'error',
        text: "Couldn't import that file — make sure it's a calendar exported from here.",
      });
    }
  }

  function handleExport() {
    if (calendar === null) {
      return;
    }

    const json = JSON.stringify(calendar.serialize(), null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');

    anchor.href = url;
    anchor.download = `p3reload-calendar-${dayjs().format(DatesFormat)}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open settings"
        onClick={() => setIsOpen(true)}
        className={classNames(
          'inline-flex size-[30px] items-center justify-center rounded-md',
          'text-slate-900 dark:text-slate-50',
          'hover:bg-slate-100 dark:hover:bg-slate-800',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-500',
          className
        )}
      >
        <img
          src={gearIcon}
          alt=""
          aria-hidden="true"
          className="size-[30px] dark:invert hover:animate-[spin_1.2s_linear_infinite]"
        />
      </button>

      {isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              <div
                aria-hidden="true"
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-slate-950/50"
              />

              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className={classNames(
                  'relative z-10 w-full max-w-sm rounded-xl border p-4 shadow-lg',
                  'border-slate-200 bg-white text-slate-900',
                  'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50'
                )}
              >
                <div className="mb-4 flex items-center justify-between gap-2">
                  <h2 id={titleId} className="text-base font-semibold leading-snug">
                    Settings
                  </h2>

                  <button
                    type="button"
                    aria-label="Close settings"
                    onClick={() => setIsOpen(false)}
                    className={classNames(
                      'inline-flex size-6 items-center justify-center rounded-md text-lg leading-none',
                      'text-slate-500 hover:bg-slate-100 hover:text-slate-900',
                      'dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-500'
                    )}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="flex flex-col gap-1 text-sm">
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      Protagonist name
                    </span>
                    <input
                      type="text"
                      value={mainCharName}
                      onChange={handleMainCharNameChange}
                      placeholder={DEFAULT_MAIN_CHAR_NAME}
                      className={classNames(
                        'w-full rounded-md border px-2 py-1.5 text-sm',
                        'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400',
                        'focus:outline-none focus:ring-2 focus:ring-sky-400',
                        'dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-500'
                      )}
                    />
                  </label>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                      Show spoilers
                    </span>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={showSpoilers}
                      aria-label="Show spoilers"
                      onClick={handleShowSpoilersToggle}
                      className={classNames(
                        'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full',
                        'transition-colors duration-150 ease-out',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                        showSpoilers
                          ? 'bg-sky-500 dark:bg-sky-400'
                          : 'bg-slate-300 dark:bg-slate-700'
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          'inline-block size-4 transform rounded-full bg-white shadow transition-transform duration-150 ease-out',
                          showSpoilers ? 'translate-x-6' : 'translate-x-1'
                        )}
                      />
                    </button>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                        Calendar
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          aria-label="Import calendar"
                          onClick={handleImportClick}
                          className={ACTION_BUTTON_CLASSNAME}
                        >
                          <img
                            src={importIcon}
                            alt=""
                            aria-hidden="true"
                            className="size-4 dark:invert"
                          />
                        </button>

                        <button
                          type="button"
                          aria-label="Export calendar"
                          onClick={handleExport}
                          disabled={calendar === null}
                          className={ACTION_BUTTON_CLASSNAME}
                        >
                          <img
                            src={exportIcon}
                            alt=""
                            aria-hidden="true"
                            className="size-4 dark:invert"
                          />
                        </button>
                      </div>
                    </div>

                    {importStatus ? (
                      <p
                        role="status"
                        className={classNames(
                          'text-xs',
                          importStatus.type === 'error'
                            ? 'text-rose-600 dark:text-rose-400'
                            : 'text-emerald-600 dark:text-emerald-400'
                        )}
                      >
                        {importStatus.text}
                      </p>
                    ) : null}

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/json,.json"
                      aria-label="Import calendar file"
                      onChange={handleImportFileChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
