import Image from 'next/image'
import Link from 'next/link'
import PersonaCards from '@/components/PersonaCards'

const pyramidRows = [
  {
    padding: '0 22%',
    left:  { label: '薩滿靈魂覺醒', en: 'Shamanic Soul Awakening',  href: '/sc',    bg: 'rgba(168,184,208,0.15)', bar: 'rgba(168,184,208,0.6)' },
    right: { label: '高階執業養成', en: 'Professional Mastery',      href: '/ts-pe', bg: 'rgba(220,200,120,0.15)', bar: 'rgba(220,200,120,0.7)' },
  },
  {
    padding: '0 10%',
    left:  { label: '深層系統對齊', en: 'Deep System Alignment',     href: '/hl',    bg: 'rgba(196,160,184,0.15)', bar: 'rgba(196,160,184,0.6)' },
    right: { label: '品牌認證考核', en: 'Brand Certification',       href: '/as',    bg: 'rgba(94,142,138,0.15)',  bar: 'rgba(94,142,138,0.6)'  },
  },
  {
    padding: '0 0',
    left:  { label: '即時洞察梳理', en: 'Quick Insight & Sound Flow', href: '/qi-sb', bg: 'rgba(212,168,154,0.15)', bar: 'rgba(212,168,154,0.6)' },
    right: { label: '品牌孵化實務', en: 'Brand Incubation',           href: '/as-c',  bg: 'rgba(176,144,112,0.15)', bar: 'rgba(176,144,112,0.6)' },
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
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
        {/* Top-left — lighter, entry point, appears first */}
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

        {/* Bottom-right — stronger, exit point, appears after content settles */}
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

        {/* Hero bottom gradient — fades image out softly */}
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
          {/* Logo above the tagline */}
          <div style={{ marginBottom: 44 }}>
            <Image
              src="/zenpple-logo-eng.png"
              alt="Zenpple 森波"
              width={1872}
              height={1874}
              style={{
                width: 'clamp(130px, 15vw, 200px)',
                height: 'auto',
              }}
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
              fontSize: 'clamp(13px, 1.6vw, 18px)',
              letterSpacing: '0.22em',
              color: 'var(--ink)',
              opacity: 0.7,
              textTransform: 'uppercase',
            }}
          >
            Tune inward. Return to self.
          </p>
        </div>

        {/* Scroll hint — text + vertical line */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: 'var(--muted)',
            opacity: 0.45,
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, var(--muted), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── PERSONA CARDS ── */}
      <PersonaCards />

      {/* ── ECOSYSTEM ── */}
      <section
        style={{
          padding: 'clamp(80px,10vw,130px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p className="sec-label">森波生態系</p>
          <p
            className="tr-h1"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(18px,2.5vw,26px)',
              color: 'var(--ink)',
              opacity: 0.55,
              marginBottom: 36,
            }}
          >
            兩個方向，一座山。
          </p>

          {/* Pyramid rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 8 }}>
            {pyramidRows.map(({ padding, left, right }, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 20px 1fr',
                  padding,
                }}
              >
                <Link
                  href={left.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    textAlign: 'right',
                    padding: '14px 16px 14px 12px',
                    borderRadius: '8px 0 0 8px',
                    textDecoration: 'none',
                    background: left.bg,
                    transition: 'filter 0.2s',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-zh-sans)',
                      fontWeight: 700,
                      fontSize: 'clamp(13px,1.5vw,16px)',
                      letterSpacing: '0.04em',
                      color: 'var(--ink)',
                      marginBottom: 2,
                    }}
                  >
                    {left.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontWeight: 300,
                      fontSize: 9,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    {left.en}
                  </span>
                </Link>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'stretch',
                    width: 20,
                  }}
                >
                  <div style={{ flex: 1, width: 3, background: left.bar, margin: '0 auto' }} />
                  <div style={{ flex: 1, width: 3, background: right.bar, margin: '0 auto' }} />
                </div>

                <Link
                  href={right.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    textAlign: 'left',
                    padding: '14px 12px 14px 16px',
                    borderRadius: '0 8px 8px 0',
                    textDecoration: 'none',
                    background: right.bg,
                    transition: 'filter 0.2s',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-zh-sans)',
                      fontWeight: 700,
                      fontSize: 'clamp(13px,1.5vw,16px)',
                      letterSpacing: '0.04em',
                      color: 'var(--ink)',
                      marginBottom: 2,
                    }}
                  >
                    {right.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontWeight: 300,
                      fontSize: 9,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    {right.en}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Direction labels */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 20px 1fr',
              marginTop: 10,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 9,
                letterSpacing: '0.16em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                textAlign: 'right',
                paddingRight: 16,
              }}
            >
              靈性調頻
            </span>
            <span />
            <span
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 9,
                letterSpacing: '0.16em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                textAlign: 'left',
                paddingLeft: 16,
              }}
            >
              執業養成
            </span>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section
        style={{
          padding: 'clamp(60px,8vw,100px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p className="sec-label">創辦人</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 18,
              paddingTop: 28,
              borderTop: '1px solid var(--border)',
            }}
          >
            {[
              {
                name: '禿禿 TWO TWO',
                roles: '頌缽 · 薩滿 · 能量定頻',
                desc: '身心狀態、潛意識定頻，以聲音引導感知回歸內在安定',
              },
              {
                name: '夏',
                roles: '靈性顧問 · 易經 · 品牌策略',
                desc: '大方向定錨與理路梳理，結合玄天上帝指引與數位實務',
              },
            ].map(f => (
              <Link
                key={f.name}
                href="/about"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '24px 22px',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.5)',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'rgba(42,42,42,0.05)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'var(--f-mono)',
                    fontSize: 11,
                    letterSpacing: '0.05em',
                    color: 'var(--muted)',
                  }}
                >
                  photo
                </div>
                <div>
                  <span
                    className="tr-h1"
                    style={{
                      fontSize: 15,
                      color: 'var(--ink)',
                      display: 'block',
                      marginBottom: 4,
                    }}
                  >
                    {f.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 9,
                      letterSpacing: '0.08em',
                      color: 'var(--muted)',
                      lineHeight: 1.7,
                      display: 'block',
                    }}
                  >
                    {f.roles}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: 'var(--muted)',
                      lineHeight: 1.7,
                      display: 'block',
                      marginTop: 4,
                    }}
                  >
                    {f.desc}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section
        id="contact"
        style={{
          padding: 'clamp(80px,12vw,140px) clamp(24px,5vw,72px)',
          background: 'var(--ink)',
          color: 'var(--base)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Colour blobs */}
        <div style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', background: 'var(--sc-purple)', filter: 'blur(130px)', opacity: 0.28, top: -120, left: -80, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', background: 'var(--hl-rose)', filter: 'blur(110px)', opacity: 0.22, bottom: -80, right: -60, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--qi-sb)', filter: 'blur(90px)', opacity: 0.18, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="sec-label" style={{ color: 'rgba(242,239,234,0.35)', justifyContent: 'center' }}>
            聯絡 · 預約
          </p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(32px,5vw,62px)',
              lineHeight: 1.2,
              color: 'var(--base)',
              marginBottom: 18,
            }}
          >
            準備好了嗎？<br />先來聊聊你的狀態。
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(242,239,234,0.5)',
              lineHeight: 1.9,
              maxWidth: 380,
              margin: '0 auto 52px',
            }}
          >
            不需要準備什麼，把你現在的狀況傳給我們，我們會幫你找到最適合的第一步。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '15px 32px',
                borderRadius: 999,
                fontFamily: 'var(--f-zh-sans)',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                background: 'var(--base)',
                color: 'var(--ink)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
            >
              LINE 官方帳號 ↗
            </Link>
            <Link
              href="https://instagram.com/zenpple_"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '15px 32px',
                borderRadius: 999,
                fontFamily: 'var(--f-zh-sans)',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                background: 'transparent',
                color: 'rgba(242,239,234,0.75)',
                border: '1px solid rgba(242,239,234,0.25)',
                transition: 'border-color 0.25s, color 0.25s',
              }}
            >
              Instagram @zenpple_
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
