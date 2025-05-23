import { EventCard } from "@/components";

import { SocialLinkElementProps } from "@/constants/socialLinks/types";
import { SocialLinkNames } from "@/constants/socialLinks/types";

import { EventClass } from "@/constants/events/EventClass";
import { events } from "@/constants/events";
import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  PrerequisitsEventsNames,
  SpecialEventsNames,
  allEventsNames,
  Event,
  Times,
} from "@/constants/events/types";

import { SingleDay } from "@/constants/calendar/SingleDay";

export const classmates: SocialLinkNames[] = [
  SocialLinkNames.Magician,
  SocialLinkNames.Strength,
  SocialLinkNames.Chariot,
  SocialLinkNames.Lovers,
  SocialLinkNames.Emperor,
  SocialLinkNames.Temperance,
  SocialLinkNames.Justice,
  SocialLinkNames.Moon,
  SocialLinkNames.Fortune,
  SocialLinkNames.Priestess,
  SocialLinkNames.Empress,
  SocialLinkNames.Aeon,
];

function calculateSingleDay(
  currentDay: SingleDay,
  previousDay: SingleDay,
  previousWeek?: SingleDay
) {
  currentDay.singleTimeEvents = previousDay.singleTimeEvents;
  currentDay.stats = previousDay.stats;
  currentDay.links = previousDay.links;

  const pushEvents: { name: allEventsNames; time: Times }[] = [
    { name: statsEventsCourageNames.drinkMedicine, time: Times.AfterSchool },
    { name: PrerequisitsEventsNames.MoonPrerequisit, time: Times.Prerequisits },
    {
      name: PrerequisitsEventsNames.TowerPrerequisit,
      time: Times.Prerequisits,
    },
    {
      name: PrerequisitsEventsNames.JusticePrerequisit1,
      time: Times.Prerequisits,
    },
    {
      name: PrerequisitsEventsNames.JusticePrerequisit2,
      time: Times.Prerequisits,
    },
    {
      name: PrerequisitsEventsNames.JusticePrerequisit3,
      time: Times.Prerequisits,
    },
    {
      name: PrerequisitsEventsNames.HangedManPrerequisit,
      time: Times.Prerequisits,
    },
    {
      name: PrerequisitsEventsNames.HierophantPrerequisit,
      time: Times.Prerequisits,
    },
  ];

  currentDay.activities = currentDay.activities.filter((activity) => {
    if (
      (activity.special && activity.name !== SocialLinkNames.Aragaki) ||
      [Times.Morning, Times.Day, Times.Evening].includes(activity.time)
    ) {
      return true;
    }
    const isAvailable = (events[activity.name] as EventClass).available({
      currentDay,
      previousDay,
      previousWeek,
      time: activity.time,
    });
    if (!isAvailable) {
      console.warn(
        `Removing ${activity.name} event for the ${currentDay.date}`
      );
    }
    return isAvailable;
  });

  const currentEventsNames = currentDay.activities.map((a) => a.name);
  pushEvents
    .filter(
      ({ name, time }) =>
        !currentEventsNames.includes(name) &&
        (events[name] as EventClass).available({
          currentDay,
          previousDay,
          previousWeek,
          time: time,
        })
    )
    .forEach(({ name }) => {
      currentDay.activities.unshift(events[name] as EventClass);
    });

  currentDay.activities = currentDay.activities.map((activity) => {
    const isAvailable = activity.available({
      currentDay,
      previousDay,
      previousWeek,
      time: activity.time,
    });
    if (!isAvailable && !activity.special) {
      console.warn(
        `Event ${activity.name} is not available for the ${currentDay.date}`
      );
      return { ...events[SpecialEventsNames.DoNothing], time: activity.time };
    }
    const response = activity.upgrade({
      currentDay,
      previousDay,
      previousWeek,
      time: activity.time,
    });
    currentDay.singleTimeEvents =
      response?.singleTimeEvents || currentDay.singleTimeEvents;
    currentDay.stats = response?.stats || currentDay.stats;
    currentDay.links = response?.links || currentDay.links;

    return activity;
  });
}

export function initialCalculataion(calendar: SingleDay[]) {
  (Object.values(calendar) as Array<SingleDay>).forEach((c, i, cArray) => {
    const previousDay: SingleDay = cArray?.[i - 1] || new SingleDay();
    const previousWeek: SingleDay | undefined = cArray?.[i - 1];
    calculateSingleDay(c, previousDay, previousWeek);
  });

  return calendar;
}

export function getCalculatedCalendar(props: {
  previousCalendar: SingleDay[];
  dayIndex: number;
  newEvent: Event;
  time: Times;
}) {
  const newCalendar: SingleDay[] = (
    props.previousCalendar as Array<SingleDay>
  ).map((c, i) => {
    if (i === props.dayIndex) {
      return new SingleDay({
        ...c,
        activities: c.activities.map((a) =>
          a.time === props.time ? { ...props.newEvent, time: props.time } : a
        ),
      });
    } else if (i > props.dayIndex) {
      return new SingleDay({
        ...c,
        arcanes: [],
        activities: c.activities.map((a) => {
          if (a.special) return a;
          else if (a.time === Times.Morning)
            return events[statsEventsAcademicsNames.stayAwakeInClass];
          return {
            ...events[SpecialEventsNames.DoNothing],
            time: a.time,
          };
        }),
      });
    }
    return c;
  });
  return initialCalculataion(newCalendar);
}

export function LabelExamGrade(
  this: Event,
  { currentDay }: SocialLinkElementProps
) {
  function Grade() {
    let grade = "Average";
    const classmateLink = classmates[0];
    if (currentDay.links[classmateLink].multiplier === 1.51)
      grade = "Top class";
    else if (currentDay.links[classmateLink].multiplier === 1.21)
      grade = "Top 10";
    return <h3 style={{ textAlign: "center" }}>{grade}</h3>;
  }

  return (
    <div>
      <EventCard head="Exam results" />
      <Grade />
    </div>
  );
}

export function importCalendar(
  calendar: SingleDay[],
  newCalendar: {
    date: Date;
    activities: { name: allEventsNames; time: Times; label?: string }[];
  }[]
) {
  if (calendar.length !== newCalendar.length)
    throw new Error("Calendar length mismatch");

  const payload = calendar.map((oldDay, index) => {
    const newDay = newCalendar[index];
    if (oldDay.date.getTime() !== newDay.date.getTime())
      throw new Error("New calendar date mismatch");

    const newActivities: Event[] = [];
    [
      Times.Morning,
      Times.WholeDay,
      Times.AfterSchool,
      Times.Day,
      Times.Evening,
      Times.DarkHour,
    ].forEach((time) => {
      const oldActivity = oldDay.activities.find((a) => a.time === time);
      const newActivity = newDay.activities.find((a) => a.time === time);

      if (!oldActivity && !newActivity) return;
      else if (newActivity?.name === SpecialEventsNames.Notes) {
        const label = newActivity?.label || "";
        newActivities.push({
          ...events[SpecialEventsNames.Notes],
          label: () => <div>{label}</div>,
          time: newActivity.time,
        });
      } else if (oldActivity?.special || !newActivity) {
        newActivities.push(oldActivity as Event);
      } else if (!!newActivity && newActivity.name) {
        const event = events[newActivity.name];
        if (!event) throw new Error(`[${newActivity.name}] Event not found`);
        newActivities.push({ ...event, time: newActivity.time });
      }
    });

    return new SingleDay({ ...oldDay, activities: newActivities });
  });

  return initialCalculataion(payload);
}
