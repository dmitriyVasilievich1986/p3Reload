import { SocialLinkElementProps } from "@/constants/socialLinks/types";
import { SocialLinkNames } from "@/constants/socialLinks/types";
import { events } from "@/constants/events";
import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  SpecialEventsNames,
  allEventsNames,
  Categories,
  Event,
  Times,
} from "@/constants/events/types";

import { EventCard } from "@/components";

import { SingleDay } from "./SingleDay";

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

export function initialCalculataion(calendar: SingleDay[]) {
  (Object.values(calendar) as Array<SingleDay>).forEach((c, i, cArray) => {
    const previousDay: SingleDay = cArray?.[i - 1] || new SingleDay();
    const previousWeek: SingleDay | undefined = cArray?.[i - 1];

    c.singleTimeEvents = previousDay.singleTimeEvents;
    c.stats = previousDay.stats;
    c.links = previousDay.links;

    c.activities.forEach((activity) => {
      const response = activity.upgrade({
        time: activity.time,
        currentDay: c,
        previousWeek,
        previousDay,
      });
      c.singleTimeEvents = response?.singleTimeEvents || c.singleTimeEvents;
      c.stats = response?.stats || c.stats;
      c.links = response?.links || c.links;
    });
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
    } else if (
      i > props.dayIndex &&
      props.newEvent.category === Categories.Tartarus
    ) {
      const activities = c.activities
        .filter((a) => a !== events[statsEventsCourageNames.drinkMedicine])
        .map((a) =>
          a.special
            ? a
            : { ...events[SpecialEventsNames.DoNothing], time: a.time }
        );
      if (!c.isDayOff) {
        activities.splice(1, 0, events[statsEventsCourageNames.drinkMedicine]);
      }

      return new SingleDay({ ...c, activities });
    } else if (i > props.dayIndex)
      return new SingleDay({
        ...c,
        arcanes: [],
        activities: c.activities
          .filter((a) => a !== events[statsEventsCourageNames.drinkMedicine])
          .map((a) => {
            if (a.special) return a;
            else if (a.time === Times.Morning)
              return events[statsEventsAcademicsNames.stayAwakeInClass];
            return {
              ...events[SpecialEventsNames.DoNothing],
              time: a.time,
            };
          }),
      });
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
      Times.AfterSchool,
      Times.Day,
      Times.Evening,
      Times.WholeDay,
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
        });
      } else if (
        (oldActivity?.special || !newActivity) &&
        oldActivity?.name !== SpecialEventsNames.Notes
      )
        newActivities.push(oldActivity as Event);
      else if (!!newActivity) {
        const event = events[newActivity.name];
        if (!event) throw new Error("Event not found");
        newActivities.push(event);
      }
    });

    return new SingleDay({ ...oldDay, activities: newActivities });
  });

  return initialCalculataion(payload);
}
