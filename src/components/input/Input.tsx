import classnames from "classnames/bind";
import filterIcon from "./filter.png";
import searchIcon from "./search.png";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function Input(props: {
  value: string;
  onChange: (value: string) => void;
  label?: "filter" | "search";
  placeholder?: string;
}) {
  return (
    <div className={cx("input-field")}>
      <input
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        value={props.value}
      />
      {props.label === "filter" && <img src={filterIcon} />}
      {props.label === "search" && <img src={searchIcon} />}
    </div>
  );
}

export default Input;
