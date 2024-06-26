import { singleDay } from "./types";
import { april } from "./april";
import { june } from "./june";
import { may } from "./may";

export const calendar: singleDay[] = [...april, ...may, ...june];
