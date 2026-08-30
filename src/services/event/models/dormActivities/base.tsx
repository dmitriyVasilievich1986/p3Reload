import { cloneElement, type ReactElement } from 'react';

import { Card, type CardProps } from '@components/card';
import { LabelRow, ModifiersRow, TextRow } from '@components/row';
import { Districts } from '@constants/places';
import { BaseEvent } from '@services/event/base';
import { modifiersFormatter } from '@utils/modifiersFormatter';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';
import type { CharacterStatsModifierType } from '@services/stats/characterStats';
import type { DormActivitiesNamesTypes } from '@services/stats/dormActivities/types';

export abstract class DormActivitiesEventBase extends BaseEvent {
  static readonly name: DormActivitiesNamesTypes;
  static readonly socialLinkName: string;
  static readonly modifiers: CharacterStatsModifierType[];

  getLevel(this: DormActivitiesEventBase): number {
    const constructor = this.constructor as typeof DormActivitiesEventBase;
    return this.stats.DormActivitiesStats[constructor.name as DormActivitiesNamesTypes];
  }

  calculateStats(this: DormActivitiesEventBase, _props: IsAvailableProps): Stats {
    const constructor = this.constructor as typeof DormActivitiesEventBase;
    const characterStats = this.stats.characterStats.modify(constructor.modifiers);
    const dormActivitiesStats = this.stats.DormActivitiesStats.increaseLevel(constructor.name);
    return this.stats
      .updateCharacterStats(characterStats)
      .updateDormActivitiesStats(dormActivitiesStats);
  }

  static render(props: IsAvailableProps): React.ReactNode {
    return (
      <Card
        key={`${this.name}-${props.time}`}
        header={this.name}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={this.socialLinkName} />
            <LabelRow key="District" label="District:" text={Districts.IwatodaiDormitory} />
            <ModifiersRow key="modifiers" modifiers={modifiersFormatter(this.modifiers)} />
            <TextRow textAlign="center" isBold key="text" text="Spend time" />
          </>
        }
      />
    );
  }

  render(props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof DormActivitiesEventBase;
    const node = constructor.render(props);
    const level = this.getLevel();
    return cloneElement(node as ReactElement<CardProps>, {
      time: props.time,
      isSelectable: this.isChangeable,
      badge: { size: 'sm', color: 'green', text: `${level} → ${level + 1}` },
    });
  }
}
