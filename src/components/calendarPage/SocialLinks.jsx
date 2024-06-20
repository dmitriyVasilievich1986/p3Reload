import { socialLinks } from "../../constants/socialLinks";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import Card from "../card/Card";
import React from "react";

const cx = classnames.bind(style);

function SocialLinks(props) {
  const getLevel = (name) => {
    if (props.links[name].level === 0) return "not established";
    if (props.links[name].level >= socialLinks[name].maxLevel)
      return "max level";
    return `${props.links[name].level} (${props.links[name].points}/${
      socialLinks[name].getlevel({
        ...props.links[name],
      }).points
    } pts.)`;
  };

  return (
    <Card head="Links" color="primary">
      <div className={cx("stat")}>
        {Object.keys(props.links).map((l) => (
          <div key={l}>
            <input
              onChange={() => props.changeHandler({ arcane: l })}
              checked={props.arcanes.includes(l)}
              type="checkbox"
            />
            <label>{l}</label>: {getLevel(l)}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default SocialLinks;
