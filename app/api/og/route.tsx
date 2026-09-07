import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Zunair Shahid";
  const subtitle = searchParams.get("subtitle") || "Certified Shopify Plus Developer";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#060910",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#00D4FF",
          }}
        />
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#00D4FF",
            marginBottom: "32px",
            letterSpacing: "0.1em",
          }}
        >
          ZS
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#E2E8F0",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#00D4FF",
            fontWeight: 500,
            marginBottom: "48px",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "16px", color: "#94A3B8" }}>
            Certified Shopify Plus Developer · Lahore, Pakistan
          </div>
          <div style={{ fontSize: "16px", color: "#94A3B8" }}>zunairshahid.com</div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "200px",
            height: "4px",
            backgroundColor: "#00D4FF",
            opacity: 0.4,
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
