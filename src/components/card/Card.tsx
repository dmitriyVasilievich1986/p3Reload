import classnames from "classnames/bind";
import * as style from "./style.scss";

const cx = classnames.bind(style);

function Head(props: { head?: string }) {
  if (!props?.head) return null;
  return <legend className={cx("head")}>{props.head}</legend>;
}

function Badge(props: { children?: React.ReactNode }) {
  if (!props?.children) return null;
  return <div className="card-badge">{props.children}</div>;
}

function Card(props: {
  onClick?: () => void;
  color?: "primary" | "secondary";
  children?: React.ReactNode;
  badge?: React.ReactNode;
  highlited?: boolean;
  enable?: boolean;
  head?: string;
}) {
  return (
    <fieldset
      onClick={props?.onClick}
      className={cx("card", {
        enable: props?.enable,
        highlited: props?.highlited,
        primary: props?.color === "primary",
      })}
    >
      <Badge>{props?.badge}</Badge>
      <Head head={props?.head} />
      {props.children}
    </fieldset>
  );
}

export default Card;
