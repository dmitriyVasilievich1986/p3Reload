import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function Badge(props: {
  color: "red" | "green" | "blue" | "yellow";
  value: string | number;
}) {
  return <div className={cx("badge", props.color)}>{props.value}</div>;
}

export default Badge;
