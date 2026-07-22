import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Sequence,
  Img,
  staticFile,
  AbsoluteFill,
} from "remotion";

const BG = "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)";
const ACCENT = "#f59e0b";
const TEXT = "#ffffff";
const MUTED = "#94a3b8";

const categories = [
  { emoji: "🎧", label: "Auriculares" },
  { emoji: "🪑", label: "Sillas Ergonómicas" },
  { emoji: "⌨️", label: "Teclados" },
  { emoji: "💪", label: "Nutrición Deportiva" },
];

function SceneTitle({
  text,
  start,
  duration,
}: {
  text: string;
  start: number;
  duration: number;
}) {
  const frame = useCurrentFrame();
  const local = frame - start;
  const opacity = interpolate(local, [0, 20, duration - 20, duration], [0, 1, 1, 0]);
  const y = interpolate(local, [0, 25], [40, 0], { extrapolateRight: "clamp" });

  return (
    <Sequence from={start} durationInFrames={duration}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: TEXT,
            textAlign: "center",
            lineHeight: 1.3,
            margin: 0,
            maxWidth: 800,
          }}
        >
          {text}
        </h1>
      </div>
    </Sequence>
  );
}

function LogoIntro() {
  const frame = useCurrentFrame();
  const progress = spring({
    frame: frame,
    fps: 30,
    config: { damping: 12, stiffness: 100 },
  });
  const scale = interpolate(progress, [0, 1], [0.8, 1]);
  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0]);

  return (
    <Sequence from={0} durationInFrames={90}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <Img
          src={staticFile("logo_duostudio.png")}
          style={{
            width: 200,
            height: 200,
            objectFit: "contain",
            marginBottom: 30,
          }}
        />
        <h1
          style={{
            fontSize: 100,
            fontWeight: 800,
            color: TEXT,
            margin: 0,
            letterSpacing: 6,
          }}
        >
          DuoStudio
        </h1>
        <p style={{ fontSize: 32, color: MUTED, marginTop: 16 }}>
          Guías de compra
        </p>
      </div>
    </Sequence>
  );
}

function CategoryCards() {
  const frame = useCurrentFrame();

  return (
    <Sequence from={90} durationInFrames={180}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {categories.map((cat, i) => {
          const local = frame - i * 15;
          const enter = spring({
            frame: local,
            fps: 30,
            config: { damping: 14, stiffness: 120 },
          });
          const opacity = interpolate(
            local,
            [0, 10, 140, 180],
            [0, 1, 1, 0],
          );
          const x = interpolate(enter, [0, 1], [120, 0]);
          const rotate = interpolate(enter, [0, 1], [15, 0]);

          return (
            <div
              key={cat.label}
              style={{
                width: 500,
                padding: "20px 40px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: 20,
                opacity,
                transform: `translateX(${x}px) rotate(${rotate}deg)`,
              }}
            >
              <span style={{ fontSize: 40 }}>{cat.emoji}</span>
              <span
                style={{ fontSize: 36, fontWeight: 600, color: TEXT }}
              >
                {cat.label}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 28,
                  color: ACCENT,
                }}
              >
                →
              </span>
            </div>
          );
        })}
      </div>
    </Sequence>
  );
}

function ValueProp() {
  const frame = useCurrentFrame();
  const local = frame;
  const opacity = interpolate(local, [0, 20, 130, 150], [0, 1, 1, 0]);

  const lines = [
    { text: "Independientes", delay: 0 },
    { text: "Actualizadas", delay: 20 },
    { text: "Sin sesgo", delay: 40 },
  ];

  return (
    <Sequence from={270} durationInFrames={90}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity,
          gap: 40,
        }}
      >
        <p
          style={{
            fontSize: 48,
            color: MUTED,
            margin: 0,
            letterSpacing: 2,
          }}
        >
          Nuestras guías son
        </p>
        {lines.map((line) => {
          const l =
            frame - line.delay > 0
              ? spring({
                  frame: frame - line.delay,
                  fps: 30,
                  config: { damping: 12, stiffness: 100 },
                })
              : 0;
          return (
            <div
              key={line.text}
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: TEXT,
                transform: `scale(${l})`,
                opacity: l,
              }}
            >
              {line.text}
            </div>
          );
        })}
      </div>
    </Sequence>
  );
}

function CTA() {
  const frame = useCurrentFrame();
  const local = frame;

  const pulse = spring({
    frame: Math.max(0, local),
    fps: 30,
    config: { damping: 8, stiffness: 80 },
  });

  const opacity = interpolate(local, [0, 15, 80, 90], [0, 1, 1, 0]);
  const scale = interpolate(pulse, [0, 1], [0.9, 1]);

  return (
    <Sequence from={360} durationInFrames={90}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity,
          transform: `scale(${scale})`,
          padding: 40,
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: ACCENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
            marginBottom: 40,
          }}
        >
          🛒
        </div>
        <h2
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: TEXT,
            textAlign: "center",
            margin: "0 0 16px 0",
          }}
        >
          Encuentra tu producto ideal
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          sergio17ss.github.io/webs-afiliados
        </p>
      </div>
    </Sequence>
  );
}

export const Promo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden" }}>
      <LogoIntro />
      <CategoryCards />
      <ValueProp />
      <CTA />
    </AbsoluteFill>
  );
};
