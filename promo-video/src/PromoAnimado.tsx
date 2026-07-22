import {
  useCurrentFrame,
  spring,
  interpolate,
  Sequence,
  Img,
  staticFile,
  AbsoluteFill,
  Easing,
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

function Particle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - delay);
  const loop = local % 90;
  const opacity = interpolate(loop, [0, 20, 70, 90], [0, 0.15, 0.15, 0]);
  const rise = interpolate(loop, [0, 90], [0, -120], { extrapolateRight: "clamp" });
  const drift = interpolate(loop, [0, 90], [0, Math.sin(loop * 0.05) * 30]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: ACCENT,
        opacity,
        transform: `translate(${drift}px, ${rise}px)`,
      }}
    />
  );
}

function BackgroundParticles() {
  const particles = [
    { delay: 0, x: 15, y: 70, size: 6 },
    { delay: 10, x: 85, y: 20, size: 4 },
    { delay: 20, x: 50, y: 80, size: 8 },
    { delay: 30, x: 75, y: 50, size: 3 },
    { delay: 40, x: 30, y: 30, size: 5 },
    { delay: 50, x: 90, y: 75, size: 4 },
    { delay: 60, x: 10, y: 40, size: 6 },
    { delay: 70, x: 60, y: 15, size: 3 },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}
    </div>
  );
}

function LogoIntro() {
  const frame = useCurrentFrame();
  const inSpring = spring({ frame, fps: 30, config: { damping: 10, stiffness: 90 } });
  const scale = interpolate(inSpring, [0, 1], [0, 1]);
  const rotate = interpolate(inSpring, [0, 1], [-20, 0]);
  const opacity = interpolate(frame, [0, 10, 70, 90], [0, 1, 1, 0]);

  const glowPulse = spring({
    frame: Math.max(0, frame - 15),
    fps: 30,
    config: { damping: 6, stiffness: 60 },
  });
  const glowSize = interpolate(glowPulse, [0, 1], [180, 220]);

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
        }}
      >
        <div style={{ position: "relative", marginBottom: 30 }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: glowSize,
              height: glowSize,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${ACCENT}33 0%, transparent 70%)`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}>
            <Img
              src={staticFile("logo_duostudio.png")}
              style={{
                width: 180,
                height: 180,
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <h1
          style={{
            fontSize: 100,
            fontWeight: 800,
            color: TEXT,
            margin: 0,
            letterSpacing: 8,
          }}
        >
          DuoStudio
        </h1>
        <p style={{ fontSize: 32, color: MUTED, marginTop: 12 }}>
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
          gap: 20,
        }}
      >
        {categories.map((cat, i) => {
          const local = frame - i * 12;
          const enter = spring({
            frame: Math.max(0, local),
            fps: 30,
            config: { damping: 11, stiffness: 110 },
          });
          const opacity = interpolate(local, [0, 8, 150, 180], [0, 1, 1, 0]);
          const x = interpolate(enter, [0, 1], [-i % 2 === 0 ? 200 : -200, 0]);
          const y = interpolate(enter, [0, 1], [60, 0]);
          const rotateY = interpolate(enter, [0, 1], [i % 2 === 0 ? 30 : -30, 0]);

          return (
            <div
              key={cat.label}
              style={{
                width: 520,
                padding: "22px 44px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(16px)",
                display: "flex",
                alignItems: "center",
                gap: 20,
                opacity,
                transform: `translateX(${x}px) translateY(${y}px) perspective(800px) rotateY(${rotateY}deg)`,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(245, 158, 11, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                }}
              >
                {cat.emoji}
              </div>
              <span style={{ fontSize: 34, fontWeight: 600, color: TEXT }}>
                {cat.label}
              </span>
              <div
                style={{
                  marginLeft: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: ACCENT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                →
              </div>
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
  const opacity = interpolate(local, [0, 15, 70, 90], [0, 1, 1, 0]);

  const words = ["Independientes", "Actualizadas", "Sin sesgo"];

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
          gap: 16,
        }}
      >
        <p
          style={{
            fontSize: 40,
            color: MUTED,
            margin: 0,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Nuestras guías son
        </p>
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {words.map((word, i) => {
            const wLocal = Math.max(0, frame - i * 18);
            const wSpring = spring({
              frame: wLocal,
              fps: 30,
              config: { damping: 9, stiffness: 130 },
            });
            const wScale = interpolate(wSpring, [0, 1], [0, 1]);
            const wRotate = interpolate(wSpring, [0, 1], [i === 1 ? 10 : -10, 0]);

            return (
              <div
                key={word}
                style={{
                  padding: "16px 36px",
                  background: `rgba(245, 158, 11, ${0.08 + i * 0.04})`,
                  borderRadius: 50,
                  border: `1px solid ${ACCENT}44`,
                  transform: `scale(${wScale}) rotate(${wRotate}deg)`,
                  fontSize: 40,
                  fontWeight: 700,
                  color: TEXT,
                }}
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>
    </Sequence>
  );
}

function CTA() {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0]);

  const scaleSpring = spring({
    frame: Math.max(0, frame),
    fps: 30,
    config: { damping: 7, stiffness: 70 },
  });
  const scale = interpolate(scaleSpring, [0, 1], [0.85, 1]);

  const bounce = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [0, -8],
  );

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
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT} 0%, ${ACCENT}cc 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            marginBottom: 36,
            transform: `translateY(${bounce}px)`,
            boxShadow: `0 0 60px ${ACCENT}44`,
          }}
        >
          🚀
        </div>
        <h2
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: TEXT,
            textAlign: "center",
            margin: "0 0 12px 0",
            lineHeight: 1.2,
          }}
        >
          Encuentra tu
          <br />
          producto ideal
        </h2>
        <div
          style={{
            padding: "10px 28px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 50,
            border: `1px solid ${ACCENT}33`,
          }}
        >
          <p
            style={{
              fontSize: 22,
              color: ACCENT,
              margin: 0,
              fontFamily: "monospace",
              letterSpacing: 1,
            }}
          >
            webs-afiliados
          </p>
        </div>
      </div>
    </Sequence>
  );
}

export const PromoAnimado: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden" }}>
      <BackgroundParticles />
      <LogoIntro />
      <CategoryCards />
      <ValueProp />
      <CTA />
    </AbsoluteFill>
  );
};
