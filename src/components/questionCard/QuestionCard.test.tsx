import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { QuestionCard } from './QuestionCard';
import { AnswerPoints } from './types';

import type { ReactElement } from 'react';

const HIDDEN_ANSWER_TEXT = 'Hidden to avoid spoilers';

function renderQuestionCard(ui: ReactElement, initialEntry = '/') {
  return render(<MemoryRouter initialEntries={[initialEntry]}>{ui}</MemoryRouter>);
}

describe('QuestionCard', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the question, and the answers once spoilers are shown', () => {
    renderQuestionCard(
      <QuestionCard
        question="What is the capital of Japan?"
        answers={[
          { text: 'Osaka', points: AnswerPoints.none },
          { text: 'Tokyo', points: AnswerPoints.high },
        ]}
      />,
      '/?showSpoilers=true'
    );

    expect(screen.getByText('What is the capital of Japan?')).toBeInTheDocument();
    expect(screen.getByText('Osaka')).toBeInTheDocument();
    expect(screen.getByText('Tokyo')).toBeInTheDocument();
  });

  it('hides answer text by default, without revealing it through the points tooltip', async () => {
    const user = userEvent.setup();

    renderQuestionCard(
      <QuestionCard
        question="Pick an answer"
        answers={[{ text: 'Tokyo', points: AnswerPoints.high }]}
      />
    );

    expect(screen.queryByText('Tokyo')).not.toBeInTheDocument();
    const hiddenAnswer = screen.getByText(HIDDEN_ANSWER_TEXT);

    await user.hover(hiddenAnswer);

    expect(screen.getByRole('tooltip')).toHaveTextContent('15 points');
    expect(screen.queryByText('Tokyo')).not.toBeInTheDocument();
  });

  it('shows the same placeholder for every hidden answer, regardless of its length', () => {
    renderQuestionCard(
      <QuestionCard
        question="Pick an answer"
        answers={[
          { text: 'Hi', points: AnswerPoints.none },
          {
            text: 'A much, much longer answer than the very short first one',
            points: AnswerPoints.high,
          },
        ]}
      />
    );

    expect(screen.queryByText('Hi')).not.toBeInTheDocument();
    expect(
      screen.queryByText('A much, much longer answer than the very short first one')
    ).not.toBeInTheDocument();
    expect(screen.getAllByText(HIDDEN_ANSWER_TEXT)).toHaveLength(2);
  });

  it('hides answer text when showSpoilers is explicitly false', () => {
    renderQuestionCard(
      <QuestionCard
        question="Pick an answer"
        answers={[{ text: 'Tokyo', points: AnswerPoints.high }]}
      />,
      '/?showSpoilers=false'
    );

    expect(screen.queryByText('Tokyo')).not.toBeInTheDocument();
    expect(screen.getByText(HIDDEN_ANSWER_TEXT)).toBeInTheDocument();
  });

  it('shows answer text when the showSpoilers URL param is true', () => {
    renderQuestionCard(
      <QuestionCard
        question="Pick an answer"
        answers={[{ text: 'Tokyo', points: AnswerPoints.high }]}
      />,
      '/?showSpoilers=true'
    );

    expect(screen.getByText('Tokyo')).toBeInTheDocument();
    expect(screen.queryByText(HIDDEN_ANSWER_TEXT)).not.toBeInTheDocument();
  });

  it('applies gradual highlight classes by answer points', () => {
    renderQuestionCard(
      <QuestionCard
        question="Pick an answer"
        answers={[
          { text: 'Zero', points: AnswerPoints.none },
          { text: 'Five', points: AnswerPoints.low },
          { text: 'Ten', points: AnswerPoints.medium },
          { text: 'Fifteen', points: AnswerPoints.high },
        ]}
      />,
      '/?showSpoilers=true'
    );

    expect(screen.getByText('Zero').closest('li')).toHaveClass('bg-transparent');
    expect(screen.getByText('Five').closest('li')).toHaveClass('bg-amber-50');
    expect(screen.getByText('Ten').closest('li')).toHaveClass('bg-amber-100');
    expect(screen.getByText('Fifteen').closest('li')).toHaveClass('bg-amber-200');
  });

  it('uses the highest highlight for fork answers regardless of points', () => {
    renderQuestionCard(
      <QuestionCard
        question="Fork path?"
        answers={[{ text: 'Fork', points: AnswerPoints.none, isFork: true }]}
      />,
      '/?showSpoilers=true'
    );

    expect(screen.getByText('Fork').closest('li')).toHaveClass('bg-amber-200');
  });

  it('includes dark-mode classes for the card shell', () => {
    const { container } = renderQuestionCard(
      <QuestionCard question="Dark ready?" answers={[{ text: 'Yes', points: AnswerPoints.low }]} />
    );

    const article = container.querySelector('article');

    expect(article).toHaveClass('dark:bg-slate-900');
    expect(article).toHaveClass('dark:border-slate-700');
  });

  it('replaces ${mainCharName} with "Protagonist" when the URL param is missing', () => {
    renderQuestionCard(
      <QuestionCard
        question="Right, ${mainCharName}-kun?"
        answers={[{ text: 'Sure thing, ${mainCharName}.', points: AnswerPoints.none }]}
      />,
      '/?showSpoilers=true'
    );

    expect(screen.getByText('Right, Protagonist-kun?')).toBeInTheDocument();
    expect(screen.getByText('Sure thing, Protagonist.')).toBeInTheDocument();
  });

  it('replaces ${mainCharName} with the value from the URL param when present', () => {
    renderQuestionCard(
      <QuestionCard
        question="Right, ${mainCharName}-kun?"
        answers={[{ text: 'Sure thing, ${mainCharName}.', points: AnswerPoints.none }]}
      />,
      '/?showSpoilers=true&mainCharName=Makoto'
    );

    expect(screen.getByText('Right, Makoto-kun?')).toBeInTheDocument();
    expect(screen.getByText('Sure thing, Makoto.')).toBeInTheDocument();
  });

  it('replaces every occurrence of ${mainCharName} in a single string', async () => {
    const user = userEvent.setup();

    renderQuestionCard(
      <QuestionCard
        question="${mainCharName}, are you sure, ${mainCharName}?"
        answers={[{ text: 'Yes', points: AnswerPoints.low }]}
      />,
      '/?showSpoilers=true&mainCharName=Makoto'
    );

    expect(screen.getByText('Makoto, are you sure, Makoto?')).toBeInTheDocument();
    await user.hover(screen.getByText('Yes'));
    expect(screen.getByRole('tooltip')).toHaveTextContent('5 points');
  });
});
