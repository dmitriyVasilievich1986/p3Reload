import { Question, Answer } from "../../components/choices";
import { mainCharName } from "../socialLinks/baseFunctions";
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
            label={`H-Hey, lend me a hand here, ${mainCharName}. What kinda tale is he talkin' about?`}
          >
            <Answer label="About a peaceful world." />
            <Answer label="About public opinion." />
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
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 5),
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
    date: new Date(2009, 6, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 7),
    foolMoon: true,
    exams: true,
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
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={`"Because it is 10:30 right now, we will not reach the theater in time, it's already started, to my dismay."`}
          >
            <Answer label='Between "now" and "we."' />
            <Answer label={`Between "time" and "it's."`} points={15} />
            <Answer label='Between "started" and "to."' />
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
    exams: true,
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
            <Answer label="Land invasion." />
            <Answer label="Environmental destruction." />
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
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={"What is the esoteric study of Jewish texts called?"}
          >
            <Answer label="Lemegeton." />
            <Answer label="Gnosticism." />
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
    exams: true,
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
            <Answer label="The katana" points={15} />
            <Answer label="Armor." />
            <Answer label="The rifle." />
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
    exams: true,
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      events.Death,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 13),
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
    date: new Date(2009, 6, 14),
    exams: true,
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
              <Answer label="Scrying" />
              <Answer label="Dowsing" points={15} />
              <Answer label="Channeling" />
              <Answer label="Summoning" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 15),
    exams: true,
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
              <Answer label="The shape is bewitching" />
              <Answer label="Its enchanting formula" />
              <Answer label="An error in translation" points={15} />
              <Answer label="A witch invented it" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 16),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Question label={"Who designed the prototype for the katana?"}>
              <Answer label="Taira no Masakado" points={15} />
              <Answer label="Yoshinobu Tokugava" />
              <Answer label="Prince Shotoku" />
              <Answer label="Tokimune Hojo" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 17),
    exams: true,
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
              <Answer label="Incorrect apostrophe" />
              <Answer label="Comma splice" points={15} />
              <Answer label="Missing subject" />
              <Answer label="Misspelling" />
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
    date: new Date(2009, 6, 20),
    isDayOff: true,
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
    isDayOff: true,
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
    isDayOff: true,
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
    date: new Date(2009, 6, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        time: Times.AfterSchool,
        label: () => <EventCard head="Exam results" />,
        upgrade: function (currentDay: singleDay, previousWeek?: singleDay) {
          let newMultiplier = 1;
          let charmAddendum = 2;
          if (previousWeek!.stats[StatsNames.Academics] >= 100) {
            newMultiplier = 1.51;
            charmAddendum = 4;
          } else if (previousWeek!.stats[StatsNames.Academics] >= 55) {
            newMultiplier = 1.21;
            charmAddendum = 3;
          }

          const newLinks = Object.fromEntries(
            (Object.keys(currentDay.links) as Array<SocialLinkNames>)
              .filter((k) => classmates.includes(k))
              .map((k) => [
                k,
                { ...currentDay.links[k], multiplier: newMultiplier },
              ])
          );

          return {
            links: {
              ...currentDay.links,
              ...newLinks,
            },
            stats: {
              ...currentDay.stats,
              [StatsNames.Charm]:
                currentDay.stats[StatsNames.Charm] + charmAddendum,
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
    date: new Date(2009, 6, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special },
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special },
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special },
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special },
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 6, 31),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special },
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
];
