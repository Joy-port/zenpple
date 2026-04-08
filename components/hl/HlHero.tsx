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

    // Nav: transparent at top of HL hero, fades in on scroll
    const nav = document.querySelector('header') as HTMLElement | null
    if (nav) {
      const onScroll = () => nav.classList.toggle('hl-scrolled', window.scrollY > 40)
      onScroll() // set initial state
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
        nav.classList.remove('hl-scrolled')
      }
    }
  }, [])

  return (
    <section id="hero">
      {/* Canvas fills all 230vh */}
      <HlHeroBackground />

      {/* ── First viewport: image + bg chars ── */}
      <div className="hero-image-zone" aria-hidden="true">
        {/* Desktop: left of image | Mobile: below image (grid row 2 col 1) */}
        <div className="hero-bg-char">深層</div>

        <div className="hero-watermark">
          <Image
            src="/hl/頌缽波動-粉.png"
            alt=""
            width={600}
            height={600}
            style={{ width: '100%', height: 'auto', filter: 'brightness(5) saturate(0.1)' }}
            priority
          />
        </div>

        {/* Desktop: right of image | Mobile: below image (grid row 2 col 2) */}
        <div className="hero-bg-char">對齊</div>
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
