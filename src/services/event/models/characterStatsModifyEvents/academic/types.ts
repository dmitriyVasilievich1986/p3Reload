/**
 * Type definitions for academics stat-modify event models.
 */
export const AcademicStatModifyNames = {
  stayAwake: 'StayAwakeAcademicsEvent',
  gameParadeAcademics: 'GameParadeAcademicsEvent',
  wakatsuKitchen: 'WakatsuKitchenEvent',
  wakatsuKitchenSpecial: 'WakatsuKitchenSpecialEvent',
  dormExamStudyingGroup: 'DormExamStudyingGroupEvent',
  dormExamStudyingTeam: 'DormExamStudyingTeamEvent',
  summerSchool: 'SummerSchoolEvent',
} as const;

export type AcademicStatModifyNamesType =
  (typeof AcademicStatModifyNames)[keyof typeof AcademicStatModifyNames];
