import _ from 'lodash';
import React from 'react';

import { type TimesType } from '@constants/times';
import { AdditionalStats, CharacterStats, SocialLinkStats } from '@services/stats';

import type { EventProps, EventNamesType, CalculateStatsResult } from './types';
import type { AvailabilityBase } from '@services/availability/base';
import type { IsAvailableProps } from '@services/availability/types';

export abstract class BaseEvent {
  static readonly name: EventNamesType;
  static readonly availabilities: AvailabilityBase[];

  readonly time: TimesType;
  readonly skipCheck: boolean;
  readonly isChangeable: boolean;

  additionalStats: AdditionalStats;
  characterStats: CharacterStats;
  socialLinkStats: SocialLinkStats;

  constructor(props: EventProps) {
    this.time = props.time;
    this.skipCheck = props.skipCheck;
    this.isChangeable = props.isChangeable;

    this.additionalStats = props?.additionalStats ?? new AdditionalStats();
    this.characterStats = props?.characterStats ?? new CharacterStats();
    this.socialLinkStats = props?.socialLinkStats ?? new SocialLinkStats();
  }

  static isAvailable(this: typeof BaseEvent, props: IsAvailableProps): boolean {
    return _.every(this.availabilities, (availability) => availability.isAvailable(props));
  }

  isAvailable(props: IsAvailableProps): boolean {
    return (this.constructor as typeof BaseEvent).isAvailable(props);
  }

  static render(this: typeof BaseEvent, _props: IsAvailableProps): React.ReactNode {
    return null;
  }

  abstract render(props: IsAvailableProps): React.ReactNode;

  abstract calculateStats(props: IsAvailableProps): CalculateStatsResult;

  serialize(): { name: EventNamesType; props: EventProps } {
    return {
      name: (this.constructor as typeof BaseEvent).name,
      props: {
        time: this.time,
        skipCheck: this.skipCheck,
        isChangeable: this.isChangeable,
      },
    };
  }
}
