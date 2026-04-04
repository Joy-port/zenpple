import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '聯絡 · 預約 · ZENPPLE 森波',
  description: '傳訊給森波，預約頌缽音流、深層對齊或薩滿靈魂覺醒。LINE 官方帳號 · Instagram',
}

const steps = [
  '傳訊說明你的狀態或想詢問的服務',
  '等候森波回覆，確認服務類型與時間',
  '完成預約確認，收到準備事項提醒',
  '準時出現，放空就好',
]

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
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
          <p className="sec-label">聯絡 · 預約</p>
          <h1
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(36px,6vw,68px)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              marginBottom: 16,
            }}
          >
            想聊聊<br />你的狀態？
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: 'var(--muted)',
              maxWidth: 480,
            }}
          >
            任何問題都歡迎先來聊聊。傳訊給我們，我們會在 24 小時內回覆。
          </p>
        </div>
      </section>

      {/* CONTACT CHANNELS + FLOW */}
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
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'start',
            }}
          >
            {/* Left: channels */}
            <div>
              <p className="sec-label">聯繫管道</p>
              <h2
                style={{
                  fontFamily: 'var(--f-zh)',
                  fontWeight: 900,
                  fontSize: 'clamp(22px,3vw,32px)',
                  letterSpacing: '0.04em',
                  marginBottom: 36,
                }}
              >
                找到我們
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  {
                    label: 'LINE 官方帳號',
                    sub: '傳訊 → 確認時間 → 開始服務',
                    note: '最快速的預約方式',
                    href: '#',
                    color: '#5E8E8A',
                  },
                  {
                    label: 'Instagram @zenpple_',
                    sub: '活動 · 講座 · 最新消息',
                    note: '追蹤掌握最新動態',
                    href: 'https://instagram.com/zenpple_',
                    color: '#7B6B9E',
                  },
                ].map(ch => (
                  <Link
                    key={ch.href}
                    href={ch.href}
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '22px 26px',
                      border: '1px solid var(--border)',
                      borderRadius: 14,
                      textDecoration: 'none',
                      color: 'var(--ink)',
                      background: 'rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(6px)',
                      transition: 'border-color 0.25s, box-shadow 0.25s',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontSize: 11,
                          fontFamily: 'var(--f-mono)',
                          letterSpacing: '0.12em',
                          color: ch.color,
                          marginBottom: 4,
                        }}
                      >
                        {ch.sub}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: 'var(--f-zh-sans)',
                          fontWeight: 700,
                          fontSize: 15,
                          marginBottom: 2,
                        }}
                      >
                        {ch.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 9,
                          letterSpacing: '0.1em',
                          color: 'var(--muted)',
                        }}
                      >
                        {ch.note}
                      </span>
                    </div>
                    <span style={{ fontSize: 16, color: 'var(--muted)', opacity: 0.5, marginLeft: 16 }}>↗</span>
                  </Link>
                ))}
              </div>

              {/* QR placeholder */}
              <div
                style={{
                  marginTop: 28,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    border: '1px solid var(--border)',
                    background: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    opacity: 0.28,
                    borderRadius: 4,
                    flexShrink: 0,
                  }}
                >
                  ▦
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--f-zh-sans)',
                      fontWeight: 700,
                      fontSize: 13,
                      display: 'block',
                      marginBottom: 4,
                    }}
                  >
                    LINE QR Code
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 9,
                      letterSpacing: '0.09em',
                      color: 'var(--muted)',
                      lineHeight: 1.7,
                    }}
                  >
                    掃描直接加入預約<br />
                    [ QR Code 待提供 ]
                  </p>
                </div>
              </div>
            </div>

            {/* Right: booking flow */}
            <div>
              <p className="sec-label">預約流程</p>
              <h2
                style={{
                  fontFamily: 'var(--f-zh)',
                  fontWeight: 900,
                  fontSize: 'clamp(22px,3vw,32px)',
                  letterSpacing: '0.04em',
                  marginBottom: 36,
                }}
              >
                四步就好
              </h2>
              <div
                style={{
                  borderRadius: 14,
                  padding: '40px 36px',
                  background:
                    'linear-gradient(138deg, rgba(181,200,171,0.22) 0%, rgba(195,199,220,0.16) 55%, rgba(215,152,176,0.10) 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                      <span
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 11,
                          color: 'var(--muted)',
                          opacity: 0.45,
                          width: 24,
                          flexShrink: 0,
                          paddingTop: 2,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--f-zh-sans)',
                          fontSize: 14,
                          letterSpacing: '0.03em',
                          lineHeight: 1.7,
                          color: 'var(--ink)',
                        }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div
                style={{
                  marginTop: 20,
                  padding: '16px 20px',
                  background: 'rgba(94,142,138,0.06)',
                  border: '1px solid rgba(94,142,138,0.15)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 18, opacity: 0.7 }}>◎</span>
                <p
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    color: '#5E8E8A',
                    lineHeight: 1.7,
                  }}
                >
                  通常在 24 小時內回覆 · 假日除外
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section
        style={{
          padding: '0 clamp(24px,5vw,72px) clamp(80px,10vw,120px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 9,
              letterSpacing: '0.16em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            服務地點
          </p>
          <div
            style={{
              aspectRatio: '16/5',
              background: 'rgba(42,42,42,0.03)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 14,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 9,
                letterSpacing: '0.1em',
                color: 'var(--muted)',
                opacity: 0.4,
                textAlign: 'center',
                lineHeight: 1.7,
              }}
            >
              Google Map 待嵌入<br />[ 服務地點 · 台灣 ]
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['1 對 1 · 實體預約', '線上服務部分可提供', '工作坊另行公告'].map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                  padding: '5px 12px',
                  border: '1px solid var(--border)',
                  borderRadius: 999,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
