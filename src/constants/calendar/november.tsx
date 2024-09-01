import { EventCard, WideEvent, Question, Answer } from "@/components";
import { SocialLinkNames } from "@/constants/socialLinks";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  socialLinkInvitationNames,
  JunpeiIoriEpisodesNames,
  socialLinkShrineNames,
  statsEventsCharmNames,
  SpecialEventsNames,
} from "@/constants/events/types";

export const november: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 10, 1),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 2),
    activities: [
      events[SocialLinkNames.Chariot],
      { ...events[SocialLinkNames.Fool], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 3),
    foolMoon: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
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
      events[SocialLinkNames.Magician],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 6),
    activities: [
      events[socialLinkShrineNames.JusticeShrineTime],
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
          </Question>
        ),
      },
      events[JunpeiIoriEpisodesNames.JunpeiIori3],
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
      events[SocialLinkNames.Chariot],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 10),
    activities: [
      events[SocialLinkNames.Fortune],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 11),
    activities: [
      events[SocialLinkNames.Star],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 12),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What was she describing with such a sparse line?">
            <Answer label="Her favorite time in winter." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Magician],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 13),
    activities: [
      events[SocialLinkNames.Magician],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 14),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Justice],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 15),
    isDayOff: true,
    activities: [
      events[socialLinkInvitationNames.LoversInvitation],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
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
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 18),
    activities: [
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 19),
    activities: [
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 20),
    activities: [
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
      events[socialLinkShrineNames.PriestessShrineTime],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
      {
        ...events[SpecialEventsNames.Special],
        time: Times.DarkHour,
        label: () => <EventCard head="Chidori Boss Fight" place="Tartarus" />,
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 23),
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 24),
    activities: [
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 25),
    activities: [
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 26),
    activities: [
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 27),
    activities: [
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 28),
    activities: [
      events[SocialLinkNames.Empress],
      events[SpecialEventsNames.Tartarus],
      events[SocialLinkNames.Fool],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 29),
    isDayOff: true,
    activities: [
      events[socialLinkShrineNames.PriestessShrineTime],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
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
          </Question>
        ),
      },
      events[SocialLinkNames.Empress],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
];
