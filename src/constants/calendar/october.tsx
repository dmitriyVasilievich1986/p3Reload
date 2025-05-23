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
  pcProgramsNames,
} from "@/constants/events/types";

export const october: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 9, 1),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Magician],
      { ...events[SocialLinkNames.Koromaru], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 2),
    activities: [
      events[SocialLinkNames.Priestess],
      events[SocialLinkNames.Tower],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 3),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Priestess],
      { ...events[SocialLinkNames.Iori], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 4),
    foolMoon: true,
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.WholeDay,
        special: true,
        label: () => (
          <WideEvent>
            <EventCard
              head="Strength and Fortune Boss Fight"
              place="Tartarus"
            />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 5),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => <EventCard head="Aragaki's funeral" />,
      },
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 6),
    exams: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      events[statsEventsAcademicsNames.quest75],
      {
        ...events[SocialLinkNames.Aragaki],
        time: Times.AfterSchool,
        special: true,
      },
      events[pcProgramsNames.lobbyPCMentalInstructor],
      events[SocialLinkNames.Death],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 7),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="Which hormone is the one in your brain that provides a sense of achievement?">
            <Answer label="Melatonin." />
            <Answer label="Dopamine." points={15} />
            <Answer label="Histamine." />
          </Question>
        ),
      },
      events[statsEventsAcademicsNames.quest75],
      events[SocialLinkNames.Star],
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 8),
    exams: true,
    activities: [
      events[statsEventsAcademicsNames.quest75],
      events[SocialLinkNames.Chariot],
      events[statsEventsAcademicsNames.dormExamStudyingGroup],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 9),
    exams: true,
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[statsEventsAcademicsNames.quest75],
      events[SocialLinkNames.Star],
      events[statsEventsAcademicsNames.dormExamStudyingGroup],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 10),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="Who was the founder of Theosophy, a group that gave rise to many other magical societies?">
            <Answer label="Éliphas Lévi." />
            <Answer label="Helena Blavatsky." points={15} />
            <Answer label="Aleister Crowley." />
          </Question>
        ),
      },
      events[statsEventsAcademicsNames.quest75],
      events[SocialLinkNames.Justice],
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 11),
    isDayOff: true,
    exams: true,
    activities: [
      events[SocialLinkNames.Sun],
      events[statsEventsAcademicsNames.dormExamStudyingGroup],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 12),
    isDayOff: true,
    exams: true,
    activities: [
      events[SocialLinkNames.Lovers],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 13),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="The hormone dopamine is related to our sense of accomplishment. Name a symptom of its overproduction.">
              <Answer label="Excesive ego" />
              <Answer label="Self-glorification" />
              <Answer label="Addiction" points={15} />
              <Answer label="Apathy Syndrome" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 14),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="Who is considered by many to be the first numerologist, whose name lives on today in a mathematical theorem?">
              <Answer label="Pythagoras" points={15} />
              <Answer label="Euclid" />
              <Answer label="Hypatia" />
              <Answer label="Turing" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 15),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label="What happens when electrical resistance reaches zero? Hint: It was the word I used to confess my love to someone...">
              <Answer label="Superelectricity" />
              <Answer label="Superelasticity" />
              <Answer label="Superconductivity" points={15} />
              <Answer label="Supertransformativity" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 16),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question label='What is the meaning of the phrase "to spill the beans"?'>
              <Answer label="To be noisy" />
              <Answer label="To break into smile" />
              <Answer label="To reveal a secret" points={15} />
              <Answer label="To clarify your point" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 17),
    activities: [
      { ...events[SpecialEventsNames.Exams], time: Times.Morning },
      events[statsEventsAcademicsNames.quest75],
      events[SocialLinkNames.Priestess],
      { ...events[SocialLinkNames.Iori], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 18),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SocialLinkNames.Amada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 19),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label='We used the number "zero" a lot. Do you know where it originally came from, though?'>
            <Answer label="Egypt." />
            <Answer label="India." points={15} />
            <Answer label="Rome." />
          </Question>
        ),
      },
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
          if (previousWeek!.stats[StatsNames.Academics] >= 155) {
            newMultiplier = 1.51;
            charmAddendum = 4;
          } else if (previousWeek!.stats[StatsNames.Academics] >= 100) {
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
      events[statsEventsAcademicsNames.quest75],
      events[SocialLinkNames.Lovers],
      { ...events[SocialLinkNames.Sanada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 20),
    activities: [
      events[statsEventsAcademicsNames.quest75],
      events[SocialLinkNames.Justice],
      { ...events[SocialLinkNames.Aeon], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 21),
    activities: [
      events[SocialLinkNames.Lovers],
      { ...events[SocialLinkNames.Aeon], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 22),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="Which Roman goddess has been theorized as the namesake for the month of April?">
            <Answer label="Diana." />
            <Answer label="Minerva." />
            <Answer label="Venus." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Lovers],
      { ...events[SocialLinkNames.Koromaru], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 23),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Chariot],
      { ...events[SocialLinkNames.Amada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 24),
    activities: [
      events[SocialLinkNames.Lovers],
      { ...events[SocialLinkNames.Aeon], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 25),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SocialLinkNames.Aeon], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 26),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={`But there's one region that instead calls it "the month with gods," because that's where they all go! Do you know which one it is?`}
          >
            <Answer label="Dotonbori." />
            <Answer label="Izumo." points={15} />
            <Answer label="Ise." />
          </Question>
        ),
      },
      events[SocialLinkNames.Lovers],
      { ...events[SocialLinkNames.Empress], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 27),
    activities: [
      events[SocialLinkNames.Temperance],
      { ...events[SocialLinkNames.Priestess], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 28),
    activities: [
      events[SocialLinkNames.Lovers],
      events[pcProgramsNames.lobbyPCImageMuscleTrainer],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 29),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Fortune],
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Have {SocialLinkNames.Star} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Strength} card</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 30),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="A certain enzyme brings out the sweetness in them when they're baked. Do you happen to know what it is?">
            <Answer label="Beta-amylase." points={15} />
            <Answer label="Lactase." />
            <Answer label="Glucose." />
          </Question>
        ),
      },
      events[SocialLinkNames.Temperance],
      { ...events[SocialLinkNames.Amada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 9, 31),
    activities: [
      events[SocialLinkNames.Justice],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
];
