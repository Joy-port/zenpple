import Image from 'next/image'

const steps = [
  { wave: 'β', state: '清醒緊繃', hz: '13–30 Hz' },
  { wave: '→', state: '', hz: '' },
  { wave: 'α', state: '放鬆專注', hz: '8–12 Hz' },
  { wave: '→', state: '', hz: '' },
  { wave: 'θ', state: '深層冥想', hz: '4–7 Hz' },
] as const

export default function WhyBrainwaveSection() {
  return (
    <section
      data-nav-theme="dark"
      data-nav-color="rgba(90,165,178,0.12)"
      style={{
        background: 'linear-gradient(180deg, #6AAEBB 0%, #6BBFB2 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(60px,8vh,100px) clamp(48px,8vw,120px)',
        textAlign: 'center',
      }}
    >
      {/* Radial glow behind bowl */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 55% 55% at 50% 52%, rgba(90,165,178,0.30) 0%, rgba(90,165,178,0.08) 55%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Animated ripple rings */}
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          aria-hidden
          style={{
            position: 'absolute',
            width: `clamp(${200 + i * 90}px, ${22 + i * 9}vw, ${420 + i * 120}px)`,
            height: `clamp(${200 + i * 90}px, ${22 + i * 9}vw, ${420 + i * 120}px)`,
            borderRadius: '50%',
            border: `1px solid rgba(90,165,178,${(0.16 - i * 0.03).toFixed(2)})`,
            animation: `qi-ripple 5s ease-out ${i * 1.2}s infinite`,
            pointerEvents: 'none',
          } as React.CSSProperties}
        />
      ))}

      {/* Title */}
      <h2
        className="tr-d2"
        style={{
          fontFamily: 'var(--f-impact)',
          fontWeight: 900,
          position: 'relative',
          zIndex: 2,
          fontSize: 'clamp(20px,2.8vw,34px)',
          color: 'rgba(255,255,255,0.82)',
          letterSpacing: '0.05em',
          lineHeight: 1.35,
          marginBottom: 52,
        }}
      >
        為什麼頌缽可以放鬆腦波
      </h2>
      <p
        style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'var(--f-display)',
          fontWeight: 300,
          fontSize: 20,
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.35)',
          textTransform: 'uppercase',
          marginBottom: 52,
          marginTop: -36,
        }}
      >
        Why Singing Bowl Relaxes Brainwaves
      </p>

      {/* Animated SVG waves */}
      <svg
        aria-hidden
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, opacity: 0.18 }}
      >
        <defs>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <animateTransform
              key={i}
              id={`wt${i}`}
              attributeName="transform"
              type="translate"
              from={`${i * 18} 0`}
              to={`${-1440 + i * 18} 0`}
              dur={`${7 + i * 1.2}s`}
              repeatCount="indefinite"
            />
          ))}
        </defs>

        {([
          { amp: 18, phase: 0,   period: 320, y: 193, opacity: 0.50, stroke: 'rgba(90,165,178,1)',  sw: 2.5, dur: 18, vAmp:  5, vDur: 12 },
          { amp: 28, phase: 60,  period: 280, y: 204, opacity: 0.35, stroke: 'rgba(90,165,178,1)',  sw: 0.6, dur: 24, vAmp:  0, vDur:  0 },
          { amp: 12, phase: 120, period: 360, y: 196, opacity: 0.28, stroke: 'rgba(255,255,255,1)', sw: 1.5, dur: 20, vAmp:  4, vDur: 16 },
          { amp: 22, phase: 180, period: 300, y: 207, opacity: 0.20, stroke: 'rgba(255,255,255,1)', sw: 3.5, dur: 28, vAmp:  0, vDur:  0 },
          { amp: 34, phase: 240, period: 260, y: 200, opacity: 0.14, stroke: 'rgba(90,165,178,1)',  sw: 0.8, dur: 22, vAmp:  6, vDur: 20 },
          { amp: 10, phase: 300, period: 400, y: 202, opacity: 0.10, stroke: 'rgba(255,255,255,1)', sw: 2.0, dur: 32, vAmp:  0, vDur:  0 },
        ] as const).map((w, i) => {
          const pts: string[] = []
          for (let x = -w.period; x <= 1440 + w.period; x += 4) {
            const y = w.y + w.amp * Math.sin((x + w.phase) * (2 * Math.PI / w.period))
            pts.push(`${x},${y.toFixed(1)}`)
          }
          return (
            <g key={i}>
              {w.vAmp > 0 && (
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0 0; 0 ${w.vAmp}; 0 0; 0 ${-w.vAmp}; 0 0`}
                  dur={`${w.vDur}s`}
                  repeatCount="indefinite"
                  additive="sum"
                />
              )}
              <polyline
                points={pts.join(' ')}
                fill="none"
                stroke={w.stroke}
                strokeWidth={w.sw}
                opacity={w.opacity}
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to={`${-w.period} 0`}
                  dur={`${w.dur}s`}
                  repeatCount="indefinite"
                  additive="sum"
                />
              </polyline>
            </g>
          )
        })}
      </svg>

      {/* Bowl image */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="/qi-sb/bowl-white.png"
          alt="頌缽"
          width={600}
          height={600}
          style={{
            position: 'relative',
            width: 'clamp(220px,38vw,460px)',
            height: 'auto',
            opacity: 0.55,
            filter: 'drop-shadow(0 0 40px rgba(90,165,178,0.42)) drop-shadow(0 0 90px rgba(90,165,178,0.18))',
          }}
        />
      </div>

      {/* Brainwave journey */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: 52,
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(16px,3.5vw,44px)',
        }}
      >
        {steps.map((item, i) =>
          item.wave === '→' ? (
            <span key={i} style={{ color: 'rgba(90,165,178,0.45)', fontSize: 20, fontFamily: 'var(--f-display)', lineHeight: 1 }}>→</span>
          ) : (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--f-display)', fontWeight: 100, fontSize: 'clamp(22px,2.8vw,36px)', color: 'rgba(255,255,255,0.68)', lineHeight: 1, marginBottom: 8 }}>{item.wave}</p>
              <p style={{ fontFamily: 'var(--f-display)', fontSize: 13, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.32)', marginBottom: 4 }}>{item.hz}</p>
              <p style={{ fontFamily: 'var(--f-zh)', fontSize: 13, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.08em' }}>{item.state}</p>
            </div>
          )
        )}
      </div>

      {/* Bottom caption */}
      <p
        style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'var(--f-display)',
          fontWeight: 100,
          fontSize: 13,
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.25)',
          textTransform: 'uppercase',
          marginTop: 36,
        }}
      >
        聲波共振 · 腦波同步 · 神經系統自然修復
      </p>
    </section>
  )
}
