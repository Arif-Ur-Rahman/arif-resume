"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type GameContextValue = {
  on: boolean;
  setOn: (on: boolean) => void;
  toggle: () => void;
};

const GameContext = createContext<GameContextValue | null>(null);

/* Shared "Game Mode" switch — the navbar toggle and the bubble overlay both read it */
export function GameProvider({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => setOn((v) => !v), []);

  // Escape leaves game mode
  useEffect(() => {
    if (!on) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOn(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [on]);

  const value = useMemo(() => ({ on, setOn, toggle }), [on, toggle]);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside <GameProvider>");
  return ctx;
}
