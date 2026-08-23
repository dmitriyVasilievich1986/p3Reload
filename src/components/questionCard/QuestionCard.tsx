import classNames from 'classnames';
import { useSearchParams } from 'react-router';

import { DEFAULT_MAIN_CHAR_NAME, SettingsParams } from '@constants/settings';

import { Tooltip, TooltipPositions } from '../tooltip';
import { AnswerPoints, type AnswerPoint, type QuestionCardProps } from './types';

const MAIN_CHAR_NAME_PLACEHOLDER = '${mainCharName}';

const answerPointClasses: Record<AnswerPoint, string> = {
  [AnswerPoints.none]: 'bg-transparent text-slate-700 dark:text-slate-200',
  [AnswerPoints.low]: 'bg-amber-50 text-amber-900 dark:bg-amber-950/50 dark:text-amber-100',
  [AnswerPoints.medium]: 'bg-amber-100 text-amber-950 dark:bg-amber-900/60 dark:text-amber-50',
  [AnswerPoints.high]: 'bg-amber-200 text-amber-950 dark:bg-amber-800/70 dark:text-amber-50',
};

function isAnswerPoint(points: number): points is AnswerPoint {
  return (
    points === AnswerPoints.none ||
    points === AnswerPoints.low ||
    points === AnswerPoints.medium ||
    points === AnswerPoints.high
  );
}

function formatMainCharName(text: string, mainCharName: string): string {
  return text.replaceAll(MAIN_CHAR_NAME_PLACEHOLDER, mainCharName);
}

/**
 * Card with a question header and a list of point-highlighted answers.
 *
 * Any `${mainCharName}` placeholder in the question or answer text is
 * replaced with the `mainCharName` URL search param, defaulting to
 * "Protagonist" when it isn't set.
 */
export function QuestionCard({ question, answers }: QuestionCardProps) {
  const [searchParams] = useSearchParams();
  const mainCharName = searchParams.get(SettingsParams.mainCharName) ?? DEFAULT_MAIN_CHAR_NAME;

  const formattedQuestion = formatMainCharName(question, mainCharName);

  return (
    <article
      className={classNames(
        'rounded-xl border border-slate-200 bg-white shadow-sm',
        'dark:border-slate-700 dark:bg-slate-900 dark:shadow-none'
      )}
    >
      <header
        className={classNames(
          'rounded-t-xl border-b border-slate-200 px-4 py-3',
          'bg-slate-50 text-slate-900',
          'dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50'
        )}
      >
        <h2 className="text-base font-semibold leading-snug">{formattedQuestion}</h2>
      </header>

      <ul className="flex flex-col gap-0.5 p-1.5" role="list">
        {answers.map((answer, index) => {
          const pointKey = answer.isFork
            ? AnswerPoints.high
            : isAnswerPoint(answer.points)
              ? answer.points
              : AnswerPoints.none;
          const formattedText = formatMainCharName(answer.text, mainCharName);

          return (
            <li
              key={`${answer.text}-${index}`}
              className={classNames(
                'rounded px-2 py-1 text-xs leading-snug',
                'cursor-pointer transition-transform duration-150 ease-out hover:translate-x-0.5',
                answerPointClasses[pointKey]
              )}
            >
              <Tooltip
                className="w-full"
                content={`${answer.points} points`}
                position={TooltipPositions.top}
              >
                <span className="block w-full">{formattedText}</span>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
