import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

function Head(props) {
  if (!props?.head) return null;
  return <legend className={cx("head")}>{props.head}</legend>;
}

function Card(props) {
  return (
    <fieldset
      className={cx("card", {
        enable: props?.enable,
        primary: props?.color === "primary",
      })}
    >
      <Head head={props?.head} />
      {props.children}
    </fieldset>
  );
}

export default Card;
