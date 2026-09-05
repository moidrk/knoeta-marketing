import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Knoeta — Clinical intelligence, built around real judgment.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const mark = await readFile(
    join(process.cwd(), "public/brand/knoeta-mark.png"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "65px 80px",
        background: "#f7f5ef",
        color: "#211a2b",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 34,
          letterSpacing: -1.5,
        }}
      >
        {/* ImageResponse renders embedded assets directly; next/image is unnecessary here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${mark.toString("base64")}`}
          alt=""
          width={44}
          height={44}
        />
        Knoeta
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 78,
          fontSize: 14,
          letterSpacing: 3,
          color: "#514568",
        }}
      >
        CLINICAL INTELLIGENCE FOR CLINICIANS
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          letterSpacing: -4,
          lineHeight: 1.05,
          marginTop: 24,
        }}
      >
        <span>Built around</span>
        <span style={{ color: "#c94f31" }}>real judgment.</span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 47,
          fontSize: 22,
          color: "#746c7a",
        }}
      >
        Practice. Reflect. Grow.
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 80,
          bottom: 65,
          color: "#746c7a",
          fontSize: 18,
        }}
      >
        knoeta.com
      </div>
    </div>,
    size,
  );
}
