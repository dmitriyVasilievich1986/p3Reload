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
    ...baseCalendar,
    date: new Date(2009, 4, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.lobbyPCLessonsInEtiquette,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 2),
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
    ...baseCalendar,
    date: new Date(2009, 4, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.lobbyPCDigitalCramSchool,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.gameParadeCharm,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.lobbyPCVirtualDiet,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 6),
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
      [Times.Evening]: events.lobbyPCAnimalOthello,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Justice,
      [Times.Evening]: events.wakatsuKitchenSpecial,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Magician,
      [Times.Evening]: events.wakatsuKitchenSpecial,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Fool,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.Tartarus,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.HangedMan,
      [Times.Evening]: events.wakatsuKitchenSpecial,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.lobbyPCTypinGhoul,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 13),
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
      [Times.Evening]: events.lobbyPCLanguageMadeEasy,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.wakatsuKitchenSpecial,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 15),
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
    ...baseCalendar,
    date: new Date(2009, 4, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.HangedMan,
      [Times.Evening]: events.dormExamStudyingGroup,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.dormExamStudyingTeam,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Exams,
      [Times.Day]: events.Exams,
      [Times.Evening]: events.Exams,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 19),
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
    ...baseCalendar,
    date: new Date(2009, 4, 20),
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
    ...baseCalendar,
    date: new Date(2009, 4, 21),
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
    ...baseCalendar,
    date: new Date(2009, 4, 22),
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
    ...baseCalendar,
    date: new Date(2009, 4, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Exams,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 25),
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
    ...baseCalendar,
    date: new Date(2009, 4, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 31),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.NoControl,
      [Times.Day]: events.DoNothing,
      [Times.Evening]: events.DoNothing,
    },
  },
];
