import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const OpenGraphImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background:
            "radial-gradient(ellipse 65% 45% at 0% 0%, rgba(255, 232, 141, 0.8), rgba(255, 255, 255, 0) 58%), radial-gradient(ellipse 70% 45% at 100% 0%, rgba(255, 218, 121, 0.75), rgba(255, 255, 255, 0) 55%), radial-gradient(ellipse 65% 42% at 50% 100%, rgba(255, 244, 164, 0.65), rgba(255, 255, 255, 0) 62%), #FFFDF3",
          fontFamily:
            '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(235, 202, 89, 0.22) 1.2px, transparent 1.2px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div
          style={{
            width: 980,
            height: 500,
            borderRadius: 46,
            background: "rgba(255, 255, 255, 0.92)",
            border: "1px solid rgba(255, 255, 255, 0.72)",
            boxShadow: "0 14px 40px rgba(197, 159, 32, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#B38700",
            }}
          >
            FAN DIAGNOSIS
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#3E2D00",
            }}
          >
            ≒JOY
          </div>
          <div
            style={{
              marginTop: -4,
              fontSize: 62,
              fontWeight: 800,
              color: "#D69800",
            }}
          >
            推し診断
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 30,
              fontWeight: 600,
              color: "#705300",
            }}
          >
            質問に答えるだけで、ぴったりのメンバーがわかる
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
};

export default OpenGraphImage;
