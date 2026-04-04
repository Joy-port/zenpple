import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '高階執業養成 TS-PE · ZENPPLE 森波',
  description: '為靈性工作者設計的雙軸修煉路徑：技法養成 × 品牌落地。',
}

export default function TsPePage() {
  return (
    <>
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'linear-gradient(160deg, #f5f0ea 0%, #ede4d8 100%)',
        }}
      >
        <div className="wrap" style={{ width: '100%' }}>
          <p className="sec-label">執業養成</p>
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
            高階執業養成
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: '#B09070',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            TS · Professional Mastery
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)', maxWidth: 520 }}>
            技法紮實，才能真正服人。雙軸修煉路徑：一條練技法，一條練品牌。
            為有意成為靈性工作者的你而設計。
          </p>
        </div>
      </section>

      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
          textAlign: 'center',
        }}
      >
        <div className="wrap">
          <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 36, lineHeight: 1.9, maxWidth: 560, margin: '0 auto 36px' }}>
            課程內容與招生資訊持續更新中。歡迎先聯繫森波，了解是否適合你的時間點。
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
              color: '#B09070',
              textDecoration: 'none',
              border: '1px solid rgba(176,144,112,0.35)',
              borderRadius: 999,
              padding: '14px 32px',
            }}
          >
            詢問執業養成 →
          </Link>
        </div>
      </section>
    </>
  )
}
