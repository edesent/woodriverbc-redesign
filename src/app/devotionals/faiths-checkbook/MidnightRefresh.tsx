"use client";

import { useEffect } from "react";

export default function MidnightRefresh() {
  useEffect(() => {
    const now = new Date();
    const easternParts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(now);
    const value = (type: string) =>
      Number(easternParts.find((part) => part.type === type)?.value ?? 0);
    const secondsSinceMidnight =
      value("hour") * 3600 + value("minute") * 60 + value("second");
    const millisecondsUntilMidnight = (86400 - secondsSinceMidnight + 2) * 1000;
    const timer = window.setTimeout(() => window.location.reload(), millisecondsUntilMidnight);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
