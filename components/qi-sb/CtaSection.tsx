import Link from 'next/link'

export default function CtaSection() {
  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--base)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        padding: 'clamp(60px,8vh,100px) clamp(48px,8vw,120px)',
      }}
    >
      {/* Ghost words */}
      <div aria-hidden style={{ position: 'absolute', left: '-20px', top: '18%', fontFamily: 'var(--f-impact)', fontWeight: 900, fontSize: 'clamp(100px,16vw,220px)', color: 'rgba(90,165,178,0.10)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.01em' }}>
        SOUND
      </div>
      <div aria-hidden style={{ position: 'absolute', right: '-20px', top: '42%', fontFamily: 'var(--f-impact)', fontWeight: 900, fontSize: 'clamp(80px,12vw,170px)', color: 'rgba(90,165,178,0.08)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.01em' }}>
        FLOW
      </div>
      <div aria-hidden style={{ position: 'absolute', left: '5%', bottom: '12%', fontFamily: 'var(--f-impact)', fontWeight: 900, fontSize: 'clamp(60px,9vw,130px)', color: 'rgba(90,165,178,0.07)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.01em' }}>
        home
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2
          className="tr-d2"
          style={{
            fontFamily: 'var(--f-zh-sans)',
            fontWeight: 900,
            fontSize: 'clamp(26px,4vw,44px)',
            color: '#2E5A6A',
            marginBottom: 16,
          }}
        >
          準備好讓聲音帶你回家了嗎
        </h2>
        <p
          style={{
            fontSize: 14,
            color: 'var(--muted)',
            lineHeight: 1.8,
            maxWidth: 400,
            margin: '0 auto 40px',
          }}
        >
          帶著你的當下就好，其他的交給頌缽。傳訊給我們預約或詢問。
        </p>
        <div className="flex flex-col md:flex-row" style={{ gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
          <Link
            href="/contact"
            className="justify-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(13px, 1.2vw, 15px)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#fff',
              textDecoration: 'none',
              background: '#6AAEBB',
              borderRadius: 999,
              padding: '14px 36px',
              transition: 'background 0.2s',
            }}
          >
            預約頌缽體驗 →
          </Link>
          <Link
            href="/contact"
            className="justify-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(13px, 1.2vw, 15px)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#2E5A6A',
              textDecoration: 'none',
              border: '1px solid rgba(90,165,178,0.45)',
              borderRadius: 999,
              padding: '14px 36px',
              transition: 'background 0.2s',
            }}
          >
            BOOK A SESSION →
          </Link>
        </div>
      </div>
    </section>
  )
}
