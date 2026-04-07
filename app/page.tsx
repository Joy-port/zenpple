import Link from 'next/link'
import HeroCenter from '@/components/hero/HeroCenter'
// ── PERSONA CARD ON / ── PersonaCardFocus (card dissolves, expand slides right)
import PersonaCardFocus from '@/components/persona-card/PersonaCardFocus'
import EcosystemMountain2 from '@/components/ecosystem/EcosystemMountain2'
import SectionTransition from '@/components/ui/SectionTransition'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroCenter />

      {/* ── PERSONA CARDS ── */}
      <div style={{ position: 'relative' }}>
        <SectionTransition position="top" />
        <PersonaCardFocus />
      </div>

      {/* ── ECOSYSTEM ── */}
      <div style={{ position: 'relative' }}>
        <SectionTransition position="top" />
        <EcosystemMountain2 />
      </div>

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
