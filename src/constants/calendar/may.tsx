import { EventCard, WideEvent, Question, Answer } from "@/components";
import { LabelExamGrade, classmates } from "./baseFunctions";
import { SocialLinkNames } from "@/constants/socialLinks";
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

export const may: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 4, 1),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.Day,
        label: () => <EventCard head="Akihiko's check up" />,
      },
      events[pcProgramsNames.lobbyPCLessonsInEtiquette],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 2),
    activities: [
      events[SocialLinkNames.Hierophant],
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 3),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hermit],
      events[pcProgramsNames.lobbyPCVirtualDiet],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 4),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hermit],
      events[statsEventsCharmNames.gameParadeCharm],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 5),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hermit],
      events[pcProgramsNames.lobbyPCDigitalCramSchool],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 6),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={
              "What do you call the device that helps generate electric power for the train?"
            }
          >
            <Answer label="A pantograph." points={15} />
            <Answer label="A piston." />
            <Answer label="A master controller." />
          </Question>
        ),
      },
      events[SocialLinkNames.Emperor],
      events[pcProgramsNames.lobbyPCLanguageMadeEasy],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 7),
    activities: [
      events[SocialLinkNames.Justice],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 8),
    activities: [
      events[SocialLinkNames.Magician],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 9),
    foolMoon: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => <EventCard head="Priestess Boss Fight" place="Tartarus" />,
      },
      { ...events[SocialLinkNames.Fool], time: Times.DarkHour },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 10),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hierophant],
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Have at least ¥51,300</p>
              </li>
              <li>
                <p>Be at least level 12</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.HangedMan} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Chariot} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Temperance} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Justice} card</p>
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
    date: new Date(2009, 4, 11),
    exams: true,
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.HangedMan],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 12),
    exams: true,
    activities: [
      events[SocialLinkNames.Iori],
      events[pcProgramsNames.lobbyPCAnimalOthello],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 13),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label={"Which tool did he use in his experiments?"}>
            <Answer label="The hourglass." />
            <Answer label="The pendulum." points={15} />
            <Answer label="The planisphere." />
          </Question>
        ),
      },
      events[SocialLinkNames.HangedMan],
      events[pcProgramsNames.lobbyPCTypinGhoul],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 14),
    exams: true,
    activities: [
      events[SocialLinkNames.Hierophant],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 15),
    exams: true,
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={`What's the other name for "May Sickness"-the more casual one?`}
          >
            <Answer label="May days." />
            <Answer label="May blues." points={15} />
            <Answer label="Moody blues." />
          </Question>
        ),
      },
      events[SocialLinkNames.Moon],
      events[statsEventsAcademicsNames.dormExamStudyingGroup],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 16),
    exams: true,
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.HangedMan],
      events[statsEventsAcademicsNames.dormExamStudyingGroup],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 17),
    isDayOff: true,
    exams: true,
    activities: [
      events[SocialLinkNames.Moon],
      events[statsEventsAcademicsNames.dormExamStudyingTeam],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 18),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: (props) => (
          <WideEvent>
            {events[SpecialEventsNames.Exams].label({ ...props })}
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 19),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question
              label={
                'What is the other common expression used to describe "May Sickness"?'
              }
            >
              <Answer label="May blues" points={15} />
              <Answer label="Moody blues" />
              <Answer label="May days" />
              <Answer label="Dropsy" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 20),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question
              label={
                "Which of the following did Léon Foucault use in his experiment on the rotation of the Earth?"
              }
            >
              <Answer label="A magnet" />
              <Answer label="A tuning fork" />
              <Answer label="A pendulum" points={15} />
              <Answer label="A vacuum tube" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 21),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question
              label={"Which of the following is generated by a pantograph?"}
            >
              <Answer label="Frictional heat" />
              <Answer label="Electricity" points={15} />
              <Answer label="Magnetism" />
              <Answer label="Cold air" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 22),
    exams: true,
    activities: [
      {
        ...events[SpecialEventsNames.Exams],
        label: () => (
          <WideEvent>
            <Question
              label={
                "During which historical period were middens most commonly used?"
              }
            >
              <Answer label="Jomon" points={15} />
              <Answer label="Yayoi" />
              <Answer label="Kofun" />
              <Answer label="Asuka" />
            </Question>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 23),
    activities: [
      { ...events[SpecialEventsNames.Exams], time: Times.Morning },
      events[SocialLinkNames.Justice],
      events[pcProgramsNames.lobbyPCIwatodaiForumNote],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 24),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      events[pcProgramsNames.lobbyPCSchoolXSiteNote],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 25),
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
          if (previousWeek!.stats[StatsNames.Academics] >= 55) {
            newMultiplier = 1.51;
            charmAddendum = 4;
          } else if (previousWeek!.stats[StatsNames.Academics] >= 20) {
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
      events[SocialLinkNames.Emperor],
      events[pcProgramsNames.lobbyPCUmiushiFanBook],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 26),
    activities: [
      events[SocialLinkNames.Chariot],
      events[statsEventsCourageNames.gameParadeCourage],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 27),
    activities: [
      events[SocialLinkNames.Temperance],
      events[statsEventsCharmNames.hagakureRamen],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 28),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Chariot],
      events[pcProgramsNames.lobbyPCMindfulBootCamp],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 29),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Temperance],
      events[statsEventsCourageNames.gameParadeCourage],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 30),
    activities: [
      events[SocialLinkNames.Justice],
      events[pcProgramsNames.lobbyPCMuscleBootCamp],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 31),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
];
