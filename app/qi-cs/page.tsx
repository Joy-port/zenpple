'use client'

import { useState } from 'react'
import Link from 'next/link'
// ── 情境對照表資料 ────────────────────────────────────────────────────────────
const scenarios = [
  {
    id: 1,
    situation: '問題模糊，想快速確認多個領域的方向',
    tag: '快速指引',
    tagColor: '#607866',
    service: 'QI-OR-03　靈擺快速問事',
    serviceEn: 'Pendulum Quick Reading',
    what: '由夏與玄天上帝連線，針對「方向性」提供快速大指引。帝爺公通常不回應個人情感與生活瑣事，除非該問題與核心議題或主課題有關。需先列下欲詢問的問題，估算費用後進行。',
    duration: '約 1 分鐘 / 題',
    price: 'NT$500 / 題',
  },
  {
    id: 2,
    situation: '迷惘、邏輯混亂，不確定自己該問什麼',
    tag: '理路定調',
    tagColor: '#4A7A5A',
    service: 'QI-CS-01　易經理路定調',
    serviceEn: 'I Ching Logic Alignment',
    what: '所有大議題諮詢的前置必備流程。由夏透過易經與通靈核對解讀方向，在 30 分鐘內將發散的困惑收斂為「乾淨、具備邏輯」的問題核心，輔以靈擺確認，由玄天上帝補充觀點。',
    duration: '30 分鐘',
    price: 'NT$3,500',
  },
  {
    id: 3,
    situation: '需與個人主神對話，但不知道如何問得精準',
    tag: '廟宇陪同',
    tagColor: '#3D5C48',
    service: 'QI-CS-02　廟宇問事陪同',
    serviceEn: 'Temple Consultation Accompaniment',
    what: '協助案主與神明建立精準連結，由夏擔任「路徑轉譯」角色，最終決策仍由案主主導。遠端連線時，案主須在廟宇現場向神明取得三個聖筊同意方可進行。',
    duration: '現場 / 遠端連線',
    price: '現場 NT$1,000＋2,500/hr　遠端 NT$3,500/hr',
  },
]

// ── 指導靈宣言段落 ────────────────────────────────────────────────────────────
const declaration = {
  title: '玄天上帝的執業教誨',
  titleEn: 'Teachings of the Spirit Guide',
  preamble: '預約之前，邀請你靜下心來閱讀這段文字。這是本系列所有服務的「對齊點」。',
  quote: '生命中的議題都會回到個人生命裡誠實解決，我們能成為自己的力量，並且不以「無法改變」將責任歸責於他人。任何事都有轉圜改變的可能，天助自助者，事情要神也要人。望大家都能成為自己的力量。不誠實、無自我負責意願的客人不會再次提供協助。',
  lines: [
    {
      zh: '大方向定錨，不代為決策。',
      sub: '玄天上帝（帝爺公）僅聚焦於人生的大方向、重大的轉折點與決策之指引。聽完建議後，請回到自己的內心沉澱後做決定。',
    },
    {
      zh: '不回應瑣事。',
      sub: '本系列不回應瑣碎之個人情感、生活雜事或「問心安」的重複性議題。指引的目的在協助你自立，而非代為處理生活細項。',
    },
    {
      zh: '高維指引是地圖，路要自己走。',
      sub: '靈性顧問的視角中，高維的指引僅是「地圖上的標註」，真正的路徑必須由你親自走出來。',
    },
    {
      zh: '不誠實者，不再協助。',
      sub: '若案主表現出不誠實、或無自我負責意願（如重複詢問已知答案、推卸自身責任），本顧問系統將立即終止並不再提供二次協助。',
    },
  ],
  closing: '—— 指導靈 ｜ 玄天上帝（帝爺公）',
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
            結合易經智慧與高維觀測，為生命大計提供定錨指引。
            夏與玄天上帝協助你在迷霧中看清局勢，在跨出腳步前先穩住內心的定錨，踏實走出自己的路徑。
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
                    maxHeight: activeScenario === s.id ? 420 : 0,
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

          {/* Original quote */}
          <blockquote
            style={{
              fontFamily: 'var(--f-zh)',
              fontSize: 14,
              lineHeight: 2,
              color: 'rgba(242,239,234,0.7)',
              borderLeft: '2px solid rgba(96,120,102,0.5)',
              paddingLeft: 20,
              marginBottom: 56,
              maxWidth: 600,
              fontStyle: 'normal',
            }}
          >
            「{declaration.quote}」
          </blockquote>

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
                夏的工作是大方向指引與路徑梳理。結合易經理路與玄天上帝高維觀測，聚焦於人生重大轉折點與決策，協助你在邏輯混亂時收斂問題核心，在關鍵決策前穩住定錨。
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--muted)' }}>
                本系列不處理情緒療癒或生活瑣事。涉及個人情緒與能量場，請優先尋求禿禿協助；涉及事業、決策與路徑，再進入本顧問系統。
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: '服務形式', value: '1 對 1 · 線上或實體' },
                { label: '使用方法', value: '易經 / 靈擺 / 玄天上帝高維觀測' },
                { label: '適合議題', value: '大方向定錨 / 重大轉折 / 決策核對 / 廟宇問事' },
                { label: '不適合', value: '個人情緒療癒 / 生活瑣事 / 重複性問心安議題' },
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
