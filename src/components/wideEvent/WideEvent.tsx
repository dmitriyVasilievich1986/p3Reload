import { WideEventProps } from "./types";
import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function WideEvent(props: WideEventProps) {
  return (
    <div className={cx("wide-event")}>
      <div>{props.children}</div>
    </div>
  );
}

export default WideEvent;
