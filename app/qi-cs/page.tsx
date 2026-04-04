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
  titleEn: 'Declaration of the Spirit Guide',
  preamble: '定錨與初衷：我們不提供避風港，我們培育主體意識。',
  closing: '我們在迷路時與人作伴，卻絕不代為行走。',
  attribution: '指導靈 — 玄天上帝（帝爺公）\n執業教誨',
  lines: [
    '我不替你做決定。',
    '我只說真實的東西。',
    '方向是你的，路也是你自己走的。',
    '我陪你看清楚，不陪你逃跑。',
  ],
  fullQuote: '「生命中的議題都會回到個人生命裡認識實解決，我們能個人生命裡認識實解決，我們能能成為自己的力量。我們能成為自己的可能，任何事都有轉圜改變的可能，天助事助者，事情要神也要人，望大家都能成為自己的力量。」',
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
              color: 'rgba(96,120,102,0.06)',
              lineHeight: 1,
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            玄
          </span>
        </div>
        {/* Soft blob decorations */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '15%', right: '18%',
            width: 'clamp(120px,18vw,260px)', height: 'clamp(120px,18vw,260px)',
            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
            background: 'radial-gradient(ellipse, rgba(96,120,102,0.13), transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '20%', left: '8%',
            width: 'clamp(80px,12vw,180px)', height: 'clamp(80px,12vw,180px)',
            borderRadius: '45% 55% 40% 60% / 55% 45% 60% 40%',
            background: 'radial-gradient(ellipse, rgba(61,92,72,0.09), transparent 70%)',
          }} />
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
            <span style={{ display: 'block', width: 40, height: 1, background: '#607866', opacity: 0.5 }} />
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
              color: '#212E27',
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
              color: '#333333',
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
          background: '#F2EFEA',
        }}
      >
        <div className="wrap">
          <p className="sec-label" style={{ color: '#607866' }}>情境對照表</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,42px)',
              letterSpacing: '0.03em',
              marginBottom: 12,
              color: '#212E27',
            }}
          >
            你的狀態，決定你的切入點
          </h2>
          <p
            style={{
              fontSize: 14,
              color: '#333333',
              opacity: 0.6,
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
                  border: `1px solid ${activeScenario === s.id ? s.tagColor : 'rgba(33,46,39,0.1)'}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.25s',
                  background: activeScenario === s.id ? `rgba(${hexToRgb(s.tagColor)},0.04)` : '#fff',
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
                      color: '#212E27',
                    }}
                  >
                    {s.situation}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 14,
                      color: '#607866',
                      opacity: 0.5,
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
                          color: '#333333',
                          opacity: 0.5,
                          marginBottom: 16,
                          textTransform: 'uppercase',
                        }}
                      >
                        {s.serviceEn}
                      </p>
                      <p style={{ fontSize: 14, lineHeight: 1.9, color: '#333333', opacity: 0.75 }}>
                        {s.what}
                      </p>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: 'right' }}>
                      <p
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 10,
                          letterSpacing: '0.1em',
                          color: '#333333',
                          opacity: 0.45,
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
            <p style={{ fontSize: 14, color: '#333333', opacity: 0.65, lineHeight: 1.7 }}>
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

      {/* ── 指導靈宣言 · 水墨風格 ── */}
      <section
        style={{
          padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,72px)',
          background: '#F2EFEA',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Watercolor blob decorations */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {/* Large sage green blob top-right */}
          <div style={{
            position: 'absolute', top: '-5%', right: '-4%',
            width: 'clamp(220px,32vw,480px)', height: 'clamp(200px,28vw,420px)',
            borderRadius: '38% 62% 54% 46% / 48% 38% 62% 52%',
            background: 'radial-gradient(ellipse at 40% 40%, rgba(96,120,102,0.18) 0%, rgba(96,120,102,0.06) 55%, transparent 80%)',
          }} />
          {/* Medium forest blob bottom-left */}
          <div style={{
            position: 'absolute', bottom: '8%', left: '-2%',
            width: 'clamp(160px,22vw,340px)', height: 'clamp(140px,20vw,300px)',
            borderRadius: '55% 45% 38% 62% / 42% 58% 45% 55%',
            background: 'radial-gradient(ellipse at 55% 50%, rgba(61,92,72,0.14) 0%, rgba(61,92,72,0.04) 60%, transparent 80%)',
          }} />
          {/* Small warm blob center */}
          <div style={{
            position: 'absolute', top: '40%', left: '38%',
            width: 'clamp(80px,12vw,180px)', height: 'clamp(80px,12vw,160px)',
            borderRadius: '50% 50% 40% 60% / 60% 40% 55% 45%',
            background: 'radial-gradient(ellipse, rgba(180,150,130,0.12), transparent 70%)',
          }} />
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          {/* Top tagline */}
          <p
            style={{
              fontFamily: 'var(--f-zh)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#212E27',
              opacity: 0.55,
              marginBottom: 'clamp(48px,8vw,90px)',
            }}
          >
            {declaration.preamble}
          </p>

          {/* Main declaration layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: 'clamp(32px,5vw,72px)',
              alignItems: 'start',
              maxWidth: 900,
            }}
          >
            {/* Left: vertical attribution */}
            <div
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                paddingTop: 8,
              }}
            >
              <div
                style={{
                  width: 1,
                  height: 'clamp(40px,6vw,80px)',
                  background: 'rgba(96,120,102,0.35)',
                  marginBottom: 12,
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--f-zh)',
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  color: '#607866',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}
              >
                {declaration.attribution}
              </p>
            </div>

            {/* Right: main content */}
            <div>
              {/* Quote lines in vertical-feeling layout */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 'clamp(24px,4vw,56px)',
                  marginBottom: 'clamp(40px,6vw,72px)',
                  alignItems: 'flex-start',
                }}
              >
                {declaration.lines.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--f-zh)',
                        fontWeight: 900,
                        fontSize: 'clamp(22px,3vw,36px)',
                        letterSpacing: '0.06em',
                        color: '#212E27',
                        lineHeight: 1.4,
                      }}
                    >
                      {line}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sub-explanations horizontal */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  borderLeft: '2px solid rgba(96,120,102,0.25)',
                  paddingLeft: 20,
                  maxWidth: 520,
                }}
              >
                {[
                  '指引的本質是還原你的判斷力，而非代替你的意志。',
                  '訊息可能不好聽，但我不說讓你舒服卻不真實的話。',
                  '諮詢之後，你仍然是那個選擇與承擔的人。',
                  '所有的指引都是為了讓你更清醒，而不是更依賴。',
                ].map((sub, i) => (
                  <p key={i} style={{ fontSize: 13, lineHeight: 1.8, color: '#333333', opacity: 0.55 }}>
                    {sub}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <div
                style={{
                  marginTop: 48,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid rgba(96,120,102,0.35)',
                    background: 'rgba(96,120,102,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--f-zh)',
                    fontWeight: 900,
                    fontSize: 14,
                    color: '#607866',
                    flexShrink: 0,
                  }}
                >
                  夏
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--f-zh)', fontWeight: 700, fontSize: 13, color: '#212E27', marginBottom: 2 }}>
                    夏 · 玄天上帝代言者
                  </p>
                  <p style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.15em', color: '#607866', opacity: 0.55 }}>
                    ZENPPLE · SPIRITUAL CONSULTANT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom closing line */}
          <p
            style={{
              marginTop: 'clamp(48px,7vw,80px)',
              fontFamily: 'var(--f-zh)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#212E27',
              opacity: 0.45,
              textAlign: 'right',
              maxWidth: 900,
            }}
          >
            {declaration.closing}
          </p>
        </div>
      </section>

      {/* ── ABOUT 夏 ── */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#eaede8',
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
              <p className="sec-label" style={{ color: '#607866' }}>關於夏</p>
              <h2
                style={{
                  fontFamily: 'var(--f-zh)',
                  fontWeight: 900,
                  fontSize: 'clamp(24px,3vw,36px)',
                  letterSpacing: '0.04em',
                  marginBottom: 20,
                  color: '#212E27',
                }}
              >
                幫你看見大局的人
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: '#333333', opacity: 0.65, marginBottom: 16 }}>
                夏的工作是幫你看清楚你在哪裡，以及你可以往哪裡走。
                結合易經理路、玄天上帝指引與多年數位品牌實務，她的問題通常很少，但每個都直接擊中那個點。
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: '#333333', opacity: 0.65 }}>
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
                    borderBottom: '1px solid rgba(96,120,102,0.18)',
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
                  <span style={{ fontSize: 13, color: '#212E27' }}>{item.value}</span>
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
          background: '#212E27',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle blob */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%', height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(96,120,102,0.25), transparent 70%)',
          }} />
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <p
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(22px,3vw,36px)',
              letterSpacing: '0.04em',
              marginBottom: 16,
              color: '#F2EFEA',
            }}
          >
            準備好看清楚了嗎？
          </p>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(242,239,234,0.5)',
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
              color: '#F2EFEA',
              textDecoration: 'none',
              border: '1px solid rgba(242,239,234,0.3)',
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
