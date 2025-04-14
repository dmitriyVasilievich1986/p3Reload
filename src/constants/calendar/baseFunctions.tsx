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
  const pushEventsNames: allEventsNames[] = pushEvents.map((e) => e.name);

  currentDay.activities = currentDay.activities.filter((activity) => {
    if (pushEventsNames.includes(activity.name)) return false;
    if (activity.special) return true;
    const isAvailable = activity.available({
      currentDay,
      previousDay,
      previousWeek,
      time: activity.time,
    });
    if (!isAvailable) {
      console.warn(
        `Event ${activity.name} is not available for the ${currentDay.date}`
      );
      return;
    }
    return isAvailable;
  });
  pushEvents
    .filter(({ name, time }) =>
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

  currentDay.activities.forEach((activity) => {
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
      } else if (
        (oldActivity?.special || !newActivity) &&
        oldActivity?.name !== SpecialEventsNames.Notes
      )
        newActivities.push(oldActivity as Event);
      else if (!!newActivity) {
        const event = events[newActivity.name];
        if (!event) throw new Error("Event not found");
        newActivities.push({ ...event, time: newActivity.time });
      }
    });

    return new SingleDay({ ...oldDay, activities: newActivities });
  });

  return initialCalculataion(payload);
}
