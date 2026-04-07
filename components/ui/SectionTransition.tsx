export default function SectionTransition() {
  return (
    <div
      style={{
        height: 90,
        background: 'var(--base)',
        lineHeight: 0,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 90, display: 'block' }}
      >
        <path
          d="M0,62 Q180,28 360,52 Q540,74 720,46 Q900,20 1080,50 Q1260,76 1440,48"
          stroke="#b5ac9e"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M0,70 Q200,42 400,60 Q600,76 800,54 Q1000,34 1200,58 Q1340,72 1440,55"
          stroke="#c8c0b2"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
