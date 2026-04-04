import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '執業規範 · ZENPPLE 森波',
  description: '森波執業規範：8 大倫理紅線，非醫療聲明，個案邊界守則。',
}

const redlines = [
  { num: '01', rule: '不以任何形式取代醫療、心理或精神科診斷與治療' },
  { num: '02', rule: '不對個案做出任何醫療相關的預測或保證' },
  { num: '03', rule: '不在個案脆弱狀態下進行不當的服務延伸或銷售' },
  { num: '04', rule: '不公開個案資訊，嚴格保護個案隱私' },
  { num: '05', rule: '不聲稱能夠「治療」任何身心疾病或症狀' },
  { num: '06', rule: '不建立讓個案對服務者產生依賴性的工作關係' },
  { num: '07', rule: '不在執業範圍外提供服務，超出能力範疇時主動轉介' },
  { num: '08', rule: '不讓個人信仰或立場影響對個案的中立支持' },
]

export default function EthicsPage() {
  return (
    <>
      <section
        style={{
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'var(--base)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="wrap" style={{ width: '100%' }}>
          <p className="sec-label">執業規範</p>
          <h1
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(36px,6vw,60px)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              marginBottom: 16,
            }}
          >
            我們的立場與邊界
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--muted)', maxWidth: 520 }}>
            森波的每一位服務者都遵循以下執業規範。這不是免責聲明，是我們真實相信的工作方式。
          </p>
        </div>
      </section>

      {/* 8 Redlines */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p className="sec-label">八大紅線</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 40,
            }}
          >
            我們不做的事
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 680, borderTop: '1px solid var(--border)' }}>
            {redlines.map(r => (
              <div
                key={r.num}
                style={{
                  display: 'flex',
                  gap: 24,
                  padding: '20px 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    color: 'var(--muted)',
                    opacity: 0.5,
                    flexShrink: 0,
                    paddingTop: 2,
                  }}
                >
                  {r.num}
                </span>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--ink)' }}>{r.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-medical disclaimer */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#faf8f5',
        }}
      >
        <div className="wrap" style={{ maxWidth: 680 }}>
          <p className="sec-label">非醫療聲明</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(22px,3vw,34px)',
              letterSpacing: '0.03em',
              marginBottom: 24,
            }}
          >
            關於我們的服務性質
          </h2>
          {[
            '森波的所有服務（包含頌缽音流、深層系統對齊、薩滿靈魂覺醒）均屬於補充性靈性支持工作，不具備任何醫療或心理治療效果。',
            '若您正在接受醫療、心理治療或精神科治療，請勿以本服務取代正式的專業醫療照護。',
            '如有急性身心危機、自傷意念或需要緊急協助，請立即聯繫醫療機構或撥打相關求助專線。',
            '服務效果因人而異，森波不對任何特定結果做出承諾或保證。',
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: 'var(--muted)',
                marginBottom: i < 3 ? 16 : 0,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}
