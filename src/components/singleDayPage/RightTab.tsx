import { StatsNames } from "@/constants/stats/types";
import { SingleDay } from "@/constants/calendar";
import { events } from "@/constants/events";
import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  SpecialEventsNames,
  pcProgramsNames,
  allEventsNames,
  Event,
  Times,
} from "@/constants/events/types";

import { Input } from "@/components/input";

import { ActivitiesPerDay, AvailableTimes } from "./types";
import { ActivitiesList } from "./ActivitiesList";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

const specialsArray: string[] = Object.values(SpecialEventsNames);
const lobbyPCArray: string[] = Object.values(pcProgramsNames);
const academicsArray: string[] = Object.values(statsEventsAcademicsNames);
const courageArray: string[] = Object.values(statsEventsCourageNames);
const charmArray: string[] = Object.values(statsEventsCharmNames);

export function RightTab(props: {
  clickHandler: (props: { event: Event }) => void;
  showTime: AvailableTimes | null;
  calendar: SingleDay[];
  dayIndex: number;
}) {
  const [filterValue, setFilterValue] = React.useState("");

  const [activities, setActivities] = React.useState<ActivitiesPerDay>({
    [Times.Morning]: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[statsEventsCourageNames.sleepDuringClass],
    ],
    [Times.Day]: [],
    [Times.Evening]: [],
  });

  React.useEffect(() => {
    if (props.dayIndex) {
      const availableParams = {
        previousDay: props.calendar?.[props.dayIndex - 1],
        currentDay: props.calendar[props.dayIndex],
      };
      const evening: Event[] = [];
      const day: Event[] = [];

      (Object.keys(events) as Array<allEventsNames>).forEach((e) => {
        const singleEvent = events[e];
        if (
          !singleEvent.special &&
          singleEvent.available({ ...availableParams, time: Times.Day })
        ) {
          day.push(singleEvent);
        }
        if (
          !singleEvent.special &&
          singleEvent.available({ ...availableParams, time: Times.Evening })
        ) {
          evening.push(singleEvent);
        }
      });

      setActivities((c) => ({
        ...c,
        [Times.Day]: day,
        [Times.Evening]: evening,
      }));
    }
  }, [props.dayIndex]);

  const getSelectedActivity = (): string | undefined => {
    if (props.showTime === null) return undefined;
    return props.calendar[props.dayIndex].activities.find(
      (a) => a.time === props.showTime
    )?.name;
  };

  const filteredActivities = props.showTime
    ? activities[props.showTime].filter((a) =>
        a.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : [];
  return (
    <div className={cx("right-tab-container")}>
      <div className={cx("filter-input")}>
        <Input
          placeholder="Filter activities"
          onChange={setFilterValue}
          value={filterValue}
          label="filter"
          clearable
        />
      </div>
      <div className={cx("activities-list")}>
        <ActivitiesList
          {...props}
          head="Special"
          time={props.showTime as Times}
          selectedActivity={getSelectedActivity()}
          activities={filteredActivities.filter((a) =>
            specialsArray.includes(a.name)
          )}
        />
        <ActivitiesList
          {...props}
          head="Social Links"
          time={props.showTime as Times}
          selectedActivity={getSelectedActivity()}
          activities={filteredActivities.filter((a) => !!a.linkName)}
        />
        <ActivitiesList
          {...props}
          head={StatsNames.Academics}
          time={props.showTime as Times}
          selectedActivity={getSelectedActivity()}
          activities={filteredActivities.filter((a) =>
            academicsArray.includes(a.name)
          )}
        />
        <ActivitiesList
          {...props}
          head={StatsNames.Courage}
          time={props.showTime as Times}
          selectedActivity={getSelectedActivity()}
          activities={filteredActivities.filter((a) =>
            courageArray.includes(a.name)
          )}
        />
        <ActivitiesList
          {...props}
          head={StatsNames.Charm}
          time={props.showTime as Times}
          selectedActivity={getSelectedActivity()}
          activities={filteredActivities.filter((a) =>
            charmArray.includes(a.name)
          )}
        />
        <ActivitiesList
          {...props}
          head="Lobby PC"
          time={props.showTime as Times}
          selectedActivity={getSelectedActivity()}
          activities={filteredActivities.filter((a) =>
            lobbyPCArray.includes(a.name)
          )}
        />
      </div>
    </div>
  );
}
