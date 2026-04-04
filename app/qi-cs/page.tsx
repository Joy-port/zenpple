'use client'

import { useState } from 'react'
import Link from 'next/link'
// ── 情境對照表資料 ────────────────────────────────────────────────────────────
const scenarios = [
  {
    id: 1,
    situation: '感知到方向，但不確定是真實的直覺還是焦慮',
    tag: '方向校準',
    tagColor: '#607866',
    service: '易經理路定調',
    serviceEn: 'I Ching Alignment',
    what: '以易卦切入當下能量狀態，辨識哪些是真實的內在訊號，哪些是雜訊干擾，還原你的判斷主軸。',
    duration: '1.5–2 小時',
    price: 'NT$6,000',
  },
  {
    id: 2,
    situation: '靈性路上走了一段，想把感知轉化為可執業的服務',
    tag: '事業定錨',
    tagColor: '#4A7A5A',
    service: '靈性品牌策略定錨',
    serviceEn: 'Spiritual Brand Anchoring',
    what: '從你的核心感知出發，定義服務語言、目標對象與品牌定位，讓你清楚知道自己在做什麼、為誰而做。',
    duration: '2–3 小時',
    price: 'NT$9,000',
  },
  {
    id: 3,
    situation: '有玄天上帝或指導靈的指引訊息，不知道如何解讀與落地',
    tag: '玄天指引',
    tagColor: '#3D5C48',
    service: '玄天上帝路徑諮詢',
    serviceEn: 'Xuantian Path Reading',
    what: '夏作為玄天上帝的代言者，解讀靈性訊息的實質意涵，轉化為現實層面可執行的方向與行動。',
    duration: '1–1.5 小時',
    price: 'NT$5,000',
  },
  {
    id: 4,
    situation: '想創立靈性品牌，需要策略與靈性視角同時到位',
    tag: '全方位陪跑',
    tagColor: '#212E27',
    service: '夏＋玄全方位陪伴',
    serviceEn: 'Full-Spectrum Mentorship',
    what: '策略思維 × 玄天指引的雙軌陪跑。從品牌定位到數位工作流，以靈性為底，建立真實可持續的執業系統。',
    duration: '長期陪伴 · 洽詢',
    price: '洽詢',
  },
]

// ── 指導靈宣言段落 ────────────────────────────────────────────────────────────
const declaration = {
  title: '玄天上帝的宣言',
  titleEn: 'Declaration of the Spirit Guide',
  preamble: '以下文字，是夏在多年修行與服務過程中，從玄天上帝的指引中整理而來的核心精神。這不是宗教宣示，而是一份工作誓言——說清楚我們在做什麼，以及我們為什麼這樣做。',
  lines: [
    {
      zh: '我不替你做決定。',
      sub: '指引的本質是還原你的判斷力，而非代替你的意志。',
    },
    {
      zh: '我只說真實的東西。',
      sub: '訊息可能不好聽，但我不說讓你舒服卻不真實的話。',
    },
    {
      zh: '方向是你的，路也是你自己走的。',
      sub: '諮詢之後，你仍然是那個選擇與承擔的人。沒有人能免除你的主體責任。',
    },
    {
      zh: '我陪你看清楚，不陪你逃跑。',
      sub: '所有的指引都是為了讓你更清醒，而不是更依賴。',
    },
  ],
  closing: '夏 · 玄天上帝代言者',
}

export default function QiCsPage() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'linear-gradient(160deg, #e8ede9 0%, #F2EFEA 55%, #eaede8 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background character */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '6vw',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(200px,28vw,380px)',
              color: 'rgba(96,120,102,0.07)',
              lineHeight: 1,
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            玄
          </span>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.25em',
              color: '#607866',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span style={{ display: 'block', width: 40, height: 1, background: '#607866', opacity: 0.6 }} />
            QI-CS · XIA + XUANTIAN PATH
          </p>
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
            夏＋玄路徑諮詢
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: '#607866',
              opacity: 0.75,
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Xia + Xuantian Path Consultation
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
            不給你答案——給你一個更清晰的問題。
            夏以易經理路與玄天上帝指引，協助你梳理方向、定錨事業，讓感知真正落地為行動。
          </p>
        </div>
      </section>

      {/* ── 情境對照表 Feature Comparison ── */}
      <section
        style={{
          padding: 'clamp(80px,10vw,130px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p className="sec-label">情境對照表</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,42px)',
              letterSpacing: '0.03em',
              marginBottom: 12,
            }}
          >
            你的狀態，決定你的切入點
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'var(--muted)',
              lineHeight: 1.85,
              maxWidth: 560,
              marginBottom: 52,
            }}
          >
            點擊符合你的情境，了解對應的諮詢服務內容與費用。
          </p>

          {/* Scenario rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 860 }}>
            {scenarios.map(s => (
              <div
                key={s.id}
                onClick={() => setActiveScenario(prev => prev === s.id ? null : s.id)}
                style={{
                  border: `1px solid ${activeScenario === s.id ? s.tagColor : 'rgba(42,42,42,0.09)'}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.25s',
                  background: activeScenario === s.id ? `rgba(${hexToRgb(s.tagColor)},0.03)` : '#fff',
                }}
              >
                {/* Row header */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: 20,
                    alignItems: 'center',
                    padding: '22px 28px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 9,
                      letterSpacing: '0.15em',
                      color: s.tagColor,
                      padding: '4px 12px',
                      border: `1px solid ${s.tagColor}44`,
                      borderRadius: 999,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {s.tag}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--f-zh)',
                      fontWeight: 700,
                      fontSize: 15,
                      letterSpacing: '0.02em',
                      lineHeight: 1.5,
                      color: 'var(--ink)',
                    }}
                  >
                    {s.situation}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 14,
                      color: 'var(--muted)',
                      opacity: 0.4,
                      transition: 'transform 0.25s',
                      display: 'inline-block',
                      transform: activeScenario === s.id ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    ↓
                  </span>
                </div>

                {/* Expanded detail */}
                <div
                  style={{
                    maxHeight: activeScenario === s.id ? 320 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(.4,0,.2,1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 28px 32px',
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: 40,
                      alignItems: 'start',
                      borderTop: `1px solid rgba(${hexToRgb(s.tagColor)},0.12)`,
                      paddingTop: 28,
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 9,
                          letterSpacing: '0.18em',
                          color: s.tagColor,
                          marginBottom: 8,
                          textTransform: 'uppercase',
                        }}
                      >
                        {s.service}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--f-display)',
                          fontWeight: 100,
                          fontSize: 10,
                          letterSpacing: '0.22em',
                          color: 'var(--muted)',
                          marginBottom: 16,
                          textTransform: 'uppercase',
                        }}
                      >
                        {s.serviceEn}
                      </p>
                      <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--ink)', opacity: 0.7 }}>
                        {s.what}
                      </p>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: 'right' }}>
                      <p
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 10,
                          letterSpacing: '0.1em',
                          color: 'var(--muted)',
                          marginBottom: 6,
                        }}
                      >
                        {s.duration}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 18,
                          fontWeight: 700,
                          color: s.tagColor,
                          letterSpacing: '0.04em',
                          marginBottom: 20,
                        }}
                      >
                        {s.price}
                      </p>
                      <Link
                        href="/contact"
                        onClick={e => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          fontFamily: 'var(--f-mono)',
                          fontSize: 10,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: s.tagColor,
                          textDecoration: 'none',
                          border: `1px solid ${s.tagColor}55`,
                          borderRadius: 999,
                          padding: '8px 18px',
                          transition: 'background 0.2s',
                        }}
                      >
                        預約此服務 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Not sure which? */}
          <div
            style={{
              marginTop: 32,
              maxWidth: 860,
              padding: '24px 28px',
              background: 'rgba(96,120,102,0.04)',
              border: '1px solid rgba(96,120,102,0.15)',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
              不確定哪個情境最符合你？傳訊給夏說說你的狀態，她會幫你判斷從哪裡開始。
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#607866',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              傳訊諮詢 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 指導靈宣言 ── */}
      <section
        style={{
          padding: 'clamp(80px,10vw,130px) clamp(24px,5vw,72px)',
          background: 'linear-gradient(160deg, #0f1e14 0%, #162518 40%, #1e3020 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(96,120,102,0.18), transparent),' +
              'radial-gradient(ellipse 40% 40% at 20% 60%, rgba(61,92,72,0.22), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
          {/* Header */}
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.25em',
              color: 'rgba(96,120,102,0.6)',
              marginBottom: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              textTransform: 'uppercase',
            }}
          >
            <span style={{ display: 'block', width: 40, height: 1, background: 'rgba(96,120,102,0.4)' }} />
            {declaration.titleEn}
          </p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(26px,3.5vw,40px)',
              letterSpacing: '0.04em',
              color: '#F2EFEA',
              marginBottom: 28,
            }}
          >
            {declaration.title}
          </h2>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.9,
              color: 'rgba(242,239,234,0.48)',
              marginBottom: 56,
              maxWidth: 560,
              borderLeft: '2px solid rgba(96,120,102,0.3)',
              paddingLeft: 20,
              fontStyle: 'italic',
            }}
          >
            {declaration.preamble}
          </p>

          {/* Declaration lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {declaration.lines.map((line, i) => (
              <div
                key={i}
                style={{
                  padding: '32px 0',
                  borderBottom: '1px solid rgba(242,239,234,0.06)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 32,
                  alignItems: 'start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 9,
                    color: 'rgba(96,120,102,0.4)',
                    letterSpacing: '0.2em',
                    paddingTop: 6,
                    minWidth: 28,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--f-zh)',
                      fontWeight: 900,
                      fontSize: 'clamp(20px,2.5vw,28px)',
                      letterSpacing: '0.04em',
                      color: '#F2EFEA',
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {line.zh}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.85,
                      color: 'rgba(242,239,234,0.5)',
                    }}
                  >
                    {line.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Signature */}
          <div
            style={{
              marginTop: 52,
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(96,120,102,0.3)',
                background: 'rgba(96,120,102,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--f-zh)',
                fontWeight: 900,
                fontSize: 16,
                color: '#607866',
              }}
            >
              夏
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--f-zh)',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#F2EFEA',
                  marginBottom: 2,
                }}
              >
                {declaration.closing}
              </p>
              <p
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 9,
                  letterSpacing: '0.15em',
                  color: 'rgba(242,239,234,0.3)',
                }}
              >
                ZENPPLE · SPIRITUAL CONSULTANT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT 夏 ── */}
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
              alignItems: 'center',
              maxWidth: 920,
            }}
          >
            <div>
              <p className="sec-label">關於夏</p>
              <h2
                style={{
                  fontFamily: 'var(--f-zh)',
                  fontWeight: 900,
                  fontSize: 'clamp(24px,3vw,36px)',
                  letterSpacing: '0.04em',
                  marginBottom: 20,
                }}
              >
                幫你看見大局的人
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--muted)', marginBottom: 16 }}>
                夏的工作是幫你看清楚你在哪裡，以及你可以往哪裡走。
                結合易經理路、玄天上帝指引與多年數位品牌實務，她的問題通常很少，但每個都直接擊中那個點。
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--muted)' }}>
                這不是算命，也不是靈媒。這是一種需要你認真參與的對話——你帶來誠實，她帶來視角。
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: '服務方式', value: '1 對 1 · 線上或實體' },
                { label: '使用方法', value: '易經 / 玄天上帝指引 / 策略諮詢' },
                { label: '適合時機', value: '方向模糊 / 事業轉型 / 靈性事業起步' },
                { label: '語言', value: '中文（繁體）' },
              ].map(item => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    paddingBottom: 14,
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 9,
                      letterSpacing: '0.18em',
                      color: '#607866',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--ink)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#f5f8f5',
          textAlign: 'center',
        }}
      >
        <div className="wrap">
          <p
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(22px,3vw,36px)',
              letterSpacing: '0.04em',
              marginBottom: 16,
            }}
          >
            準備好看清楚了嗎？
          </p>
          <p
            style={{
              fontSize: 14,
              color: 'var(--muted)',
              marginBottom: 36,
              lineHeight: 1.8,
              maxWidth: 480,
              margin: '0 auto 36px',
            }}
          >
            傳訊告訴夏你目前的狀態，她會幫你確認從哪裡開始最合適。
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
              color: '#607866',
              textDecoration: 'none',
              border: '1px solid rgba(96,120,102,0.35)',
              borderRadius: 999,
              padding: '14px 32px',
              transition: 'background 0.2s',
            }}
          >
            跟夏說說你的狀態 →
          </Link>
        </div>
      </section>
    </>
  )
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}
