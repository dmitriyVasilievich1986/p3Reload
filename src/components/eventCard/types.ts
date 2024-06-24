import React from "react";

export type EventProps = {
  head: string;
  name?: string;
  place?: string;
  stats?: string;
  prerequisite?: string;
  price?: number;
  receive?: number;
  children?: React.ReactNode;
};

export type ItemProps = {
  label: string;
  value?: string | null;
};
