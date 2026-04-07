'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageSection from '@/components/ui/PageSection'
import PageTitle from '@/components/ui/PageTitle'
import { useIsMobile } from '@/hooks/useIsMobile'

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

type Persona = typeof personas[number]

/* ── Mobile card list + centered modal ── */
function MobileCards({
  personas,
  active,
  setActive,
  ExpandContent,
}: {
  personas: Persona[]
  active: number | null
  setActive: React.Dispatch<React.SetStateAction<number | null>>
  ExpandContent: React.ComponentType<{ p: Persona }>
}) {
  const activePersona = personas.find(p => p.id === active) ?? null
  const activeIdx = personas.findIndex(p => p.id === active)

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [active])

  const close = () => setActive(null)
  const prev = () => {
    if (activeIdx > 0) setActive(personas[activeIdx - 1].id)
  }
  const next = () => {
    if (activeIdx < personas.length - 1) setActive(personas[activeIdx + 1].id)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1 }}>
        {personas.map(p => (
          <div
            key={p.id}
            onClick={() => setActive(prev => (prev === p.id ? null : p.id))}
            style={{
              borderRadius: 16,
              background: '#FFFFFF',
              boxShadow: active === p.id
                ? `0 4px 24px rgba(${p.accentRgb},0.22), 0 0 0 1.5px rgba(${p.accentRgb},0.2)`
                : '0 2px 14px rgba(42,42,42,0.07)',
              display: 'flex',
              alignItems: 'stretch',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            {/* Accent bar */}
            <div style={{ width: 4, flexShrink: 0, background: p.accentColor, opacity: 0.7 }} />

            {/* Text content */}
            <div style={{ flex: 1, minWidth: 0, padding: '1.25rem 1rem 1.25rem 1rem' }}>
              <h3
                className="tr-h1"
                style={{
                  fontSize: 'clamp(16px, 4vw, 22px)',
                  lineHeight: 1.55,
                  color: 'var(--ink)',
                  marginBottom: 8,
                  whiteSpace: 'pre-line',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                {p.cardTitle}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(13px, 3vw, 15px)',
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                {p.cardDesc}
              </p>
            </div>

            {/* Card image on right */}
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', paddingRight: '0.75rem' }}>
              <div style={{ position: 'relative', width: 56, height: 80 }}>
                <Image
                  src={p.cardImage} alt="" fill
                  style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.75 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered modal */}
      {active !== null && activePersona && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
          onClick={close}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 22,
              width: '100%',
              maxWidth: 420,
              maxHeight: '85vh',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '1.25rem 1.75rem 2rem',
              boxShadow: `0 24px 64px rgba(${activePersona.accentRgb},0.25)`,
              WebkitOverflowScrolling: 'touch',
            } as React.CSSProperties}
            onClick={e => e.stopPropagation()}
          >
            {/* Header: prev / dots / next / X */}
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexShrink: 0 }}>
              <button
                onClick={prev}
                disabled={activeIdx <= 0}
                style={{ background: 'none', border: 'none', cursor: activeIdx > 0 ? 'pointer' : 'default', opacity: activeIdx > 0 ? 0.7 : 0.2, fontSize: 20, color: 'var(--ink)', padding: '4px 8px', lineHeight: 1 }}
                aria-label="上一個"
              >‹</button>

              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {personas.map(p => (
                  <div
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    style={{
                      width: active === p.id ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: active === p.id ? activePersona.accentColor : '#d4cfc8',
                      transition: 'width 0.3s ease, background 0.3s ease',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={activeIdx >= personas.length - 1}
                style={{ background: 'none', border: 'none', cursor: activeIdx < personas.length - 1 ? 'pointer' : 'default', opacity: activeIdx < personas.length - 1 ? 0.7 : 0.2, fontSize: 20, color: 'var(--ink)', padding: '4px 8px', lineHeight: 1 }}
                aria-label="下一個"
              >›</button>

              <button
                onClick={close}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: 'var(--ink)', opacity: 0.45, padding: '4px 8px', lineHeight: 1, marginLeft: 4 }}
                aria-label="關閉"
              >✕</button>
            </div>

            <ExpandContent p={activePersona} />
            <div style={{ height: 8 }} />
          </div>
        </div>
      )}
    </>
  )
}

const CARD_W   = 300
const CARD_H   = 480
const IMG_W    = 210
const IMG_H    = 270
const EXPAND_W = 460
const EXPAND_H = 520

export default function PersonaCardFocus() {
  const [active, setActive] = useState<number | null>(null)
  const isMobile = useIsMobile()

  const toggle = (id: number) => setActive(prev => (prev === id ? null : id))

  const activePersona = personas.find(p => p.id === active)
  const primaryRgb   = activePersona?.accentRgb    ?? '192,184,174'
  const secondaryRgb = activePersona?.secondaryRgb ?? '192,184,174'

  const sectionStyle = {
    background: active !== null
      ? `radial-gradient(ellipse at 50% 55%, rgba(${activePersona?.accentRgb},0.12) 0%, rgba(${activePersona?.accentRgb},0.04) 60%, transparent 100%)`
      : 'var(--base)',
    transition: 'background 0.6s ease',
    overflow: 'visible' as const,
    zIndex: 1,
    minHeight: '100svh',
    paddingTop: 'clamp(100px, 12vw, 140px)',
    paddingBottom: 'clamp(40px, 5vw, 64px)',
  }

  /* ── Shared expand content (used in both desktop panel & mobile modal) ── */
  const ExpandContent = ({ p }: { p: typeof personas[0] }) => (
    <>
      <div style={{ width: 80, height: 80, position: 'relative', marginBottom: 20, flexShrink: 0 }}>
        <Image src={p.cardImage} alt="" fill
          style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.82 }}
        />
      </div>

      <div style={{ display: 'flex', gap: 5, marginBottom: 20, flexShrink: 0 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: i === 1 ? 20 : 6, height: 4, borderRadius: 2, background: `rgba(${p.accentRgb},${i === 1 ? 0.5 : 0.2})` }} />
        ))}
      </div>

      <h3 className="tr-h1" style={{ fontSize: 'clamp(18px, 3vw, 24px)', marginBottom: 4, color: 'var(--ink)', flexShrink: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
        {p.expandTitle}
      </h3>
      <p style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, flexShrink: 0 }}>
        {p.expandEn}
      </p>
      <p style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', lineHeight: 1.9, color: 'var(--ink)', opacity: 0.7, marginBottom: 0, flexShrink: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
        {p.expandBody}
      </p>

      <div style={{ flex: 1, minHeight: 12 }} />

      <div style={{ width: '100%', height: 1, background: `rgba(${p.accentRgb},0.15)`, marginBottom: 16, flexShrink: 0 }} />
      <p style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 500, fontSize: 'clamp(14px, 1.5vw, 17px)', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 12, flexShrink: 0 }}>
        適合的服務
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center', marginBottom: 22, flexShrink: 0 }}>
        {p.services.map(s => (
          <span key={s} style={{ fontFamily: 'var(--f-zh-sans)', fontSize: 'clamp(13px, 1.2vw, 15px)', padding: '5px 13px', borderRadius: 999, border: `1px solid rgba(${p.accentRgb},0.3)`, color: p.accentColor, background: `rgba(${p.accentRgb},0.06)`, letterSpacing: '0.02em' }}>
            {s}
          </span>
        ))}
      </div>
      <Link
        href={p.ctaHref}
        style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 500, fontSize: 'clamp(14px, 1.5vw, 17px)', letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 28px', borderRadius: 999, border: `1px solid rgba(${p.accentRgb},0.45)`, color: p.accentColor, flexShrink: 0 }}
      >
        {p.ctaLabel}
      </Link>
    </>
  )

  return (
    <PageSection id="who-you-are" ghost="WHO YOU ARE" style={sectionStyle}>

      {/* ── Top waves ── */}
      <div style={{ position: 'absolute', top: -88, left: 0, right: 0, zIndex: 2, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block' }}>
          <defs>
            <linearGradient id="pcf-top-sec" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor={`rgb(${secondaryRgb})`} stopOpacity={0.14} />
              <stop offset="100%" stopColor={`rgb(${secondaryRgb})`} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="pcf-top-pri" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor={`rgb(${primaryRgb})`} stopOpacity={0.22} />
              <stop offset="100%" stopColor={`rgb(${primaryRgb})`} stopOpacity={0} />
            </linearGradient>
          </defs>
          <path d="M0,90 L0,48 Q180,18 360,42 Q540,64 720,36 Q900,10 1080,38 Q1260,62 1440,32 L1440,90 Z" fill="url(#pcf-top-sec)" />
          <path d="M0,90 L0,62 Q180,32 360,58 Q540,80 720,50 Q900,22 1080,52 Q1260,76 1440,46 L1440,90 Z" fill="url(#pcf-top-pri)" />
          <path d="M0,72 Q120,38 300,75 Q480,88 640,44 Q800,12 960,56 Q1100,84 1280,38 Q1380,18 1440,52" stroke="#b5ac9e" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,48 Q220,82 420,32 Q580,8 740,70 Q920,88 1060,34 Q1200,6 1380,58 L1440,62" stroke="#c8c0b2" strokeWidth="0.6" fill="none" opacity="0.4" />
        </svg>
      </div>

      {/* ── Bottom waves ── */}
      <div style={{ position: 'absolute', bottom: -88, left: 0, right: 0, zIndex: 2, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block', transform: 'scaleY(-1)' }}>
          <defs>
            <linearGradient id="pcf-bot-sec" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor={`rgb(${secondaryRgb})`} stopOpacity={0.14} />
              <stop offset="100%" stopColor={`rgb(${secondaryRgb})`} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="pcf-bot-pri" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor={`rgb(${primaryRgb})`} stopOpacity={0.22} />
              <stop offset="100%" stopColor={`rgb(${primaryRgb})`} stopOpacity={0} />
            </linearGradient>
          </defs>
          <path d="M0,90 L0,48 Q180,18 360,42 Q540,64 720,36 Q900,10 1080,38 Q1260,62 1440,32 L1440,90 Z" fill="url(#pcf-bot-sec)" />
          <path d="M0,90 L0,62 Q180,32 360,58 Q540,80 720,50 Q900,22 1080,52 Q1260,76 1440,46 L1440,90 Z" fill="url(#pcf-bot-pri)" />
        </svg>
      </div>

      <div className="wrap">
        <PageTitle sub="選一張牌" title="找到屬於你的路徑" />

        {/* ── MOBILE: card list + centered modal ── */}
        {isMobile === true && (
          <MobileCards
            personas={personas}
            active={active}
            setActive={setActive}
            ExpandContent={ExpandContent}
          />
        )}

        {/* ── DESKTOP: horizontal expand animation ── */}
        {isMobile === false && (
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
                    transition: ['width 0.5s cubic-bezier(0.4,0,0.2,1)', 'opacity 0.35s ease', 'margin 0.5s cubic-bezier(0.4,0,0.2,1)'].join(', '),
                  }}
                >
                  <div style={{
                    width: CARD_W, height: '100%', borderRadius: 16, overflow: 'hidden',
                    display: 'flex', flexDirection: 'column',
                    background: isActive ? 'transparent' : '#FFFFFF',
                    boxShadow: isActive ? 'none' : '0 2px 14px rgba(42,42,42,0.07)',
                    transition: 'background 0.6s ease, box-shadow 0.5s ease',
                  }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                      <div style={{ position: 'relative', width: IMG_W, height: IMG_H, flexShrink: 0 }}>
                        <Image src={p.cardImage} alt="" fill style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.8 }} />
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.25rem 1.5rem 1.75rem' }}>
                      <h3 className="tr-h1" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', lineHeight: 1.5, color: 'var(--ink)', marginBottom: isActive ? 0 : 10, whiteSpace: 'pre-line', transition: 'margin 0.4s ease', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                        {p.cardTitle}
                      </h3>
                      <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'var(--muted)', lineHeight: 1.85, whiteSpace: 'pre-line', opacity: isActive ? 0 : 1, maxHeight: isActive ? 0 : 80, overflow: 'hidden', transition: 'opacity 0.35s ease, max-height 0.45s ease', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                        {p.cardDesc}
                      </p>
                    </div>
                  </div>
                </div>,

                <div
                  key={`expand-${p.id}`}
                  style={{
                    width: isActive ? EXPAND_W : 0,
                    height: EXPAND_H,
                    flexShrink: 0,
                    overflow: 'hidden',
                    opacity: isActive ? 1 : 0,
                    borderRadius: 20,
                    transition: ['width 0.55s cubic-bezier(0.4,0,0.2,1) 0.12s', 'opacity 0.4s ease 0.12s'].join(', '),
                    background: '#FFFFFF',
                    boxShadow: isActive ? `0 16px 52px rgba(${p.accentRgb},0.18), 0 0 0 1px rgba(${p.accentRgb},0.1)` : 'none',
                  }}
                >
                  <div style={{ width: EXPAND_W, height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.25rem 2.5rem 2rem' }}>
                    <ExpandContent p={p} />
                  </div>
                </div>,
              ]
            })}
          </div>
        )}
      </div>
    </PageSection>
  )
}
