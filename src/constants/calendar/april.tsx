import { EventCard, WideEvent, Question, Answer } from "@/components";
import { Categories, events, Times } from "@/constants/events";
import { SocialLinkNames } from "@/constants/socialLinks";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  SpecialEventsNames,
} from "@/constants/events/types";

export const april: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 3, 7),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>
            {events[SpecialEventsNames.Special].label({ ...props })}
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 8),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        time: Times.Morning,
        label: () => (
          <Question
            label={
              'Among these phrases, "a rain of flower", "mystical mirage" and "vivid carp streamers" which one symbolizes summer?'
            }
          >
            <Answer label="a rain of flower" />
            <Answer label="mystical mirage" />
            <Answer label="vivid carp streamers" points={15} />
          </Question>
        ),
      },
      events[SpecialEventsNames.Special],
      { ...events[SpecialEventsNames.Special], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 9),
    foolMoon: true,
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Magician Boss Fight" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 10),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 11),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 12),
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 13),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 14),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 15),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 16),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 17),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>
              The main character in the hospital.
            </h3>
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 18),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={
              "The places where people dumped their waste in the Jomon Period - What are they called nowadays?"
            }
          >
            <Answer label="Boneyards" />
            <Answer label="Middens" points={15} />
            <Answer label="Hovels" />
          </Question>
        ),
      },
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <h3 style={{ textAlign: "center" }}>Joining the S.E.E.S. team.</h3>
          </WideEvent>
        ),
      },
      { ...events[SocialLinkNames.Fool], time: Times.DarkHour },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 19),
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Introduction to Junpei" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 20),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        category: Categories.Tartarus,
        label: () => (
          <WideEvent>
            <EventCard head="Introduction to Tartarus" />
          </WideEvent>
        ),
      },
      { ...events[SocialLinkNames.Fool], time: Times.DarkHour },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 21),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      { ...events[statsEventsCourageNames.gameParadeCourage], time: Times.Day },
      events[statsEventsCourageNames.gameParadeCourage],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 22),
    activities: [
      { ...events[SocialLinkNames.Magician], special: true },
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Have at least ¥27,080</p>
              </li>
              <li>
                <p>Be at least level 8</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Hermit} card</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 23),
    activities: [
      events[SocialLinkNames.Chariot],
      events[statsEventsCharmNames.gameParadeCharm],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 24),
    activities: [
      events[SocialLinkNames.Chariot],
      events[statsEventsCourageNames.gameParadeCourage],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 25),
    activities: [
      events[SocialLinkNames.Strength],
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 26),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hierophant],
      events[statsEventsAcademicsNames.wakatsuKitchen],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 27),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        time: Times.Morning,
        special: true,
        label: () => (
          <Question
            label={
              "Do you know which one's not an algebraic spiral or whatever?"
            }
          >
            <Answer label="A." points={15} />
            <Answer label="B." />
            <Answer label="C." />
            <Answer label="D." />
          </Question>
        ),
      },
      events[SocialLinkNames.Emperor],
      events[statsEventsCharmNames.gameParadeCharm],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 28),
    activities: [
      events[SocialLinkNames.Magician],
      events[statsEventsCourageNames.gameParadeCourage],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 29),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hermit],
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 30),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Magician],
      events[statsEventsCharmNames.gameParadeCharm],
    ],
  }),
];
