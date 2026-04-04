import Link from 'next/link'
import Image from 'next/image'

const colServices = [
  { href: '/qi-sb', label: '靈性頌缽音流' },
  { href: '/qi-cs', label: '夏 + 玄路徑諮詢' },
  { href: '/hl',    label: '深層系統對齊' },
  { href: '/sc',    label: '薩滿靈魂覺醒' },
]
const colPractice = [
  { href: '/ts-pe', label: '高階執業養成' },
  { href: '/as',    label: '品牌認證考核' },
  { href: '/as-c',  label: '品牌孵化實務' },
  { href: '/co',    label: '聯名企業合作' },
]
const colAbout = [
  { href: '/about',   label: '關於森波' },
  { href: '/contact', label: '聯絡 · 預約' },
  { href: '/ethics',  label: '執業規範' },
  { href: 'https://instagram.com/zenpple_', label: 'Instagram', external: true },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'var(--base)',
        padding: 'clamp(48px,8vw,80px) clamp(24px,5vw,72px) 32px',
      }}
    >
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 48,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(242,239,234,0.08)',
            marginBottom: 28,
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/zenpple-logo.jpg"
              alt="ZENPPLE 森波"
              width={72}
              height={36}
              style={{
                height: 36,
                width: 'auto',
                filter: 'invert(1)',
                opacity: 0.75,
                mixBlendMode: 'screen',
                marginBottom: 16,
                display: 'block',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--f-zh)',
                fontSize: 13,
                letterSpacing: '0.04em',
                color: 'rgba(242,239,234,0.45)',
                lineHeight: 1.7,
              }}
            >
              往內定頻，走回自己<br />
              Tune inward. Return to self.
            </p>
          </div>

          {/* Col 1 */}
          <FooterCol label="個人服務" links={colServices} />
          {/* Col 2 */}
          <FooterCol label="執業養成" links={colPractice} />
          {/* Col 3 */}
          <FooterCol label="森波" links={colAbout} />
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 9,
              letterSpacing: '0.1em',
              color: 'rgba(242,239,234,0.22)',
            }}
          >
            © 2026 ZENPPLE 森波 · All rights reserved
          </p>
          <Link
            href="/ethics"
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 9,
              letterSpacing: '0.1em',
              color: 'rgba(242,239,234,0.25)',
              textDecoration: 'none',
            }}
          >
            執業規範與免責聲明
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  label,
  links,
}: {
  label: string
  links: { href: string; label: string; external?: boolean }[]
}) {
  return (
    <div>
      <p
        style={{
          fontFamily: 'var(--f-mono)',
          fontSize: 9,
          letterSpacing: '0.2em',
          color: 'rgba(242,239,234,0.28)',
          textTransform: 'uppercase',
          marginBottom: 18,
        }}
      >
        {label}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(({ href, label: text, external }) => (
          <li key={href}>
            <Link
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--f-zh-sans)',
                fontSize: 13,
                letterSpacing: '0.02em',
                color: 'rgba(242,239,234,0.55)',
                textDecoration: 'none',
                lineHeight: 1.4,
              }}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
