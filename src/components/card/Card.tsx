import { CardProps, HeadProps } from "./types";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function Head(props: HeadProps) {
  if (!props?.head) return null;
  return <legend className={cx("head")}>{props.head}</legend>;
}

function Card(props: CardProps) {
  return (
    <fieldset
      onClick={props?.onClick}
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
