'use client'

import SectionTitle from './SectionTitle'

const brainwaves = [
  {
    label: 'β Beta · 日常清醒',
    hz: '13–30 Hz',
    desc: '緊繃、思緒快速流動的日常狀態。頌缽開始之前，多數人在這裡。',
    color: '#90CCBF',
    strokeWidth: 2.2,
    points: '0,18 12,8 18,26 24,6 30,28 36,10 42,24 48,4 54,30 60,8 66,22 72,4 78,28 84,10 90,20 96,6 102,26 108,4 114,28 120,8 126,22 132,4 138,30 144,10 150,22 156,6 162,26 168,8 174,24 180,10 186,28 192,6 198,22 204,8 210,26 216,6 222,24 228,10 234,22 240,6 246,28 252,12 260,18',
    bg: 'rgba(90,165,178,0.06)',
  },
  {
    label: 'α Alpha · 放鬆專注',
    hz: '8–12 Hz',
    desc: '心智清明、身體放鬆。頌缽聲中，這是最常出現的狀態轉換入口。',
    color: '#65BAAF',
    strokeWidth: 2.6,
    points: '0,18 18,6 36,30 54,6 72,28 90,8 108,26 126,6 144,28 162,8 180,28 198,8 216,28 234,8 252,24 260,18',
    bg: 'rgba(90,165,178,0.12)',
  },
  {
    label: 'θ Theta · 深層冥想',
    hz: '4–7 Hz',
    desc: '內在意象浮現，無意識智慧可及。薩滿旅程與靈性洞察在此層發生。',
    color: '#5DA5B5',
    strokeWidth: 3.0,
    points: '0,18 30,4 60,32 90,4 120,30 150,6 180,28 210,4 240,28 260,18',
    bg: 'rgba(90,165,178,0.2)',
  },
]

// Version 2 — title on the RIGHT
export default function WhatIsSection2() {
  return (
    <section style={{ background: 'var(--base)', position: 'relative', overflow: 'hidden' }}>
      {/* Animated SVG waves */}
      <svg
        aria-hidden
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, opacity: 0.12 }}
      >
        {([
          { amp: 18, phase: 0,   period: 320, y: 200, stroke: 'rgba(101,186,175,1)', sw: 2.5, dur: 18, vAmp: 5,  vDur: 12 },
          { amp: 28, phase: 60,  period: 280, y: 210, stroke: 'rgba(106,174,187,1)', sw: 0.6, dur: 24, vAmp: 0,  vDur: 0  },
          { amp: 12, phase: 120, period: 360, y: 195, stroke: 'rgba(124,200,195,1)', sw: 1.5, dur: 20, vAmp: 4,  vDur: 16 },
          { amp: 22, phase: 180, period: 300, y: 205, stroke: 'rgba(106,174,187,1)', sw: 3.5, dur: 28, vAmp: 0,  vDur: 0  },
          { amp: 34, phase: 240, period: 260, y: 200, stroke: 'rgba(101,186,175,1)', sw: 0.8, dur: 22, vAmp: 6,  vDur: 20 },
          { amp: 10, phase: 300, period: 400, y: 202, stroke: 'rgba(124,200,195,1)', sw: 2.0, dur: 32, vAmp: 0,  vDur: 0  },
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
              <polyline points={pts.join(' ')} fill="none" stroke={w.stroke} strokeWidth={w.sw} opacity={0.4}>
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

      {/* ghost watermark */}
      <div aria-hidden style={{ position: 'absolute', left: '-20px', top: '40px', fontFamily: 'var(--f-display)', fontWeight: 100, fontSize: 200, color: 'rgba(90,165,178,0.04)', letterSpacing: '-0.02em', pointerEvents: 'none', lineHeight: 1, userSelect: 'none' }}>
        sound
      </div>

      <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)', paddingLeft: 'clamp(48px,8vw,120px)', paddingRight: 'clamp(48px,8vw,120px)', position: 'relative', zIndex: 2 }}>
        <div
          className="flex flex-col md:grid"
          style={{ gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}
        >
          {/* WhyDifferentBlock — left on desktop, bottom on mobile */}
          <div className="order-last md:order-first" style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
            <WhyDifferentBlock />
          </div>

          {/* Title + desc + brainwaves — right on desktop, top on mobile */}
          <div className="order-first md:order-last">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <SectionTitle zh="什麼是靈性頌缽音流" en="Singing Bowl Sound Flow" mb={0} />
            </div>
            <RightColumn />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyDifferentBlock() {
  return (
    <div
      className="animate-breathe-scale"
      style={{ width: '100%', maxWidth: 360, background: 'linear-gradient(135deg, #5DA5B5 0%, #65BAAF 100%)', borderRadius: 4, padding: '32px 36px', position: 'relative', overflow: 'hidden' }}
    >
      <div aria-hidden style={{ position: 'absolute', right: -40, top: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
      <p style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(13px, 1.2vw, 15px)', letterSpacing: '0.2em', color: 'rgba(255,255,255,1)', marginBottom: 10 }}>· 為什麼森波的頌缽不一樣 ·</p>
      <h3 className="tr-h1" style={{ fontSize: 20, color: '#fff', marginBottom: 16 }}>聲音 × 薩滿 × 通靈解析</h3>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,1)', lineHeight: 1.85 }}>
        大多數的頌缽課程停在聲音的放鬆層面。森波的頌缽音流，同時結合薩滿意識旅程與通靈解析——禿禿在缽聲之中接收個案的能量訊息，引導每次體驗不只是「被聲音泡著」，而是有意識地鬆動特定能量阻塞，並帶回可落地的洞見。
      </p>
    </div>
  )
}

function RightColumn() {
  return (
    <div>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#5C5955', marginBottom: 32 }}>
        頌缽發出的泛音頻率，能同步引導腦波從 β 波（清醒緊張）過渡到 α 波（放鬆專注）乃至 θ 波（深層冥想），讓神經系統進入自然的修復狀態。這不是催眠，而是聲音的物理共振在身體層面發生作用。
      </p>
      <p style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(13px, 1.2vw, 15px)', letterSpacing: '0.18em', color: '#5C5955', marginBottom: 20, textAlign: 'center' }}>· 腦波調頻原理 ·</p>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="bw-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      {brainwaves.map(bw => (
        <div key={bw.label} style={{ background: bw.bg, borderRadius: 2, padding: '20px 24px', marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
          <p style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(13px, 1.2vw, 15px)', letterSpacing: '0.15em', color: '#65BAAF', marginBottom: 6 }}>{bw.label}</p>
          <p className="tr-h1" style={{ fontSize: 15, color: '#2E5A6A', marginBottom: 6 }}>{bw.hz}</p>
          <svg viewBox="0 0 260 36" width="100%" height="32" style={{ display: 'block', margin: '8px 0 10px' }} preserveAspectRatio="none">
            <polyline filter="url(#bw-rough)" points={bw.points} fill="none" stroke={bw.color} strokeWidth={bw.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: '#5C5955', lineHeight: 1.7 }}>{bw.desc}</p>
        </div>
      ))}
    </div>
  )
}
