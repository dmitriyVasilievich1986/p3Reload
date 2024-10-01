import { useSearchParams } from "react-router-dom";
import React from "react";

export function dayIndexParams(): [string | null, (id: string) => void] {
  const [dayIndex, setDayIndex] = React.useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const dateId = searchParams.get("dateId");
    setDayIndex(dateId);
  }, [searchParams]);

  const updateDayIndex = (id: string) => {
    setSearchParams((prev) => {
      prev.set("dateId", id);
      return prev;
    });
  };

  return [dayIndex, updateDayIndex] as const;
}
export function mainCharacterParams(): [string, (name: string) => void] {
  const [mainCharacterName, setMainCharacterName] = React.useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const name = searchParams.get("mainCharacterName");
    if (!name) {
      updateMainCharacterName("Protagonist");
    } else {
      setMainCharacterName(name);
    }
  }, [searchParams]);

  const updateMainCharacterName = (name: string) => {
    setSearchParams((prev) => {
      prev.set("mainCharacterName", name);
      return prev;
    });
  };

  return [mainCharacterName, updateMainCharacterName] as const;
}
