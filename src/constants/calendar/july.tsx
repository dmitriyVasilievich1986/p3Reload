import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { EventCard, WideEvent, Question, Answer } from "@/components";
import { LabelExamGrade, classmates } from "./baseFunctions";
import { events, Times } from "@/constants/events";
import { StatsNames } from "@/constants/stats";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  SpecialEventsNames,
  pcProgramsNames,
} from "@/constants/events/types";

export const july: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 6, 1),
    activities: [
      events[SocialLinkNames.Temperance],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 2),
    activities: [
      events[SocialLinkNames.Fortune],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 3),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="H-Hey, lend me a hand here, ${mainCharName}. What kinda tale is he talkin' about?">
            <Answer label="About a peaceful world." />
            <Answer label="About public opinion." />
            <Answer label="About romance." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Emperor],
      { ...events[SocialLinkNames.Lovers], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 4),
    activities: [
      events[SocialLinkNames.Strength],
      {
        ...events[SpecialEventsNames.Notes],
        time: Times.EveningFreeTime,
        label: () => (
          <EventCard
            {...socialLinks[SocialLinkNames.Devil].linkDetails}
            head={`${SocialLinkNames.Devil} (Prerequisite)`}
          >
            <ul>
              <li>
                <p>Give President Tanaka ¥20,000.</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
      { ...events[SocialLinkNames.Sanada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 5),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      { ...events[SocialLinkNames.Empress], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 6),
    activities: [
      events[SocialLinkNames.Chariot],
      { ...events[SocialLinkNames.Empress], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 7),
    foolMoon: true,
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
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
      events[SocialLinkNames.Fool],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 8),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.HangedMan],
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 9),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.Hierophant],
      events[statsEventsAcademicsNames.dormExamStudyingGroup],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 10),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.Hierophant],
      events[statsEventsAcademicsNames.dormExamStudyingGroup],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 11),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.Hierophant],
      {
        ...events[SpecialEventsNames.Notes],
        time: Times.EveningFreeTime,
        label: () => (
          <EventCard
            {...socialLinks[SocialLinkNames.Devil].linkDetails}
            head={`${SocialLinkNames.Devil} (Prerequisite)`}
          >
            <ul>
              <li>
                <p>Give President Tanaka ¥10,000.</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
      events[pcProgramsNames.lobbyPCRevengeSiteNote],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 12),
    isDayOff: true,
    exams: true,
    activities: [
      events[SocialLinkNames.Hermit],
      events[pcProgramsNames.lobbyPCSecuritySiteNote],
      events[SocialLinkNames.Death],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 13),
    exams: true,
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.HangedMan],
      events[statsEventsAcademicsNames.dormExamStudyingTeam],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 14),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
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
  }),
  new SingleDay({
    date: new Date(2009, 6, 15),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
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
  }),
  new SingleDay({
    date: new Date(2009, 6, 16),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
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
  }),
  new SingleDay({
    date: new Date(2009, 6, 17),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
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
  }),
  new SingleDay({
    date: new Date(2009, 6, 18),
    activities: [
      { ...events[SpecialEventsNames.Exams], time: Times.Morning },
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Introduction to Ken" />,
      },
      events[statsEventsCourageNames.wilduckBurgeWeekendWilduckSet],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 19),
    isDayOff: true,
    exams: true,
    activities: [
      events[SocialLinkNames.Hermit],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 20),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="School Trip" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 21),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="School Trip" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 22),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="School Trip" />
          </WideEvent>
        ),
      },
      { ...events[SocialLinkNames.Fool], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 23),
    activities: [
      events[SpecialEventsNames.Special],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 24),
    activities: [
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
      events[SocialLinkNames.Sanada],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 25),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Strength],
      events[SocialLinkNames.Tower],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 26),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hermit],
      { ...events[SocialLinkNames.Empress], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 27),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Training for running competitions" />,
      },
      { ...events[SocialLinkNames.Empress], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 28),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Training for running competitions" />,
      },
      {
        ...events[SpecialEventsNames.Notes],
        time: Times.EveningFreeTime,
        label: () => (
          <EventCard
            {...socialLinks[SocialLinkNames.Devil].linkDetails}
            head={`${SocialLinkNames.Devil} (Prerequisite)`}
          >
            <ul>
              <li>
                <p>Give President Tanaka ¥10,000.</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 29),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Training for running competitions" />,
      },
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 30),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Training for running competitions" />,
      },
      events[SocialLinkNames.Tower],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 6, 31),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Training for running competitions" />,
      },
      events[SocialLinkNames.Tower],
    ],
  }),
];
