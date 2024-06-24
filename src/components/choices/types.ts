import React from "react";

export type ChoiceProps = {
  label: string;
  points?: number;
  fork?: boolean;
};

export type ChoicesProps = {
  label: string;
  children?: React.ReactNode;
};
