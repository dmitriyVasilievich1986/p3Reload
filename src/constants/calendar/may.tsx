import { Choices, Choice } from "../../components/choices";
import { baseCalendar, classmates } from "./baseFunctions";
import { EventCard } from "../../components/eventCard";
import { SocialLinkNames } from "../socialLinks/types";
import { StatsNames } from "../stats/types";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const may: singleDay[] = [
  {
    date: new Date(2009, 4, 1),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 4, 2),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.AfterSchool]: {
        ...events.Special,
        label: () => (
          <EventCard
            prerequisite={`Talk to Chihiro and say "Let's hang out."`}
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          />
        ),
      },
      [Times.Day]: events.Strength,
      [Times.Evening]: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 4, 3),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.lobbyPCDigitalCramSchool,
    },
  },
  {
    date: new Date(2009, 4, 4),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 4, 5),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 4, 6),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.schoolQuestionCharm,
        label: () => (
          <Choices
            label={
              "What do you call the device that helps generate electric power for the train?"
            }
          >
            <Choice label="A pantograph." points={15} />
            <Choice label="A piston." />
            <Choice label="A master controller." />
          </Choices>
        ),
      },
      [Times.AfterSchool]: {
        ...events.Special,
        label: () => (
          <EventCard
            prerequisite='Give her "Weird Takoyaki" & "Mad Bull"'
            place="Naganaki Shrine"
            name="Maiko Oohashi"
            head="Hanged Man"
          />
        ),
      },
      [Times.Day]: events.Emperor,
      [Times.Evening]: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 4, 7),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Justice,
      [Times.Evening]: events.lobbyPCLanguageMadeEasy,
    },
  },
  {
    date: new Date(2009, 4, 8),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Magician,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 4, 9),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Fool,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 4, 10),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.Tartarus,
    },
  },
  {
    date: new Date(2009, 4, 11),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.HangedMan,
      [Times.Evening]: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 4, 12),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.lobbyPCLessonsInEtiquette,
    },
  },
  {
    date: new Date(2009, 4, 13),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.schoolQuestionCharm,
        label: () => (
          <Choices label={"Which tool did he use in his experiments?"}>
            <Choice label="The hourglass." />
            <Choice label="The pendulum." points={15} />
            <Choice label="The planisphere." />
          </Choices>
        ),
      },
      [Times.Day]: events.HangedMan,
      [Times.Evening]: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 4, 14),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.wakatsuKitchenSpecial,
    },
  },
  {
    date: new Date(2009, 4, 15),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.schoolQuestionCharm,
        label: () => (
          <Choices
            label={`What's the other name for "May Sickness"-the more casual one?`}
          >
            <Choice label="May days." />
            <Choice label="May blues." points={15} />
            <Choice label="Moody blues." />
          </Choices>
        ),
      },
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.dormExamStudyingGroup,
    },
  },
  {
    date: new Date(2009, 4, 16),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.HangedMan,
      [Times.Evening]: events.dormExamStudyingGroup,
    },
  },
  {
    date: new Date(2009, 4, 17),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.dormExamStudyingTeam,
    },
  },
  {
    date: new Date(2009, 4, 18),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Exams,
      [Times.Day]: events.Exams,
      [Times.Evening]: events.Exams,
    },
  },
  {
    date: new Date(2009, 4, 19),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.Exams,
        label: () => (
          <Choices
            label={
              'What is the other common expression used to describe "May Sickness"?'
            }
          >
            <Choice label="May blues" points={15} />
            <Choice label="Moody blues" />
            <Choice label="May days" />
            <Choice label="Dropsy" />
          </Choices>
        ),
      },
      [Times.Day]: events.Exams,
      [Times.Evening]: events.Exams,
    },
  },
  {
    date: new Date(2009, 4, 20),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.Exams,
        label: () => (
          <Choices
            label={
              "Which of the following did Léon Foucault use in his experiment on the rotation of the Earth?"
            }
          >
            <Choice label="A magnet" />
            <Choice label="A tuning fork" />
            <Choice label="A pendulum" points={15} />
            <Choice label="A vacuum tube" />
          </Choices>
        ),
      },
      [Times.Day]: events.Exams,
      [Times.Evening]: events.Exams,
    },
  },
  {
    date: new Date(2009, 4, 21),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.Exams,
        label: () => (
          <Choices
            label={"Which of the following is generated by a pantograph?"}
          >
            <Choice label="Frictional heat" />
            <Choice label="Electricity" points={15} />
            <Choice label="Magnetism" />
            <Choice label="Cold air" />
          </Choices>
        ),
      },
      [Times.Day]: events.Exams,
      [Times.Evening]: events.Exams,
    },
  },
  {
    date: new Date(2009, 4, 22),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.Exams,
        label: () => (
          <Choices
            label={
              "During which historical period were middens most commonly used?"
            }
          >
            <Choice label="Jomon" points={15} />
            <Choice label="Yayoi" />
            <Choice label="Kofun" />
            <Choice label="Asuka" />
          </Choices>
        ),
      },
      [Times.Day]: events.Exams,
      [Times.Evening]: events.Exams,
    },
  },
  {
    date: new Date(2009, 4, 23),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Exams,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 24),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 25),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.AfterSchool]: {
        ...events.Exams,
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
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 26),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 27),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 28),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 29),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 30),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    date: new Date(2009, 4, 31),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
];
