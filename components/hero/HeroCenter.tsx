'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HeroCenter() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
      {!isMobile && (
        <div style={{ position: 'absolute', top: '-5%', left: '-6%', zIndex: 0, pointerEvents: 'none', opacity: 0.35 }}>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Image
              src="/index/頌缽九宮格.png"
              alt="" width={1568} height={2172} aria-hidden
              className="animate-breathe-scale"
              style={{ height: 'clamp(380px, 68vh, 620px)', width: 'auto', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* Bottom-right image */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '-52vh' : '-34vh',
        right: '-5%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: isMobile ? 0.65 : 1,
      }}>
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <Image
            src="/index/頌缽九宮格.png"
            alt="" width={1568} height={2172} aria-hidden
            className="animate-breathe-scale"
            style={{
              height: isMobile ? 'clamp(300px, 55vh, 480px)' : 'clamp(380px, 68vh, 620px)',
              width: 'auto',
              display: 'block',
              animationDelay: '2s',
            }}
          />
        </div>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 280,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(242,239,234,0.6) 50%, var(--base) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: 36 }}>
          <Image
            src="/zenpple-logo-eng.png"
            alt="Zenpple 森波"
            width={1872} height={1874}
            style={{
              width: isMobile ? 'clamp(160px, 40vw, 220px)' : 'clamp(130px, 15vw, 200px)',
              height: 'auto',
            }}
          />
        </div>

        <h1
          className="animate-ink-reveal tr-d2"
          style={{
            /* Desktop: half-sized so it roughly matches the visual width of the EN subtitle.
               Mobile: fixed size + nowrap to guarantee single line. */
            fontSize: isMobile ? 'clamp(26px, 6.5vw, 32px)' : 'clamp(24px, 2.5vw, 36px)',
            letterSpacing: '0.06em',
            lineHeight: 1.15,
            marginBottom: 16,
            whiteSpace: isMobile ? 'nowrap' : undefined,
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
