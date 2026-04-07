'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    cardImage: '/index/卡牌-1.png',
    imageFilter: 'sepia(1) hue-rotate(170deg) saturate(0.55) brightness(0.9)',
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
    cardImage: '/index/卡牌-2.png',
    imageFilter: 'sepia(1) hue-rotate(230deg) saturate(0.6) brightness(0.95)',
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
    cardImage: '/index/卡牌-3.png',
    imageFilter: 'sepia(0.65) saturate(0.85) brightness(1.02)',
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
        paddingTop: 'clamp(100px, 13vw, 180px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        background: 'var(--mist)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Wave — transitions from hero base colour into mist bg */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, lineHeight: 0, pointerEvents: 'none' }}>
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 72, display: 'block' }}
        >
          <path
            d="M0,0 L1440,0 L1440,36 Q1260,70 1080,44 Q900,18 720,52 Q540,72 360,44 Q180,18 0,54 Z"
            fill="var(--base)"
          />
        </svg>
      </div>

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
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            你是哪一種人
          </p>
          <h2
            style={{
              fontFamily: 'var(--f-zh-sans)',
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 34px)',
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
              {/* Card photo background */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                  src={p.cardImage}
                  alt=""
                  fill
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center 15%',
                    opacity: 0.5,
                    filter: p.imageFilter,
                    mixBlendMode: 'multiply',
                  }}
                />
              </div>

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
                    fontSize: 17,
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
                    fontSize: 14,
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
                    fontSize: 24,
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
