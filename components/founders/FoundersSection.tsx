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
    accentRgb: '40,100,160',
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
    accentRgb: '200,80,30',
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

        {/* Circle cards + glow container */}
        <div style={{ position: 'relative' }}>

          {/* Shared glow blobs — sit behind both circles, overlap each other and the cards */}
          <div aria-hidden style={{ position: 'absolute', inset: '-20%', pointerEvents: 'none', zIndex: 0 }}>
            {/* Blue — card 1 zone */}
            <div style={{
              position: 'absolute',
              width: 320, height: 320, borderRadius: '50%',
              background: 'rgba(40,100,160,0.22)',
              filter: 'blur(55px)',
              top: '40%', left: '35%',
              transform: 'translate(-50%, -50%)',
            }} />
            {/* Orange-red — card 2 zone */}
            <div style={{
              position: 'absolute',
              width: 320, height: 320, borderRadius: '50%',
              background: 'rgba(200,80,30,0.22)',
              filter: 'blur(55px)',
              top: '60%', left: '65%',
              transform: 'translate(-50%, -50%)',
            }} />
          </div>

          {/* Circle cards: stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col items-center md:flex-row md:justify-center" style={{ position: 'relative', zIndex: 1 }}>
            {founders.map((f, i) => (
              <div
                key={f.key}
                /* overlap: -60px vertical on mobile, -80px horizontal on desktop */
                className={i === 1 ? 'mt-[-60px] md:mt-0 md:ml-[-80px]' : ''}
                style={{
                  width: 'clamp(280px, 42vw, 400px)',
                  height: 'clamp(280px, 42vw, 400px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: i === 0 ? 2 : 1,
                  /* frosted glass — lets glow bleed through */
                  background: 'rgba(242,239,234,0.48)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.55)',
                  boxShadow: '0 8px 48px rgba(42,42,42,0.09)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10%',
                  textAlign: 'center',
                }}
              >
                {/* Image */}
                <div style={{ width: 'clamp(64px, 16%, 90px)', flexShrink: 0, marginBottom: 10 }}>
                  <div className="animate-breathe-scale" style={{ lineHeight: 0 }}>
                    <Image
                      src={f.img} alt={f.imgAlt} width={500} height={600}
                      style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 8px 20px rgba(42,42,42,0.14))' }}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="tr-d2"
                  style={{ fontSize: 'clamp(17px, 2vw, 23px)', letterSpacing: '0.04em', color: 'var(--ink)', lineHeight: 1.1, marginBottom: 6 }}
                >
                  {f.name}
                </h3>

                {/* Roles */}
                <p style={{ fontFamily: 'var(--f-mono)', fontSize: 'clamp(9px, 1vw, 11px)', letterSpacing: '0.06em', color: f.accent, marginBottom: 10 }}>
                  {f.roles}
                </p>

                {/* Desc — 4-line clamp to fit circle */}
                <p style={{
                  fontSize: 'clamp(10px, 1vw, 12px)', lineHeight: 1.75, color: '#5C5955',
                  overflow: 'hidden', display: '-webkit-box',
                  WebkitLineClamp: 4, WebkitBoxOrient: 'vertical',
                  marginBottom: 10,
                }}>
                  {f.desc}
                </p>

                {/* Link */}
                <Link
                  href="/about"
                  style={{
                    fontFamily: 'var(--f-zh-sans)', fontWeight: 600,
                    fontSize: 'clamp(10px, 1vw, 12px)', letterSpacing: '0.08em',
                    textDecoration: 'none',
                    background: `linear-gradient(120deg, ${f.accent}, var(--ink) 80%)`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}
                >
                  了解更多 ↗
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  )
}
