import { ImportIcon } from "@/components/icons";
import React from "react";

import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function ImportButton(props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const clickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <div className={cx("import-wrapper")}>
      <ImportIcon size="medium" onClick={clickHandler} />
      <input ref={inputRef} onChange={props.onChange} type="file" />
    </div>
  );
}

export default ImportButton;
