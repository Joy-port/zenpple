'use client'

import { useState } from 'react'
import Link from 'next/link'

const personas = [
  {
    id: 1,
    cardTitle: '喜歡感受\n也懂得休息的人',
    cardDesc: '偶爾覺得快被什麼淹沒，\n只是還沒找到那個出口',
    expandTitle: '潮間帶的人',
    expandEn: 'The Shoreline Wanderer',
    expandBody: '懂得感受生活的細膩，也知道自己需要補充能量。不一定在找「答案」，只是想在某個安靜的頻率裡，讓自己好好浮一次。',
    services: ['脈輪牌卡 + 頌缽', '團體閨蜜音流', '靈擺快速問事', '企業包場頌缽'],
    ctaLabel: '找到我的第一步 ↗',
    ctaHref: '/qi-sb',
    accentColor: '#4A6B8A',
    accentRgb: '74,107,138',
    bgGradient: 'linear-gradient(148deg, rgba(74,107,138,0.12) 0%, rgba(94,142,138,0.08) 60%, rgba(242,239,234,0.95) 100%)',
    svg: (
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <g stroke="rgba(74,107,138,0.18)" strokeWidth="18" fill="none" strokeLinecap="round">
          <path d="M30 80 Q80 40 150 70 Q220 100 270 60" />
          <path d="M20 160 Q90 110 160 150 Q230 185 280 140" />
          <path d="M10 250 Q85 195 160 235 Q235 270 285 225" />
          <path d="M25 340 Q100 290 170 325 Q240 360 288 315" />
        </g>
        <g stroke="rgba(74,107,138,0.08)" strokeWidth="8" fill="none" strokeLinecap="round">
          <path d="M50 120 Q120 80 190 110 Q250 135 280 105" />
          <path d="M40 205 Q115 165 185 195 Q248 220 280 190" />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    cardTitle: '正在穿越某段\n人生霧區的人',
    cardDesc: '有直覺，但看不清前方，\n說不出來，卻揮之不去',
    expandTitle: '林間迷霧者',
    expandEn: 'The Mist Walker',
    expandBody: '有自己的感知與判斷，但某個地方就是卡著。情感、事業、身體，或說不清楚的東西。需要有人幫你看見自己。',
    services: ['能量占卜旗艦', '全脈輪能量分析', '七脈輪能量調和', '薩滿靈魂覺醒', '易經理路定調'],
    ctaLabel: '說說你的困境 ↗',
    ctaHref: '/hl',
    accentColor: '#7B6B9E',
    accentRgb: '123,107,158',
    bgGradient: 'linear-gradient(148deg, rgba(123,107,158,0.12) 0%, rgba(196,123,123,0.07) 60%, rgba(242,239,234,0.95) 100%)',
    svg: (
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <g stroke="rgba(123,107,158,0.18)" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M150 30 L80 180 L220 180" />
          <path d="M90 120 L30 280 L155 280" />
          <path d="M210 80 L155 230 L270 230" />
        </g>
        <g stroke="rgba(123,107,158,0.08)" strokeWidth="6" fill="none" strokeLinecap="round">
          <line x1="80" y1="200" x2="80" y2="360" />
          <line x1="150" y1="195" x2="150" y2="370" />
          <line x1="220" y1="205" x2="220" y2="355" />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    cardTitle: '準備把感知\n化成力量的人',
    cardDesc: '想傳遞，想建立，\n熱情有了，還缺一個結構',
    expandTitle: '播種者',
    expandEn: 'The Seed Keeper',
    expandBody: '已經在靈性路上走了一段，開始想讓這份感知長成別人也能依靠的東西。熱情夠了，需要的是方向與結構。',
    services: ['頌缽技法培訓', '深度能量定頻師認證', '靈性品牌策略定錨', '高階品牌創業陪跑'],
    ctaLabel: '了解我的路徑 ↗',
    ctaHref: '/ts-pe',
    accentColor: '#B09070',
    accentRgb: '176,144,112',
    bgGradient: 'linear-gradient(148deg, rgba(176,144,112,0.12) 0%, rgba(94,142,138,0.07) 60%, rgba(242,239,234,0.95) 100%)',
    svg: (
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <g stroke="rgba(176,144,112,0.18)" strokeWidth="14" fill="none" strokeLinecap="round">
          <line x1="150" y1="370" x2="150" y2="140" />
          <path d="M150 200 Q210 160 230 100 Q200 90 170 130 Q155 155 150 185" />
          <path d="M150 240 Q90 195 70 130 Q100 120 135 160 Q148 180 150 220" />
          <path d="M150 300 Q195 265 215 210 Q190 205 165 240 Q152 265 150 290" />
        </g>
        <g stroke="rgba(176,144,112,0.07)" strokeWidth="5" fill="none" strokeLinecap="round">
          <path d="M120 380 Q150 340 180 380" />
          <path d="M100 395 Q150 360 200 395" />
        </g>
      </svg>
    ),
  },
]

export default function PersonaCards() {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActive(prev => (prev === id ? null : id))
  }

  return (
    <section
      style={{
        padding: 'clamp(80px,10vw,130px) var(--gutter)',
        background: 'var(--base)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: 14,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            你是哪一種人
          </p>
          <h2
            style={{
              fontFamily: 'var(--f-elegant)',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 300,
              letterSpacing: '0.04em',
              color: 'var(--ink)',
            }}
          >
            找到屬於你的路徑
          </h2>
        </div>

        {/* Cards row */}
        <div
          style={{
            display: 'flex',
            gap: 18,
            justifyContent: 'center',
            maxWidth: 960,
            margin: '0 auto 32px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {personas.map(p => (
            <div
              key={p.id}
              onClick={() => toggle(p.id)}
              style={{
                flex: 1,
                maxWidth: 300,
                minHeight: 340,
                border: `1px solid ${active === p.id ? p.accentColor : 'rgba(42,42,42,0.08)'}`,
                borderRadius: 16,
                cursor: 'pointer',
                transition: 'border-color 0.35s, transform 0.35s, box-shadow 0.35s',
                position: 'relative',
                overflow: 'hidden',
                background: '#F2EFEA',
                transform: active === p.id ? 'translateY(-5px)' : undefined,
                boxShadow: active === p.id
                  ? `0 20px 50px rgba(${p.accentRgb},0.12)`
                  : undefined,
              }}
            >
              {/* Calligraphy SVG background */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>{p.svg}</div>

              {/* Text content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  padding: '0 26px 30px',
                  zIndex: 2,
                  background: 'linear-gradient(to top, rgba(242,239,234,0.97) 55%, transparent 100%)',
                }}
              >
                <h3
                  className="tr-h1"
                  style={{
                    fontSize: 19,
                    lineHeight: 1.45,
                    color: 'var(--ink)',
                    marginBottom: 8,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {p.cardTitle}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--muted)',
                    lineHeight: 1.85,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {p.cardDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expand panels */}
        {personas.map(p => (
          <div
            key={p.id}
            style={{
              maxWidth: 960,
              margin: '0 auto',
              borderRadius: 16,
              overflow: 'hidden',
              maxHeight: active === p.id ? 400 : 0,
              transition: 'max-height 0.5s ease, padding 0.5s ease',
              padding: active === p.id ? '44px 48px' : '0 48px',
              border: `1px solid ${active === p.id ? `rgba(${p.accentRgb},0.15)` : 'transparent'}`,
              background: p.bgGradient,
              position: 'relative',
              zIndex: 1,
              marginBottom: active === p.id ? 16 : 0,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 48,
                alignItems: 'start',
              }}
            >
              <div>
                <h3
                  className="tr-h1"
                  style={{
                    fontSize: 26,
                    marginBottom: 4,
                    color: 'var(--ink)',
                  }}
                >
                  {p.expandTitle}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: 16,
                  }}
                >
                  {p.expandEn}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--ink)', opacity: 0.7 }}>
                  {p.expandBody}
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: 14,
                  }}
                >
                  適合的服務
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {p.services.map(s => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'var(--f-zh-sans)',
                        fontSize: 12,
                        padding: '6px 14px',
                        borderRadius: 999,
                        border: `1px solid rgba(${p.accentRgb},0.3)`,
                        color: p.accentColor,
                        background: `rgba(${p.accentRgb},0.06)`,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href={p.ctaHref}
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 22px',
                    borderRadius: 999,
                    border: `1px solid rgba(${p.accentRgb},0.4)`,
                    color: p.accentColor,
                    transition: 'background 0.2s',
                  }}
                >
                  {p.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
