import Image from 'next/image'

// Centered layout — images diagonal: top-left (light) + bottom-right (strong)
// This is the hero used on the / home page
export default function HeroCenter() {
  return (
    <section
      style={{
        height: '100svh',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px clamp(24px,5vw,72px) 100px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--base)',
      }}
    >
      {/* Top-left — lighter, entry point */}
      <div style={{ position: 'absolute', top: '-5%', left: '-6%', zIndex: 0, pointerEvents: 'none', opacity: 0.35 }}>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/index/頌缽九宮格.png"
            alt=""
            width={1568}
            height={2172}
            aria-hidden
            className="animate-breathe-scale"
            style={{ height: 'clamp(380px, 68vh, 620px)', width: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* Bottom-right — stronger, exit point */}
      <div style={{ position: 'absolute', bottom: '-34vh', right: '-5%', zIndex: 0, pointerEvents: 'none', opacity: 1 }}>
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <Image
            src="/index/頌缽九宮格.png"
            alt=""
            width={1568}
            height={2172}
            aria-hidden
            className="animate-breathe-scale"
            style={{ height: 'clamp(380px, 68vh, 620px)', width: 'auto', display: 'block', animationDelay: '2s' }}
          />
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 280,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(242,239,234,0.6) 50%, var(--base) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: 44 }}>
          <Image
            src="/zenpple-logo-eng.png"
            alt="Zenpple 森波"
            width={1872}
            height={1874}
            style={{ width: 'clamp(130px, 15vw, 200px)', height: 'auto' }}
          />
        </div>

        <h1
          className="animate-ink-reveal tr-d2"
          style={{
            fontSize: 'clamp(28px, 4.8vw, 50px)',
            letterSpacing: '0.06em',
            lineHeight: 1.15,
            marginBottom: 16,
            animationDelay: '0.3s',
            animationFillMode: 'both',
          }}
        >
          往內定頻，走回自己
        </h1>
        <p
          className="tr-h2"
          style={{
            fontSize: 'clamp(24px, 1.6vw, 18px)',
            letterSpacing: '0.22em',
            color: 'var(--ink)',
            opacity: 0.7,
            textTransform: 'uppercase',
          }}
        >
          Tune inward. Return to self.
        </p>
      </div>

    </section>
  )
}
