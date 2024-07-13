import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function Badge({
  size = "medium",
  ...props
}: {
  color: "red" | "green" | "blue" | "yellow";
  size?: "small" | "medium" | "large";
  value: string | number;
}) {
  return <div className={cx("badge", props.color, size)}>{props.value}</div>;
}

export default Badge;
