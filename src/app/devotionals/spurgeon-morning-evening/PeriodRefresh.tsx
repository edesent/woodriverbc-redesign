"use client";

import { useEffect } from "react";

export default function PeriodRefresh() {
  useEffect(() => {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    }).formatToParts(now);
    const value = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0);
    const seconds = value("hour") * 3600 + value("minute") * 60 + value("second");
    const nextBoundary = seconds < 43200 ? 43200 : 86400;
    const timer = window.setTimeout(() => window.location.reload(), (nextBoundary - seconds + 2) * 1000);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
