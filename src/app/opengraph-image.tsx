import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MAS Marketing Agency — Marketing que convierte. Webs que venden.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 10%, #1a1208 0%, #060606 60%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #D4AF37, #8B6F1F)",
            }}
          />
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            MAS Marketing Agency
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: "1000px",
            }}
          >
            Marketing que convierte.{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #F5D572, #D4AF37, #B8941F)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Webs que venden.
            </span>
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#a8a29e",
              marginTop: "8px",
            }}
          >
            Páginas web · Meta &amp; Google Ads · SEO · Branding
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#d6d3d1",
          }}
        >
          <div>masmarketingagency.com</div>
          <div style={{ color: "#D4AF37" }}>Venezuela · LATAM · España</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
