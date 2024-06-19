import classnames from "classnames/bind";
import * as style from "./style.scss";
import React from "react";

const cx = classnames.bind(style);

export function Item(props) {
  if (!props?.value) return null;
  return (
    <div className={cx("item")}>
      <label>{props.label}:</label>
      <div>{props.value}</div>
    </div>
  );
}

export function price(price) {
  if (!price) return null;
  if (price < 1000) return `¥${price}`;
  const first = Math.floor(price / 1000);
  const second = String(price % 1000).padEnd(3, "0");
  return `¥${first},${second}`;
}

function EventCard(props) {
  return (
    <div className={cx("event-card")}>
      <h3 className={cx("head")}>{props.head}</h3>
      <Item label="Name" value={props?.name} />
      <Item label="Place" value={props?.place} />
      <Item label="Stats" value={props?.stats} />
      <Item label="Price" value={price(props?.price)} />
      <Item label="Gain" value={price(props?.receive)} />
      {props.children}
    </div>
  );
}

export default EventCard;
