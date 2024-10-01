import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function Switch(props: { value: boolean; onChange: (value: boolean) => void }) {
  return (
    <div className={cx("checkbox-wrapper")}>
      <input
        id="cb4"
        type="checkbox"
        className={cx("tgl", "tgl-flat")}
        checked={props.value}
        onChange={() => props.onChange(!props.value)}
      />
      <label className={cx("tgl-btn")} htmlFor="cb4"></label>
    </div>
  );
}

export default Switch;
