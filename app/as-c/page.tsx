'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './as-c-page.css'

const services = [
  {
    id: 'AS-C-01',
    title: '品牌策略與\nMindset 定錨',
    price: 'NT$15,000 / hr',
    by: '夏子主理',
    required: true,
    desc: '進入 AS-C 的必要前提。釐清品牌核心定位、目標市場、服務設計，以及最關鍵的：建立創業者的心態底座。方向不清楚，做再多都是耗損。',
  },
  {
    id: 'AS-C-02',
    title: '實務系統與\n數位工作流建置',
    price: 'NT$3,000 / hr',
    by: '夏子主理',
    required: false,
    desc: '純理性邏輯工程。建立數位工作流、自動化系統、預約管理、客戶 SOP 與平台架構。作業期間請暫停靈性直覺依賴，聚焦執行與工具掌握。',
  },
  {
    id: 'AS-C-03',
    title: '客製化靈性\n品牌創業陪跑',
    price: '客製化報價',
    by: '夏子主理',
    required: false,
    desc: '長期動態觀測與顧問陪伴。結合品牌策略、數位系統與持續跟進，適合需要完整支持走完創業全程者。必須先完成 AS-C-01 才可申請。',
  },
]

const faqs = [
  {
    q: '「問事」等於「決策」嗎？',
    a: '不等於。問事是提供洞察框架，決策主權始終歸於你。這套服務的核心，是協助你找回清晰的決策能力，而非替你做決定。',
  },
  {
    q: '情緒能量問題和事業決策問題找同一個人嗎？',
    a: '不同。情緒能量、身心狀態、深層頻率問題找 TWO TWO（HL / SC / QI 系列）。事業決策、品牌策略、路徑規劃找夏子（AS-C 系列）。兩條軌道清楚分流，不混用。',
  },
  {
    q: '服務前需要完成什麼前置步驟？',
    a: '建議在進入 AS-C 之前，先完成至少一次 QI-CS 路徑諮詢（夏＋玄），確認你的大方向已足夠清晰，才能讓 AS-C 的工作事半功倍。',
  },
  {
    q: '可以跳過 AS-C-01 直接進入 AS-C-03 嗎？',
    a: '不可以。AS-C-01 的品牌策略與 Mindset 定錨，是所有深度合作的基礎。未完成 AS-C-01 者，一律不受理 AS-C-03 申請。規則清楚，沒有例外。',
  },
  {
    q: 'AS-C-02 數位工作流跟靈性方向衝突嗎？',
    a: '不衝突，而是階段性分工。AS-C-02 是純理性工程模式——先把地基建好，再讓靈性流入空間。兩者不矛盾，是不同階段的策略工具。',
  },
]

export default function AsCPage() {
  useEffect(() => {
    document.body.classList.add('page-as-c')
    return () => { document.body.classList.remove('page-as-c') }
  }, [])

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ── */}
      <section id="asc-hero">
        <div className="asc-hero-bg" />
        <div className="asc-hero-bleed">BRAND</div>
        <div className="asc-hero-label">AS-C · Brand Incubation · 夏子</div>
        <div className="asc-hero-content">
          <p className="asc-hero-en">Brand Incubation Practice</p>
          <h1>
            從感知到<em>品牌</em>，<br />
            建立你自己的<br />
            靈性工作系統
          </h1>
          <p className="asc-hero-tagline">感知是起點，品牌才是生意</p>
          <p className="hero-body">
            進入市場後的深度支持。理性邏輯與個人風格並重，
            由顧問夏子主理，協助你從「會做」到「會賣」，
            建立可持續的靈性工作品牌。
          </p>
          <a
            href="https://lin.ee/your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            className="asc-hero-cta"
          >
            預約品牌諮詢 →
          </a>
        </div>
        <div className="asc-hero-scroll">scroll ↓</div>
      </section>

      {/* ── MANIFESTO BAND ── */}
      <div className="asc-manifesto">
        <p className="asc-manifesto-claim">
          有感知的人很多，有品牌的人很少。差距，在於你敢不敢把自己長成一個系統。
        </p>
        <p className="asc-manifesto-detail">Xia × Xuantian Shangdi · Brand × Strategy</p>
      </div>

      {/* ── 顧問介紹 ── */}
      <section className="asc-section">
        <div className="asc-inner">
          <div className="asc-section-head">
            <p className="en-label">CONSULTANT PROFILE</p>
            <h2>夏子的執業精神</h2>
            <p>結合易經智慧與高維觀測，為生命大計提供定錨指引。不是讓你依賴，而是讓你獨立。</p>
          </div>
          <div className="xia-block">
            <div className="xia-left">
              <p className="xia-name">顧問 夏子 × 指導靈 玄天上帝</p>
              <h3 className="xia-title">在理路的乾淨中，<br />看見生命的格局</h3>
              <p className="xia-body">
                夏子結合易經、個人品牌規劃與企業顧問專業，由指導靈玄天上帝連線協作。
                服務的初衷不是提供避風港，而是培育每個人對自己課題的「主體意識」——
                高維指引只是地圖上的標註，真正的路徑必須由你親自走出來。
              </p>
              <p className="xia-body">
                強調「去神格化」：玄天上帝不是崇拜對象，而是一個高維的理性參照座標。
                帝爺公的三個執業教誨是整套服務的核心對齊點。
              </p>
            </div>
            <div className="xia-right">
              {[
                {
                  no: '01',
                  title: '誠實解決',
                  desc: '不帶情緒、不自我欺騙地面對議題。沒有誠實，所有工具都只是逃避的包裝。',
                },
                {
                  no: '02',
                  title: '自我負責',
                  desc: '不自我負責者，服務將拒絕進行。主權在你，責任也在你。天助自助者。',
                },
                {
                  no: '03',
                  title: '抓大放小',
                  desc: '玄天上帝不回應瑣碎情感與日常雜事。聚焦大方向、重大轉折與決策定錨。',
                },
              ].map((p) => (
                <div key={p.no} className="xia-principle">
                  <p className="xia-principle-no">{p.no}</p>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 進入路徑 ── */}
      <section className="asc-section asc-section-alt">
        <div className="asc-inner">
          <div className="asc-section-head">
            <p className="en-label">ENTRY PATH</p>
            <h2>進入路徑</h2>
            <p>AS-C 有明確的前置條件，請依序進行。順序不是規矩，是讓工作真正有效的前提。</p>
          </div>

          <div className="entry-path">
            <div className="entry-step">
              <div className="entry-step-num required">01</div>
              <p className="entry-step-label">必要前提</p>
              <h4>完成 AS-C-01</h4>
              <p>品牌策略與 Mindset 定錨是所有 AS-C 工作的基礎。</p>
            </div>

            <div className="entry-arrow">→</div>

            <div className="entry-step">
              <div className="entry-step-num">02</div>
              <p className="entry-step-label">依需求選擇</p>
              <h4>AS-C-02 或 AS-C-03</h4>
              <p>理性數位系統建立，或高階客製化創業陪跑，或兩者並行。</p>
            </div>

            <div className="entry-arrow">→</div>

            <div className="entry-step">
              <div className="entry-step-num">✹</div>
              <p className="entry-step-label">成果</p>
              <h4>可持續的靈性品牌</h4>
              <p>感知變商品，系統取代蠻力，品牌成為你的延伸。</p>
            </div>
          </div>

          <div className="entry-warning">
            <span className="entry-warning-icon">⚠</span>
            <p>重要：未完成 AS-C-01 者，一律不受理 AS-C-03 申請。無例外。</p>
          </div>
        </div>
      </section>

      {/* ── 三大核心服務 ── */}
      <section className="asc-section">
        <div className="asc-inner">
          <div className="asc-section-head">
            <p className="en-label">CORE SERVICES</p>
            <h2>三大核心服務</h2>
          </div>
          <div className="asc-services">
            {services.map((s) => (
              <div
                key={s.id}
                className={`asc-service-card${s.required ? ' is-required' : ''}`}
              >
                <div className="asc-card-top">
                  <div className="asc-card-badges">
                    <span className="asc-card-id">{s.id}</span>
                    {s.required && <span className="asc-badge-req">必修前置</span>}
                  </div>
                  <h3>{s.title.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}</h3>
                </div>
                <p className="asc-card-desc">{s.desc}</p>
                <div className="asc-card-footer">
                  <span className="asc-card-by">{s.by}</span>
                  <span className="asc-card-price">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AS-C-02 TECHNICAL NOTICE ── */}
      <div className="asc-notice">
        <div className="asc-notice-inner">
          <div>
            <p className="asc-notice-tag">Technical Notice · AS-C-02</p>
            <h3>進入純理性<br />工程模式</h3>
            <p className="asc-notice-body">
              AS-C-02 是純理性邏輯的工程工作。
              在這個階段，請暫停依賴靈性直覺做決策，
              聚焦於執行與工具的掌握。
              這不是矛盾，而是階段性的策略分工：
              先把地基蓋好，再讓靈性流入空間。
            </p>
          </div>
          <div className="asc-notice-rule">
            {[
              {
                title: '數位工作流建立',
                desc: '預約系統、客戶管理、自動化 SOP、內容發佈流程——讓行政不再消耗你的能量場。',
              },
              {
                title: '平台架構設計',
                desc: '網站、社群、報名系統的整體架構設計，以理性工程邏輯建構你的數位存在。',
              },
              {
                title: '邏輯優先，直覺待命',
                desc: '這一關的工具是試算表與流程圖，不是靈擺與牌卡。兩種模式，各司其職。',
              },
            ].map((r) => (
              <div key={r.title} className="asc-notice-rule-item">
                <div className="asc-notice-rule-dot" />
                <p>
                  <strong>{r.title}</strong>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="asc-section">
        <div className="asc-inner">
          <div className="asc-section-head">
            <p className="en-label">FAQ</p>
            <h2>常見問題</h2>
          </div>
          <div className="asc-faq">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${openFaq === i ? ' open' : ''}`}
              >
                <div
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </div>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="asc-cta">
        <div className="asc-cta-bleed">BUILD</div>
        <div className="asc-cta-inner">
          <p className="asc-cta-tag">Ready to build · AS-C · 夏子</p>
          <h2>預約品牌深度諮詢</h2>
          <p className="asc-cta-body">
            帶著你的品牌概念，或者只是一個模糊的方向感，都可以開始對話。
            夏子的工作不是給你答案，而是陪你找到只有你才能走出的那條路。
          </p>
          <div className="asc-cta-btns">
            <a
              href="https://lin.ee/your-line-id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber"
            >
              LINE 預約諮詢 →
            </a>
            <Link href="/qi-sb" className="btn-amber-outline">
              先做能量定頻 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
