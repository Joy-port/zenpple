import Image from 'next/image'

export default function HeroCenter() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(40px,5vw,64px) clamp(48px,8vw,100px)',
        position: 'relative',
        overflow: 'clip',
        background: 'var(--base)',
      }}
    >
      {/* Background bowl grid — top-left, desktop only */}
      <div
        className="hidden md:block"
        style={{ position: 'absolute', top: '-12%', left: '-14%', zIndex: 0, pointerEvents: 'none', opacity: 0.35 }}
      >
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/index/頌缽九宮格(方).png"
            alt="" width={1400} height={1400} aria-hidden
            className="animate-breathe-scale"
            style={{ height: 'clamp(360px, 62vh, 580px)', width: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* Background bowl grid — bottom-right */}
      <div
        className="hidden md:block"
        style={{ position: 'absolute', bottom: '-8%', right: '-6%', zIndex: 0, pointerEvents: 'none', opacity: 0.35 }}
      >
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <Image
            src="/index/頌缽九宮格(方).png"
            alt="" width={1400} height={1400} aria-hidden
            className="animate-breathe-scale"
            style={{ height: 'clamp(220px, 38vh, 380px)', width: 'auto', display: 'block', animationDelay: '1.5s' }}
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 280,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(242,239,234,0.6) 50%, var(--base) 100%)',
          pointerEvents: 'none', zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: 36 }}>
          <Image
            src="/zenpple-logo-eng.png"
            alt="Zenpple 森波"
            width={1872} height={1874}
            style={{ width: 'clamp(160px, 14vw, 200px)', height: 'auto' }}
          />
        </div>

        <h1
          className="animate-ink-reveal tr-d2"
          style={{
            fontSize: 'clamp(26px, 3vw, 36px)',
            letterSpacing: '0.06em',
            lineHeight: 1.15,
            marginBottom: 16,
            whiteSpace: 'nowrap',
            animationDelay: '0.3s',
            animationFillMode: 'both',
          }}
        >
          往內定頻，走回自己
        </h1>

        <p
          className="tr-h2"
          style={{
            fontSize: 'clamp(13px, 2.5vw, 18px)',
            letterSpacing: '0.22em',
            color: 'var(--ink)',
            opacity: 0.85,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Tune inward. Return to self.
        </p>
      </div>

      {/* Tagline + scroll hint — bottom of hero */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(36px, 6vh, 56px)',
          left: 0, right: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          pointerEvents: 'none',
        }}
      >
        <div style={{
          fontFamily: 'var(--f-zh)',
          fontSize: 'clamp(13px, 1.2vw, 15px)',
          letterSpacing: '0.06em',
          color: 'var(--ink)',
          opacity: 0.52,
          lineHeight: 1.9,
          textAlign: 'center',
        }}>
          <p style={{ margin: 0 }}>我們相信</p>
          <p style={{ margin: 0 }}>每個人都可以找到屬於自己的靈性生活之道。</p>
        </div>
        <svg
          width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden
          style={{ opacity: 0.38, animation: 'hero-arrow-drop 2s ease-in-out infinite' }}
        >
          <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M1 9.5 L7 15.5 L13 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
