import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

export function Choice(props) {
  return (
    <div className={cx("choice")}>
      <div className={cx({ ok: props?.ok, correct: props?.correct })}>
        {props.label}
      </div>
    </div>
  );
}

export function Choices(props) {
  return (
    <div className={cx("choices")}>
      <label>{props.label}</label>
      <div className={cx("list")}>{props.children}</div>
    </div>
  );
}
