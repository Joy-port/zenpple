import Link from 'next/link'
import HeroCenter from '@/components/hero/HeroCenter'
// ── PERSONA CARD ON / ── PersonaCardFocus (card dissolves, expand slides right)
import PersonaCardFocus from '@/components/persona-card/PersonaCardFocus'
import EcosystemMountain2 from '@/components/ecosystem/EcosystemMountain2'
import SectionTransition from '@/components/ui/SectionTransition'
import FoundersSection from '@/components/founders/FoundersSection'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroCenter />

      {/* ── PERSONA CARDS ── */}
      <SectionTransition />
      <PersonaCardFocus />

      {/* ── ECOSYSTEM ── */}
      <SectionTransition />
      <EcosystemMountain2 />

      {/* ── FOUNDERS ── */}
      <SectionTransition />
      <FoundersSection />

      {/* ── CONTACT CTA ── */}
      <section
        id="contact"
        className="animate-gradient-drift"
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px clamp(24px,5vw,72px) 100px',
          background: 'linear-gradient(135deg, #C47B7B 0%, #C47B7B 55%, #C8AEDD 100%)',
          color: 'var(--base)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {/* ── Top wave — bleeds up into SectionTransition, gradient uses CTA palette ── */}
        <div style={{ position: 'absolute', top: -90, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none', zIndex: 1 }}>
          <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block' }}>
            <defs>
              <linearGradient id="cta-top-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C47B7B" stopOpacity={0} />
                <stop offset="100%" stopColor="#C47B7B" stopOpacity={1} />
              </linearGradient>
            </defs>
            <path
              d="M0,90 L0,48 Q180,18 360,42 Q540,64 720,36 Q900,10 1080,38 Q1260,62 1440,32 L1440,90 Z"
              fill="url(#cta-top-fill)"
            />
            <path d="M0,62 Q180,28 360,52 Q540,74 720,46 Q900,20 1080,50 Q1260,76 1440,48" stroke="rgba(242,239,234,0.25)" strokeWidth="1" fill="none" />
            <path d="M0,72 Q200,42 400,62 Q600,80 800,56 Q1000,34 1200,60 Q1340,74 1440,54" stroke="rgba(242,239,234,0.12)" strokeWidth="0.6" fill="none" />
          </svg>
        </div>

        {/* Decorative wave lines within section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 120, display: 'block' }}>
            <path d="M0,60 Q180,20 360,55 Q540,88 720,48 Q900,12 1080,50 Q1260,84 1440,44" stroke="rgba(242,239,234,0.10)" strokeWidth="1" fill="none" />
            <path d="M0,80 Q200,44 400,70 Q600,94 800,60 Q1000,28 1200,62 Q1340,82 1440,58" stroke="rgba(242,239,234,0.06)" strokeWidth="0.7" fill="none" />
          </svg>
        </div>

        {/* Soft centre highlight */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 68px)',
              lineHeight: 1.2,
              color: 'var(--base)',
              marginBottom: 20,
            }}
          >
            準備好了嗎？<br />先來聊聊你的狀態。
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'rgba(242,239,234,0.65)',
              lineHeight: 1.9,
              maxWidth: 380,
              margin: '0 auto 56px',
            }}
          >
            不需要準備什麼，把你現在的狀況傳給我們，我們會幫你找到最適合的第一步。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 38px',
                borderRadius: 999,
                fontFamily: 'var(--f-zh-sans)',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                background: 'rgba(242,239,234,0.95)',
                color: '#A8607A',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              LINE 官方帳號 ↗
            </Link>
            <Link
              href="https://instagram.com/zenpple_"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 38px',
                borderRadius: 999,
                fontFamily: 'var(--f-zh-sans)',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                background: 'transparent',
                color: 'rgba(242,239,234,0.85)',
                border: '1px solid rgba(242,239,234,0.35)',
              }}
            >
              Instagram @zenpple_
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
