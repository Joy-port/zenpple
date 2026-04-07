import Image from 'next/image'
import Link from 'next/link'
import PageSection from '@/components/ui/PageSection'
import PageTitle from '@/components/ui/PageTitle'

const founders = [
  {
    key: 'tutu',
    name: '禿禿 TWO TWO',
    roles: '頌缽 · 薩滿 · 能量定頻',
    desc: '身心狀態、潛意識定頻，以聲音引導感知回歸內在安定。透過頌缽與薩滿儀式，協助你清理能量場中的雜訊，讓意識回到靜定的核心。',
    img: '/index/吉祥物禿.png',
    imgAlt: '禿禿 TWO TWO 吉祥物',
    accent: '#ADBCC8',
    accentRgb: '173,188,200',
    imgSide: 'right' as const,
  },
  {
    key: 'xia',
    name: '夏',
    roles: '靈性顧問 · 易經 · 品牌策略',
    desc: '大方向定錨與理路梳理，結合玄天上帝指引與數位實務。以易經洞見為基礎，協助你釐清現狀、辨識能量走向，走出屬於自己的路徑。',
    img: '/index/吉祥物夏.png',
    imgAlt: '夏 吉祥物',
    accent: '#CB9E85',
    accentRgb: '203,158,133',
    imgSide: 'left' as const,
  },
]

export default function FoundersSection() {
  return (
    <PageSection
      id="founders"
      ghost="FOUNDERS"
      style={{ minHeight: '100svh', overflow: 'visible', position: 'relative', paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'clamp(40px, 5vw, 64px)' }}
    >

      {/* ── Top gradient wave ── */}
      <div style={{ position: 'absolute', top: -88, left: 0, right: 0, zIndex: 2, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 90, display: 'block' }}>
          <defs>
            <linearGradient id="fo-top-a" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="rgb(173,188,200)" stopOpacity={0.16} />
              <stop offset="100%" stopColor="rgb(173,188,200)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fo-top-b" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="rgb(203,158,133)" stopOpacity={0.20} />
              <stop offset="100%" stopColor="rgb(203,158,133)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <path d="M0,90 L0,48 Q180,18 360,42 Q540,64 720,36 Q900,10 1080,38 Q1260,62 1440,32 L1440,90 Z" fill="url(#fo-top-a)" />
          <path d="M0,90 L0,62 Q180,32 360,58 Q540,80 720,50 Q900,22 1080,52 Q1260,76 1440,46 L1440,90 Z" fill="url(#fo-top-b)" />
          <path d="M0,72 Q120,38 300,75 Q480,88 640,44 Q800,12 960,56 Q1100,84 1280,38 Q1380,18 1440,52" stroke="#b5ac9e" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,48 Q220,82 420,32 Q580,8 740,70 Q920,88 1060,34 Q1200,6 1380,58 L1440,62" stroke="#c8c0b2" strokeWidth="0.6" fill="none" opacity="0.4" />
        </svg>
      </div>

      <div className="wrap">
        <PageTitle sub="Two Souls, One Mountain" title="兩個靈魂，一座山" />

        {/* Mobile: stacked · Desktop: side-by-side columns */}
        <div className="flex flex-col md:flex-row md:gap-0" style={{ position: 'relative' }}>
          {founders.map((f, i) => (
            <div
              key={f.key}
              className={`flex-1 min-w-0${i === 0 ? ' md:border-r md:border-[rgba(42,42,42,0.07)]' : ''}`}
            >
              <div
                className="founder-card-inner"
                style={{
                  position: 'relative',
                  paddingTop: 'clamp(24px, 3vw, 40px)',
                  paddingBottom: 'clamp(24px, 3vw, 40px)',
                  paddingLeft: 'clamp(28px, 4vw, 48px)',
                  paddingRight: 'clamp(28px, 4vw, 48px)',
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                {/* Accent glow */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute', width: 500, height: 500, borderRadius: '50%',
                    background: `rgba(${f.accentRgb}, 0.15)`, filter: 'blur(100px)',
                    top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none', zIndex: 0,
                  }}
                />

                {/* Vertical layout: image top, text below, centered */}
                <div className="relative z-[1] flex flex-col items-center gap-5 text-center">

                  {/* Image */}
                  <div className="flex-shrink-0 w-[140px] md:w-[110px]">
                    <div className="animate-breathe-scale" style={{ lineHeight: 0 }}>
                      <Image
                        src={f.img} alt={f.imgAlt} width={500} height={600}
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 12px 32px rgba(42,42,42,0.12))' }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full">
                    <h3
                      className="tr-d2"
                      style={{
                        fontSize: 'clamp(22px, 2.2vw, 28px)',
                        letterSpacing: '0.04em', color: 'var(--ink)', lineHeight: 1.1, marginBottom: 10,
                        overflowWrap: 'break-word', wordBreak: 'break-word',
                      }}
                    >
                      {f.name}
                    </h3>

                    <p style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 'clamp(12px, 1.2vw, 14px)',
                      letterSpacing: '0.06em', color: f.accent, marginBottom: 10,
                    }}>
                      {f.roles}
                    </p>

                    <p style={{
                      fontSize: 'clamp(13px, 1.2vw, 15px)', lineHeight: 1.85,
                      color: 'var(--muted)', marginBottom: 16,
                      overflowWrap: 'break-word', wordBreak: 'break-word',
                    }}>
                      {f.desc}
                    </p>

                    <Link
                      href="/about"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        fontFamily: 'var(--f-zh-sans)', fontWeight: 600,
                        fontSize: 'clamp(13px, 1.3vw, 16px)', letterSpacing: '0.08em',
                        textDecoration: 'none',
                        background: `linear-gradient(120deg, ${f.accent}, var(--ink) 80%)`,
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      }}
                    >
                      了解更多 ↗
                    </Link>
                  </div>
                </div>
              </div>

              {/* Wave divider — mobile only (between stacked cards) */}
              {i < founders.length - 1 && (
                <div aria-hidden className="md:hidden" style={{ lineHeight: 0, pointerEvents: 'none' }}>
                  <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 40, display: 'block' }}>
                    <path d="M0,22 Q180,8 360,20 Q540,32 720,18 Q900,6 1080,22 Q1260,34 1440,18" stroke="#c0b8ae" strokeWidth="0.7" fill="none" opacity="0.5" />
                    <path d="M0,28 Q200,14 400,26 Q600,36 800,22 Q1000,10 1200,24 Q1340,32 1440,20" stroke="#b5ac9e" strokeWidth="0.4" fill="none" opacity="0.35" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  )
}
