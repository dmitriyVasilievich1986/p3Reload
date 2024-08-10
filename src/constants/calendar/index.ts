import { initialCalculataion } from "./baseFunctions";
import { SingleDay } from "./SingleDay";
import { september } from "./september";
import { december } from "./december";
import { november } from "./november";
import { october } from "./october";
import { january } from "./january";
import { august } from "./august";
import { april } from "./april";
import { july } from "./july";
import { june } from "./june";
import { may } from "./may";

export const calendar: SingleDay[] = [
  ...april,
  ...may,
  ...june,
  ...july,
  ...august,
  ...september,
  ...october,
  ...november,
  ...december,
  ...january,
];

export { initialCalculataion };
