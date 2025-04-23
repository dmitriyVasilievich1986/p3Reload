import { EventCard, WideEvent, Question, Answer } from "@/components";
import { SocialLinkNames } from "@/constants/socialLinks";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  statsEventsCharmNames,
  SpecialEventsNames,
  pcProgramsNames,
} from "@/constants/events/types";

export const november: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 10, 1),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SocialLinkNames.Amada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 2),
    activities: [
      events[SocialLinkNames.Chariot],
      { ...events[SocialLinkNames.Fool], time: Times.AfterSchool },
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 3),
    foolMoon: true,
    activities: [
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.WholeDay,
        special: true,
        label: () => (
          <WideEvent>
            <EventCard
              head="Strega and Hanged Man Boss Fight"
              place="Tartarus"
            />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 4),
    activities: [
      { ...events[SocialLinkNames.Death], time: Times.Day },
      { ...events[SocialLinkNames.Fool], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 5),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.Day,
        label: () => <EventCard head="The Fall discussion" place="Dorm" />,
      },
      events[pcProgramsNames.ninjaFansiteNote],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 6),
    activities: [
      events[SocialLinkNames.Magician],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 7),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What is the ancient Indian magical text I mentioned today?">
            <Answer label="The Upanishads." points={15} />
            <Answer label="The Mahabharata." />
            <Answer label="The Ramayana." />
          </Question>
        ),
      },
      events[SocialLinkNames.Iori],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 8),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 9),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      { ...events[SocialLinkNames.Mochizuki], special: true },
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 10),
    activities: [
      events[SocialLinkNames.Magician],
      { ...events[SocialLinkNames.Priestess], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 11),
    activities: [events[SocialLinkNames.Star], events[SocialLinkNames.Amada]],
  }),
  new SingleDay({
    date: new Date(2009, 10, 12),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What was she describing with such a sparse line?">
            <Answer label="Her favorite time in winter." points={15} />
            <Answer label="The setting of the plot." />
            <Answer label="Instructions for the reader." />
          </Question>
        ),
      },
      events[SocialLinkNames.Mochizuki],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 13),
    activities: [
      events[SocialLinkNames.Magician],
      { ...events[SocialLinkNames.Lovers], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 14),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 15),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Lovers],
      { ...events[SocialLinkNames.Aeon], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 16),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Lovers],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 17),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Kyoto School Trip" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 18),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Kyoto School Trip" />
          </WideEvent>
        ),
      },
      {
        ...events[SocialLinkNames.Mochizuki],
        time: Times.Evening,
        special: true,
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 19),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Kyoto School Trip" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 20),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.Day,
        label: () => <EventCard head="Kyoto School Trip" />,
      },
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 21),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 22),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.DarkHour,
        special: true,
        label: () => <EventCard head="Chidori Boss Fight" place="Tartarus" />,
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 23),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Strength],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 24),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Wildduck internship" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 25),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Wildduck internship" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 26),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Wildduck internship" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 27),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.Day,
        label: () => <EventCard head="Wildduck internship" />,
      },
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 28),
    activities: [
      events[SocialLinkNames.Priestess],
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Have {SocialLinkNames.HangedMan} card</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
      events[SocialLinkNames.Fool],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 29),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SocialLinkNames.Empress], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 30),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="In the poem that Genji, the protagonist, sends to her, what did he compare her to?">
            <Answer label="The cherry blossom." points={15} />
            <Answer label="A cat." />
            <Answer label="The hydrangea." />
          </Question>
        ),
      },
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
];
