import { importCalendar } from "@/constants/calendar/baseFunctions";
import { ImportButton } from "@/components/importButton";
import { ExportIcon } from "@/components/icons";
import { Tooltip } from "@/components/tootlip";
import classnames from "classnames/bind";
import { SettingsProps } from "./types";
import * as style from "./style.scss";
import React from "react";

import { allEventsNames } from "@/constants/events/types";

const cx = classnames.bind(style);

function ExportImportTooltip(props: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip
      tooltip={<p className={cx("export-import-tooltip")}>{props.label}</p>}
    >
      {props.children}
    </Tooltip>
  );
}

function ExportImport(props: SettingsProps) {
  const getCalendar = () => {
    const payload = props.calendar.map((c) => {
      const activities = c.activities.map((a) => (a.special ? null : a.name));
      return { date: c.date.toString(), activities };
    });
    return new Blob([JSON.stringify(payload)], { type: "text/plain" });
  };

  const updateCalendar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const text = JSON.parse(await e.target.files[0].text());
    const newCalendar = importCalendar(
      props.calendar,
      text.map((c: { date: Date; activities: allEventsNames }) => ({
        ...c,
        date: new Date(c.date),
      }))
    );
    props.setCalendar(newCalendar);
  };

  return (
    <div className={cx("input-row")}>
      <label>Export/Import:</label>
      <div className="export-import">
        <ExportImportTooltip label="Export calendar">
          <a download="calendar.json" href={URL.createObjectURL(getCalendar())}>
            <ExportIcon size="medium" />
          </a>
        </ExportImportTooltip>
        <ExportImportTooltip label="Import calendar">
          <ImportButton onChange={updateCalendar} />
        </ExportImportTooltip>
      </div>
    </div>
  );
}

export default ExportImport;
