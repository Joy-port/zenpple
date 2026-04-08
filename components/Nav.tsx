'use client'

import { useState } from 'react'
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
  const pathname  = usePathname()
  const [open, setOpen] = useState(false)

  const headerBase: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: Z.nav,
    background: 'rgba(242,239,234,0.88)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    borderBottom: '1px solid rgba(42,42,42,0.07)',
    transition: 'background 0.4s ease, border-color 0.4s ease',
  }

  return (
    <>
      <header style={headerBase}>

        {/* ── Mobile header ── */}
        <div
          className="flex md:hidden items-center"
          style={{ padding: '13px 20px' }}
        >
          {/* Left spacer balances hamburger */}
          <div style={{ width: 44, flexShrink: 0 }} />

          {/* Logo — centered */}
          <Link href="/" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Image src="/zenpple-logo-eng.png" alt="ZENPPLE" width={160} height={40}
              className="nav-logo-light"
              style={{ height: 28, width: 'auto', mixBlendMode: 'multiply', opacity: 0.85 }} />
            <Image src="/zenpple-logo-wh.png" alt="ZENPPLE" width={160} height={40}
              className="nav-logo-dark"
              style={{ height: 28, width: 'auto', display: 'none', opacity: 0.90 }} />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="開啟選單"
            style={{
              flexShrink: 0, width: 44, height: 44,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            }}
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', borderRadius: 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', borderRadius: 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', borderRadius: 1, transition: 'opacity 0.2s' }} />
          </button>
        </div>

        {/* ── Desktop header ── */}
        <div
          className="hidden md:flex items-center justify-between"
          style={{ padding: '18px clamp(24px,5vw,72px)' }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/zenpple-logo-eng.png" alt="ZENPPLE 森波" width={160} height={40}
              className="nav-logo-light"
              style={{ height: 34, width: 'auto', mixBlendMode: 'multiply', opacity: 0.85 }} />
            <Image src="/zenpple-logo-wh.png" alt="ZENPPLE 森波" width={160} height={40}
              className="nav-logo-dark"
              style={{ height: 34, width: 'auto', display: 'none', opacity: 0.90 }} />
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
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    opacity: pathname === href ? 1 : 0.65,
                    transition: 'opacity 0.2s',
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
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: '1px solid rgba(42,42,42,0.25)',
                  borderRadius: 999,
                  transition: 'background 0.2s, color 0.2s',
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
          {/* Overlay top bar — mirrors header */}
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
              <Image
                src="/zenpple-logo-eng.png"
                alt="ZENPPLE"
                width={160}
                height={40}
                style={{ height: 28, width: 'auto', mixBlendMode: 'multiply', opacity: 0.85 }}
              />
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

          {/* Nav links */}
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
