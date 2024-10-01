import { mainCharacterParams } from "@/components/supportComponents";
import classnames from "classnames/bind";
import { ChoicesProps } from "./types";
import * as style from "./style.scss";
import { Tooltip } from "../tootlip";
import React from "react";

const cx = classnames.bind(style);

function replaceMainCharName(label: string) {
  const [mainCharName] = mainCharacterParams();
  return label.replace(/\$\{mainCharName\}/gi, mainCharName);
}

export function Answer(props: {
  label: string;
  points?: number;
  fork?: boolean;
}) {
  const label = replaceMainCharName(props.label);
  const points = props?.points || 0;
  let backgroundColor = "inherit";
  if (props?.fork) {
    backgroundColor = "#004e98";
  } else if (points > 0) {
    const adden = Math.max(15 - points, 0) * 7;
    backgroundColor = `rgb(${49 + adden}, ${87 + adden}, ${44 + adden})`;
  }

  return (
    <div className={cx("choice")}>
      <Tooltip
        tooltip={
          <div style={{ width: "90px", textAlign: "center" }}>
            Points: {points}
          </div>
        }
      >
        <div
          style={{ backgroundColor }}
          className={cx({ selected: points > 0 || props.fork })}
        >
          {label}
        </div>
      </Tooltip>
    </div>
  );
}

export function Question(props: ChoicesProps) {
  const label = replaceMainCharName(props.label);

  return (
    <div className={cx("choices")}>
      <label>{label}</label>
      <div className={cx("list")}>{props.children}</div>
    </div>
  );
}

export function QuestionsWrapper(props: {
  element: React.ReactElement<ChoicesProps>[];
  points: number;
}) {
  let maxPoints: number[] = [];
  props.element.forEach((q) => {
    if (Array.isArray(q.props.children)) {
      const points = q.props.children.map((c) => c.props.points || 0);
      maxPoints.push(Math.max(...points));
    } else if (React.isValidElement(q.props.children)) {
      maxPoints = [q.props.children.props.points || 0];
    }
  });

  return {
    ...props,
    maxPoints,
    element: () => (
      <div className={cx("question-wrapper")}>
        {props.element.map((e) =>
          React.cloneElement(e, { key: e.props.label })
        )}
      </div>
    ),
  };
}
