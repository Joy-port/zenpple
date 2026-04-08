'use client'

import Image from 'next/image'
import HlHeroBackground from './HlHeroBackground'

export default function HlHero() {
  return (
    <section id="hero">
      {/* Canvas bg fills the full 130vh section */}
      <HlHeroBackground />

      {/* Content locked to 100vh — nothing extends beyond the viewport */}
      <div className="hero-viewport">
        {/* Watermark — centered in the upper space, breathing */}
        <div className="hero-watermark" aria-hidden="true">
          <Image
            src="/hl/頌缽波動-粉.png"
            alt=""
            width={600}
            height={600}
            style={{ width: '100%', height: 'auto', filter: 'brightness(5) saturate(0.1)' }}
            priority
          />
        </div>

        {/* Titles — bottom of viewport */}
        <div className="hero-content">
          <div className="en-sub">DEEP SYSTEM ALIGNMENT</div>
          <h1>不只放鬆，<br />而是從根源<br />重新調頻</h1>
          <p>七脈輪校準系統，從全面掃描到系統重整，透過頌缽物理波頻，清理累積的雜訊，讓身心頻率回歸原始和諧。</p>
        </div>
      </div>

      {/* Wave sits in the extended 30vh below the viewport */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,100 480,20 720,55 C960,90 1200,25 1440,60 L1440,100 L0,100 Z" fill="#F2EFEA" />
          <path d="M0,75 C300,40 600,95 900,70 C1100,55 1280,85 1440,75 L1440,100 L0,100 Z" fill="#F2EFEA" opacity="0.55" />
        </svg>
      </div>
    </section>
  )
}
