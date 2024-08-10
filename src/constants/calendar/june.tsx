import { EventCard, WideEvent, Question, Answer } from "@/components";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

export const june: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 5, 1),
    activities: [events.Emperor, events.AkihikoSanada1],
  }),
  new SingleDay({
    date: new Date(2009, 5, 2),
    activities: [
      events.stayAwakeInClass,
      events.Temperance,
      events.gameParadeCourage,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 3),
    activities: [events.Temperance, events.hagakureRamenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 4),
    activities: [events.Chariot, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 5),
    activities: [events.Emperor, events.gameParadeCourage],
  }),
  new SingleDay({
    date: new Date(2009, 5, 6),
    activities: [events.Justice, events.wilduckBigEaterChallenge],
  }),
  new SingleDay({
    date: new Date(2009, 5, 7),
    isDayOff: true,
    activities: [events.Moon, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 8),
    foolMoon: true,
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
  }),
  new SingleDay({
    date: new Date(2009, 5, 9),
    activities: [
      events.drinkMedicine,
      events.Temperance,
      events.hagakureRamenSpecial,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 10),
    activities: [
      events.stayAwakeInClass,
      events.Emperor,
      events.hagakureRamenSpecial,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 11),
    activities: [events.Chariot, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 12),
    activities: [events.Magician, events.hagakureRamenSpecial, events.Death],
  }),
  new SingleDay({
    date: new Date(2009, 5, 13),
    activities: [
      events.Justice,
      {
        ...events.Special,
        time: Times.Evening,
        label: () => <EventCard head="Theurgy Tutorial" place="Tartarus" />,
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 14),
    isDayOff: true,
    activities: [events.Moon, events.wilduckBurgeWeekendWilduckSet],
  }),
  new SingleDay({
    date: new Date(2009, 5, 15),
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
  }),
  new SingleDay({
    date: new Date(2009, 5, 16),
    activities: [events.Temperance, events.hagakureRamenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 17),
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
  }),
  new SingleDay({
    date: new Date(2009, 5, 18),
    activities: [events.Fortune, events.wakatsuKitchenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 19),
    activities: [events.Temperance, events.hagakureRamenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 20),
    activities: [
      {
        ...events.Special,
        label: () => <EventCard head="Koromaru Introduction" />,
      },
      events.wilduckBurgeWeekendWilduckSet,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 21),
    isDayOff: true,
    activities: [events.Moon, events.wilduckBurgeWeekendWilduckSet],
  }),
  new SingleDay({
    date: new Date(2009, 5, 22),
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
  }),
  new SingleDay({
    date: new Date(2009, 5, 23),
    activities: [events.Fortune, events.hagakureRamenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 24),
    activities: [events.Fortune, events.hagakureRamenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 25),
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
  }),
  new SingleDay({
    date: new Date(2009, 5, 26),
    activities: [events.Magician, events.hagakureRamenSpecial],
  }),
  new SingleDay({
    date: new Date(2009, 5, 27),
    activities: [events.Justice, events.wilduckBurgeWeekendWilduckSet],
  }),
  new SingleDay({
    date: new Date(2009, 5, 28),
    isDayOff: true,
    activities: [events.Moon, events.wilduckBurgeWeekendWilduckSet],
  }),
  new SingleDay({
    date: new Date(2009, 5, 29),
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
  }),
  new SingleDay({
    date: new Date(2009, 5, 30),
    activities: [events.Magician, events.hagakureRamenSpecial],
  }),
];
