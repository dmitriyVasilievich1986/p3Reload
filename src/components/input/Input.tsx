import classnames from "classnames/bind";
import filterIcon from "./filter.png";
import searchIcon from "./search.png";
import * as style from "./style.scss";
import trashIcon from "./trash.png";

const cx = classnames.bind(style);

function Input(props: {
  onChange: (value: string) => void;
  value: string;
  label?: "filter" | "search";
  placeholder?: string;
  clearable?: boolean;
}) {
  return (
    <div className={cx("input-field")}>
      <input
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        value={props.value}
      />
      {props.clearable && (
        <img
          onClick={() => props.onChange("")}
          className={cx("clickable")}
          src={trashIcon}
        />
      )}
      {props.label === "filter" && <img src={filterIcon} />}
      {props.label === "search" && <img src={searchIcon} />}
    </div>
  );
}

export default Input;
