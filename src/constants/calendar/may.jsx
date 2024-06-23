import EventCard, { Item } from "../../components/eventCard/EventCard.jsx";
import { Choices, Choice } from "../../components/choices/Choices.jsx";
import { baseCalendar, classmates } from "./baseFunctions.jsx";
import { socialLinks } from "../socialLinks/index.js";
import { events } from "../events";
import { stats } from "../stats";
import React from "react";

export const may = [
  {
    date: new Date(2009, 4, 1),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 4, 2),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      afterSchool: {
        ...events.special,
        label: () => (
          <EventCard
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          >
            <Item
              value={`Talk to Chihiro and say "Let's hang out."`}
              label="Key"
            />
          </EventCard>
        ),
      },
      day: events.Strength,
      evening: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 4, 3),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hermit,
      evening: events.lobbyPCDigitalCramSchool,
    },
  },
  {
    date: new Date(2009, 4, 4),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hermit,
      evening: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 4, 5),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hierophant,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 4, 6),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
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
      day: events.Emperor,
      evening: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 4, 7),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Justice,
      evening: events.lobbyPCLanguageMadeEasy,
    },
  },
  {
    date: new Date(2009, 4, 8),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Magician,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 4, 9),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Fool,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 4, 10),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.Hermit,
      evening: events.tartarus,
    },
  },
  {
    date: new Date(2009, 4, 11),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.HangedMan,
      evening: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 4, 12),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.lobbyPCLessonsInEtiquette,
    },
  },
  {
    date: new Date(2009, 4, 13),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
        ...events.schoolQuestionCharm,
        label: () => (
          <Choices label={"Which tool did he use in his experiments?"}>
            <Choice label="The Pendulum." points={15} />
          </Choices>
        ),
      },
      day: events.HangedMan,
      evening: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 4, 14),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.Hierophant,
      evening: events.wakatsuKitchenSpecial,
    },
  },
  {
    date: new Date(2009, 4, 15),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
        ...events.schoolQuestionCharm,
        label: () => (
          <Choices
            label={`What's the other name for "May Sickness"-the more casual one?`}
          >
            <Choice label="May Blues." points={15} />
          </Choices>
        ),
      },
      day: events.Hierophant,
      evening: events.dormExamStudyingGroup,
    },
  },
  {
    date: new Date(2009, 4, 16),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.HangedMan,
      evening: events.dormExamStudyingGroup,
    },
  },
  {
    date: new Date(2009, 4, 17),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.Hermit,
      evening: events.dormExamStudyingTeam,
    },
  },
  {
    date: new Date(2009, 4, 18),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.exams,
      day: events.exams,
      evening: events.exams,
    },
  },
  {
    date: new Date(2009, 4, 19),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
        ...events.exams,
        label: () => (
          <Choices
            label={
              'What is the other common expression used to describe "May Sickness"?'
            }
          >
            <Choice label="May Blues" points={15} />
          </Choices>
        ),
      },
      day: events.exams,
      evening: events.exams,
    },
  },
  {
    date: new Date(2009, 4, 20),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
        ...events.exams,
        label: () => (
          <Choices
            label={
              "Which of the following did Léon Foucault use in his experiment on the rotation of the Earth?"
            }
          >
            <Choice label="A pendulum" points={15} />
          </Choices>
        ),
      },
      day: events.exams,
      evening: events.exams,
    },
  },
  {
    date: new Date(2009, 4, 21),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
        ...events.exams,
        label: () => (
          <Choices
            label={"Which of the following is generated by a pantograph?"}
          >
            <Choice label="Electricity" points={15} />
          </Choices>
        ),
      },
      day: events.exams,
      evening: events.exams,
    },
  },
  {
    date: new Date(2009, 4, 22),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
        ...events.exams,
        label: () => (
          <Choices
            label={
              "During which historical period were middens most commonly used?"
            }
          >
            <Choice label="Jomon" points={15} />
          </Choices>
        ),
      },
      day: events.exams,
      evening: events.exams,
    },
  },
  {
    date: new Date(2009, 4, 23),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.exams,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 24),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 25),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
        ...events.exams,
        label: () => <EventCard head="Exam results" />,
        upgrade: function ({ currentStats, currentLinks, weekAgoStats }) {
          let newMultiplier = 1;
          let charmAddendum = 2;
          if (weekAgoStats[stats.Academics.name] >= 55) {
            newMultiplier = 1.51;
            charmAddendum = 4;
          } else if (weekAgoStats[stats.Academics.name] >= 20) {
            newMultiplier = 1.21;
            charmAddendum = 3;
          }

          const newLinks = Object.fromEntries(
            Object.keys(currentLinks)
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
              [stats.Charm.name]:
                currentStats[stats.Charm.name] + charmAddendum,
            },
          };
        },
      },
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 26),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 27),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 28),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 29),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 30),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 4, 31),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.noControl,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
];
