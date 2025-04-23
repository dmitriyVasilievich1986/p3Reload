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

export const september: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 8, 1),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="Which property of electricity is relevant to superconductivity?">
            <Answer label="Voltage." />
            <Answer label="Resistance." points={15} />
            <Answer label="Current." />
          </Question>
        ),
      },
      events[SocialLinkNames.Fortune],
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 2),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Aragaki joins the team" />,
      },
      events[pcProgramsNames.lobbyPCVeggieFarmerSim],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 3),
    activities: [
      events[SocialLinkNames.Lovers],
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Have {SocialLinkNames.Justice} card</p>
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
    date: new Date(2009, 8, 4),
    activities: [
      events[SocialLinkNames.Aragaki],
      { ...events[SocialLinkNames.Amada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 5),
    foolMoon: true,
    activities: [
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.WholeDay,
        special: true,
        label: () => (
          <WideEvent>
            <EventCard head="Hermit Boss Fight" place="Tartarus" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 6),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SocialLinkNames.Amada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 7),
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SocialLinkNames.Aragaki], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 8),
    activities: [
      events[SocialLinkNames.Justice],
      { ...events[SocialLinkNames.Aragaki], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 9),
    activities: [events[SocialLinkNames.Lovers], events[SocialLinkNames.Amada]],
  }),
  new SingleDay({
    date: new Date(2009, 8, 10),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={
              'H-Hey, ${mainCharName}, do you know what it means to "spill the beans"?'
            }
          >
            <Answer label="To drop money." />
            <Answer label="To break into a smile." />
            <Answer label="To reveal a secret." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Lovers],
      { ...events[SocialLinkNames.Aragaki], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 11),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={
              "Which book helped further the art of magic during the Renaissance"
            }
          >
            <Answer label="The Book of Enoch." />
            <Answer label="The Book of Thoth." />
            <Answer label="The Hermetica." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Aragaki],
      events[pcProgramsNames.lobbyPCAssassinWebsiteNote],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 12),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Strength],
      { ...events[SocialLinkNames.Aragaki], time: Times.Evening },
      events[SocialLinkNames.Death],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 13),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Aragaki],
      events[pcProgramsNames.lobbyPCHistoryWebsiteNote],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 14),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={
              'Who is one referring to when speaking of their "better half"?'
            }
          >
            <Answer label="Their soulmate." points={15} />
            <Answer label="Their rival." />
            <Answer label="Their mentor." />
          </Question>
        ),
      },
      events[SocialLinkNames.Aragaki],
      { ...events[SocialLinkNames.Iori], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 15),
    activities: [
      events[SocialLinkNames.Koromaru],
      { ...events[SocialLinkNames.Aragaki], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 16),
    activities: [
      events[SocialLinkNames.Strength],
      { ...events[SocialLinkNames.Sanada], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 17),
    activities: [
      events[SocialLinkNames.Justice],
      { ...events[SocialLinkNames.Priestess], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 18),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Typhoon" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 19),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Sickness" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 20),
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Sickness" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 21),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hermit],
      { ...events[SocialLinkNames.Aragaki], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 22),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Koromaru],
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Have {SocialLinkNames.Strength} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Star} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Priestess} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Justice} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Lovers} card</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 23),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Koromaru],
      events[SocialLinkNames.Amada],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 24),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Fortune],
      { ...events[SocialLinkNames.Koromaru], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 25),
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SocialLinkNames.Lovers], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 26),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What is the collective name for the four holy numbers in numerology?">
            <Answer label="Tetrodotoxin." />
            <Answer label="Tetrakarn." />
            <Answer label="Tetractys." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Strength],
      { ...events[SocialLinkNames.Iori], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 27),
    isDayOff: true,
    activities: [events[SocialLinkNames.Sun], events[SocialLinkNames.Tower]],
  }),
  new SingleDay({
    date: new Date(2009, 8, 28),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Priestess],
      { ...events[SocialLinkNames.Iori], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 29),
    activities: [
      events[SocialLinkNames.Fortune],
      { ...events[SocialLinkNames.Priestess], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 30),
    activities: [
      events[SocialLinkNames.Fortune],
      { ...events[SocialLinkNames.Aeon], time: Times.Evening },
    ],
  }),
];
