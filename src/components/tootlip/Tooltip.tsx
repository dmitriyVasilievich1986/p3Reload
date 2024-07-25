import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

function Tooltip(props: {
  position?: "top" | "bottom";
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  onClick?: () => void;
}) {
  const [show, setShow] = React.useState(false);
  const position = props.position || "top";

  return (
    <div
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      className={cx("badge-wrapper")}
      onClick={props.onClick}
    >
      {props?.tooltip && (
        <div className={cx("tooltip", position, { show })}>{props.tooltip}</div>
      )}
      {props.children}
    </div>
  );
}

export default Tooltip;
