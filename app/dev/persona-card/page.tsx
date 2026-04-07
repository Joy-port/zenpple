'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const personas = [
  {
    id: 1,
    cardTitle: '喜歡感受\n也懂得休息的人',
    cardDesc: '偶爾覺得快被什麼淹沒，\n只是還沒找到那個出口',
    accentColor: '#4A6B8A',
    accentRgb: '74,107,138',
    cardImage: '/index/卡牌-1.png',
    imageFilter: 'sepia(1) hue-rotate(170deg) saturate(2) brightness(0.82)',
  },
  {
    id: 2,
    cardTitle: '正在穿越某段\n人生霧區的人',
    cardDesc: '有直覺，但看不清前方，\n說不出來，卻揮之不去',
    accentColor: '#7B6B9E',
    accentRgb: '123,107,158',
    cardImage: '/index/卡牌-2.png',
    imageFilter: 'sepia(1) hue-rotate(240deg) saturate(2) brightness(0.85)',
  },
  {
    id: 3,
    cardTitle: '準備把感知\n化成力量的人',
    cardDesc: '想傳遞，想建立，\n熱情有了，還缺一個結構',
    accentColor: '#B09070',
    accentRgb: '176,144,112',
    cardImage: '/index/卡牌-3.png',
    imageFilter: 'sepia(0.7) saturate(1.9) brightness(0.95) hue-rotate(5deg)',
  },
]

export default function PersonaCardDevPage() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100svh', background: 'var(--base)', padding: '48px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>

        <div style={{ marginBottom: 32 }}>
          <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', fontFamily: 'var(--f-mono)', letterSpacing: '0.08em' }}>
            ← back to home
          </Link>
          <h1 style={{ fontFamily: 'var(--f-zh)', fontWeight: 700, fontSize: 22, marginTop: 16, marginBottom: 4, color: 'var(--ink)' }}>
            PersonaCard — Horizontal Layout (dev option)
          </h1>
          <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--f-mono)' }}>
            horizontal row variant · tap card to expand
          </p>
        </div>

        {/* Horizontal card rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
              <div style={{ width: 4, flexShrink: 0, background: p.accentColor, opacity: 0.7 }} />
              <div style={{ flex: 1, minWidth: 0, padding: '1.25rem 1rem' }}>
                <h3
                  className="tr-h1"
                  style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink)', marginBottom: 8, whiteSpace: 'pre-line' }}
                >
                  {p.cardTitle}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {p.cardDesc}
                </p>
              </div>
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
      </div>
    </div>
  )
}
