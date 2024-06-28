import { ChoiceProps, ChoicesProps } from "./types";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

export function Choice(props: ChoiceProps) {
  const points = props?.points || 0;
  let backgroundColor = "inherit";
  if (props?.fork) {
    backgroundColor = "#004e98";
  } else if (points > 0) {
    const adden = (15 - points) * 7;
    backgroundColor = `rgb(${49 + adden}, ${87 + adden}, ${44 + adden})`;
  }

  return (
    <div className={cx("choice")}>
      <div
        style={{ backgroundColor }}
        className={cx({ selected: points > 0 || props.fork })}
      >
        {props.label}
      </div>
    </div>
  );
}

export function Choices(props: ChoicesProps) {
  return (
    <div className={cx("choices")}>
      <label>{props.label}</label>
      <div className={cx("list")}>{props.children}</div>
    </div>
  );
}
