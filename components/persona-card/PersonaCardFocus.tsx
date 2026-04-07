'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageSection from '@/components/ui/PageSection'
import PageTitle from '@/components/ui/PageTitle'

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
    secondaryRgb: '123,107,158',
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
    secondaryRgb: '74,107,138',
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
    secondaryRgb: '123,107,158',
    cardImage: '/index/卡牌-3.png',
    imageFilter: 'sepia(0.7) saturate(1.9) brightness(0.95) hue-rotate(5deg)',
  },
]

const CARD_W   = 300
const CARD_H   = 580
const IMG_W    = 210
const IMG_H    = 336
const EXPAND_W = 500
const EXPAND_H = 680

export default function PersonaCardFocus() {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActive(prev => (prev === id ? null : id))
  }

  const activePersona = personas.find(p => p.id === active)

  const primaryRgb   = active !== null ? (activePersona?.accentRgb    ?? '192,184,174') : '192,184,174'
  const secondaryRgb = active !== null ? (activePersona?.secondaryRgb ?? '192,184,174') : '192,184,174'

  return (
    <PageSection
      ghost="WHO YOU ARE"
      style={{
        background: active !== null
          ? `radial-gradient(ellipse at 50% 55%, rgba(${activePersona?.accentRgb},0.12) 0%, rgba(${activePersona?.accentRgb},0.04) 60%, transparent 100%)`
          : 'var(--base)',
        transition: 'background 0.6s ease',
        overflow: 'visible',
        zIndex: 1,
      }}
    >

      {/* ── Top waves: protrude upward into hero section ── */}
      <div style={{ position: 'absolute', top: -88, left: 0, right: 0, zIndex: 2, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block' }}>
          <path
            d="M0,90 L0,48 Q180,18 360,42 Q540,64 720,36 Q900,10 1080,38 Q1260,62 1440,32 L1440,90 Z"
            style={{ fill: `rgba(${secondaryRgb},0.14)`, transition: 'fill 0.6s ease' }}
          />
          <path
            d="M0,90 L0,62 Q180,32 360,58 Q540,80 720,50 Q900,22 1080,52 Q1260,76 1440,46 L1440,90 Z"
            style={{ fill: `rgba(${primaryRgb},0.22)`, transition: 'fill 0.6s ease' }}
          />
          <path d="M0,72 Q120,38 300,75 Q480,88 640,44 Q800,12 960,56 Q1100,84 1280,38 Q1380,18 1440,52" stroke="#b5ac9e" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,48 Q220,82 420,32 Q580,8 740,70 Q920,88 1060,34 Q1200,6 1380,58 L1440,62" stroke="#c8c0b2" strokeWidth="0.6" fill="none" opacity="0.4" />
        </svg>
      </div>


      {/* ── Bottom waves: protrude downward into mountain section ── */}
      <div style={{ position: 'absolute', bottom: -88, left: 0, right: 0, zIndex: 2, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block', transform: 'scaleY(-1)' }}>
          <path
            d="M0,90 L0,48 Q180,18 360,42 Q540,64 720,36 Q900,10 1080,38 Q1260,62 1440,32 L1440,90 Z"
            style={{ fill: `rgba(${secondaryRgb},0.14)`, transition: 'fill 0.6s ease' }}
          />
          <path
            d="M0,90 L0,62 Q180,32 360,58 Q540,80 720,50 Q900,22 1080,52 Q1260,76 1440,46 L1440,90 Z"
            style={{ fill: `rgba(${primaryRgb},0.22)`, transition: 'fill 0.6s ease' }}
          />
        </svg>
      </div>


      <div className="wrap">
        <PageTitle sub="選一張牌" title="找到屬於你的路徑" />

        <div
          style={{
            display: 'flex',
            gap: 0,
            justifyContent: 'flex-start',
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
                  overflow: 'hidden',
                  opacity: isOther ? 0 : 1,
                  cursor: 'pointer',
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
                    background: isActive ? 'transparent' : '#FFFFFF',
                    boxShadow: isActive ? 'none' : '0 2px 14px rgba(42,42,42,0.07)',
                    transition: 'background 0.6s ease, box-shadow 0.5s ease',
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: 20,
                    }}
                  >
                    <div style={{ position: 'relative', width: IMG_W, height: IMG_H, flexShrink: 0 }}>
                      <Image
                        src={p.cardImage}
                        alt=""
                        fill
                        style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.8 }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '18px 24px 28px',
                    }}
                  >
                    <h3
                      className="tr-h1"
                      style={{ fontSize: 24, lineHeight: 1.5, color: 'var(--ink)', marginBottom: isActive ? 0 : 10, whiteSpace: 'pre-line', transition: 'margin 0.4s ease' }}
                    >
                      {p.cardTitle}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        color: 'var(--muted)',
                        lineHeight: 1.85,
                        whiteSpace: 'pre-line',
                        opacity: isActive ? 0 : 1,
                        maxHeight: isActive ? 0 : 80,
                        overflow: 'hidden',
                        transition: 'opacity 0.35s ease, max-height 0.45s ease',
                      }}
                    >
                      {p.cardDesc}
                    </p>
                  </div>
                </div>
              </div>,

              /* ── EXPAND PANEL ── */
              <div
                key={`expand-${p.id}`}
                style={{
                  width: isActive ? EXPAND_W : 0,
                  height: EXPAND_H,
                  flexShrink: 0,
                  overflow: 'hidden',
                  opacity: isActive ? 1 : 0,
                  borderRadius: 20,
                  transition: [
                    'width 0.55s cubic-bezier(0.4,0,0.2,1) 0.12s',
                    'opacity 0.4s ease 0.12s',
                  ].join(', '),
                  background: '#FFFFFF',
                  boxShadow: isActive
                    ? `0 16px 52px rgba(${p.accentRgb},0.18), 0 0 0 1px rgba(${p.accentRgb},0.1)`
                    : 'none',
                }}
              >
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
                  <div style={{ width: 80, height: 80, position: 'relative', marginBottom: 20, flexShrink: 0 }}>
                    <Image
                      src={p.cardImage}
                      alt=""
                      fill
                      style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.82 }}
                    />
                  </div>

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
                  <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--ink)', opacity: 0.7, marginBottom: 0, flexShrink: 0 }}>
                    {p.expandBody}
                  </p>

                  <div style={{ flex: 1, minHeight: 12 }} />

                  <div style={{ width: '100%', height: 1, background: `rgba(${p.accentRgb},0.15)`, marginBottom: 16, flexShrink: 0 }} />
                  <p style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 500, fontSize: 17, letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 12, flexShrink: 0 }}>
                    適合的服務
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center', marginBottom: 22, flexShrink: 0 }}>
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
    </PageSection>
  )
}
