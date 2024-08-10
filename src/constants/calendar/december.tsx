import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { SocialLinkNames } from "../socialLinks/types";
import { classmates } from "./baseFunctions";
import { StatsNames } from "../stats/types";
import { Times } from "../events/types";
import { SingleDay } from "./SingleDay";
import { events } from "../events";

export const december: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 11, 1),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 2),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 3),
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  }),
  new SingleDay({
    date: new Date(2009, 11, 4),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 5),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 6),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 7),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 8),
    exams: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 9),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 10),
    exams: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 11),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 12),
    exams: true,
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 13),
    isDayOff: true,
    exams: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 14),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 15),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 16),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 17),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 18),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 19),
    activities: [
      { ...events.Exams, time: Times.Morning },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 20),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 21),
    activities: [
      {
        ...events.Exams,
        time: Times.AfterSchool,
        label: () => <EventCard head="Exam results" />,
        upgrade: function (currentDay: SingleDay, previousWeek?: SingleDay) {
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 22),
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
  }),
  new SingleDay({
    date: new Date(2009, 11, 23),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 24),
    activities: [
      events.stayAwakeInClass,
      { ...events.Special, time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 25),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 26),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 27),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 28),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 29),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 30),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 31),
    activities: [events.DoNothing, { ...events.Fool, time: Times.Evening }],
  }),
];
