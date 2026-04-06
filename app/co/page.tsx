'use client'

import { useState } from 'react'
import Link from 'next/link'

const AMBER = '#C4784A'
const AMBER_D = '#A0622E'

// ── Corporate packages ────────────────────────────────────────────────────────
const corporatePlans = [
  {
    id: 'CO-C1',
    tier: '中型包場',
    people: '8–16 人',
    price: 'NT$900 / 人',
    minTotal: 'NT$7,200 起',
    duration: '90 分鐘',
    highlight: false,
    features: [
      '專屬場地一對多頌缽音流',
      '聲頻定頻體驗（純物理聲波）',
      '無靈性或通靈成分',
      '適合：部門團建、小型企業活動',
      '場地需求：安靜空間，可容納人數',
    ],
  },
  {
    id: 'CO-C2',
    tier: '大型包場',
    people: '16–25 人',
    price: 'NT$1,000 / 人',
    minTotal: 'NT$16,000 起',
    duration: '90 分鐘',
    highlight: true,
    features: [
      '雙顧問執場（依人數配置）',
      '聲頻定頻體驗（純物理聲波）',
      '活動前場域設置協助',
      '適合：全公司活動、年終聚會',
      '場地需求：可容納人數的空曠空間',
    ],
  },
  {
    id: 'CO-C3',
    tier: '超大型包場',
    people: '25–40 人',
    price: 'NT$1,100 / 人',
    minTotal: 'NT$27,500 起',
    duration: '120 分鐘',
    highlight: false,
    features: [
      '主顧問執場＋助理協作',
      '聲頻定頻體驗（分組進行）',
      '活動策劃顧問服務',
      '適合：大型企業活動、論壇配套',
      '場地需求：可分組的大型空間',
    ],
  },
]

const microPlans = [
  {
    duration: '15 min',
    price: 'NT$2,000',
    desc: '入門快速定頻體驗，適合會議間隙或活動暖場。',
  },
  {
    duration: '30 min',
    price: 'NT$3,800',
    desc: '標準小組定頻，適合團隊會議前後的專注力重置。',
  },
  {
    duration: '60 min',
    price: 'NT$6,500',
    desc: '深度小組定頻，適合重要決策前或季度回顧節點。',
  },
]

const steps = [
  {
    num: '01',
    title: '洽談需求',
    desc: '透過 LINE 或 Email 提交企業需求，說明人數、活動性質、希望達到的效果，我們將於 1-2 工作天回覆。',
  },
  {
    num: '02',
    title: '方案規劃',
    desc: '根據你的需求確認最適合的服務方案，確認人數、時長與場地要求，完成合作細節確認與付款。',
  },
  {
    num: '03',
    title: '現場執行',
    desc: '專業團隊到場（或線上服務），全程負責場域設置、執場引導與收場整理，確保完整且高品質的體驗。',
  },
]

const positions = [
  {
    icon: '〜',
    title: '純物理聲頻',
    desc: 'CO 系列服務為純物理聲波體驗，不含靈性引導或通靈成分，適合任何文化背景的員工參與。',
  },
  {
    icon: '✓',
    title: '安全適合 HR',
    desc: '設計符合企業活動規範，可安全推薦給 HR 與企業主辦人。明確說明服務內容，無宗教涉及。',
  },
  {
    icon: '◆',
    title: '靈活規格',
    desc: '從 2 人小型核心聚會到 40 人大型包場，提供多種方案規格，配合不同場域與預算需求。',
  },
]

export default function CoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: '有靈性成分嗎？員工參加安全嗎？',
      a: 'CO 系列（企業包場）為純物理聲頻體驗，不含任何靈性引導、通靈解析或宗教成分。頌缽的聲波透過物理共振作用於身體，協助舒緩壓力與大腦雜訊，完全適合多元文化背景的企業員工。',
    },
    {
      q: '場地由我們提供，還是森波負責？',
      a: '企業包場通常由合作企業提供場地（需安靜、可容納人數的空間）。若有場地需求，可與我們洽談；我們可協助評估場地適用性，並負責全程場域設置與收場。',
    },
    {
      q: '車馬費與稅金如何計算？',
      a: '報價不含營業稅與車馬費。台南市區通常免收車馬費；外縣市或特殊地點依實際交通狀況另行計算。洽詢時請告知活動地點，我們將提供完整報價。',
    },
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '68vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'var(--base)',
          overflow: 'hidden',
        }}
      >
        {/* Wave line art background */}
        <svg
          aria-hidden
          viewBox="0 0 1200 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        >
          {[0, 40, 80, 120, 160, 200, 240, 280].map((offset, i) => (
            <path
              key={i}
              d={`M0,${200 + offset} C200,${160 + offset} 400,${240 + offset} 600,${200 + offset} C800,${160 + offset} 1000,${240 + offset} 1200,${200 + offset}`}
              stroke={AMBER}
              strokeWidth="1.2"
              fill="none"
            />
          ))}
        </svg>

        {/* Ghost word */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: '-10px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--f-display)',
            fontWeight: 100,
            fontSize: 'clamp(120px,18vw,220px)',
            color: `rgba(196,120,74,0.05)`,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          CO
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.4em',
              color: AMBER,
              textTransform: 'uppercase',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span style={{ display: 'block', width: 40, height: 1, background: AMBER, opacity: 0.5 }} />
            CO · CORPORATE COLLABORATION
          </p>
          <h1
            className="tr-d2"
            style={{
              fontSize: 'clamp(32px,5.5vw,62px)',
              lineHeight: 1.1,
              marginBottom: 12,
              color: 'var(--ink)',
            }}
          >
            聯名企業合作
          </h1>
          <p
            className="tr-d1"
            style={{
              fontSize: 13,
              color: AMBER,
              opacity: 0.75,
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Corporate Sound Collaboration
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: 'var(--ink)',
              opacity: 0.62,
              maxWidth: 520,
            }}
          >
            為你的團隊注入重整能量。跨越品牌界線，以純粹的聲頻共振提供深度放鬆——安全、專業、無附加靈性成分。
          </p>
        </div>
      </section>

      {/* ── SERVICE POSITIONING — 3 pillars ── */}
      <section style={{ background: 'var(--base)', padding: 'clamp(60px,8vw,100px) clamp(24px,5vw,72px)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {positions.map(item => (
              <div
                key={item.title}
                style={{
                  padding: '32px 28px',
                  textAlign: 'center',
                  border: '1px solid rgba(42,42,42,0.06)',
                  background: '#fff',
                }}
              >
                <p style={{ fontFamily: 'var(--f-display)', fontSize: 26, color: AMBER, marginBottom: 12 }}>
                  {item.icon}
                </p>
                <h3
                  className="tr-h1"
                  style={{
                    fontSize: 16,
                    color: 'var(--ink)',
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER wave ── */}
      <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', background: 'var(--base)' }}>
        <path d="M0,20 C360,40 720,0 1080,24 C1260,34 1380,10 1440,18 L1440,40 L0,40 Z" fill="var(--cream)" />
      </svg>

      {/* ── CORPORATE PACKAGES ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)' }}>
        <div className="wrap">
          <p className="sec-label">企業包場方案</p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(24px,3.5vw,40px)',
              marginBottom: 12,
              color: 'var(--ink)',
            }}
          >
            依規模選擇方案
          </h2>
          <p
            className="tr-d1"
            style={{
              fontSize: 12,
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Corporate Packages
          </p>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 52 }}>
            依人數規模選擇適合的包場方案，全程專業頌缽定頻執場。不含營業稅與車馬費。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {corporatePlans.map(plan => (
              <div
                key={plan.id}
                style={{
                  padding: '32px 28px',
                  position: 'relative',
                  border: plan.highlight ? `2px solid ${AMBER}` : '1px solid rgba(42,42,42,0.08)',
                  background: plan.highlight ? `rgba(196,120,74,0.03)` : '#F2EFEA',
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: AMBER,
                    }}
                  />
                )}
                <p
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontWeight: 100,
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    color: AMBER,
                    textTransform: 'uppercase',
                    marginBottom: 4,
                  }}
                >
                  {plan.id}
                </p>
                <h3
                  className="tr-h1"
                  style={{
                    fontSize: 20,
                    color: 'var(--ink)',
                    marginBottom: 4,
                  }}
                >
                  {plan.tier}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--f-body)',
                    fontSize: 13,
                    color: 'var(--ink)',
                    opacity: 0.5,
                    marginBottom: 20,
                  }}
                >
                  {plan.people} · {plan.duration}
                </p>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: 24, color: AMBER }}>
                    {plan.price}
                  </p>
                  <p style={{ fontFamily: 'var(--f-body)', fontSize: 12, color: 'var(--ink)', opacity: 0.4 }}>
                    總費 {plan.minTotal}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(42,42,42,0.08)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ color: AMBER, fontSize: 12, marginTop: 2, flexShrink: 0 }}>·</span>
                      <p style={{ fontSize: 12, color: 'var(--ink)', opacity: 0.65, lineHeight: 1.6 }}>{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', background: 'var(--cream)' }}>
        <path d="M0,0 C240,36 480,4 720,22 C960,40 1200,6 1440,20 L1440,40 L0,40 Z" fill="var(--base)" />
      </svg>

      {/* ── CO-M MICRO GROUP ── */}
      <section style={{ background: 'var(--base)', padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)' }}>
        <div className="wrap">
          <p className="sec-label">CO-M · Micro Group</p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(24px,3.5vw,40px)',
              marginBottom: 12,
            }}
          >
            小型微包場 CO-M
          </h2>
          <p
            className="tr-d1"
            style={{
              fontSize: 12,
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Small Group Sessions · 2–8 人
          </p>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 52 }}>
            2–8 人小型精緻定頻體驗，適合核心團隊或特殊節點活動。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {microPlans.map(item => (
              <div
                key={item.duration}
                style={{
                  padding: '36px 28px',
                  textAlign: 'center',
                  border: '1px solid rgba(42,42,42,0.08)',
                  background: '#fff',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontWeight: 100,
                    fontSize: 32,
                    color: AMBER,
                    letterSpacing: '0.05em',
                    marginBottom: 4,
                  }}
                >
                  {item.duration}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontWeight: 300,
                    fontSize: 20,
                    color: AMBER,
                    marginBottom: 16,
                  }}
                >
                  {item.price}
                </p>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CO-G & CO-L ── */}
      <section style={{ background: 'var(--base)', padding: '0 clamp(24px,5vw,72px) clamp(80px,10vw,120px)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {/* CO-G */}
            <div style={{ padding: '40px 36px', border: '1px solid rgba(42,42,42,0.08)', background: '#fff' }}>
              <p
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: AMBER,
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                CO-G · Core Team Gathering
              </p>
              <h3
                className="tr-h1"
                style={{
                  fontSize: 20,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                核心團隊聚會
              </h3>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 20 }}>
                3–5 人私密定頻聚會，適合管理層或核心成員。包含牌卡洞察、聲頻沐浴、團隊心流對齊說明，讓核心夥伴在共振中重新找回默契與方向感。
              </p>
              <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: 22, color: AMBER }}>
                NT$2,500 起 / 人
              </p>
            </div>

            {/* CO-L */}
            <div style={{ padding: '40px 36px', border: '1px solid rgba(42,42,42,0.08)', background: '#fff' }}>
              <p
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: AMBER,
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                CO-L · Licensed Training
              </p>
              <h3
                className="tr-h1"
                style={{
                  fontSize: 20,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                聯名培訓授權
              </h3>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 20 }}>
                L1（初階放鬆頌缽技術培訓）· L2（團體帶領授權）。含結業認證、縣市限額（一縣市限 1-2 個單位）與分潤模式（2:8）。由合作方負責招生與場地行政。適合有志推動企業內部聲頻定頻計畫的單位。
              </p>
              <p style={{ fontFamily: 'var(--f-body)', fontSize: 13, color: 'var(--muted)', opacity: 0.6 }}>
                NT$50,000 / 人 · 客製化洽談
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', background: 'var(--base)' }}>
        <path d="M0,10 C180,38 360,2 540,26 C720,46 900,8 1080,30 C1260,46 1380,14 1440,22 L1440,40 L0,40 Z" fill="var(--cream)" />
      </svg>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)' }}>
        <div className="wrap">
          <p className="sec-label">合作流程</p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(24px,3.5vw,40px)',
              marginBottom: 12,
            }}
          >
            合作三步驟
          </h2>
          <p
            className="tr-d1"
            style={{
              fontSize: 12,
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: 52,
            }}
          >
            How It Works
          </p>

          <div style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: 28,
                  paddingBottom: i < steps.length - 1 ? 40 : 0,
                  position: 'relative',
                }}
              >
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      left: 22,
                      top: 32,
                      bottom: 0,
                      width: 1,
                      background: `rgba(196,120,74,0.2)`,
                    }}
                  />
                )}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    border: `1.5px solid ${AMBER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#F2EFEA',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 11,
                      color: AMBER,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3
                    className="tr-h1"
                    style={{
                      fontSize: 17,
                      color: 'var(--ink)',
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'var(--cream)', padding: '0 clamp(24px,5vw,72px) clamp(80px,10vw,120px)' }}>
        <div className="wrap">
          <p className="sec-label">常見問題</p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(22px,3vw,34px)',
              marginBottom: 40,
            }}
          >
            企業合作 FAQ
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 760 }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid rgba(42,42,42,0.1)',
                    ...(i === faqs.length - 1 ? { borderBottom: '1px solid rgba(42,42,42,0.1)' } : {}),
                  }}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    onKeyDown={e => e.key === 'Enter' && setOpenFaq(isOpen ? null : i)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '22px 0',
                      cursor: 'pointer',
                      gap: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--f-zh)',
                        fontWeight: 500,
                        fontSize: 15,
                        color: 'var(--ink)',
                        letterSpacing: '0.03em',
                        lineHeight: 1.5,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontSize: 20,
                        color: isOpen ? AMBER : 'var(--muted)',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform .3s, color .3s',
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      overflow: 'hidden',
                      transition: 'max-height .45s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85, paddingBottom: 24 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA dark ── */}
      <section
        style={{
          background: 'var(--ink)',
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* amber blob */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: '-80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: `radial-gradient(ellipse, rgba(196,120,74,0.15) 0%, transparent 70%)`,
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 60,
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                className="tr-d2"
                style={{
                  fontSize: 'clamp(22px,3vw,36px)',
                  color: '#F2EFEA',
                  marginBottom: 14,
                  lineHeight: 1.3,
                }}
              >
                為你的團隊<br />安排一場定頻聚會
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(242,239,234,0.55)', lineHeight: 1.85, maxWidth: 440 }}>
                回應時效通常在 1-2 工作天內。歡迎具體說明你的活動規模與需求，方便我們提供最精準的建議。
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--f-mono)',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  background: AMBER,
                  borderRadius: 999,
                  padding: '14px 32px',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                }}
              >
                企業合作洽詢 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
