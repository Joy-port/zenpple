import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      data-nav-theme="dark"
      data-nav-color="rgba(90,165,178,0.12)"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(150deg, #6AAEBB 0%, #6BBFB2 40%, #7DCCC0 70%, #6BB8C2 100%)',
      }}
    >
      {/* Watercolor wash overlays */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,255,255,0.07) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 70% at 75% 70%, rgba(60,130,148,0.4) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 40% at 50% 50%, rgba(90,165,178,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Ghost text */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '-10px',
          bottom: '4vh',
          fontFamily: 'var(--f-impact)',
          fontWeight: 700,
          fontSize: 'clamp(56px,9vw,120px)',
          lineHeight: 1.05,
          color: 'rgba(255,255,255,0.05)',
          letterSpacing: '-0.01em',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        SINGING<br />BOWL
      </div>

      {/* Ripple rings */}
      {[0, 1, 2].map(i => (
        <div
          key={i}
          aria-hidden
          style={{
            position: 'absolute',
            width: 'clamp(200px,30vw,400px)',
            height: 'clamp(200px,30vw,400px)',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.12)',
            animation: `qi-ripple 4s ease-out ${i * 1.3}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Background bowl image */}
      <Image
        src="/qi-sb/bowl-white.png"
        alt=""
        aria-hidden
        width={600}
        height={600}
        style={{
          position: 'absolute',
          right: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(300px,42vw,600px)',
          height: 'auto',
          opacity: 0.10,
          pointerEvents: 'none',
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: 'clamp(100px,15vw,160px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          maxWidth: 680,
        }}
      >
        <h1
          className="tr-d2"
          style={{
            fontFamily: 'var(--f-impact)',
            fontWeight: 900,
            fontSize: 'clamp(32px,5vw,58px)',
            color: '#FDFBF8',
            lineHeight: 1.25,
            marginBottom: 14,
          }}
        >
          聲音是最古老的<br />回家方式
        </h1>
        <p
          style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 300,
            fontSize: 20,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.65)',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          Sound is the oldest way home
        </p>
        <p
          style={{
            fontFamily: 'var(--f-body)',
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.68)',
            maxWidth: 420,
            margin: '0 auto 44px',
          }}
        >
          不需翻譯，不需理解，<br />
          只需讓缽聲穿透——<br />
          你的細胞已知道路。
        </p>
      </div>
    </section>
  )
}
