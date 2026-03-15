"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "RedWhiteJesus", href: "https://redwhitejesus.com" },
  { label: "AllahiCan", href: "https://allahican.com" },
  { label: "U-God Sacred Texts", href: "https://u-god.com" },
];

export default function NetworkBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const val = localStorage.getItem("jewsa-network-bar-dismissed");
    if (val !== "1") setDismissed(false);
  }, []);

  const dismiss = () => {
    localStorage.setItem("jewsa-network-bar-dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div style={{
      background: "#0D0D1A",
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      position: "relative",
      fontSize: 11,
      letterSpacing: "0.5px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <span style={{ color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>
        Part of The Voice of Cash Network
      </span>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(250,204,21,0.75)",
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#facc15")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,204,21,0.75)")}
          >
            {l.label}
          </a>
        ))}
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss network bar"
        style={{
          position: "absolute",
          right: 12,
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.35)",
          cursor: "pointer",
          fontSize: 14,
          lineHeight: 1,
          padding: "0 4px",
        }}
      >
        &times;
      </button>
    </div>
  );
}
