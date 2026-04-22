'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import HlHeroBackground from './HlHeroBackground'

export default function HlHero() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Title reveal
    const el = titleRef.current
    if (el) {
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
        { threshold: 0.08 }
      )
      io.observe(el)
    }

  }, [])

  return (
    <section id="hero">
      {/* Canvas fills all 230vh */}
      <HlHeroBackground />

      {/* ── First viewport: image + bg chars ── */}
      <div className="hero-image-zone" aria-hidden="true">

        {/* Left outer text group — desktop only */}
        <div className="hero-flanking-group hero-char-desktop">
          <span className="hero-vert-en">FILTER THE NOISE</span>
          <span className="hero-vert-zh">清理脈輪雜訊</span>
        </div>

        <div className="hero-watermark">
          <Image
            src="/hl/頌缽波動-白.png"
            alt=""
            width={600}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          {/* Vertical chars woven between the wave stripes */}
          <span className="hero-stripe-char" style={{ left: '18%' }}>深</span>
          <span className="hero-stripe-char" style={{ left: '36%' }}>層</span>
          <span className="hero-stripe-char" style={{ left: '58%' }}>對</span>
          <span className="hero-stripe-char" style={{ left: '76%' }}>齊</span>
        </div>

        {/* Right outer text group — desktop only */}
        <div className="hero-flanking-group hero-char-desktop">
          <span className="hero-vert-zh">重啟生命流動</span>
          <span className="hero-vert-en">ALIGN THE SOUL</span>
        </div>

        {/* Mobile only — single caption below image */}
        <div className="hero-chars-mobile">深層對齊</div>

        {/* Scroll guide — breathing chevron, desktop only */}
        <div className="hero-scroll-hint">
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.5 L11 11.5 L20.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>

      {/* ── Title zone: scrolls into view with staggered animation ── */}
      <div className="hero-title-zone" ref={titleRef}>
        <div className="hero-content">
          <div className="en-sub">DEEP SYSTEM ALIGNMENT</div>
          <h1>不只放鬆，<br />而是從根源<br />重新調頻</h1>
          <p>七脈輪校準系統，從全面掃描到系統重整，<br />透過頌缽物理波頻，清理累積的雜訊，<br />讓身心頻率回歸原始和諧。</p>
        </div>
      </div>

      {/* ── Wave: far below, after breathing space ── */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,70 C200,110 480,20 720,65 C960,105 1240,18 1440,65 L1440,120 L0,120 Z" fill="#F2EFEA" />
          <path d="M0,88 C280,50 560,108 840,80 C1080,58 1280,96 1440,85 L1440,120 L0,120 Z" fill="#F2EFEA" opacity="0.5" />
          <path d="M0,100 C360,72 720,115 1080,95 C1240,86 1360,104 1440,100 L1440,120 L0,120 Z" fill="#F2EFEA" opacity="0.28" />
        </svg>
      </div>
    </section>
  )
}
