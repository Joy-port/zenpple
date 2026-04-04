import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '靈性頌缽音流 QI-SB · ZENPPLE 森波',
  description: '以頌缽頻率、脈輪牌卡與音叉，快速定頻你的當下狀態。適合潮間帶的人。',
}

const services = [
  {
    code: 'QI-01',
    name: '脈輪牌卡 + 頌缽',
    duration: '1 小時',
    price: 'NT$3,500',
    desc: '以脈輪牌卡讀取能量現況，搭配針對性頌缽頻率引導，快速梳理當下的身心狀態。',
    by: '禿禿',
  },
  {
    code: 'QI-02',
    name: '靈擺快速問事',
    duration: '30 分鐘',
    price: 'NT$1,800',
    desc: '透過靈擺直接與潛意識溝通，針對單一問題或決策點進行快速能量確認。',
    by: '禿禿',
  },
  {
    code: 'QI-03',
    name: '企業包場頌缽',
    duration: '2–3 小時',
    price: '洽詢',
    desc: '為企業團隊提供集體定頻體驗，建立共同能量基礎，適合年度啟動、季末收尾或任何需要凝聚的時刻。',
    by: '禿禿',
  },
  {
    code: 'QI-04',
    name: '閨蜜團體音流',
    duration: '2 小時',
    price: '洽詢',
    desc: '3–6 人小團體的共頻體驗，在安全的能量場中一起定頻，適合好友共同體驗。',
    by: '禿禿',
  },
]

export default function QiSbPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'linear-gradient(160deg, #e8eff6 0%, #F2EFEA 55%, #edf0eb 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Large bg character */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '5vw',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(200px,28vw,360px)',
              color: 'rgba(74,107,138,0.06)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              userSelect: 'none',
            }}
          >
            缽
          </span>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.25em',
              color: '#4A6B8A',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span style={{ display: 'block', width: 40, height: 1, background: '#4A6B8A', opacity: 0.6 }} />
            QI-SB · SOUND FLOW
          </p>
          <h1
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(36px,6vw,68px)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              marginBottom: 12,
              color: 'var(--ink)',
            }}
          >
            靈性頌缽音流
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: '#4A6B8A',
              opacity: 0.7,
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Spiritual Sound Flow
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: 'var(--ink)',
              opacity: 0.65,
              maxWidth: 520,
            }}
          >
            以頌缽頻率為媒介，快速定頻當下的身心狀態。不需要任何準備，帶著你的當下就好。
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p className="sec-label">服務項目</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 48,
            }}
          >
            選擇你的入場方式
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {services.map(svc => (
              <div
                key={svc.code}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(74,107,138,0.12)',
                  borderRadius: 20,
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 10,
                      letterSpacing: '0.22em',
                      color: '#4A6B8A',
                      marginBottom: 8,
                    }}
                  >
                    {svc.code}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--f-zh)',
                      fontWeight: 700,
                      fontSize: 20,
                      letterSpacing: '0.04em',
                      marginBottom: 12,
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.85, color: '#888' }}>{svc.desc}</p>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingTop: 16,
                      borderTop: '1px solid rgba(74,107,138,0.1)',
                      fontSize: 12,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--f-mono)', color: '#4A6B8A' }}>{svc.duration}</span>
                    <span style={{ fontFamily: 'var(--f-mono)', color: 'var(--ink)', fontWeight: 700 }}>
                      {svc.price}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 11,
                      color: 'var(--muted)',
                      marginTop: 6,
                      fontFamily: 'var(--f-mono)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    by {svc.by}
                  </p>
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
          background: 'var(--base)',
          textAlign: 'center',
        }}
      >
        <div className="wrap">
          <p
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(22px,3vw,34px)',
              letterSpacing: '0.04em',
              marginBottom: 16,
            }}
          >
            準備好定頻了嗎？
          </p>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 36, lineHeight: 1.8 }}>
            帶著你的當下就好，其他的交給頌缽。
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
              color: '#4A6B8A',
              textDecoration: 'none',
              border: '1px solid rgba(74,107,138,0.35)',
              borderRadius: 999,
              padding: '14px 32px',
              transition: 'background 0.2s',
            }}
          >
            預約頌缽音流 →
          </Link>
        </div>
      </section>
    </>
  )
}
