import { EventCard, WideEvent, Question, Answer } from "@/components";
import { LabelExamGrade, classmates } from "./baseFunctions";
import { SocialLinkNames } from "@/constants/socialLinks";
import { events, Times } from "@/constants/events";
import { StatsNames } from "@/constants/stats";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  statsEventsCharmNames,
  SpecialEventsNames,
} from "@/constants/events/types";

export const december: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 11, 1),
    activities: [
      events[SocialLinkNames.Mochizuki],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 2),
    foolMoon: true,
    activities: [
      events[SocialLinkNames.Strength],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 3),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.Day,
        label: () => <EventCard head="Nyx introduction" />,
      },
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 4),
    activities: [
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 5),
    activities: [
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 6),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 7),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What's the name of the stratospheric layer of molecules comprised of three oxygen atoms?">
            <Answer label="The ozone layer." points={15} />
            <Answer label="The ionosphere." />
            <Answer label="The homosphere." />
          </Question>
        ),
      },
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 8),
    exams: true,
    activities: [
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 9),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What sorcery was Himiko said to have used?">
            <Answer label="Onmyodo." />
            <Answer label="Kido." points={15} />
            <Answer label="Jugongo." />
          </Question>
        ),
      },
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 10),
    exams: true,
    activities: [
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 11),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="Did you catch what she said? Do you know the answer?">
            <Answer label="Wishes." />
            <Answer label="Lives." points={15} />
            <Answer label="Dreams." />
          </Question>
        ),
      },
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 12),
    exams: true,
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.HangedMan],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 13),
    isDayOff: true,
    exams: true,
    activities: [
      events[SocialLinkNames.Hermit],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 14),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="Which of the following originated in India?">
              <Answer label="The number zero" points={15} />
              <Answer label="Imaginary numbers" />
              <Answer label="Systems of linear equations" />
              <Answer label="Factorials" />
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
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="When heated, the beta-amylase enzymes in sweet potatoes react with the starch present to produce which disaccharide?">
              <Answer label="Sucrose" />
              <Answer label="Maltose" points={15} />
              <Answer label="Galactose" />
              <Answer label="Maltese" />
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
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="Which Roman goddess has been theorized as the namesake for the month of April?">
              <Answer label="Ceres" />
              <Answer label="Minerva" />
              <Answer label="Venus" points={15} />
              <Answer label="Diana" />
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
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="In The Tale of Genji, who does Hikaru Genji compare to cherry blossoms?">
              <Answer label="Onna San no Miya" />
              <Answer label="Lady Fujitsubo" />
              <Answer label="Aoi-no-Ue" />
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
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="Which of the following words is not in the correct plural form?">
              <Answer label="Mice" />
              <Answer label="Cacti" />
              <Answer label="Moose" />
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
      { ...events[SpecialEventsNames.Exams], time: Times.Morning },
      events[SocialLinkNames.Iori],
      events[SocialLinkNames.Sanada],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 20),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Star],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 21),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      {
        ...events[SpecialEventsNames.Exams],
        time: Times.AfterSchool,
        label: LabelExamGrade,
        upgrade: function ({
          previousWeek,
          currentDay,
        }: {
          previousWeek?: SingleDay;
          currentDay: SingleDay;
        }) {
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
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 22),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What do we call the feeling of joy that comes from a near-death experience?">
            <Answer label="Euphoria." points={15} />
            <Answer label="Utopia." />
            <Answer label="Yugoslavia." />
          </Question>
        ),
      },
      events[SocialLinkNames.Empress],
      events[SocialLinkNames.Amada],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 23),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.HangedMan],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 24),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 25),
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 26),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Strength],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 27),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 28),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 29),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 30),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 11, 31),
    isDayOff: true,
    foolMoon: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      {
        ...events[SocialLinkNames.Mochizuki],
        time: Times.Evening,
        special: true,
      },
      { ...events[SocialLinkNames.Fool], time: Times.Evening },
    ],
  }),
];
