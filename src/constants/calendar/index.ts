import { initialCalculataion } from "./baseFunctions";
import { singleDay } from "./types";
import { april } from "./april";
import { july } from "./july";
import { june } from "./june";
import { may } from "./may";

export const calendar: singleDay[] = [...april, ...may, ...june, ...july];

export { initialCalculataion };
