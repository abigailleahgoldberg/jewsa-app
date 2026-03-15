"use client";

import { useState, useEffect, useRef } from "react";

const COUPON = "MISHPOKHE10";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (localStorage.getItem("jewsa-exit-intent-shown")) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (triggered.current) return;
      if (e.clientY <= 10) {
        triggered.current = true;
        setVisible(true);
        localStorage.setItem("jewsa-exit-intent-shown", "1");
      }
    };

    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    const onScroll = () => {
      if (triggered.current) return;
      const now = Date.now();
      const delta = window.scrollY - lastScrollY;
      const elapsed = now - lastScrollTime;
      if (delta < -80 && elapsed < 300) {
        triggered.current = true;
        setVisible(true);
        localStorage.setItem("jewsa-exit-intent-shown", "1");
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, coupon: COUPON, site: "jewsa" }),
      });
    } catch {}
    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.75)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    }}>
      <div style={{
        background: "#1A1A2E",
        border: "1px solid rgba(250,204,21,0.3)",
        maxWidth: 440,
        width: "100%",
        padding: "40px 36px",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.5)",
            fontSize: 22,
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
              Your discount code:
            </div>
            <div style={{
              fontSize: 28,
              fontFamily: "'Bebas Neue', sans-serif",
              color: "#facc15",
              letterSpacing: 4,
              marginBottom: 16,
            }}>
              {COUPON}
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
              Use at checkout. We sent a copy to your inbox. Shop well, shop proud.
            </p>
          </div>
        ) : (
          <>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#facc15",
              textTransform: "uppercase",
              marginBottom: 10,
            }}>
              Wait
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 32,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 12,
            }}>
              Take 10% Off Your First Order
            </h2>
            <p style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              marginBottom: 24,
            }}>
              Jewish-American pride merch that actually slaps. Enter your email and we will send you a code.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(250,204,21,0.25)",
                  color: "#fff",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "13px",
                  background: "#facc15",
                  color: "#0D0D1A",
                  border: "none",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "1px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textTransform: "uppercase",
                }}
              >
                Get My 10% Off
              </button>
            </form>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 12, lineHeight: 1.5 }}>
              One-time use. No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
