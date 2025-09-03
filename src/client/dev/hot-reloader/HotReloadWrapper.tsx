"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

let lastRefresh = performance.now();
let hasLogged = false;

const HotReloadWrapper = ({ children }: Props) => {
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    const now = performance.now();
    const delta = now - lastRefresh;

    if (!hasLogged && delta > 100) {
      console.log(`[Fast Refresh] done in ${Math.round(delta)}ms`);
      setLatency(Math.round(delta));
      hasLogged = true;
    }

    const timeout = setTimeout(() => {
      lastRefresh = performance.now();
      hasLogged = false;
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {children}
      {process.env.NODE_ENV === "development" && latency !== null && (
        <div
          style={{
            position: "fixed",
            bottom: 12,
            right: 12,
            background: "#111",
            color: "#0f0",
            padding: "6px 12px",
            fontSize: "12px",
            borderRadius: "6px",
            zIndex: 9999,
            fontFamily: "monospace",
          }}
        >
          ⚡ Rebuild: {latency}ms
        </div>
      )}
    </>
  );
};

export default HotReloadWrapper;
