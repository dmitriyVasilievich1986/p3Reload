import { Choices, Choice } from "../../components/choices";
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
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Special,
      events.lobbyPCLessonsInEtiquette,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
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
      events.Strength,
      events.gameParadeAcademics,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hermit,
      events.lobbyPCDigitalCramSchool,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hermit,
      events.gameParadeCharm,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hierophant,
      events.lobbyPCVirtualDiet,
    ],
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
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Justice,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Magician,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 9),
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
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hermit,
      events.Tartarus,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 11),
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
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.DoNothing,
      events.lobbyPCTypinGhoul,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Choices label={"Which tool did he use in his experiments?"}>
            <Choice label="The hourglass." />
            <Choice label="The pendulum." points={15} />
            <Choice label="The planisphere." />
          </Choices>
        ),
      },
      events.HangedMan,
      events.lobbyPCLanguageMadeEasy,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hierophant,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
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
      events.Hierophant,
      events.dormExamStudyingGroup,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 16),
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
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hermit,
      events.dormExamStudyingTeam,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 18),
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
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
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
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
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
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
            <Choices
              label={"Which of the following is generated by a pantograph?"}
            >
              <Choice label="Frictional heat" />
              <Choice label="Electricity" points={15} />
              <Choice label="Magnetism" />
              <Choice label="Cold air" />
            </Choices>
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Exams,
        label: () => (
          <WideEvent>
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
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
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
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 4, 28),
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
    date: new Date(2009, 4, 29),
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
    date: new Date(2009, 4, 30),
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
    date: new Date(2009, 4, 31),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
];
