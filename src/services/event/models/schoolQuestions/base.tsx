import { Card } from '@components/card';
import { QuestionCard, type QuestionCardAnswer } from '@components/questionCard';
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
    super({ ...props, skipCheck: true, isChangeable: false });
    this.questions = props.questions;
  }

  render(this: SchoolQuestionEventBase, _props: IsAvailableProps): React.ReactNode {
    return (
      <Card
        isSelectable={this.isChangeable}
        time={this.time}
        body={this.questions.map((question) => (
          <QuestionCard
            key={question.text}
            question={question.text}
            answers={question.answers as QuestionCardAnswer[]}
          />
        ))}
      />
    );
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
