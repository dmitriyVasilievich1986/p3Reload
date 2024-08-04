import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { baseCalendar } from "./baseFunctions";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const june: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 5, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Emperor, events.AkihikoSanada1],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 2),
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
    date: new Date(2009, 5, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Temperance, events.hagakureRamenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Chariot, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Emperor, events.gameParadeCourage],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Justice, events.wilduckBigEaterChallenge],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 7),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Moon, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 8),
    foolMoon: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard
              head="Empress And Emperror Boss Fight"
              place="Tartarus"
            />
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.drinkMedicine,
      events.Temperance,
      events.hagakureRamenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.Emperor,
      events.hagakureRamenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Chariot, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Magician, events.hagakureRamenSpecial, events.Death],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.Justice,
      {
        ...events.Special,
        time: Times.Evening,
        label: () => <EventCard head="Theurgy Tutorial" place="Tartarus" />,
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 14),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Moon, events.wilduckBurgeWeekendWilduckSet],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              'Which phrase means, "able to see things for what they really are"?'
            }
          >
            <Answer label="Keen eye." points={15} />
            <Answer label="Mean eye." />
            <Answer label="Bright eyes." />
          </Question>
        ),
      },
      events.Emperor,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Temperance, events.hagakureRamenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={"What early religious practice was the origin of magic?"}
          >
            <Answer label="Totemism." />
            <Answer label="Animism." />
            <Answer label="Shamanism." points={15} />
          </Question>
        ),
      },
      events.Fortune,
      events.hagakureRamenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Fortune, events.wakatsuKitchenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Temperance, events.hagakureRamenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        label: () => <EventCard head="Koromaru Introduction" />,
      },
      events.wilduckBurgeWeekendWilduckSet,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 21),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Moon, events.wilduckBurgeWeekendWilduckSet],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label={"What else do people call this curve?"}>
            <Answer label="Orthogonal curves." />
            <Answer label="Fermat's spiral." />
            <Answer label="Witch of Agnesi." points={15} />
          </Question>
        ),
      },
      events.Emperor,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Fortune, events.hagakureRamenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Fortune, events.hagakureRamenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              "What's it called when the air bubbles in a whirlpool bath hit you and make you vibrate?"
            }
          >
            <Answer label="The anchor effect." />
            <Answer label="The flutter effect" points={15} />
            <Answer label="The bubble jet phenomenon." />
          </Question>
        ),
      },
      events.Chariot,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Magician, events.hagakureRamenSpecial],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Justice, events.wilduckBurgeWeekendWilduckSet],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 28),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Moon, events.wilduckBurgeWeekendWilduckSet],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={"What form of natural magic is used to find water sources?"}
          >
            <Answer label="Dowsing." points={15} />
            <Answer label="Divining." />
            <Answer label="Channeling." />
          </Question>
        ),
      },
      events.Emperor,
      events.wakatsuKitchenSpecial,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Magician, events.hagakureRamenSpecial],
  },
];
