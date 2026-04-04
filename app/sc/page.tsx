import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '薩滿靈魂覺醒 SC · ZENPPLE 森波',
  description: '五階段意識階梯：從靈魂損失到完整歸返。薩滿靈魂覺醒，深層意識校準。',
}

const stages = [
  {
    num: '01',
    name: '靈魂損失辨識',
    en: 'Soul Loss Recognition',
    desc: '以薩滿視角辨識靈魂碎片的流失事件與模式，建立意識地圖。這是覺醒的起點，也是最誠實的一刻。',
    marker: '診斷',
  },
  {
    num: '02',
    name: '下界旅行',
    en: 'Lower World Journey',
    desc: '進入下界，與動物盟友接觸，尋回被遺忘或壓抑的生命力量。',
    marker: '探索',
  },
  {
    num: '03',
    name: '靈魂碎片回歸',
    en: 'Soul Retrieval',
    desc: '薩滿引導碎片回歸，重新整合分離的意識部分，讓主體重新完整。',
    marker: '整合',
  },
  {
    num: '04',
    name: '祖先線清理',
    en: 'Ancestral Line Clearing',
    desc: '梳理來自家族系統的業力模式，切斷不屬於你的重複輪迴。',
    marker: '釋放',
  },
  {
    num: '05',
    name: '主體覺醒定錨',
    en: 'Sovereign Anchoring',
    desc: '將回歸的完整性固定於現實生活，建立持續的主體意識校準習慣。',
    marker: '定錨',
  },
]

export default function ScPage() {
  return (
    <>
      {/* HERO — dark theme */}
      <section
        style={{
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: '#1a1520',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple wash */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 80% at 25% 50%, rgba(78,63,110,0.85) 0%, rgba(26,21,32,0.95) 65%)',
            pointerEvents: 'none',
          }}
        />

        <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 11,
              letterSpacing: '0.28em',
              color: '#A99BC4',
              opacity: 0.8,
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span style={{ display: 'block', width: 40, height: 1, background: '#A99BC4', opacity: 0.5 }} />
            SC · SHAMANIC SOUL AWAKENING
          </p>
          <h1
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(36px,6vw,68px)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              marginBottom: 12,
              color: '#fff',
            }}
          >
            薩滿靈魂覺醒
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.48)',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Shamanic Soul Awakening
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 480,
            }}
          >
            靈魂在某個時刻離開了。薩滿的工作，是進入那個地方，把它帶回來。
          </p>
        </div>
      </section>

      {/* FIVE STAGES — Vertical Timeline */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#12101a',
        }}
      >
        <div className="wrap">
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#A99BC4',
              textTransform: 'uppercase',
              marginBottom: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            五階段意識階梯
          </p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 56,
              color: '#F2EFEA',
            }}
          >
            從碎片到完整的路
          </h2>

          {/* Timeline */}
          <div
            style={{
              position: 'relative',
              paddingLeft: 48,
              maxWidth: 680,
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: 16,
                top: 8,
                bottom: 8,
                width: 1,
                background: 'rgba(123,107,158,0.25)',
              }}
            />

            {stages.map((stage, i) => (
              <div
                key={stage.num}
                style={{
                  position: 'relative',
                  marginBottom: i < stages.length - 1 ? 52 : 0,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -40,
                    top: 4,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#7B6B9E',
                    border: '2px solid #12101a',
                    outline: '1px solid rgba(123,107,158,0.4)',
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 10,
                      color: 'rgba(169,155,196,0.5)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {stage.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 9,
                      letterSpacing: '0.18em',
                      color: '#A99BC4',
                      opacity: 0.6,
                      padding: '2px 8px',
                      border: '1px solid rgba(169,155,196,0.2)',
                    }}
                  >
                    {stage.marker}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--f-zh)',
                    fontWeight: 700,
                    fontSize: 20,
                    color: '#F2EFEA',
                    marginBottom: 4,
                  }}
                >
                  {stage.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontWeight: 100,
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    color: '#A99BC4',
                    marginBottom: 12,
                  }}
                >
                  {stage.en}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(242,239,234,0.55)' }}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#0e0a18',
        }}
      >
        <div className="wrap">
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: '#A99BC4',
              textTransform: 'uppercase',
              marginBottom: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            服務規格
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              maxWidth: 780,
            }}
          >
            {[
              {
                title: '薩滿靈魂覺醒',
                en: 'Soul Awakening Session',
                desc: '完整的五階段薩滿工作，由禿禿一對一親自執行。包含靈魂損失辨識、下界旅行、靈魂回歸、祖先線清理與主體定錨。',
                duration: '5–6 小時（分次進行）',
                price: '洽詢',
              },
              {
                title: '薩滿諮詢校準',
                en: 'Shamanic Calibration',
                desc: '單次薩滿視角諮詢，以旅行或直覺讀取協助辨識當下的意識阻塞點，不涉及完整靈魂回歸工作。',
                duration: '2 小時',
                price: 'NT$18,000',
              },
            ].map(svc => (
              <div
                key={svc.title}
                style={{
                  padding: '40px 36px',
                  border: '1px solid rgba(123,107,158,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.35s',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: '#A99BC4',
                    opacity: 0.6,
                    marginBottom: 12,
                  }}
                >
                  SC
                </p>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: '#F2EFEA', marginBottom: 6 }}>
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontWeight: 100,
                    fontSize: 12,
                    letterSpacing: '0.25em',
                    color: '#C47B7B',
                    marginBottom: 16,
                  }}
                >
                  {svc.en}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(242,239,234,0.55)', marginBottom: 24 }}>
                  {svc.desc}
                </p>
                <div
                  style={{
                    paddingTop: 16,
                    borderTop: '1px solid rgba(123,107,158,0.12)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 12,
                    fontFamily: 'var(--f-mono)',
                  }}
                >
                  <span style={{ color: '#A99BC4' }}>{svc.duration}</span>
                  <span style={{ color: '#F2EFEA' }}>{svc.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#0e0a18',
          textAlign: 'center',
          borderTop: '1px solid rgba(123,107,158,0.1)',
        }}
      >
        <div className="wrap">
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(22px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 16,
              color: '#F2EFEA',
            }}
          >
            準備走入那個地方了嗎？
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(242,239,234,0.5)', marginBottom: 36, lineHeight: 1.8 }}>
            薩滿工作不是治療，是主體覺醒的一部分。
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--f-mono)',
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#A99BC4',
              textDecoration: 'none',
              border: '1px solid rgba(123,107,158,0.4)',
              borderRadius: 999,
              padding: '14px 32px',
              transition: 'background 0.2s',
            }}
          >
            預約薩滿校準 →
          </Link>
        </div>
      </section>
    </>
  )
}
