import HeroSection from '@/components/qi-sb/HeroSection'
import WhyBrainwaveSection from '@/components/qi-sb/WhyBrainwaveSection'
import CoursesSection from '@/components/qi-sb/CoursesSection'
import WhatIsSection2 from '@/components/qi-sb/WhatIsSection2'
import TwoTwoSection from '@/components/qi-sb/TwoTwoSection'
import FaqSection from '@/components/qi-sb/FaqSection'
import CtaSection from '@/components/qi-sb/CtaSection'

export default function QiSbPage() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── 為什麼頌缽可以放鬆腦波 ── */}
      <WhyBrainwaveSection />

      {/* ── WAVE: section1 → courses ── */}
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, marginBottom: -2, background: '#6BBFB2' }}
      >
        <path
          d="M0,10 C240,75 480,5 720,50 C960,90 1200,15 1440,52 L1440,90 L0,90 Z"
          fill="rgba(232,239,232,0.45)"
        />
        <path
          d="M0,30 C300,85 600,8 900,55 C1100,85 1300,25 1440,60 L1440,90 L0,90 Z"
          fill="#E8EFE8"
        />
      </svg>

      {/* ── COURSES ── */}
      <CoursesSection />

      {/* ── WAVE: cream → base ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, background: '#E8EFE8' }}
      >
        <path
          d="M0,0 C240,55 480,5 720,40 C960,75 1200,10 1440,45 L1440,60 L0,60 Z"
          fill="var(--base)"
        />
      </svg>

      {/* ── WHAT IS 頌缽音流 ── */}
      <WhatIsSection2 />

      {/* ── WAVE: base → dark ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, marginBottom: -2, background: 'var(--base)' }}
      >
        <path
          d="M0,0 C180,55 360,5 540,40 C720,75 900,10 1080,42 C1260,68 1380,20 1440,38 L1440,60 L0,60 Z"
          fill="#5DA5B5"
        />
      </svg>

      {/* ── 禿禿 TWO TWO ── */}
      <TwoTwoSection />

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── WAVE: indigo → base ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, marginBottom: -2, background: '#5DA5B5' }}
      >
        <path
          d="M0,0 C360,55 720,10 1080,48 C1260,62 1380,22 1440,40 L1440,60 L0,60 Z"
          fill="#F2EFEA"
        />
      </svg>

      {/* ── CTA ── */}
      <CtaSection />
    </>
  )
}
