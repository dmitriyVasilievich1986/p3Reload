import { stats } from "./stats";
import React from "react";

export function Choice({ label, correct = false }) {
  return (
    <div
      style={{
        backgroundColor: correct ? "green" : "inherit",
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );
}

export function ChoicesEvent({ label, children, head = null }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        margin: "0 5px",
        padding: "0 5px 15px 5px",
      }}
    >
      {head && (
        <div
          style={{
            position: "relative",
            top: "-10px",
            backgroundColor: "white",
            width: "fit-content",
            left: "10px",
          }}
        >
          {head}
        </div>
      )}
      <h4>{label}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "150px" }}>{children}</div>
      </div>
    </div>
  );
}

export function SpecialEvent({ label }) {
  return <h2>{label}</h2>;
}

const initialUpgrade = {
  upgrade: function ({ currentStats }) {
    return { stats: currentStats };
  },
  downgrade: function ({ currentStats }) {
    return { stats: currentStats };
  },
};

export const events = {
  doNothing: {
    ...initialUpgrade,
    name: "doNothing",
    special: false,
    available: () => true,
  },
  empty: {
    ...initialUpgrade,
    name: "empty",
    special: false,
    available: () => false,
    label: () => null,
  },
  special: {
    ...initialUpgrade,
    name: "special",
    special: true,
    available: () => false,
    label: () => <SpecialEvent label="Special Event" />,
  },
  schoolQuestionAcademics: {
    name: "schoolQuestion",
    special: true,
    available: () => false,
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 10,
        },
      };
    },
    downgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] - 10,
        },
      };
    },
  },
  schoolQuestionCharm: {
    name: "schoolQuestion",
    special: true,
    available: () => false,
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 10,
        },
      };
    },
    downgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] - 10,
        },
      };
    },
  },
  schoolQuestionCourage: {
    name: "schoolQuestion",
    special: true,
    available: () => false,
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 10,
        },
      };
    },
    downgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] - 10,
        },
      };
    },
  },
  studyAtHome: {
    name: "studyAtHome",
    special: false,
    available: ({ currentDate, currentTime }) => {
      return currentTime === "evening";
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 10,
        },
      };
    },
    downgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] - 10,
        },
      };
    },
  },
};
