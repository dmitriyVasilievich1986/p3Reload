import { Districts } from '@constants/places';
import { BaseEvent } from '@services/event/base';

import type {
  QuestionType,
  SchoolQuestionEventProps,
  SchoolQuestionEventsNamesType,
} from './types';
import type { IsAvailableProps } from '@services/availability/types';

export abstract class SchoolQuestionEventBase extends BaseEvent {
  static readonly name: SchoolQuestionEventsNamesType;

  readonly isChangeable: boolean = false;
  readonly skipCheck: boolean = false;
  readonly questions: QuestionType[];

  static readonly district: string = Districts.GekkoukanHighSchool;

  constructor(props: SchoolQuestionEventProps) {
    super(props);
    this.questions = props.questions;
  }

  render(this: SchoolQuestionEventBase, _props: IsAvailableProps): React.ReactNode {
    return null;
  }

  override serialize(this: SchoolQuestionEventBase): {
    name: SchoolQuestionEventsNamesType;
    props: SchoolQuestionEventProps;
  } {
    return {
      name: (this.constructor as typeof SchoolQuestionEventBase).name,
      props: {
        time: this.time,
        skipCheck: this.skipCheck,
        isChangeable: this.isChangeable,
        questions: this.questions,
      },
    };
  }
}
