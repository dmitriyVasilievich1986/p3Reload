import React from "react";

export type HeadProps = {
  head: string;
  card?: boolean;
  multiplier?: number;
};

export type EventProps = {
  name?: string;
  place?: string;
  stats?: string;
  prerequisite?: string;
  price?: number;
  receive?: number;
  children?: React.ReactNode;
} & HeadProps;

export type ItemProps = {
  label: string;
  value?: string;
};
