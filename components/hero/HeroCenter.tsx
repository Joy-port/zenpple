import Image from 'next/image'

// Centered hero layout — images diagonal: top-left (desktop only) + bottom-right
export default function HeroCenter() {
  return (
    <section
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
      {/* Top-left image — desktop only */}
      <div
        className="hidden md:block"
        style={{ position: 'absolute', top: '-5%', left: '-6%', zIndex: 0, pointerEvents: 'none', opacity: 0.35 }}
      >
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/index/頌缽九宮格.png"
            alt="" width={1568} height={2172} aria-hidden
            className="animate-breathe-scale"
            style={{ height: 'clamp(380px, 68vh, 620px)', width: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* Bottom-right image — always present, positioned lower on mobile */}
      <div
        className="absolute right-[15%] md:right-[-5%] bottom-[-25vh] opacity-[0.7] md:bottom-[-34vh] md:opacity-100"
        style={{ zIndex: 0, pointerEvents: 'none' }}
      >
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <Image
            src="/index/頌缽九宮格.png"
            alt="" width={1568} height={2172} aria-hidden
            className="animate-breathe-scale h-[clamp(220px,50vh,400px)] md:h-[clamp(300px,62vh,620px)]"
            style={{ width: 'auto', display: 'block', animationDelay: '2s' }}
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
            /* Mobile: ~26px keeps all 8 chars on one line.
               Desktop: ~36px — roughly half the old 72px max,
               visually matches the width of the EN subtitle. */
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
            opacity: 0.7,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Tune inward. Return to self.
        </p>
      </div>
    </section>
  )
}
