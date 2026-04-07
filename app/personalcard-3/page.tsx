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
    cardImage: '/index/卡牌-1.png',
    imageFilter: 'sepia(1) hue-rotate(170deg) saturate(2) brightness(0.82)',
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
    cardImage: '/index/卡牌-2.png',
    imageFilter: 'sepia(1) hue-rotate(240deg) saturate(2) brightness(0.85)',
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
    cardImage: '/index/卡牌-3.png',
    imageFilter: 'sepia(0.7) saturate(1.9) brightness(0.95) hue-rotate(5deg)',
  },
]

const CARD_W = 300
const EXPAND_W = 500
const CARD_H = 680

export default function PersonaCard3() {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActive(prev => (prev === id ? null : id))
  }

  // Interleave [card, expand, card, expand, card, expand] in one flex row.
  // gap: 0 — spacing handled per-item via marginRight so collapsed items don't leave ghost gaps.
  return (
    <section
      style={{
        paddingTop: 'clamp(100px, 13vw, 180px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        background: active !== null
          ? `rgba(${personas.find(p => p.id === active)?.accentRgb},0.12)`
          : 'var(--base)',
        transition: 'background 0.5s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Wave */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 96, display: 'block' }}>
          <path d="M0,0 L1440,0 L1440,64 C1380,82 1260,54 1100,72 C940,88 800,52 660,70 C520,86 380,58 220,76 C110,88 40,66 0,72 Z" fill="rgba(176,144,112,0.14)" />
          <path d="M0,0 L1440,0 L1440,50 C1320,70 1180,40 1020,60 C860,78 700,42 560,58 C420,72 280,48 140,64 C60,74 20,56 0,60 Z" fill="rgba(212,168,154,0.10)" />
          <path d="M0,0 L1440,0 L1440,36 C1340,58 1180,28 1040,48 C900,66 740,32 600,50 C460,66 300,38 160,56 C70,68 20,46 0,50 Z" fill="var(--base)" />
        </svg>
      </div>

      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 300, fontSize: 'clamp(16px, 2vw, 26px)', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: 12 }}>
            選一張牌
          </p>
          <h2 style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '0.04em', color: 'var(--ink)' }}>
            找到屬於你的路徑
          </h2>
        </div>

        {/* Row: [card₁][expand₁][card₂][expand₂][card₃][expand₃]
            Active card stays left, expand slides in to its right.
            Inactive cards collapse width→0 so no ghost gaps. */}
        <div
          style={{
            display: 'flex',
            gap: 0,
            justifyContent: 'center',
            alignItems: 'flex-start',
            maxWidth: 960,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {personas.flatMap((p, i) => {
            const isActive = active === p.id
            const isOther  = active !== null && !isActive
            const isLast   = i === personas.length - 1

            return [
              /* ── CARD ── */
              <div
                key={p.id}
                onClick={() => toggle(p.id)}
                style={{
                  width: isOther ? 0 : CARD_W,
                  height: CARD_H,
                  flexShrink: 0,
                  overflow: 'hidden',          // safe on the card (no 3D children)
                  opacity: isOther ? 0 : 1,
                  cursor: 'pointer',
                  // Active: lift + accent shadow. Neutral: regular shadow.
                  // Transform lives on the inner div so overflow:hidden doesn't clip shadows.
                  marginRight: isOther ? 0 : (isActive ? 18 : (isLast ? 0 : 18)),
                  transition: [
                    'width 0.5s cubic-bezier(0.4,0,0.2,1)',
                    'opacity 0.35s ease',
                    'margin 0.5s cubic-bezier(0.4,0,0.2,1)',
                  ].join(', '),
                }}
              >
                <div
                  style={{
                    width: CARD_W,
                    height: '100%',
                    borderRadius: 16,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#FFFFFF',
                    boxShadow: '0 2px 14px rgba(42,42,42,0.07)',
                    transition: 'box-shadow 0.25s',
                  }}
                >
                  <div style={{ flex: '0 0 65%', position: 'relative' }}>
                    <Image
                      src={p.cardImage}
                      alt=""
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'center', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.75, padding: '18px 24px 0' }}
                    />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '16px 24px 28px' }}>
                    <h3 className="tr-h1" style={{ fontSize: 24, lineHeight: 1.5, color: 'var(--ink)', marginBottom: 10, whiteSpace: 'pre-line' }}>
                      {p.cardTitle}
                    </h3>
                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                      {p.cardDesc}
                    </p>
                  </div>
                </div>
              </div>,

              /* ── EXPAND PANEL (right of its card) ── */
              <div
                key={`expand-${p.id}`}
                style={{
                  width: isActive ? EXPAND_W : 0,
                  height: CARD_H,
                  flexShrink: 0,
                  overflow: 'hidden',
                  opacity: isActive ? 1 : 0,
                  borderRadius: 20,
                  transition: [
                    'width 0.55s cubic-bezier(0.4,0,0.2,1)',
                    'opacity 0.4s ease',
                  ].join(', '),
                  background: '#FFFFFF',
                  boxShadow: isActive
                    ? `0 16px 52px rgba(${p.accentRgb},0.2), 0 0 0 1px rgba(${p.accentRgb},0.12)`
                    : 'none',
                }}
              >
                {/* Fixed-width inner — top block anchored, service block floats to bottom */}
                <div
                  style={{
                    width: EXPAND_W,
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '36px 40px 32px',
                  }}
                >
                  {/* ── TOP IDENTITY BLOCK — same Y position across all 3 cards ── */}
                  {/* Card image icon */}
                  <div style={{ width: 80, height: 80, position: 'relative', marginBottom: 20, flexShrink: 0 }}>
                    <Image
                      src={p.cardImage}
                      alt=""
                      fill
                      style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.82 }}
                    />
                  </div>

                  {/* Dot accent */}
                  <div style={{ display: 'flex', gap: 5, marginBottom: 20, flexShrink: 0 }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{ width: i === 1 ? 20 : 6, height: 4, borderRadius: 2, background: `rgba(${p.accentRgb},${i === 1 ? 0.5 : 0.2})` }} />
                    ))}
                  </div>

                  <h3 className="tr-h1" style={{ fontSize: 24, marginBottom: 4, color: 'var(--ink)', flexShrink: 0 }}>
                    {p.expandTitle}
                  </h3>
                  <p style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, flexShrink: 0 }}>
                    {p.expandEn}
                  </p>

                  {/* Body — directly below title block, same start position across cards */}
                  <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--ink)', opacity: 0.7, marginBottom: 0, flexShrink: 0 }}>
                    {p.expandBody}
                  </p>

                  {/* Flex spacer — absorbs height difference between cards so services stay at bottom */}
                  <div style={{ flex: 1 }} />

                  {/* ── BOTTOM SERVICE BLOCK — floats to bottom, always near CTA ── */}
                  <div style={{ width: '100%', height: 1, background: `rgba(${p.accentRgb},0.15)`, marginBottom: 16, flexShrink: 0 }} />

                  <p style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 500, fontSize: 17, letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 12, flexShrink: 0 }}>
                    適合的服務
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center', marginBottom: 24, flexShrink: 0 }}>
                    {p.services.map(s => (
                      <span key={s} style={{ fontFamily: 'var(--f-zh-sans)', fontSize: 15, padding: '5px 13px', borderRadius: 999, border: `1px solid rgba(${p.accentRgb},0.3)`, color: p.accentColor, background: `rgba(${p.accentRgb},0.06)`, letterSpacing: '0.02em' }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={p.ctaHref}
                    style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 500, fontSize: 17, letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 28px', borderRadius: 999, border: `1px solid rgba(${p.accentRgb},0.45)`, color: p.accentColor, flexShrink: 0 }}
                  >
                    {p.ctaLabel}
                  </Link>
                </div>
              </div>,
            ]
          })}
        </div>

      </div>
    </section>
  )
}
