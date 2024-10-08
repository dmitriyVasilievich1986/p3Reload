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
  name?: string;
}) {
  return (
    <fieldset className={cx("input-field")}>
      {props.name && <legend>{props.name}</legend>}
      <input
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        value={props.value}
      />
      {props.clearable && (
        <TrashIcon size="medium" onClick={() => props.onChange("")} />
      )}
      {props.label === "filter" && <FilterIcon size="medium" />}
      {props.label === "search" && <SearchIcon size="medium" />}
    </fieldset>
  );
}

export default Input;
