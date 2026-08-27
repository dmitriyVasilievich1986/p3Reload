import { Card } from '@components/card';
import { LabelRow, ModifiersRow, TextRow } from '@components/row';
import { BaseEvent } from '@services/event/base';
import { modifiersFormatter } from '@utils/modifiersFormatter';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';
import type { CharacterStatsModifierType } from '@services/stats/characterStats';
import type { EpisodeSocialLinkNamesTypes } from '@services/stats/episodesStats';

export abstract class EpisodesEventBase extends BaseEvent {
  static readonly name: EpisodeSocialLinkNamesTypes;
  static readonly socialLinkName: string;
  static readonly district?: string;
  static readonly place?: string;

  getLevel(this: EpisodesEventBase): number {
    const constructor = this.constructor as typeof EpisodesEventBase;
    return this.stats.episodesStats[constructor.name as EpisodeSocialLinkNamesTypes];
  }

  getModifiers(this: EpisodesEventBase, _level: number): CharacterStatsModifierType[] {
    return [];
  }

  override calculateStats(_props: IsAvailableProps): Stats {
    const level = this.getLevel();
    const modifiers = this.getModifiers(level);

    const characterStats = this.stats.characterStats.modify(modifiers);
    const episodeStats = this.stats.episodesStats.increaseLevel(
      this.constructor.name as EpisodeSocialLinkNamesTypes
    );
    return this.stats.updateEpisodesStats(episodeStats).updateCharacterStats(characterStats);
  }

  render(this: EpisodesEventBase, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof EpisodesEventBase;
    const level = this.getLevel();
    const modifiers = this.getModifiers(level);
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        time={props.time}
        badge={{ size: 'sm', color: 'green', text: `${level} → ${level + 1}` }}
        isSelectable={this.isChangeable}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={constructor.socialLinkName} />
            <LabelRow key="District" label="District:" text={constructor.district} />
            <LabelRow key="Place" label="Place:" text={constructor.place} />
            <ModifiersRow key="modifiers" modifiers={modifiersFormatter(modifiers)} />
            {level === 0 ? (
              <TextRow textAlign="center" isBold key="text" text="Create a bond with Social Link" />
            ) : (
              <TextRow textAlign="center" isBold key="text" text="Increase Social Link level" />
            )}
          </>
        }
        header={constructor.name}
      />
    );
  }

  static render(props: IsAvailableProps): React.ReactNode {
    return (
      <Card
        key={`${this.name}-${props.time}`}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={this.socialLinkName} />
            <LabelRow key="District" label="District:" text={this.district} />
            <LabelRow key="Place" label="Place:" text={this.place} />
          </>
        }
        header={this.name}
      />
    );
  }
}
