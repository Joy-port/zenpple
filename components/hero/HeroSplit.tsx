import Image from 'next/image'

// Split layout — text left, image right, image overflows hero boundary
export default function HeroSplit() {
  return (
    <section
      style={{
        height: '100svh',
        minHeight: '100svh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        background: 'var(--base)',
      }}
    >
      {/* Left — text content, vertically centered */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px clamp(32px,5vw,80px) 80px clamp(24px,6vw,100px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ marginBottom: 44 }}>
          <Image
            src="/zenpple-logo-eng.png"
            alt="Zenpple 森波"
            width={1872}
            height={1874}
            style={{ width: 'clamp(100px, 12vw, 160px)', height: 'auto' }}
          />
        </div>

        <h1
          className="animate-ink-reveal tr-d2"
          style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            letterSpacing: '0.06em',
            lineHeight: 1.15,
            marginBottom: 18,
            animationDelay: '0.3s',
            animationFillMode: 'both',
          }}
        >
          往內定頻，走回自己
        </h1>
        <p
          className="tr-h2"
          style={{
            fontSize: 'clamp(11px, 1.2vw, 15px)',
            letterSpacing: '0.22em',
            color: 'var(--ink)',
            opacity: 0.6,
            textTransform: 'uppercase',
          }}
        >
          Tune inward. Return to self.
        </p>
      </div>

      {/* Right — image overflows hero bottom boundary */}
      <div style={{ position: 'relative' }}>
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Image
            src="/頌缽九宮格.png"
            alt=""
            width={1568}
            height={2172}
            aria-hidden
            className="animate-breathe-scale"
            style={{
              position: 'absolute',
              bottom: '-42vh',
              left: '5%',
              height: '85vh',
              width: 'auto',
              opacity: 0.85,
              display: 'block',
            }}
          />
        </div>

        {/* Left edge fade — softens split */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, var(--base) 0%, transparent 20%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 160,
        background: 'linear-gradient(to bottom, transparent, var(--base))',
        pointerEvents: 'none',
        zIndex: 2,
      }} />
    </section>
  )
}
