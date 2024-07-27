import { Question, Answer } from "../../components/choices";
import { baseCalendar, classmates } from "./baseFunctions";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { SocialLinkNames } from "../socialLinks/types";
import { StatsNames } from "../stats/types";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const december: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 11, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 6),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 7),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="What's the name of the stratospheric layer of molecules comprised of three oxygen atoms?">
            <Answer label="The ozone layer." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 8),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 9),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="What sorcery was Himiko said to have used?">
            <Answer label="Kido." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 10),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 11),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="Did you catch what she said? Do you know the answer?">
            <Answer label="Lives." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 12),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 13),
    isDayOff: true,
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 14),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question label="Which of the following originated in India?">
              <Answer label="The number zero" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 15),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question label="When heated, the beta-amylase enzymes in sweet potatoes react with the starch present to produce which disaccharide?">
              <Answer label="Maltose" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 16),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question label="Which Roman goddess has been theorized as the namesake for the month of April?">
              <Answer label="Venus" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 17),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question label="In The Tale of Genji, who does Hikaru Genji compare to cherry blossoms?">
              <Answer label="Murasaki-no-Ue" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 18),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question label="Which of the following words is not in the correct plural form?">
              <Answer label="Geeses" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Exams, time: Times.Morning },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 20),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        time: Times.AfterSchool,
        label: () => <EventCard head="Exam results" />,
        upgrade: function ({ currentStats, currentLinks, weekAgoStats }) {
          let newMultiplier = 1;
          let charmAddendum = 2;
          if (weekAgoStats[StatsNames.Academics] >= 100) {
            newMultiplier = 1.51;
            charmAddendum = 4;
          } else if (weekAgoStats[StatsNames.Academics] >= 55) {
            newMultiplier = 1.21;
            charmAddendum = 3;
          }

          const newLinks = Object.fromEntries(
            (Object.keys(currentLinks) as Array<SocialLinkNames>)
              .filter((k) => classmates.includes(k))
              .map((k) => [
                k,
                { ...currentLinks[k], multiplier: newMultiplier },
              ])
          );

          return {
            links: {
              ...currentLinks,
              ...newLinks,
            },
            stats: {
              ...currentStats,
              [StatsNames.Charm]:
                currentStats[StatsNames.Charm] + charmAddendum,
            },
          };
        },
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="What do we call the feeling of joy that comes from a near-death experience?">
            <Answer label="Euphoria." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      { ...events.Special, time: Times.WholeDay },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 27),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 11, 31),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.DoNothing, { ...events.Fool, time: Times.Evening }],
  },
];
