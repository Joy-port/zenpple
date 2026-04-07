import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '品牌認證考核 AS · ZENPPLE 森波',
  description: '森波品牌認證：四關卡嚴格考核，確保每位認證師的技法與倫理符合森波標準。',
}

const levels = [
  { num: '01', name: '申請資格確認', desc: '提交執業經歷與案例說明，由禿禿與夏審核是否進入考核流程。' },
  { num: '02', name: '技法實測', desc: '現場實作測試，確認頌缽技法、能量讀取與引導能力達到執業水準。' },
  { num: '03', name: '倫理口試', desc: '針對執業規範、個案邊界與非醫療聲明進行深度口試。' },
  { num: '04', name: '品牌定位審查', desc: '確認個人品牌方向與森波生態不衝突，能夠獨立執業並清楚溝通服務內容。' },
]

export default function AsPage() {
  return (
    <>
      <section
        style={{
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'linear-gradient(160deg, #ebf3f2 0%, #F2EFEA 100%)',
        }}
      >
        <div className="wrap" style={{ width: '100%' }}>
          <p className="sec-label">認證考核</p>
          <h1
            className="tr-d2"
            style={{
              fontSize: 'clamp(36px,6vw,68px)',
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            品牌認證考核
          </h1>
          <p
            className="tr-d1"
            style={{
              fontSize: 13,
              color: '#5E8E8A',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            AS · Brand Certification
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)', maxWidth: 520 }}>
            森波認證不是結業證書，是執業資格的嚴格確認。四關卡，每一關都有門檻。
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
          <p className="sec-label">四關卡流程</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 680 }}>
            {levels.map((l, i) => (
              <div
                key={l.num}
                style={{
                  display: 'flex',
                  gap: 24,
                  padding: '28px 32px',
                  border: '1px solid rgba(94,142,138,0.15)',
                  borderRadius: 12,
                  background: '#fff',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 12,
                    color: '#5E8E8A',
                    flexShrink: 0,
                    paddingTop: 2,
                  }}
                >
                  {l.num}
                </span>
                <div>
                  <h3
                    className="tr-h1"
                    style={{
                      fontSize: 18,
                      marginBottom: 8,
                    }}
                  >
                    {l.name}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--muted)' }}>{l.desc}</p>
                </div>
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
                color: '#5E8E8A',
                textDecoration: 'none',
                border: '1px solid rgba(94,142,138,0.35)',
                borderRadius: 999,
                padding: '14px 32px',
              }}
            >
              詢問認證資格 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
