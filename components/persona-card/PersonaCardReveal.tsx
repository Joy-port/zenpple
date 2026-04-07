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

export default function PersonaCardReveal() {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActive(prev => (prev === id ? null : id))
  }

  return (
    <PageSection ghost="WHO YOU ARE" style={{ overflow: 'hidden' }}>
      <div className="wrap">
        <PageTitle sub="選一張牌" title="找到屬於你的路徑" />

        {/* Cards row */}
        <div
          style={{
            display: 'flex',
            gap: 18,
            justifyContent: 'center',
            maxWidth: 960,
            margin: '0 auto 0',
            position: 'relative',
            zIndex: 1,
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
                  minHeight: 480,
                  borderRadius: 16,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF',
                  boxShadow: isActive
                    ? `0 20px 52px rgba(${p.accentRgb},0.22), 0 4px 16px rgba(${p.accentRgb},0.1)`
                    : '0 2px 14px rgba(42,42,42,0.07)',
                  outline: isActive
                    ? `2px solid rgba(${p.accentRgb},0.3)`
                    : '2px solid transparent',
                  transform: isActive
                    ? 'translateY(-8px) scale(1.03)'
                    : isOther
                    ? 'translateY(4px) scale(0.97)'
                    : 'translateY(0) scale(1)',
                  opacity: isOther ? 0.48 : 1,
                  filter: isOther ? 'blur(0.5px)' : 'none',
                  transition: 'transform 0.45s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.35s, outline 0.25s, opacity 0.35s, filter 0.35s',
                }}
              >
                {/* Image — top 65% */}
                <div style={{ flex: '0 0 65%', position: 'relative', minHeight: 260 }}>
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
                  <h3 className="tr-h1" style={{ fontSize: 24, lineHeight: 1.5, color: 'var(--ink)', marginBottom: 8, whiteSpace: 'pre-line' }}>
                    {p.cardTitle}
                  </h3>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                    {p.cardDesc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Narrow centered expand panels */}
        <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {personas.map(p => {
            const isActive = active === p.id
            return (
              <div
                key={p.id}
                style={{
                  width: 640,
                  maxWidth: '100%',
                  margin: '0 auto',
                  borderRadius: 20,
                  overflow: 'hidden',
                  position: 'relative',
                  maxHeight: isActive ? 660 : 0,
                  opacity: isActive ? 1 : 0,
                  marginTop: isActive ? 20 : 0,
                  marginBottom: isActive ? 12 : 0,
                  transition: 'max-height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, margin 0.4s ease',
                  background: 'rgba(250,248,246,0.97)',
                  boxShadow: isActive
                    ? `0 16px 52px rgba(${p.accentRgb},0.2), 0 0 0 1px rgba(${p.accentRgb},0.12)`
                    : 'none',
                }}
              >
                {/* Two-column layout: content left, image right */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 180px', height: '100%' }}>
                  {/* Left — text content */}
                  <div style={{ padding: '36px 32px 32px 40px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: 2, width: 36, borderRadius: 1, background: `rgba(${p.accentRgb},0.5)`, marginBottom: 18, flexShrink: 0 }} />
                    <h3 className="tr-h1" style={{ fontSize: 24, marginBottom: 4, color: 'var(--ink)' }}>
                      {p.expandTitle}
                    </h3>
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>
                      {p.expandEn}
                    </p>
                    <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--ink)', opacity: 0.7, marginBottom: 20 }}>
                      {p.expandBody}
                    </p>
                    <div style={{ height: 1, background: `rgba(${p.accentRgb},0.15)`, marginBottom: 16, flexShrink: 0 }} />
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 17, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                      適合的服務
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
                      {p.services.map(s => (
                        <span key={s} style={{ fontFamily: 'var(--f-zh-sans)', fontSize: 15, padding: '5px 12px', borderRadius: 999, border: `1px solid rgba(${p.accentRgb},0.3)`, color: p.accentColor, background: `rgba(${p.accentRgb},0.06)`, letterSpacing: '0.02em' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link href={p.ctaHref} style={{ fontFamily: 'var(--f-mono)', fontSize: 17, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 20px', borderRadius: 999, border: `1px solid rgba(${p.accentRgb},0.4)`, color: p.accentColor, alignSelf: 'flex-start' }}>
                      {p.ctaLabel}
                    </Link>
                  </div>
                  {/* Right — card image */}
                  <div style={{ position: 'relative', background: `rgba(${p.accentRgb},0.04)`, borderLeft: `1px solid rgba(${p.accentRgb},0.1)` }}>
                    <Image
                      src={p.cardImage}
                      alt=""
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'center center', filter: p.imageFilter, mixBlendMode: 'multiply', opacity: 0.65, padding: '24px 16px' }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </PageSection>
  )
}
