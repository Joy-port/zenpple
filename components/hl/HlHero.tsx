'use client'

import Image from 'next/image'
import HlHeroBackground from './HlHeroBackground'

export default function HlHero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', paddingBottom: 80, overflow: 'hidden' }}>
      <HlHeroBackground />

      {/* Ghost watermark image */}
      <div className="hero-deep">
        <Image
          src="/hl/頌缽波動-粉.png"
          alt=""
          width={600}
          height={600}
          style={{ width: 'clamp(280px, 42vw, 520px)', height: 'auto', opacity: 0.18, filter: 'brightness(4) saturate(0.15)' }}
          aria-hidden="true"
          priority
        />
      </div>

      {/* Top label */}
      <div className="hero-label">HARMONIC LAYERS · 林間迷霧者</div>

      {/* Main content */}
      <div className="hero-content">
        <div className="en-sub">DEEP SYSTEM ALIGNMENT</div>
        <h1>不只放鬆，<br />而是從根源<br />重新調頻</h1>
        <p>七脈輪校準系統，從全面掃描到系統重整，透過頌缽物理波頻，清理累積的雜訊，讓身心頻率回歸原始和諧。</p>
      </div>
    </section>
  )
}
