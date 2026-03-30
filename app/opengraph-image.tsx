import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JewSA — Where Pride Meets Punchlines";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#003087",
          color: "#FFD700",
          fontFamily: "Arial Black, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#FFD700",
            fontSize: 64,
            marginBottom: 24,
            color: "#003087",
          }}
        >
          ✡
        </div>
        <div style={{ fontSize: 72, fontWeight: 900, marginBottom: 12 }}>
          JewSA
        </div>
        <div style={{ fontSize: 28, color: "#FFFFFF", marginBottom: 8 }}>
          Where Pride Meets Punchlines
        </div>
        <div style={{ fontSize: 22, color: "#FFD700", opacity: 0.8 }}>
          jewsa.com
        </div>
      </div>
    ),
    { ...size }
  );
}
