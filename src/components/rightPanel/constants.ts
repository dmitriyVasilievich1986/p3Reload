import { Times } from '@constants/times';
import {
  StayAwakeAcademicsEvent,
  AcademicStatModifyEvents,
} from '@services/event/models/characterStatsModifyEvents/academic';
import { CharmStatModifyEvents } from '@services/event/models/characterStatsModifyEvents/charm';
import {
  SleepDuringClassCourageEvent,
  CourageStatModifyEvents,
} from '@services/event/models/characterStatsModifyEvents/courage';
import { EpisodesEventModels } from '@services/event/models/episodes';
import { NaganakiShrineEvents } from '@services/event/models/naganakiShrine';
import { PCProgramEvents } from '@services/event/models/PCProgramEvents';
import { SocialLinkEvents } from '@services/event/models/socialLinkEvents';

import type { RightPanelTab } from './types';

export const events: Record<string, RightPanelTab[]> = {
  [Times.Morning]: [
    {
      name: 'Class',
      color: 'green',
      events: [StayAwakeAcademicsEvent, SleepDuringClassCourageEvent],
    },
  ],
  [Times.Day]: [
    {
      name: 'Academic',
      color: 'green',
      events: Object.values(AcademicStatModifyEvents),
    },
    {
      name: 'Courage',
      color: 'red',
      events: Object.values(CourageStatModifyEvents),
    },
    {
      name: 'Charm',
      color: 'violet',
      events: Object.values(CharmStatModifyEvents),
    },
    {
      name: 'Social Link',
      color: 'teal',
      events: [
        ...Object.values(SocialLinkEvents),
        ...Object.values(NaganakiShrineEvents),
        ...Object.values(EpisodesEventModels),
      ],
    },
    {
      name: 'PC Program',
      color: 'orange',
      events: Object.values(PCProgramEvents),
    },
  ],
  [Times.Evening]: [
    {
      name: 'Academic',
      color: 'green',
      events: Object.values(AcademicStatModifyEvents),
    },
    {
      name: 'Courage',
      color: 'red',
      events: Object.values(CourageStatModifyEvents),
    },
    {
      name: 'Charm',
      color: 'violet',
      events: Object.values(CharmStatModifyEvents),
    },
    {
      name: 'Social Link',
      color: 'teal',
      events: [
        ...Object.values(SocialLinkEvents),
        ...Object.values(NaganakiShrineEvents),
        ...Object.values(EpisodesEventModels),
      ],
    },
    {
      name: 'PC Program',
      color: 'orange',
      events: Object.values(PCProgramEvents),
    },
  ],
};
