import { Question, Answer } from "../../components/choices";
import { baseCalendar, classmates } from "./baseFunctions";
import { EventCard } from "../../components/eventCard";
import { SocialLinkNames } from "../socialLinks/types";
import { WideEvent } from "../../components/wideEvent";
import { StatsNames } from "../stats/types";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const may: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 4, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Special, events.lobbyPCLessonsInEtiquette],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.AfterSchool,
        label: () => (
          <EventCard
            prerequisite={`Talk to Chihiro and say "Let's hang out."`}
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          />
        ),
      },
      events.Hierophant,
      events.gameParadeAcademics,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 3),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Hermit, events.lobbyPCDigitalCramSchool],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 4),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Hermit, events.gameParadeCharm],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 5),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Hermit, events.lobbyPCVirtualDiet],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
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
      {
        ...events.Special,
        time: Times.AfterSchool,
        label: () => (
          <EventCard
            prerequisite='Give her "Weird Takoyaki" & "Mad Bull"'
            place="Naganaki Shrine"
            name="Maiko Oohashi"
            head="Hanged Man"
          />
        ),
      },
      events.Emperor,
      events.lobbyPCAnimalOthello,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Justice, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Magician, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 9),
    foolMoon: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => <EventCard head="Priestess Boss Fight" place="Tartarus" />,
      },
      { ...events.Fool, time: Times.DarkHour },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 10),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Hierophant, events.Tartarus],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 11),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.drinkMedicine,
      events.HangedMan,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 12),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.JunpeiIori1, events.lobbyPCTypinGhoul],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 13),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label={"Which tool did he use in his experiments?"}>
            <Answer label="The hourglass." />
            <Answer label="The pendulum." points={15} />
            <Answer label="The planisphere." />
          </Question>
        ),
      },
      events.HangedMan,
      events.lobbyPCLanguageMadeEasy,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 14),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Hierophant, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 15),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
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
      events.Moon,
      events.dormExamStudyingGroup,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 16),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.HangedMan,
      events.dormExamStudyingGroup,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 17),
    isDayOff: true,
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Moon, events.dormExamStudyingTeam],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 18),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: (props) => (
          <WideEvent>{events.Exams.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 19),
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
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 20),
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
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 21),
    exams: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
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
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 22),
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
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Exams, time: Times.Morning },
      events.HangedMan,
      events.gameParadeAcademics,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 24),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Moon, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      {
        ...events.Exams,
        time: Times.AfterSchool,
        label: () => <EventCard head="Exam results" />,
        upgrade: function ({ currentStats, currentLinks, weekAgoStats }) {
          let newMultiplier = 1;
          let charmAddendum = 2;
          if (weekAgoStats[StatsNames.Academics] >= 55) {
            newMultiplier = 1.51;
            charmAddendum = 4;
          } else if (weekAgoStats[StatsNames.Academics] >= 20) {
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
      events.Emperor,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Chariot, events.gameParadeCourage],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Temperance, events.hagakureRamenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.Chariot,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.Temperance,
      events.gameParadeCourage,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.HangedMan, events.gameParadeAcademics],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 31),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Moon, events.wakatsuKitchenSpecial],
  },
];
