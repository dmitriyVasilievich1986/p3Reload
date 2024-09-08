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
    setSearchParams({ ...searchParams, dateId: id });
  };

  return [dayIndex, updateDayIndex] as const;
}
