"use client";

import { useEffect, useState } from "react";

const formatter =
  typeof Intl !== "undefined"
    ? new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    : null;

/* Live clock for Dhaka. Returns null until mounted so server and client markup match. */
export function useDhakaTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    if (!formatter) return;
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
