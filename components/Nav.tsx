'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Z } from '@/constants/zIndex'

const links = [
  { href: '/qi-sb',  label: '頌缽音流' },
  { href: '/hl',     label: '深層對齊' },
  { href: '/sc',     label: '薩滿覺醒' },
  { href: '/ts-pe',  label: '執業養成' },
  { href: '/as',     label: '品牌認證' },
  { href: '/as-c',   label: '品牌孵化' },
  { href: '/about',  label: '關於森波' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isHero, setIsHero] = useState(true)
  const [isDarkSection, setIsDarkSection] = useState(false)

  useEffect(() => {
    const update = () => {
      setIsHero(window.scrollY < 80)
      const darks = document.querySelectorAll('[data-nav-theme="dark"]')
      setIsDarkSection(Array.from(darks).some(el => {
        const rect = el.getBoundingClientRect()
        return rect.top <= 64 && rect.bottom > 64
      }))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const isHl = pathname === '/hl'

  // Pages with a light hero (cream/base bg) — nav text stays dark at top
  const isLightHeroPage = pathname === '/'
  const isHeroDark  = (isHero && !isLightHeroPage) || isDarkSection  // transparent + white text
  const isHeroLight = isHero && isLightHeroPage                       // transparent + dark text

  const atTop = isHeroDark || isHeroLight || isDarkSection

  // Use same colour with 0→target alpha so background/border interpolate smoothly
  const bgColor   = isHl ? `rgba(176,100,100,${atTop ? 0 : 0.90})` : `rgba(242,239,234,${atTop ? 0 : 0.88})`
  const borderClr = isHl ? `rgba(255,255,255,${atTop ? 0 : 0.10})` : `rgba(42,42,42,${atTop ? 0 : 0.07})`

  const headerBase: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: Z.nav,
    background: bgColor,
    backdropFilter: `blur(${atTop ? 0 : 18}px)`,
    WebkitBackdropFilter: `blur(${atTop ? 0 : 18}px)`,
    borderBottom: `1px solid ${borderClr}`,
    transition: 'background 0.45s ease, backdrop-filter 0.45s ease, border-bottom-color 0.45s ease',
  }

  // isHeroDark or scrolled hl → white; isHeroLight or scrolled other pages → dark
  const linkColor = (isHeroDark || isHl) ? 'rgba(255,255,255,0.90)' : 'var(--ink)'

  return (
    <>
      <header style={headerBase}>

        {/* ── Mobile header ── */}
        <div
          className="flex md:hidden items-center"
          style={{ padding: '13px 20px' }}
        >
          <div style={{ width: 44, flexShrink: 0 }} />

          <Link href="/" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            {(isHeroDark || isHl)
              ? <Image src="/zenpple-logo-wh.png"  alt="ZENPPLE" width={160} height={40} style={{ height: 38, width: 'auto', opacity: 0.90 }} />
              : <Image src="/zenpple-logo-eng.png" alt="ZENPPLE" width={160} height={40} style={{ height: 38, width: 'auto', mixBlendMode: 'multiply', opacity: 0.85 }} />
            }
          </Link>

          <button
            onClick={() => setOpen(o => !o)}
            aria-label="開啟選單"
            style={{
              flexShrink: 0, width: 44, height: 44,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            }}
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: linkColor, borderRadius: 1, transition: 'background 0.45s ease' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: linkColor, borderRadius: 1, transition: 'background 0.45s ease' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: linkColor, borderRadius: 1, transition: 'background 0.45s ease' }} />
          </button>
        </div>

        {/* ── Desktop header ── */}
        <div
          className="hidden md:flex items-center justify-between"
          style={{ padding: '18px clamp(24px,5vw,72px)' }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            {(isHeroDark || isHl)
              ? <Image src="/zenpple-logo-wh.png"  alt="ZENPPLE 森波" width={160} height={40} style={{ height: 48, width: 'auto', opacity: 0.90 }} />
              : <Image src="/zenpple-logo-eng.png" alt="ZENPPLE 森波" width={160} height={40} style={{ height: 48, width: 'auto', mixBlendMode: 'multiply', opacity: 0.85 }} />
            }
          </Link>

          <ul style={{ display: 'flex', gap: 28, alignItems: 'center', listStyle: 'none' }}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="tr-h2"
                  style={{
                    fontSize: 13,
                    letterSpacing: '0.22em',
                    color: linkColor,
                    textDecoration: 'none',
                    opacity: pathname === href ? 1 : 0.65,
                    transition: 'opacity 0.2s, color 0.45s ease',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="tr-h2"
                style={{
                  fontSize: 13,
                  letterSpacing: '0.22em',
                  color: linkColor,
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: (isHeroDark || isHl) ? '1px solid rgba(255,255,255,0.40)' : '1px solid rgba(42,42,42,0.25)',
                  borderRadius: 999,
                  transition: 'background 0.2s, color 0.45s ease, border-color 0.45s ease',
                }}
              >
                預約諮詢
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed', inset: 0, zIndex: Z.nav,
            background: 'rgba(242,239,234,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex', alignItems: 'center',
              padding: '13px 20px',
              borderBottom: '1px solid rgba(42,42,42,0.08)',
              flexShrink: 0,
            }}
          >
            <div style={{ width: 44, flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <Image src="/zenpple-logo-eng.png" alt="ZENPPLE" width={160} height={40}
                style={{ height: 38, width: 'auto', mixBlendMode: 'multiply', opacity: 0.85 }} />
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="關閉選單"
              style={{
                flexShrink: 0, width: 44, height: 44,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 20, color: 'var(--ink)', opacity: 0.45, lineHeight: 1,
              }}
            >✕</button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', padding: '24px 32px 48px' }}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="tr-h1"
                style={{
                  fontSize: 20,
                  letterSpacing: '0.05em',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(42,42,42,0.06)',
                  opacity: pathname === href ? 1 : 0.7,
                  transition: 'opacity 0.2s',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="tr-h1"
              style={{
                marginTop: 28,
                display: 'block',
                textAlign: 'center',
                fontSize: 17,
                letterSpacing: '0.08em',
                color: 'var(--ink)',
                textDecoration: 'none',
                padding: '15px 32px',
                border: '1px solid rgba(42,42,42,0.3)',
                borderRadius: 999,
              }}
            >
              預約諮詢
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
