import { EventCard, WideEvent, Question, Answer } from "@/components";
import { SocialLinkNames } from "@/constants/socialLinks/types";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  SpecialEventsNames,
  socialLinkRomanceNames,
} from "@/constants/events/types";

export const june: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 5, 1),
    activities: [
      events[SocialLinkNames.Emperor],
      events[SocialLinkNames.Sanada],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 2),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Temperance],
      events[statsEventsCourageNames.gameParadeCourage],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 3),
    activities: [
      events[SocialLinkNames.Temperance],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 4),
    activities: [
      events[SocialLinkNames.Chariot],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 5),
    activities: [
      events[SocialLinkNames.Emperor],
      events[statsEventsCourageNames.gameParadeCourage],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 6),
    activities: [
      events[SocialLinkNames.Justice],
      events[statsEventsCourageNames.wilduckBigEaterChallenge],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 7),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 8),
    foolMoon: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
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
      events[statsEventsCourageNames.drinkMedicine],
      events[SocialLinkNames.Temperance],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 10),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Emperor],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 11),
    activities: [
      events[SocialLinkNames.Chariot],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 12),
    activities: [
      events[SocialLinkNames.Magician],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
      events[SocialLinkNames.Death],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 13),
    activities: [
      events[SocialLinkNames.Justice],
      {
        ...events[SpecialEventsNames.Special],
        time: Times.Evening,
        label: () => <EventCard head="Theurgy Tutorial" place="Tartarus" />,
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 14),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      events[statsEventsCourageNames.wilduckBurgeWeekendWilduckSet],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 15),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.Emperor],
      events[SpecialEventsNames.DoNothing],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 16),
    activities: [
      events[SocialLinkNames.Temperance],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 17),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.Fortune],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 18),
    activities: [
      events[SocialLinkNames.Fortune],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 19),
    activities: [
      events[SocialLinkNames.Temperance],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 20),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Koromaru Introduction" />,
      },
      events[statsEventsCourageNames.wilduckBurgeWeekendWilduckSet],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 21),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      events[statsEventsCourageNames.wilduckBurgeWeekendWilduckSet],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 22),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label={"What else do people call this curve?"}>
            <Answer label="Orthogonal curves." />
            <Answer label="Fermat's spiral." />
            <Answer label="Witch of Agnesi." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Emperor],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 23),
    activities: [
      events[SocialLinkNames.Fortune],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 24),
    activities: [
      events[socialLinkRomanceNames.StrengthRomance],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 25),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.Chariot],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 26),
    activities: [
      events[SocialLinkNames.Magician],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 27),
    activities: [
      events[SocialLinkNames.Justice],
      events[statsEventsCourageNames.wilduckBurgeWeekendWilduckSet],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 28),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 5, 29),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
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
      events[SocialLinkNames.Emperor],
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Have at least ¥49,500</p>
              </li>
              <li>
                <p>Be at least level 10</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Hermit} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Hierophant} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.HangedMan} card</p>
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
    date: new Date(2009, 5, 30),
    activities: [
      events[statsEventsCourageNames.drinkMedicine],
      events[SocialLinkNames.Fortune],
      events[statsEventsCharmNames.hagakureRamenSpecial],
    ],
  }),
];
