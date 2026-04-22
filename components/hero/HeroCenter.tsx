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
      {/* Background bowl grid — centered */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.28,
        }}
      >
        <div className="animate-fade-in animate-breathe-scale" style={{ animationDelay: '0.3s' }}>
          <Image
            src="/index/頌缽九宮格(方).png"
            alt="" width={1400} height={1400} aria-hidden
            style={{ width: 'clamp(300px, 58vw, 600px)', height: 'auto', display: 'block' }}
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
        <p style={{
          fontFamily: 'var(--f-zh)',
          fontSize: 'clamp(13px, 1.2vw, 15px)',
          letterSpacing: '0.06em',
          color: 'var(--ink)',
          opacity: 0.52,
          lineHeight: 1,
        }}>
          我們相信，每個人都可以找到屬於自己的靈性生活之道。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.36 }}>
          <span style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(11px, 0.9vw, 12px)',
            letterSpacing: '0.32em',
            color: 'var(--ink)',
            textTransform: 'uppercase',
          }}>
            SCROLL
          </span>
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none" aria-hidden>
            <line x1="6" y1="0" x2="6" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M1 8.5 L6 13.5 L11 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
