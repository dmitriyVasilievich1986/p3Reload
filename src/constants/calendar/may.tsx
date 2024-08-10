import { EventCard, WideEvent, Question, Answer } from "@/components";
import { SocialLinkNames } from "@/constants/socialLinks";
import { events, Times } from "@/constants/events";
import { StatsNames } from "@/constants/stats";
import { classmates } from "./baseFunctions";
import { SingleDay } from "./SingleDay";

export const may: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 4, 1),
    activities: [events.Special, events.lobbyPCLessonsInEtiquette],
  }),
  new SingleDay({
    date: new Date(2009, 4, 2),
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 3),
    isDayOff: true,
    activities: [events.Hermit, events.lobbyPCDigitalCramSchool],
  }),
  new SingleDay({
    date: new Date(2009, 4, 4),
    isDayOff: true,
    activities: [events.Hermit, events.gameParadeCharm],
  }),
  new SingleDay({
    date: new Date(2009, 4, 5),
    isDayOff: true,
    activities: [events.Hermit, events.lobbyPCVirtualDiet],
  }),
  new SingleDay({
    date: new Date(2009, 4, 6),
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 7),
    activities: [events.Justice, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 4, 8),
    activities: [events.Magician, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 4, 9),
    foolMoon: true,
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => <EventCard head="Priestess Boss Fight" place="Tartarus" />,
      },
      { ...events.Fool, time: Times.DarkHour },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 10),
    isDayOff: true,
    activities: [events.Hierophant, events.Tartarus],
  }),
  new SingleDay({
    date: new Date(2009, 4, 11),
    exams: true,
    activities: [
      events.stayAwakeInClass,
      events.drinkMedicine,
      events.HangedMan,
      events.wakatsuKitchenSpecial,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 12),
    exams: true,
    activities: [events.JunpeiIori1, events.lobbyPCTypinGhoul],
  }),
  new SingleDay({
    date: new Date(2009, 4, 13),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 14),
    exams: true,
    activities: [events.Hierophant, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 4, 15),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 16),
    exams: true,
    activities: [
      events.stayAwakeInClass,
      events.HangedMan,
      events.dormExamStudyingGroup,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 17),
    isDayOff: true,
    exams: true,
    activities: [events.Moon, events.dormExamStudyingTeam],
  }),
  new SingleDay({
    date: new Date(2009, 4, 18),
    exams: true,
    activities: [
      {
        ...events.Exams,
        label: (props) => (
          <WideEvent>{events.Exams.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 19),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 20),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 21),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 22),
    exams: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 4, 23),
    activities: [
      { ...events.Exams, time: Times.Morning },
      events.HangedMan,
      events.gameParadeAcademics,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 24),
    isDayOff: true,
    activities: [events.Moon, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 4, 25),
    activities: [
      events.stayAwakeInClass,
      {
        ...events.Exams,
        time: Times.AfterSchool,
        label: () => <EventCard head="Exam results" />,
        upgrade: function (currentDay: SingleDay, previousWeek?: SingleDay) {
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
      events.Emperor,
      events.wakatsuKitchenSpecial,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 26),
    activities: [events.Chariot, events.gameParadeCourage],
  }),
  new SingleDay({
    date: new Date(2009, 4, 27),
    activities: [events.Temperance, events.hagakureRamenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 4, 28),
    activities: [
      events.stayAwakeInClass,
      events.Chariot,
      events.wakatsuKitchenSpecial,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 29),
    activities: [
      events.stayAwakeInClass,
      events.Temperance,
      events.gameParadeCourage,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 4, 30),
    activities: [events.HangedMan, events.gameParadeAcademics],
  }),
  new SingleDay({
    date: new Date(2009, 4, 31),
    isDayOff: true,
    activities: [events.Moon, events.wakatsuKitchenSpecial],
  }),
];
