'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px clamp(24px, 5vw, 72px)',
        background: 'rgba(242,239,234,0.82)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(42,42,42,0.07)',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/zenpple-logo.jpg"
          alt="ZENPPLE 森波"
          width={72}
          height={36}
          style={{ height: 36, width: 'auto', mixBlendMode: 'multiply', opacity: 0.85 }}
        />
      </Link>

      <ul
        style={{
          display: 'flex',
          gap: 28,
          alignItems: 'center',
          listStyle: 'none',
        }}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="tr-h2"
              style={{
                fontSize: 12,
                letterSpacing: '0.22em',
                color: 'var(--ink)',
                textDecoration: 'none',
                opacity: pathname === href ? 1 : 0.7,
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
              fontSize: 12,
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
    </header>
  )
}
