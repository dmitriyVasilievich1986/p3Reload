import { Question, Answer } from "../../components/choices";
import { baseCalendar, classmates } from "./baseFunctions";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { SocialLinkNames } from "../socialLinks/types";
import { StatsNames } from "../stats/types";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const july: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 6, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              "H-Hey, lend me a hand here, Protagonist. What kinda tale is he talkin' about?"
            }
          >
            <Answer label="About romance." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard
              head="Hierophant and Lovers Boss Fight"
              place="Tartarus"
            />
          </WideEvent>
        ),
      },
      events.Fool,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={`"Because it is 10:30 right now, we will not reach the theater in time, it's already started, to my dismay."`}
          >
            <Answer label={`Between "time" and "it's"`} points={15} />
          </Question>
        ),
      },
      events.drinkMedicine,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              "At the same time, a serious problem arose for the farmers. Do you remember what that was?"
            }
          >
            <Answer label="Social Disparity" points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={"What is the esoteric study of Jewish texts called?"}
          >
            <Answer label="Kabbalah" points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              "Now, what do you think that item was? It's something every samurai needs"
            }
          >
            <Answer label="The Katana" points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      events.Death,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 13),
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
    date: new Date(2009, 6, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question
              label={"Which form of magic is used to find water sources?"}
            >
              <Answer label="Dowsing" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question
              label={
                "How did the Witch of Agnesi gain the first half of its name?"
              }
            >
              <Answer label="An error in translation" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question label={"Who designed the prototype for the katana?"}>
              <Answer label="Taira No Masakado" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question
              label={"There's an error in this sentence, what kind is it?"}
            >
              <Answer label="Comma Splice" points={15} />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Exams, time: Times.Morning },
      {
        ...events.Special,
        label: () => <EventCard head="Introduction to Ken" />,
      },
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="School Trip" />
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="School Trip" />
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="School Trip" />
          </WideEvent>
        ),
      },
      { ...events.Fool, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
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
    date: new Date(2009, 6, 25),
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
    date: new Date(2009, 6, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 31),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
];
