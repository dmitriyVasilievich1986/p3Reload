import React from "react";

export type OutsideProps = {
  className?: string;
  onClick?: () => void;
  clickHandler: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};
