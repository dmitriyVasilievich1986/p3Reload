import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';

import { QuestionCard } from './QuestionCard';
import { AnswerPoints } from './types';

describe('QuestionCard', () => {
  it('renders the question and answers', () => {
    render(
      <QuestionCard
        question="What is the capital of Japan?"
        answers={[
          { text: 'Osaka', points: AnswerPoints.none },
          { text: 'Tokyo', points: AnswerPoints.high },
        ]}
      />
    );

    expect(screen.getByText('What is the capital of Japan?')).toBeInTheDocument();
    expect(screen.getByText('Osaka')).toBeInTheDocument();
    expect(screen.getByText('Tokyo')).toBeInTheDocument();
  });

  it('applies gradual highlight classes by answer points', () => {
    render(
      <QuestionCard
        question="Pick an answer"
        answers={[
          { text: 'Zero', points: AnswerPoints.none },
          { text: 'Five', points: AnswerPoints.low },
          { text: 'Ten', points: AnswerPoints.medium },
          { text: 'Fifteen', points: AnswerPoints.high },
        ]}
      />
    );

    expect(screen.getByText('Zero')).toHaveClass('bg-transparent');
    expect(screen.getByText('Five')).toHaveClass('bg-amber-50');
    expect(screen.getByText('Ten')).toHaveClass('bg-amber-100');
    expect(screen.getByText('Fifteen')).toHaveClass('bg-amber-200');
  });

  it('uses the highest highlight for fork answers regardless of points', () => {
    render(
      <QuestionCard
        question="Fork path?"
        answers={[{ text: 'Fork', points: AnswerPoints.none, isFork: true }]}
      />
    );

    expect(screen.getByText('Fork')).toHaveClass('bg-amber-200');
  });

  it('includes dark-mode classes for the card shell', () => {
    const { container } = render(
      <QuestionCard question="Dark ready?" answers={[{ text: 'Yes', points: AnswerPoints.low }]} />
    );

    const article = container.querySelector('article');

    expect(article).toHaveClass('dark:bg-slate-900');
    expect(article).toHaveClass('dark:border-slate-700');
  });
});
