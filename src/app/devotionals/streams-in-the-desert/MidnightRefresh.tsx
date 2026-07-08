"use client";

import { useEffect } from "react";

function millisecondsUntilNextEasternMidnight() {
  const now = new Date();
  const easternParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).formatToParts(now);

  const getPart = (type: string) => Number(easternParts.find((part) => part.type === type)?.value ?? 0);
  const easternYear = getPart("year");
  const easternMonth = getPart("month");
  const easternDay = getPart("day");

  const nextEasternMidnight = new Date(Date.UTC(easternYear, easternMonth - 1, easternDay + 1, 5, 0, 5));

  return Math.max(1_000, nextEasternMidnight.getTime() - now.getTime());
}

export default function MidnightRefresh() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.reload();
    }, millisecondsUntilNextEasternMidnight());

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}
