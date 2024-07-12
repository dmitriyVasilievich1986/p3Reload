import React from "react";

export type HeadProps = {
  head?: string;
};

export type CardProps = {
  head?: string;
  children?: React.ReactNode;
  enable?: boolean;
  color?: "primary" | "secondary";
  badge?: React.ReactNode;
  onClick?: () => void;
};
