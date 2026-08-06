import { DormExamStudyingGroupEvent } from './DormExamStudyingGroup';
import { DormExamStudyingTeamEvent } from './DormExamStudyingTeam';
import { GameParadeAcademicsEvent } from './GameParadeAcademics';
import { StayAwakeAcademicsEvent } from './StayAwake';
import { SummerSchoolEvent } from './SummerSchoolEvent';
import { academicStatModifyNames, type AcademicStatModifyNamesType } from './types';
import { WakatsuKitchenEvent } from './WakatsuKitchenEvent';
import { WakatsuKitchenSpecialEvent } from './WakatsuKitchenSpecial';

export {
  academicStatModifyNames,
  type AcademicStatModifyNamesType,
  DormExamStudyingGroupEvent,
  DormExamStudyingTeamEvent,
  WakatsuKitchenEvent,
  WakatsuKitchenSpecialEvent,
  StayAwakeAcademicsEvent,
  SummerSchoolEvent,
  GameParadeAcademicsEvent,
};

export const academicStatModifyEvents = {
  [academicStatModifyNames.dormExamStudyingGroup]: DormExamStudyingGroupEvent,
  [academicStatModifyNames.dormExamStudyingTeam]: DormExamStudyingTeamEvent,
  [academicStatModifyNames.wakatsuKitchen]: WakatsuKitchenEvent,
  [academicStatModifyNames.wakatsuKitchenSpecial]: WakatsuKitchenSpecialEvent,
  [academicStatModifyNames.stayAwake]: StayAwakeAcademicsEvent,
  [academicStatModifyNames.summerSchool]: SummerSchoolEvent,
  [academicStatModifyNames.gameParadeAcademics]: GameParadeAcademicsEvent,
} as const;
