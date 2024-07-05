import { EventProps, ItemProps, HeadProps } from "./types";
import classnames from "classnames/bind";
import * as style from "./style.scss";
import tarotIcon from "./tarot.png";

const cx = classnames.bind(style);

export function Item(props: ItemProps) {
  if (!props?.value) return null;
  return (
    <div className={cx("item")}>
      <label>{props.label}:</label>
      <div>{props.value}</div>
    </div>
  );
}

export function Head(props: HeadProps) {
  return (
    <div className={cx("head")}>
      <h3>{props.head}</h3>
      {props.card && <img src={tarotIcon} />}
    </div>
  );
}

export function price(price?: number): string | undefined {
  if (!price) return undefined;
  if (price < 1000) return `¥${price}`;
  const first = Math.floor(price / 1000);
  const second = String(price % 1000).padEnd(3, "0");
  return `¥${first},${second}`;
}

function EventCard(props: EventProps) {
  return (
    <div className={cx("event-card")}>
      <Head {...props} />
      <Item label="Name" value={props?.name} />
      <Item label="Place" value={props?.place} />
      <Item label="Stats" value={props?.stats} />
      <Item label="Price" value={price(props?.price)} />
      <Item label="Gain" value={price(props?.receive)} />
      <Item label="Prerequisite" value={props?.prerequisite} />
      {props.children}
    </div>
  );
}

export default EventCard;
