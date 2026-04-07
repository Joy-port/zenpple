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

export default function PersonaCard2() {
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
        background: 'var(--base)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Wave transition */}
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
            你是哪一種人
          </p>
          <h2 style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '0.04em', color: 'var(--ink)' }}>
            找到屬於你的路徑
          </h2>
          {active !== null && (
            <p
              onClick={() => setActive(null)}
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: 14,
                cursor: 'pointer',
                opacity: 0.6,
              }}
            >
              ← 重新選擇
            </p>
          )}
        </div>

        {/* Cards — tarot flip layout */}
        <div
          style={{
            display: 'flex',
            gap: 18,
            justifyContent: 'center',
            maxWidth: 960,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            // perspective on container for shared 3D space
            perspective: '1400px',
            perspectiveOrigin: '50% 40%',
          }}
        >
          {personas.map(p => {
            const isActive = active === p.id
            const isOther = active !== null && !isActive

            return (
              <div
                key={p.id}
                onClick={() => toggle(p.id)}
                style={{
                  flex: 1,
                  maxWidth: 300,
                  height: 400,
                  position: 'relative',
                  cursor: 'pointer',
                  // outer wrapper: scale + dim inactive cards
                  transform: isActive
                    ? 'scale(1.14) translateY(-8px)'
                    : isOther
                    ? 'scale(0.90) translateY(10px)'
                    : 'scale(1) translateY(0)',
                  opacity: isOther ? 0.28 : 1,
                  filter: isOther ? 'blur(1.5px)' : 'none',
                  transition: 'transform 0.55s cubic-bezier(0.34,1.4,0.64,1), opacity 0.4s ease, filter 0.4s ease',
                  zIndex: isActive ? 10 : 1,
                }}
              >
                {/* 3D flip inner */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: isActive ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* ── FRONT FACE ── */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: 16,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#FFFFFF',
                      boxShadow: isActive
                        ? `0 24px 56px rgba(${p.accentRgb},0.24), 0 4px 16px rgba(${p.accentRgb},0.1)`
                        : '0 2px 14px rgba(42,42,42,0.07)',
                    }}
                  >
                    {/* Image top 65% */}
                    <div style={{ flex: '0 0 65%', position: 'relative' }}>
                      <Image
                        src={p.cardImage}
                        alt=""
                        fill
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center center',
                          filter: p.imageFilter,
                          mixBlendMode: 'multiply',
                          opacity: 0.75,
                          padding: '18px 24px 0',
                        }}
                      />
                    </div>
                    {/* Text bottom */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '16px 24px 28px' }}>
                      <h3 className="tr-h1" style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--ink)', marginBottom: 8, whiteSpace: 'pre-line' }}>
                        {p.cardTitle}
                      </h3>
                      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                        {p.cardDesc}
                      </p>
                    </div>
                  </div>

                  {/* ── BACK FACE ── */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      borderRadius: 16,
                      overflow: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '28px 24px 24px',
                      background: 'rgba(250,248,246,0.97)',
                      boxShadow: `0 24px 56px rgba(${p.accentRgb},0.26), 0 0 0 1px rgba(${p.accentRgb},0.14)`,
                    }}
                  >
                    {/* Top accent strip */}
                    <div style={{ height: 3, borderRadius: 2, background: `rgba(${p.accentRgb},0.35)`, marginBottom: 20, flexShrink: 0 }} />

                    {/* Persona title block */}
                    <h3 className="tr-h1" style={{ fontSize: 22, marginBottom: 3, color: 'var(--ink)', lineHeight: 1.3 }}>
                      {p.expandTitle}
                    </h3>
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>
                      {p.expandEn}
                    </p>

                    {/* Body copy */}
                    <p style={{ fontSize: 13, lineHeight: 1.9, color: 'var(--ink)', opacity: 0.72, marginBottom: 18 }}>
                      {p.expandBody}
                    </p>

                    {/* Divider */}
                    <div style={{ height: 1, background: `rgba(${p.accentRgb},0.15)`, marginBottom: 14, flexShrink: 0 }} />

                    {/* Services label */}
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                      適合的服務
                    </p>

                    {/* Service tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                      {p.services.map(s => (
                        <span
                          key={s}
                          style={{
                            fontFamily: 'var(--f-zh-sans)',
                            fontSize: 11,
                            padding: '5px 12px',
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

                    {/* CTA — stopPropagation so link click doesn't flip the card back */}
                    <Link
                      href={p.ctaHref}
                      onClick={e => e.stopPropagation()}
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: 10,
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
                        alignSelf: 'flex-start',
                      }}
                    >
                      {p.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Hint text when nothing selected */}
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'var(--f-mono)',
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            opacity: active !== null ? 0 : 0.5,
            transition: 'opacity 0.4s',
            marginTop: 32,
            position: 'relative',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          選一張牌
        </p>
      </div>
    </section>
  )
}
