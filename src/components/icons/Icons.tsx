import * as style from "./style.scss";
import filterIcon from "./filter.png";
import searchIcon from "./search.png";
import charmIcon from "./charm.png";
import tarotIcon from "./tarot.png";
import trashIcon from "./trash.png";
import moonIcon from "./moon.png";
import bookIcon from "./book.png";
import React from "react";

import classnames from "classnames/bind";

const cx = classnames.bind(style);

type IconProps = {
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  clickable?: boolean;
  reversed?: boolean;
  className?: string;
};

abstract class Icon extends React.Component<IconProps> {
  reversed: boolean = false;

  size?: "small" | "medium" | "large";
  onClick?: () => void;
  clickable?: boolean;
  className: string;

  abstract iconPath: string;

  constructor(props: IconProps) {
    super(props);
    this.size = props.size;
    this.onClick = props.onClick;
    this.clickable = props.clickable;
    this.className = props.className ?? "";
    this.reversed = props.reversed || this.reversed;

    this.render = this.render.bind(this);
  }

  render() {
    return (
      <img
        src={this.iconPath}
        onClick={this.onClick}
        className={cx(
          "standard-icon",
          this.className,

          this.size,
          {
            clickable: this.clickable || this?.onClick !== undefined,
            reversed: this.reversed,
          }
        )}
      />
    );
  }
}

export class FullMoonIcon extends Icon {
  iconPath: string = moonIcon;
}

export class BookIcon extends Icon {
  iconPath: string = bookIcon;
}

export class TarotIcon extends Icon {
  iconPath: string = tarotIcon;
}

export class CharmIcon extends Icon {
  iconPath: string = charmIcon;
}

export class FilterIcon extends Icon {
  iconPath: string = filterIcon;
}

export class SearchIcon extends Icon {
  iconPath: string = searchIcon;
}

export class TrashIcon extends Icon {
  iconPath: string = trashIcon;
}
