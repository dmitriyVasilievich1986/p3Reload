import { SearchIcon, FilterIcon, TrashIcon } from "@/components/icons";
import classnames from "classnames/bind";
import * as style from "./style.scss";

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
      {props.clearable && <TrashIcon onClick={() => props.onChange("")} />}
      {props.label === "filter" && <FilterIcon />}
      {props.label === "search" && <SearchIcon />}
    </div>
  );
}

export default Input;
