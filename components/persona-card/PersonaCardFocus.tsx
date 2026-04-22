'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import PageSection from '@/components/ui/PageSection'
import PageTitle from '@/components/ui/PageTitle'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Z } from '@/constants/zIndex'

const personas = [
  {
    id: 1,
    cardTitle: '喜歡感受\n也懂得休息的人',
    cardDesc: '只想在某個安靜的頻率裡，\n讓自己好好被支持一次。',
    expandTitle: '潮間帶的人',
    expandEn: 'The Shoreline Wanderer',
    expandBody: '懂得感受生活的細膩，也知道自己需要補充能量。不一定在找「答案」，只是想在某個安靜的頻率裡，讓自己好好浮一次。',
    services: [
      { label: '脈輪牌卡 + 頌缽', href: '/qi-sb#courses' },
      { label: '團體閨蜜音流', href: '/qi-sb#courses' },
      { label: '全脈輪分析', href: '/qi-sb#courses' },
      { label: '主題式脈輪能量調和', href: '/qi-sb#courses' },
      { label: '企業包場頌缽', href: '/qi-sb#courses' },
    ],
    ctaLabel: '找到我的第一步 ↗',
    ctaHref: '/qi-sb',
    accentColor: '#4A6B8A',
    accentRgb: '74,107,138',
    secondaryRgb: '123,107,158',
    cardImage: '/index/卡牌-1.png',
    imageFilter: 'sepia(1) hue-rotate(170deg) saturate(2) brightness(0.82)',
    cardScale: 1.0,
  },
  {
    id: 2,
    cardTitle: '正在穿越某段\n人生霧區的人',
    cardDesc: '有直覺，但看不清前方，\n說不出來，也揮之不去',
    expandTitle: '林間迷霧者',
    expandEn: 'The Mist Walker',
    expandBody: '有自己的感知與判斷，但某個地方就感覺卡住了！情感、事業、身體，或說不清楚的東西，需要有人幫你看見自己。',
    services: [
      { label: '能量占卜旗艦', href: '/hl#pearls' },
      { label: '全脈輪能量分析', href: '/hl#pearls' },
      { label: '七脈輪能量調和', href: '/hl#pearls' },
      { label: '薩滿靈魂覺醒', href: '/hl#pearls' },
      { label: '易經理路定調', href: '/hl#pearls' },
    ],
    ctaLabel: '說說你的困境 ↗',
    ctaHref: '/hl',
    accentColor: '#7B6B9E',
    accentRgb: '123,107,158',
    secondaryRgb: '74,107,138',
    cardImage: '/index/卡牌-2.png',
    imageFilter: 'sepia(1) hue-rotate(240deg) saturate(2) brightness(0.85)',
    cardScale: 1.15,  /* source is very wide (2284×1632) — trees appear tiny without upscaling */
  },
  {
    id: 3,
    cardTitle: '準備把感知\n化成力量的人',
    cardDesc: '想傳遞，想建立，\n擁有熱情，卻缺乏一個實踐的結構',
    expandTitle: '播種者',
    expandEn: 'The Seed Keeper',
    expandBody: '已經在靈性路上走了一段，想讓這份感知長成能協助自己，也能幫助別人的東西。擁有熱情，但需要更完整的視野與結構。',
    services: [
      { label: '頌缽技法培訓', href: '/ts-pe#ts-series' },
      { label: '深度能量定頻師認證', href: '/ts-pe#ts-series' },
      { label: '靈性品牌策略定錨', href: '/ts-pe#pe-series' },
      { label: '高階品牌創業陪跑', href: '/ts-pe#pe-series' },
    ],
    ctaLabel: '了解我的路徑 ↗',
    ctaHref: '/ts-pe',
    accentColor: '#B09070',
    accentRgb: '176,144,112',
    secondaryRgb: '123,107,158',
    cardImage: '/index/卡牌-3.png',
    imageFilter: 'sepia(0.7) saturate(1.9) brightness(0.95) hue-rotate(5deg)',
    cardScale: 0.80,  /* source is portrait (1541×2110) — flower fills height, needs scaling down */
  },
]

type Persona = typeof personas[number]

/* ── Mobile: single card + arrow nav + modal ── */
function MobileCards({
  personas,
  active,
  setActive,
  ExpandContent,
}: {
  personas: Persona[]
  active: number | null
  setActive: React.Dispatch<React.SetStateAction<number | null>>
  ExpandContent: React.ComponentType<{ p: Persona; hideImage?: boolean; align?: 'center' | 'left' }>
}) {
  const [cardIdx, setCardIdx] = useState(0)
  const [slideDir, setSlideDir] = useState<'left' | 'right' | null>(null)
  const currentCard = personas[cardIdx]

  const activePersona = personas.find(p => p.id === active) ?? null
  const activeIdx     = personas.findIndex(p => p.id === active)

  useEffect(() => {
    const lock = active !== null
    document.body.style.overflow = lock ? 'hidden' : ''
    document.documentElement.style.overflow = lock ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [active])

  const goNext = () => { if (cardIdx < personas.length - 1) { setSlideDir('left');  setCardIdx(i => i + 1) } }
  const goPrev = () => { if (cardIdx > 0)                   { setSlideDir('right'); setCardIdx(i => i - 1) } }

  const close     = () => setActive(null)
  const modalPrev = () => { if (activeIdx > 0) setActive(personas[activeIdx - 1].id) }
  const modalNext = () => { if (activeIdx < personas.length - 1) setActive(personas[activeIdx + 1].id) }

  // Swipe on card to change cardIdx
  const cardTouchX = useRef<number | null>(null)
  const onCardTouchStart = (e: React.TouchEvent) => { cardTouchX.current = e.touches[0].clientX }
  const onCardTouchEnd   = (e: React.TouchEvent) => {
    if (cardTouchX.current === null) return
    const delta = e.changedTouches[0].clientX - cardTouchX.current
    if (delta < -50) goNext()
    else if (delta > 50) goPrev()
    cardTouchX.current = null
  }

  // Swipe inside modal to switch expanded cards
  const modalTouchX = useRef<number | null>(null)
  const onModalTouchStart = (e: React.TouchEvent) => { modalTouchX.current = e.touches[0].clientX }
  const onModalTouchEnd   = (e: React.TouchEvent) => {
    if (modalTouchX.current === null) return
    const delta = e.changedTouches[0].clientX - modalTouchX.current
    if (delta < -50) modalNext()
    else if (delta > 50) modalPrev()
    modalTouchX.current = null
  }

  return (
    <>
      {/* Single card + side arrows */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>

        {/* Prev arrow — full card height */}
        <button
          onClick={goPrev}
          disabled={cardIdx === 0}
          style={{
            flexShrink: 0, alignSelf: 'stretch',
            display: 'flex', alignItems: 'center',
            background: 'none', border: 'none', cursor: cardIdx > 0 ? 'pointer' : 'default',
            opacity: cardIdx > 0 ? 0.65 : 0.15, fontSize: 38, color: 'var(--ink)',
            padding: '0 12px', lineHeight: 1,
          }}
          aria-label="上一張"
        >‹</button>

        {/* Card — animation wrapper clips slide */}
        <div style={{ flex: 1, borderRadius: 18, overflow: 'hidden', boxShadow: `0 4px 28px rgba(${currentCard.accentRgb},0.18), 0 0 0 1.5px rgba(${currentCard.accentRgb},0.12)`, transition: 'box-shadow 0.28s ease' }}>
          <div
            key={cardIdx}
            onTouchStart={onCardTouchStart}
            onTouchEnd={onCardTouchEnd}
            onClick={() => setActive(currentCard.id)}
            style={{
              background: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              animation: slideDir === 'left'
                ? 'mobile-card-from-right 0.28s cubic-bezier(0.4,0,0.2,1) forwards'
                : slideDir === 'right'
                  ? 'mobile-card-from-left 0.28s cubic-bezier(0.4,0,0.2,1) forwards'
                  : undefined,
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', height: 'clamp(180px, 46vw, 260px)', flexShrink: 0, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, transform: `scale(${currentCard.cardScale})`, transformOrigin: 'center center' }}>
                <Image
                  src={currentCard.cardImage} alt="" fill
                  style={{ objectFit: 'contain', filter: currentCard.imageFilter, mixBlendMode: 'multiply', opacity: 0.8, padding: '16px' }}
                />
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: '0.75rem 1.25rem 1.375rem' }}>
              <h3
                className="tr-h1"
                style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', marginBottom: 6, whiteSpace: 'pre-line' }}
              >
                {currentCard.cardTitle}
              </h3>
              <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: '#5C5955', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {currentCard.cardDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Next arrow — full card height */}
        <button
          onClick={goNext}
          disabled={cardIdx === personas.length - 1}
          style={{
            flexShrink: 0, alignSelf: 'stretch',
            display: 'flex', alignItems: 'center',
            background: 'none', border: 'none', cursor: cardIdx < personas.length - 1 ? 'pointer' : 'default',
            opacity: cardIdx < personas.length - 1 ? 0.65 : 0.15, fontSize: 38, color: 'var(--ink)',
            padding: '0 12px', lineHeight: 1,
          }}
          aria-label="下一張"
        >›</button>
      </div>

      {/* Pagination dots */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginTop: 28 }}>
        {personas.map((p, i) => (
          <div
            key={p.id}
            onClick={() => setCardIdx(i)}
            style={{
              width: cardIdx === i ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: cardIdx === i ? currentCard.accentColor : '#d4cfc8',
              transition: 'width 0.3s ease, background 0.3s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Centered modal — portal escapes section stacking context */}
      {active !== null && activePersona && createPortal(
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: Z.modal,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.25rem',
          }}
          onClick={close}
        >
          <div
            onTouchStart={onModalTouchStart}
            onTouchEnd={onModalTouchEnd}
            style={{
              position: 'relative',
              background: '#FFFFFF', borderRadius: 22,
              width: '100%', maxWidth: 420, maxHeight: '85vh',
              overflowY: 'auto',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '2.5rem 1.75rem 1.25rem',
              boxShadow: `0 24px 64px rgba(${activePersona.accentRgb},0.25)`,
              WebkitOverflowScrolling: 'touch',
            } as React.CSSProperties}
            onClick={e => e.stopPropagation()}
          >
            {/* X */}
            <button
              onClick={close}
              style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--ink)', opacity: 0.35, lineHeight: 1, padding: '4px 6px' }}
              aria-label="關閉"
            >✕</button>

            <ExpandContent p={activePersona} />

            {/* Modal pagination */}
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20, flexShrink: 0 }}>
              <button
                onClick={modalPrev} disabled={activeIdx <= 0}
                style={{ background: 'none', border: 'none', cursor: activeIdx > 0 ? 'pointer' : 'default', opacity: activeIdx > 0 ? 0.7 : 0.2, fontSize: 20, color: 'var(--ink)', padding: '4px 8px', lineHeight: 1 }}
                aria-label="上一個"
              >‹</button>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {personas.map(p => (
                  <div
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    style={{
                      width: active === p.id ? 20 : 6, height: 6, borderRadius: 3,
                      background: active === p.id ? activePersona.accentColor : '#d4cfc8',
                      transition: 'width 0.3s ease, background 0.3s ease', cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
              <button
                onClick={modalNext} disabled={activeIdx >= personas.length - 1}
                style={{ background: 'none', border: 'none', cursor: activeIdx < personas.length - 1 ? 'pointer' : 'default', opacity: activeIdx < personas.length - 1 ? 0.7 : 0.2, fontSize: 20, color: 'var(--ink)', padding: '4px 8px', lineHeight: 1 }}
                aria-label="下一個"
              >›</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

const CARD_W   = 300
const CARD_H   = 'clamp(380px, 48vh, 520px)'

const EXPAND_W = 400

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

  /* ── Shared expand content — align='center' for mobile modal, 'left' for desktop panel ── */
  const ExpandContent = ({ p, hideImage, align = 'center' }: { p: typeof personas[0]; hideImage?: boolean; align?: 'center' | 'left' }) => {
    const ta = align === 'left' ? 'left' : 'center'
    const ja = align === 'left' ? 'flex-start' : 'center'
    return (
      <>
        {!hideImage && (
          <div style={{ width: 80, height: 80, position: 'relative', marginBottom: 20, flexShrink: 0, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, transform: `scale(${p.cardScale})`, transformOrigin: 'center center' }}>
              <Image src={p.cardImage} alt="" fill
                style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.82 }}
              />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 5, marginBottom: 14, flexShrink: 0, justifyContent: ja }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: i === 1 ? 20 : 6, height: 4, borderRadius: 2, background: `rgba(${p.accentRgb},${i === 1 ? 0.5 : 0.2})` }} />
          ))}
        </div>

        <h3 className="tr-h1" style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', marginBottom: 3, color: 'var(--ink)', flexShrink: 0, overflowWrap: 'break-word', wordBreak: 'break-word', textAlign: ta, width: '100%' }}>
          {p.expandTitle}
        </h3>
        <p style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 'clamp(13px, 1.2vw, 15px)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10, flexShrink: 0, textAlign: ta, width: '100%' }}>
          {p.expandEn}
        </p>
        <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.85, color: 'var(--ink)', opacity: 0.85, marginBottom: 0, flexShrink: 0, overflowWrap: 'break-word', wordBreak: 'break-word', textAlign: ta }}>
          {p.expandBody}
        </p>

        <div style={{ minHeight: 16 }} />

        <div style={{ width: '100%', height: 1, background: `rgba(${p.accentRgb},0.15)`, marginBottom: 10, flexShrink: 0 }} />
        <p style={{ fontFamily: 'var(--f-zh-sans)', fontWeight: 500, fontSize: 'clamp(13px, 1.1vw, 15px)', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 8, flexShrink: 0, textAlign: ta, width: '100%' }}>
          適合的服務
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: ja, marginBottom: 14, flexShrink: 0, width: '100%' }}>
          {p.services.map(s => (
            <Link key={s.label} href={s.href} style={{ fontFamily: 'var(--f-zh-sans)', fontSize: 'clamp(13px, 1.2vw, 15px)', padding: '4px 11px', borderRadius: 999, border: `1px solid rgba(${p.accentRgb},0.3)`, color: p.accentColor, background: `rgba(${p.accentRgb},0.06)`, letterSpacing: '0.02em', textDecoration: 'none', transition: 'background 0.18s ease', cursor: 'pointer' }}>
              {s.label}
            </Link>
          ))}
        </div>
        {/* CTA button hidden — reserved for future card landing page */}
      </>
    )
  }

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
              alignItems: 'center',
              maxWidth: '100%',
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
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 16 }}>
                      <div style={{ position: 'relative', width: 160, height: 210, flexShrink: 0, overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', inset: 0, transform: `scale(${p.cardScale})`, transformOrigin: 'center center' }}>
                          <Image src={p.cardImage} alt="" fill style={{ objectFit: 'contain', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.8 }} />
                        </div>
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0.75rem 1.25rem 1.25rem' }}>
                      <h3 className="tr-h1" style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', lineHeight: 1.5, color: 'var(--ink)', marginBottom: isActive ? 0 : 8, whiteSpace: 'pre-line', transition: 'margin 0.4s ease', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                        {p.cardTitle}
                      </h3>
                      <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: '#5C5955', lineHeight: 1.8, whiteSpace: 'pre-line', opacity: isActive ? 0 : 1, maxHeight: isActive ? 0 : 120, overflow: 'hidden', transition: 'opacity 0.35s ease, max-height 0.45s ease', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                        {p.cardDesc}
                      </p>
                    </div>
                  </div>
                </div>,

                <div
                  key={`expand-${p.id}`}
                  style={{
                    width: isActive ? EXPAND_W : 0,
                    alignSelf: 'center',
                    flexShrink: 0,
                    overflow: 'hidden',
                    opacity: isActive ? 1 : 0,
                    borderRadius: 20,
                    transition: ['width 0.55s cubic-bezier(0.4,0,0.2,1) 0.12s', 'opacity 0.4s ease 0.12s'].join(', '),
                    background: '#FFFFFF',
                    boxShadow: isActive ? `0 16px 52px rgba(${p.accentRgb},0.18), 0 0 0 1px rgba(${p.accentRgb},0.1)` : 'none',
                  }}
                >
                  <div style={{ width: EXPAND_W, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.25rem 2rem 1.75rem' }}>
                    <ExpandContent p={p} hideImage />
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
