import { TarotIcon, CharmIcon, BookIcon } from "@/components/icons";
import { Tooltip } from "@/components/tootlip";

import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

export function Item(props: { label: string; value?: string }) {
  if (!props?.value) return null;
  return (
    <div className={cx("item")}>
      <label>{props.label}:</label>
      <div>{props.value}</div>
    </div>
  );
}

export function Head(props: {
  head: string;
  card?: boolean;
  charm?: boolean;
  multiplier?: number;
}) {
  return (
    <div className={cx("head")}>
      <h3>{props.head}</h3>
      {props.card && (
        <Tooltip
          tooltip={<p className={cx("tooltip-text")}>Card multiplier</p>}
        >
          <TarotIcon size="large" />
        </Tooltip>
      )}
      {props.charm && (
        <Tooltip
          tooltip={<p className={cx("tooltip-text")}>Max Charm multiplier</p>}
        >
          <CharmIcon size="large" />
        </Tooltip>
      )}
      {props?.multiplier && props.multiplier > 1 && (
        <Tooltip
          tooltip={
            <p className={cx("tooltip-text", "wide")}>
              {props.multiplier === 1.51
                ? "Top class multiplier"
                : "Top 10 multiplier"}
            </p>
          }
        >
          <BookIcon size="large" />
        </Tooltip>
      )}
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

function EventCard(props: {
  head: string;
  name?: string;
  place?: string;
  stats?: string;
  price?: number;
  card?: boolean;
  charm?: boolean;
  receive?: number;
  multiplier?: number;
  prerequisite?: string;
  children?: React.ReactNode;
}) {
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
