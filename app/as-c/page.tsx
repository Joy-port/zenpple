import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '品牌孵化實務 AS-C · ZENPPLE 森波',
  description: '靈性品牌孵化：從品牌定位到數位工作流，夏陪你把感知長成可執業的品牌。',
}

export default function AsCPage() {
  return (
    <>
      <section
        style={{
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'linear-gradient(160deg, #f5ede5 0%, #F2EFEA 100%)',
        }}
      >
        <div className="wrap" style={{ width: '100%' }}>
          <p className="sec-label">品牌孵化</p>
          <h1
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(36px,6vw,68px)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              marginBottom: 12,
            }}
          >
            品牌孵化實務
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: '#C4784A',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            AS-C · Brand Incubation
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)', maxWidth: 520 }}>
            感知有了，品牌還沒有。夏從策略定錨到數位工作流，陪你把它真實建起來。
          </p>
        </div>
      </section>

      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 20,
              maxWidth: 900,
            }}
          >
            {[
              { title: '靈性品牌定位', desc: '找到你的核心服務語言、目標客群與品牌聲音，讓人看見你在做什麼。' },
              { title: '服務架構設計', desc: '把感知轉化為可溝通的服務產品，設計合理的價格與入場路徑。' },
              { title: '數位工作流建立', desc: '預約系統、個案管理、內容發佈——讓行政不再消耗你的能量。' },
              { title: 'IG / 內容策略', desc: '靈性品牌的內容邏輯，如何在不販賣焦慮的前提下真實溝通。' },
            ].map(item => (
              <div
                key={item.title}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(196,120,74,0.12)',
                  borderRadius: 16,
                  padding: '36px 28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--f-zh)',
                    fontWeight: 700,
                    fontSize: 17,
                    letterSpacing: '0.04em',
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
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
                color: '#C4784A',
                textDecoration: 'none',
                border: '1px solid rgba(196,120,74,0.35)',
                borderRadius: 999,
                padding: '14px 32px',
              }}
            >
              詢問品牌孵化 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
