'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './ts-pe-page.css'

// ── TS Services ──────────────────────────────────────────────────────────────
const tsServices = [
  {
    id: 'TS-01',
    title: '頌缽技法快速通道',
    en: 'FAST TRACK',
    price: 'NT$ 80,000',
    target: '具備直覺感知，但未修過《流》課程者',
    desc: '專為資深感知實踐者設計的加速入門路徑。以物理技術檢核為核心，確保敲擊品質達到森波系統之定頻標準，補齊技術基礎後即可接軌進階課程。',
    bullets: [
      '基礎技術檢核與標準確認',
      'NG 動作矯正與核心技法加強',
      '個人敲擊品質精密校準',
      '接軌 TS-02/03 的前置路徑',
    ],
  },
  {
    id: 'TS-02',
    title: '深度能量定頻進階技法',
    en: 'ADVANCED TECHNIQUE',
    price: 'NT$ 18,000',
    target: '完修《流》一二階或 TS-01 者',
    desc: '進入多維度音流對齊與現場狀態掌控的核心技術。學習如何讀取並精準回應個案當下的能量場域，深化敲擊與感知傳譯的同步率。',
    bullets: [
      '海底輪至頂輪暢通定頻技法',
      '包覆法、三聲旋風技法',
      '東西南北技法、星星技法',
      '複雜場域能量調頻實作演練',
      '個案氣場 NG 作法識別與修正',
    ],
  },
  {
    id: 'TS-03',
    title: '高階七脈輪療癒系統',
    en: 'MASTER SYSTEM',
    price: '現場 NT$ 40,000 ／ 線上 NT$ 16,000',
    target: '欲掌握 ZENPPLE 核心療癒邏輯的能量實踐者',
    desc: '整合七脈輪深度療癒邏輯與高階對齊技術，是成為專業定頻師的核心課程。建立完整的療癒系統框架，培育辨識能力邊界與倫理實踐的底蘊。',
    bullets: [
      '七脈輪系統深度療癒邏輯',
      '高階直覺感知與技術的整合',
      '倫理規範與執業邊界實踐',
      '複雜個案整合框架建立',
      '個人定頻風格系統化',
    ],
  },
]

// ── PE Services ──────────────────────────────────────────────────────────────
const peServices = [
  {
    id: 'PE-01',
    en: 'PE-01 · PROFESSIONAL ETHICS',
    title: '專業引導理論與實作課程',
    tutor: '導師：雅妃',
    required: true,
    price: 'NT$ 50,000',
    duration: '2 天課程',
    desc: '將「你感覺到的」轉化為「專業陪伴語言」的必修核心課。學習如何透過語言引導個案，建立穩固的心理與能量邊界，確保療癒師具備穩定引導個案的能力，而不是帶入自己的能量干擾。',
  },
  {
    id: 'PE-L',
    en: 'PE-L · PUBLIC LECTURE',
    title: '療癒師的 NG 動作',
    tutor: '公益講座，對外開放',
    required: true,
    price: '免費',
    duration: '半天',
    desc: '深入剖析「不解自己課題就去療癒別人」的潛在風險，推廣《深度能量定頻頌缽師．倫理與資格原則》。透過案例分析確立正確執業觀念，讓倫理意識在產業中發酵。',
  },
]

export default function TsPePage() {
  useEffect(() => {
    document.body.classList.add('page-ts-pe')
    return () => { document.body.classList.remove('page-ts-pe') }
  }, [])

  const [openCard, setOpenCard] = useState<string | null>(null)

  function toggleCard(id: string) {
    setOpenCard(prev => (prev === id ? null : id))
  }

  return (
    <>
      {/* ── HERO ── */}
      <section id="tspe-hero">
        <div className="tspe-hero-bg" />
        <div className="tspe-hero-bg-char">技</div>
        <div className="tspe-hero-label">TS &amp; PE · PROFESSIONAL MASTERY</div>
        <div className="tspe-hero-content">
          <div className="en-sub">TECHNICAL SYSTEM &amp; PROFESSIONAL ETHICS</div>
          <h1>深度能量定頻<br />技術與倫理<br />雙軸修煉</h1>
          <p className="hero-tagline">技術是語言，倫理與意識才是共振的核心。</p>
          <p>
            TS 技術系列與 PE 感知倫理系列，是成為森波系統深度能量定頻頌缽師的雙軸基礎修煉路徑。
            從聲頻物理技術到專業執業倫理，兩條主軸最終融合為完整的執業能力。
          </p>
        </div>
        <div className="tspe-hero-scroll">scroll ↓</div>
      </section>

      {/* ── 執業精神 ── */}
      <section className="tspe-section">
        <div className="tspe-inner">
          <div className="tspe-section-head">
            <p className="en-label">PRACTITIONER SPIRIT</p>
            <h2>執業精神</h2>
          </div>
          <div className="spirit-block">
            <p className="spirit-quote">醫人者先醫己</p>
            <p className="spirit-body">
              成為定頻師，不只是習得一門技術——而是一個持續修煉自身的承諾。
              在靈性服務的領域中，技術是語言，但「倫理與意識」才是我們與個案共振的核心。
              我們要求每一位從這裡走出去的深度能量定頻頌缽師，都能辨識能力的邊界，
              尊重每個人的人生主權，在迷路時與人作伴，卻絕不代為行走。
            </p>
            <div className="spirit-pillars">
              <div className="spirit-pillar">
                <h4>辨識邊界能力</h4>
                <p>清楚知道自己的執業範疇，不越界、不逞強，主動停止並建議正確的轉介。</p>
              </div>
              <div className="spirit-pillar">
                <h4>尊重個體主權</h4>
                <p>每個個案都是自己生命的主體，顧問只是輔助。決策主權始終歸還於個案。</p>
              </div>
              <div className="spirit-pillar">
                <h4>穩定清澈的陪伴</h4>
                <p>不帶情緒投射，以清澈的臨在陪伴個案探索，而非以感知訊息引導或操控。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TS 技術系列 ── */}
      <section className="tspe-section tspe-section-alt">
        <div className="tspe-inner">
          <div className="tspe-section-head">
            <p className="en-label">TS · TECHNICAL SERIES</p>
            <h2>TS 深度能量定頻訓練系統</h2>
            <p>從物理技術基礎到高階脈輪系統，系統性建立定頻技術能力。每張卡片可展開查看詳細課程內容。</p>
          </div>
          <div className="ts-grid">
            {tsServices.map((s) => (
              <div
                key={s.id}
                className={`ts-card${openCard === s.id ? ' open' : ''}`}
                onClick={() => toggleCard(s.id)}
              >
                <div className="ts-card-bar" />
                <div className="ts-card-header">
                  <div className="ts-card-toggle">
                    <div className="ts-card-toggle-icon" />
                  </div>
                  <p className="ts-card-id">{s.id} · {s.en}</p>
                  <h3>{s.title}</h3>
                  <p className="ts-card-en">{s.en}</p>
                </div>
                <div className="ts-card-meta">
                  <span className="ts-card-price">{s.price}</span>
                  <span className="ts-card-target">{s.target}</span>
                </div>
                <div className="ts-card-expand">
                  <div className="ts-card-expand-inner">
                    <p>{s.desc}</p>
                    <ul>
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PE 感知與倫理系列 ── */}
      <section className="tspe-section">
        <div className="tspe-inner">
          <div className="tspe-section-head">
            <p className="en-label">PE · PROFESSIONAL ETHICS</p>
            <h2>PE 直覺感知與倫理系列</h2>
            <p>所有學員共同必修。倫理是執業的底線，不是選項。</p>
          </div>
          <div className="pe-grid">
            {peServices.map((s) => (
              <div key={s.id} className="pe-card">
                <div className="pe-card-top">
                  <p className="pe-card-id">{s.en}</p>
                  {s.required && (
                    <span className="pe-badge">必修</span>
                  )}
                </div>
                <h3>{s.title}</h3>
                <p
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    color: 'var(--muted)',
                    marginBottom: 12,
                  }}
                >
                  {s.tutor}
                </p>
                <p>{s.desc}</p>
                <div className="pe-card-footer">
                  <span className="pe-card-duration">{s.duration}</span>
                  <span className={`pe-card-price${s.price === '免費' ? ' free' : ''}`}>
                    {s.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 雙軸修煉路徑 ── */}
      <section className="tspe-section tspe-section-alt">
        <div className="tspe-inner">
          <div className="tspe-section-head">
            <p className="en-label">ENTRY PATHS</p>
            <h2>雙軸修煉路徑</h2>
            <p>根據你目前的基礎，選擇最適合的入學路徑。兩條路徑最終融合，取得核心技術修業證。</p>
          </div>

          <div className="paths-grid">
            {/* 一般入學路徑 */}
            <div className="path-block path-primary">
              <p className="path-label">一般入學路徑</p>
              <h3>從零開始 → 全系統修煉</h3>
              <div className="path-steps">
                <div className="path-step">
                  <div className="path-step-dot">1</div>
                  <div className="path-step-text">
                    <strong>完修《流》放鬆頌缽課程</strong>
                    建立基礎聲頻感知與操作能力
                  </div>
                </div>
                <div className="path-arrow">↓</div>
                <div className="path-step">
                  <div className="path-step-dot">2</div>
                  <div className="path-step-text">
                    <strong>TS-02 深度能量定頻進階技法</strong>
                    深化敲擊與感知傳譯同步率
                  </div>
                </div>
                <div className="path-arrow">↓</div>
                <div className="path-step">
                  <div className="path-step-dot">3</div>
                  <div className="path-step-text">
                    <strong>TS-03 高階七脈輪療癒系統</strong>
                    掌握核心療癒邏輯與系統框架
                  </div>
                </div>
                <div className="path-arrow">↓</div>
                <div className="path-step">
                  <div className="path-step-dot pe">PE</div>
                  <div className="path-step-text">
                    <strong>PE 全系列（含 PE-01 + PE-L）</strong>
                    必修，所有學員皆需完成
                  </div>
                </div>
              </div>
            </div>

            {/* 專業直入路徑 */}
            <div className="path-block">
              <p className="path-label">專業直入路徑</p>
              <h3>已具備感知 → 技術補強整合</h3>
              <div className="path-steps">
                <div className="path-step">
                  <div className="path-step-dot">1</div>
                  <div className="path-step-text">
                    <strong>評核具備直覺感知能力</strong>
                    由導師評估基礎感知與技術狀態
                  </div>
                </div>
                <div className="path-arrow">↓</div>
                <div className="path-step">
                  <div className="path-step-dot">2</div>
                  <div className="path-step-text">
                    <strong>TS-01 頌缽技法快速通道</strong>
                    技術檢核與 NG 動作矯正加強
                  </div>
                </div>
                <div className="path-arrow">↓</div>
                <div className="path-step">
                  <div className="path-step-dot">3</div>
                  <div className="path-step-text">
                    <strong>TS-02 ／ TS-03 進階課程</strong>
                    依評核結果選擇對應課程
                  </div>
                </div>
                <div className="path-arrow">↓</div>
                <div className="path-step">
                  <div className="path-step-dot pe">PE</div>
                  <div className="path-step-text">
                    <strong>PE 全系列（含 PE-01 + PE-L）</strong>
                    必修，所有學員皆需完成
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="paths-merge">
            <p>↓ &nbsp; 兩條路徑融合 &nbsp; ✹ &nbsp; 提交 3 場個案實作紀錄 &nbsp; ✹ &nbsp; 簽署執業倫理原則 &nbsp; → &nbsp; 核發核心技術修業證 &nbsp; ↓</p>
          </div>
        </div>
      </section>

      {/* ── 核心技術修業證 ── */}
      <div className="cert-block">
        <div className="cert-ornament" />
        <p className="cert-label">UPON COMPLETION</p>
        <h2 className="cert-title">森波高階頌缽 ✹ 核心技術修業證</h2>
        <p className="cert-en">Core Technical Practitioner Certificate</p>
        <p className="cert-desc">
          完成 TS 系列課程與 PE 全系列，並通過實作演練後正式核發。
          具備獨立施作定頻服務的專業基礎資格，作為正式執業的起點。
        </p>
        <div className="cert-conditions">
          <span className="cert-condition">完修 TS 對應課程</span>
          <span className="cert-condition">完修 PE 全系列含講座</span>
          <span className="cert-condition">提交 3 場個案實作紀錄</span>
          <span className="cert-condition">簽署執業倫理原則</span>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="tspe-cta">
        <h2>預約入學路徑評估</h2>
        <p>
          在正式報名前，我們會安排一次路徑評估對談，確認你目前的狀態、
          學習目標與最適合的進入方式。找到對的路徑，才能走得穩。
        </p>
        <div className="tspe-cta-btns">
          <a
            href="https://lin.ee/your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sand"
          >
            LINE 預約評估 →
          </a>
          <Link href="/as" className="btn-sand-outline">
            了解認證考核 AS →
          </Link>
        </div>
      </section>
    </>
  )
}
