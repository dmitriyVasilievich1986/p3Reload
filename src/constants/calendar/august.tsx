import { SocialLinkNames } from "@/constants/socialLinks/types";
import { EventCard, WideEvent } from "@/components";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  socialLinkSpendTimeNames,
  JunpeiIoriEpisodesNames,
  KoromaruEpisodesNames,
  socialLinkShrineNames,
  SpecialEventsNames,
} from "@/constants/events/types";

export const august: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 7, 1),
    activities: [
      { ...events[SpecialEventsNames.Special] },
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 2),
    isDayOff: true,
    activities: [
      { ...events[SpecialEventsNames.Special] },
      events[SocialLinkNames.Tower],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 3),
    isDayOff: true,
    activities: [
      events[socialLinkShrineNames.HangedManShrineTime],
      {
        ...events[SpecialEventsNames.Tartarus],
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Be at least level 31</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Tower} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Star} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.HangedMan} card</p>
              </li>
              <li>
                <p>Have {SocialLinkNames.Hierophant} card</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 4),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hierophant],
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 5),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Star],
      events[statsEventsAcademicsNames.gameParadeAcademics],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 6),
    foolMoon: true,
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Chariot and Justice Boss Fight" place="Tartarus" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 7),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Star],
      events[SocialLinkNames.Tower],
      events[SocialLinkNames.Death],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 8),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.HangedMan],
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 9),
    isDayOff: true,
    activities: [events[SocialLinkNames.Hermit], events[SocialLinkNames.Tower]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 10),
    isDayOff: true,
    activities: [events[statsEventsAcademicsNames.summerSchool]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 11),
    isDayOff: true,
    activities: [events[statsEventsAcademicsNames.summerSchool]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 12),
    isDayOff: true,
    activities: [events[statsEventsAcademicsNames.summerSchool]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 13),
    isDayOff: true,
    activities: [events[statsEventsAcademicsNames.summerSchool]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 14),
    isDayOff: true,
    activities: [events[statsEventsAcademicsNames.summerSchool]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 15),
    isDayOff: true,
    activities: [
      { ...events[statsEventsAcademicsNames.summerSchool], time: Times.Day },
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 16),
    isDayOff: true,
    activities: [
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 17),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.HangedMan],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 18),
    isDayOff: true,
    activities: [
      events[JunpeiIoriEpisodesNames.JunpeiIori2],
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 19),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Star],
      events[statsEventsAcademicsNames.studyAtHome],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 20),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hierophant],
      events[SocialLinkNames.Tower],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 21),
    isDayOff: true,
    activities: [events[SocialLinkNames.Star], events[SocialLinkNames.Tower]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 22),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.HangedMan],
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 23),
    isDayOff: true,
    activities: [events[SocialLinkNames.Sun], events[SocialLinkNames.Tower]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 24),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Hierophant],
      events[statsEventsAcademicsNames.wakatsuKitchenSpecial],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 25),
    isDayOff: true,
    activities: [
      events[KoromaruEpisodesNames.Koromaru1],
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 26),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Star],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 27),
    isDayOff: true,
    activities: [
      events[socialLinkShrineNames.ChariotShrineTime],
      events[socialLinkSpendTimeNames.TowerSpendTime],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 28),
    isDayOff: true,
    activities: [events[SocialLinkNames.Star], events[SocialLinkNames.Tower]],
  }),
  new SingleDay({
    date: new Date(2009, 7, 29),
    isDayOff: true,
    activities: [
      events[socialLinkShrineNames.MoonShrineTime],
      events[SocialLinkNames.Devil],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 30),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Sun],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 7, 31),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Moon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
];
