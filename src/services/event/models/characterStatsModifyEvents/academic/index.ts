import { DormExamStudyingGroupEvent } from './DormExamStudyingGroup';
import { DormExamStudyingTeamEvent } from './DormExamStudyingTeam';
import { GameParadeAcademicsEvent } from './GameParadeAcademics';
import { StayAwakeAcademicsEvent } from './StayAwake';
import { SummerSchoolEvent } from './SummerSchoolEvent';
import { AcademicStatModifyNames, type AcademicStatModifyNamesType } from './types';
import { WakatsuKitchenEvent } from './WakatsuKitchenEvent';
import { WakatsuKitchenSpecialEvent } from './WakatsuKitchenSpecial';

export {
  AcademicStatModifyNames,
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
  [AcademicStatModifyNames.dormExamStudyingGroup]: DormExamStudyingGroupEvent,
  [AcademicStatModifyNames.dormExamStudyingTeam]: DormExamStudyingTeamEvent,
  [AcademicStatModifyNames.wakatsuKitchen]: WakatsuKitchenEvent,
  [AcademicStatModifyNames.wakatsuKitchenSpecial]: WakatsuKitchenSpecialEvent,
  [AcademicStatModifyNames.stayAwake]: StayAwakeAcademicsEvent,
  [AcademicStatModifyNames.summerSchool]: SummerSchoolEvent,
  [AcademicStatModifyNames.gameParadeAcademics]: GameParadeAcademicsEvent,
} as const;
