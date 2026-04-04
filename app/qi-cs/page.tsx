'use client'

import { useState } from 'react'
import Link from 'next/link'

// ── Data ──────────────────────────────────────────────────────────────────────

const principles = [
  {
    num: '01',
    zh: '誠實解決',
    en: 'Honest Resolution',
    desc: '訊息可能不好聽，但我不說讓你舒服卻不真實的話。真實的問題，才能帶來真實的方向。',
  },
  {
    num: '02',
    zh: '自我負責',
    en: 'Self-Accountability',
    desc: '指引的本質是還原你的判斷力，而非代替你的意志。諮詢之後，選擇與承擔都是你的。',
  },
  {
    num: '03',
    zh: '天助自助者',
    en: 'Heaven Helps Those Who Help Themselves',
    desc: '我陪你看清楚，不陪你逃跑。所有的指引都是為了讓你更清醒，而不是更依賴。',
  },
]

const situations = [
  { situation: '感知到方向，但不確定是直覺還是焦慮', type: '方向校準', service: 'QI-CS-01', note: '易經定調，辨識真實內在訊號' },
  { situation: '有玄天上帝或指導靈的訊息，想解讀落地', type: '玄天指引', service: 'QI-OR-03', note: '訊息解讀，轉化為可執行方向' },
  { situation: '靈性執業者，想把感知轉為可執業的服務', type: '執業定錨', service: 'QI-CS-02', note: '品牌定位、服務語言、目標對象' },
  { situation: '面臨企業或組織的重大決策轉型', type: '企業決策', service: 'AS-C-01', note: '策略洞察、決策框架、組織定向' },
  { situation: '人生大事抉擇（移民、轉行、婚姻）', type: '人生格局', service: 'QI-CS-01 / 02', note: '釐清主軸，確認生命方向' },
  { situation: '關係困境，想了解是課題還是離開訊號', type: '關係決策', service: 'QI-OR-03', note: '快速釐清，不延伸依賴' },
  { situation: '想創立靈性品牌，需要從零陪跑建立', type: '創業陪跑', service: 'AS-C 系列', note: '全方位孵化，策略到執行' },
]

const pathSteps = [
  {
    step: '01',
    code: 'QI-OR-03',
    label: '快速通道',
    desc: '單一問題即時洞察。你已知道問題，只需要一個清晰切入點。',
    duration: '45 分鐘',
    price: 'NT$2,500',
    fit: '問題已明確，需要快速確認方向',
  },
  {
    step: '02',
    code: 'QI-CS-01 / 02',
    label: '釐清問題',
    desc: '深度梳理方向或執業定位。問題還不清楚、需要系統思考的狀態。',
    duration: '1.5–3 小時',
    price: 'NT$5,000–9,000',
    fit: '問題模糊，或處於重大轉折',
  },
  {
    step: '03',
    code: 'AS-C 系列',
    label: '落地創業',
    desc: '品牌策略到數位工作流的全方位陪跑。以靈性為底，建立可持續執業系統。',
    duration: '長期陪伴',
    price: '洽詢',
    fit: '準備執業，需要系統性建立',
  },
]

const serviceGroups = [
  {
    group: 'QI 系列',
    groupSub: '個人即時洞察',
    accentColor: '#607866',
    items: [
      { code: 'QI-OR-03', name: '玄天上帝路徑諮詢', duration: '45 分鐘', price: 'NT$2,500', desc: '指引訊息解讀，快速釐清方向' },
      { code: 'QI-CS-01', name: '易經理路定調', duration: '1.5–2 小時', price: 'NT$6,000', desc: '易卦切入能量狀態，還原判斷主軸' },
      { code: 'QI-CS-02', name: '靈性品牌策略定錨', duration: '2–3 小時', price: 'NT$9,000', desc: '定義服務語言、目標對象與品牌定位' },
    ],
  },
  {
    group: 'AS-C 系列',
    groupSub: '創業品牌策略',
    accentColor: '#3D5C48',
    items: [
      { code: 'AS-C-01', name: '品牌孵化・定向期', duration: '4 週', price: '洽詢', desc: '品牌核心、定位語言、受眾研究' },
      { code: 'AS-C-02', name: '品牌孵化・建立期', duration: '8 週', price: '洽詢', desc: '視覺識別、內容策略、數位工作流' },
      { code: 'AS-C-03', name: '品牌孵化・執行期', duration: '持續陪跑', price: '洽詢', desc: '上線後優化、社群節奏、執業教練' },
    ],
  },
]

const faqs = [
  {
    q: '抓大放小——不回應瑣事',
    a: '如果你帶來的是「今天要不要買這件衣服」這類問題，我會請你自己決定。諮詢的能量應該用在真正影響生命格局的抉擇，而不是日常小事的外包。',
  },
  {
    q: '主權歸還——我的話是參考，不是指令',
    a: '所有解讀都是一個視角，而非唯一答案。你才是自己生命的主人。如果你習慣把每個決定都交給外部權威，這裡的工作方式可能讓你不舒服——但那正是重點所在。',
  },
  {
    q: '誠實原則——不自我負責者，我不予協助',
    a: '如果你來只是為了尋找一個「幫你解決」的人，我們不適合合作。我的工作是讓你看清楚，但走路的人是你。準備好承擔自己的選擇，我們才能真正開始。',
  },
]

const bookingSteps = [
  { step: '01', action: '傳訊說明狀態', detail: 'LINE 或 Email 簡述你的情況與想諮詢的方向' },
  { step: '02', action: '確認服務與時間', detail: '夏確認適合的服務項目，雙方約定諮詢時間' },
  { step: '03', action: '付款確認', detail: '完成付款後發送確認通知，諮詢正式成立' },
  { step: '04', action: '進行服務', detail: '線上或實體進行，全程 1 對 1' },
]

// ── Shared style tokens ───────────────────────────────────────────────────────
const T = {
  secLabel: {
    fontFamily: 'var(--f-mono)',
    fontSize: 10,
    letterSpacing: '0.25em',
    textTransform: 'uppercase' as const,
    color: '#607866',
    marginBottom: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  },
  h2Light: {
    fontFamily: 'var(--f-zh)',
    fontWeight: 900,
    fontSize: 'clamp(26px,3.8vw,44px)' as string,
    letterSpacing: '0.03em',
    lineHeight: 1.15,
    color: '#212E27',
    marginBottom: 16,
  },
  h2Dark: {
    fontFamily: 'var(--f-zh)',
    fontWeight: 900,
    fontSize: 'clamp(26px,3.8vw,44px)' as string,
    letterSpacing: '0.03em',
    lineHeight: 1.15,
    color: '#F2EFEA',
    marginBottom: 16,
  },
  bodyLight: { fontSize: 14, lineHeight: 1.9, color: '#333333', opacity: 0.65 },
  bodyDark: { fontSize: 14, lineHeight: 1.9, color: 'rgba(242,239,234,0.5)' },
  sectionPad: 'clamp(88px,10vw,128px) clamp(24px,5vw,72px)' as string,
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function QiCsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>

      {/* ══ 01 HERO ══════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '88vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(32px,5vw,80px)',
        alignItems: 'center',
        padding: 'clamp(100px,14vw,160px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
        background: '#F2EFEA',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Faint blobs */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', bottom: '10%', left: '-4%', width: 'clamp(140px,20vw,280px)', height: 'clamp(140px,20vw,280px)', borderRadius: '55% 45% 60% 40% / 45% 55% 40% 60%', background: 'radial-gradient(ellipse, rgba(96,120,102,0.1), transparent 70%)' }} />
          <div style={{ position: 'absolute', top: '8%', right: '44%', width: 'clamp(80px,12vw,160px)', height: 'clamp(80px,12vw,160px)', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(61,92,72,0.07), transparent 70%)' }} />
        </div>

        {/* Left: copy */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ ...T.secLabel }}>
            <span style={{ display: 'block', width: 36, height: 1, background: '#607866', opacity: 0.5 }} />
            QI-CS · XIA + XUANTIAN PATH
          </p>
          <h1 style={{
            fontFamily: 'var(--f-zh)',
            fontWeight: 900,
            fontSize: 'clamp(30px,4.8vw,58px)',
            lineHeight: 1.18,
            letterSpacing: '0.03em',
            color: '#212E27',
            marginBottom: 22,
          }}>
            在理路的乾淨中，<br />看見生命的格局
          </h1>
          <p style={{ ...T.bodyLight, maxWidth: 440, marginBottom: 44 }}>
            結合易經智慧與高維觀測，為生命大計提供定錨指引。
            <br />不給答案——給你一個更清晰的問題。
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#F2EFEA', textDecoration: 'none',
              background: '#212E27', borderRadius: 999, padding: '13px 28px',
            }}>
              預約諮詢 →
            </Link>
            <a href="#situations" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#607866', textDecoration: 'none',
              border: '1px solid rgba(96,120,102,0.35)', borderRadius: 999, padding: '13px 28px',
            }}>
              查看情境對照
            </a>
          </div>
        </div>

        {/* Right: abstract path SVG */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <svg viewBox="0 0 380 340" width="100%" style={{ maxWidth: 380 }} fill="none" aria-hidden>
            {/* Main path */}
            <path d="M50 290 C70 230 110 250 135 195 C158 142 128 118 162 76 C196 34 248 56 268 98" stroke="#607866" strokeWidth="1.2" strokeLinecap="round" />
            {/* Branch A - dashed */}
            <path d="M162 76 C192 66 224 38 266 28" stroke="#607866" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="4 7" />
            {/* Branch B */}
            <path d="M195 165 C228 160 268 148 322 158 C350 163 368 188 358 218" stroke="#3D5C48" strokeWidth="1" strokeLinecap="round" />
            {/* Connector */}
            <path d="M135 195 C152 195 168 182 195 165" stroke="#607866" strokeWidth="0.7" strokeLinecap="round" />
            {/* Branch C - dashed */}
            <path d="M268 98 C298 97 328 88 354 77" stroke="#607866" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="3 6" />
            {/* Drop */}
            <path d="M358 218 L358 294" stroke="#3D5C48" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="4 7" />

            {/* Nodes */}
            <circle cx="50" cy="290" r="4.5" fill="none" stroke="#607866" strokeWidth="1" /><circle cx="50" cy="290" r="1.8" fill="#607866" />
            <circle cx="135" cy="195" r="4.5" fill="none" stroke="#607866" strokeWidth="1" /><circle cx="135" cy="195" r="1.8" fill="#607866" />
            <circle cx="162" cy="76" r="6" fill="none" stroke="#607866" strokeWidth="1" /><circle cx="162" cy="76" r="2.5" fill="#607866" />
            <circle cx="195" cy="165" r="4.5" fill="none" stroke="#3D5C48" strokeWidth="1" /><circle cx="195" cy="165" r="1.8" fill="#3D5C48" />
            <circle cx="268" cy="98" r="4.5" fill="none" stroke="#607866" strokeWidth="1" /><circle cx="268" cy="98" r="1.8" fill="#607866" />
            <circle cx="358" cy="218" r="6" fill="none" stroke="#3D5C48" strokeWidth="1" /><circle cx="358" cy="218" r="2.5" fill="#3D5C48" />

            {/* Ghost dots */}
            <circle cx="96" cy="252" r="1.5" fill="#607866" opacity="0.3" />
            <circle cx="302" cy="128" r="1.5" fill="#3D5C48" opacity="0.3" />
            <circle cx="228" cy="40" r="1.5" fill="#607866" opacity="0.25" />

            {/* Mono labels */}
            <text x="14" y="295" fontFamily="monospace" fontSize="7" fill="#607866" opacity="0.5" letterSpacing="2">START</text>
            <text x="118" y="68" fontFamily="monospace" fontSize="7" fill="#212E27" opacity="0.55" letterSpacing="2">PIVOT</text>
            <text x="362" y="212" fontFamily="monospace" fontSize="7" fill="#3D5C48" opacity="0.55" letterSpacing="2">LAND</text>
          </svg>
        </div>
      </section>

      {/* ══ 02 指導靈宣告 ═════════════════════════════════════════════════════ */}
      <section style={{ padding: T.sectionPad, background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start', maxWidth: 960 }}>

            {/* Left label col */}
            <div style={{ position: 'sticky', top: 120 }}>
              <p style={{ ...T.secLabel }}>
                <span style={{ display: 'block', width: 28, height: 1, background: '#607866', opacity: 0.5 }} />
                指導靈宣告
              </p>
              <h2 style={{ ...T.h2Light, fontSize: 'clamp(22px,2.8vw,32px)' }}>
                玄天上帝的<br />執業教誨
              </h2>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: '#333', opacity: 0.5, maxWidth: 220 }}>
                這不是宗教宣示，而是一份工作誓言——說清楚我們在做什麼，以及我們為什麼這樣做。
              </p>
            </div>

            {/* Right principle list */}
            <div>
              {principles.map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '36px 1fr', gap: 24,
                  alignItems: 'start', padding: '36px 0',
                  borderBottom: i < principles.length - 1 ? '1px solid rgba(96,120,102,0.1)' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.15em', color: '#607866', opacity: 0.45, paddingTop: 6 }}>{p.num}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 12 }}>
                      <h3 style={{ fontFamily: 'var(--f-zh)', fontWeight: 900, fontSize: 20, color: '#212E27', letterSpacing: '0.04em' }}>{p.zh}</h3>
                      <span style={{ fontFamily: 'var(--f-display)', fontWeight: 100, fontSize: 9, letterSpacing: '0.2em', color: '#607866', opacity: 0.55, textTransform: 'uppercase' }}>{p.en}</span>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.85, color: '#333', opacity: 0.65 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ 03 情境對照表 ═════════════════════════════════════════════════════ */}
      <section id="situations" style={{ padding: T.sectionPad, background: '#F2EFEA' }}>
        <div className="wrap">
          <p style={{ ...T.secLabel }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#607866', opacity: 0.5 }} />
            情境對照表
          </p>
          <h2 style={{ ...T.h2Light }}>你在哪裡？找到你的切入點</h2>
          <p style={{ ...T.bodyLight, maxWidth: 520, marginBottom: 52 }}>
            對應你目前的狀態，找到最適合的服務切入點。七種常見情境，對應具體的服務建議。
          </p>

          <div style={{ overflowX: 'auto', maxWidth: 960 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(96,120,102,0.25)' }}>
                  {['情境', '類型', '建議服務', '說明'].map(h => (
                    <th key={h} style={{
                      textAlign: 'left', padding: '12px 16px',
                      fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.18em',
                      color: '#607866', textTransform: 'uppercase', fontWeight: 400, whiteSpace: 'nowrap',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {situations.map((s, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(96,120,102,0.08)', background: i % 2 === 0 ? 'transparent' : 'rgba(96,120,102,0.02)' }}>
                    <td style={{ padding: '20px 16px', fontFamily: 'var(--f-zh)', fontWeight: 500, fontSize: 14, color: '#212E27', lineHeight: 1.5, minWidth: 220 }}>{s.situation}</td>
                    <td style={{ padding: '20px 16px', whiteSpace: 'nowrap' }}>
                      <span style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.12em', color: '#607866', border: '1px solid rgba(96,120,102,0.35)', borderRadius: 999, padding: '3px 10px' }}>{s.type}</span>
                    </td>
                    <td style={{ padding: '20px 16px', fontFamily: 'var(--f-mono)', fontSize: 11, color: '#3D5C48', letterSpacing: '0.05em', whiteSpace: 'nowrap', fontWeight: 700 }}>{s.service}</td>
                    <td style={{ padding: '20px 16px', fontSize: 13, color: '#333', opacity: 0.58, lineHeight: 1.65, minWidth: 180 }}>{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            marginTop: 28, maxWidth: 960, padding: '20px 24px',
            background: 'rgba(96,120,102,0.05)', border: '1px solid rgba(96,120,102,0.15)',
            borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20,
          }}>
            <p style={{ fontSize: 13, color: '#333', opacity: 0.6, lineHeight: 1.75 }}>
              還不確定從哪裡開始？傳訊給夏說說你的狀態，她會幫你找到最合適的切入點。
            </p>
            <Link href="/contact" style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#607866', textDecoration: 'none', flexShrink: 0 }}>
              傳訊諮詢 →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 04 決策路徑地圖 ══════════════════════════════════════════════════ */}
      <section style={{ padding: T.sectionPad, background: '#212E27', position: 'relative', overflow: 'hidden' }}>
        {/* Background lines */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 900 400" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.05 }}>
            <path d="M0 200 Q225 140 450 200 Q675 260 900 200" stroke="#607866" strokeWidth="1" fill="none" />
            <path d="M0 260 Q225 200 450 260 Q675 320 900 260" stroke="#607866" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ ...T.secLabel, color: 'rgba(96,120,102,0.65)' }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#607866', opacity: 0.4 }} />
            決策路徑地圖
          </p>
          <h2 style={{ ...T.h2Dark }}>理性分層，找到你的位置</h2>
          <p style={{ ...T.bodyDark, maxWidth: 480, marginBottom: 64 }}>
            三個入口，對應不同深度的需求。你不需要從頭開始——從你在的地方開始。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, maxWidth: 900 }}>
            {pathSteps.map((ps, i) => (
              <div key={i} style={{ position: 'relative', paddingRight: i < 2 ? 48 : 0 }}>
                {/* Arrow connector */}
                {i < 2 && (
                  <div aria-hidden style={{ position: 'absolute', right: 0, top: 24, width: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: 16, color: 'rgba(96,120,102,0.4)', lineHeight: 1 }}>→</span>
                  </div>
                )}
                <div style={{ paddingRight: i < 2 ? 8 : 0, borderRight: i < 2 ? 'none' : 'none' }}>
                  {/* Step + code */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <span style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 32, height: 32, borderRadius: '50%',
                      border: '1px solid rgba(96,120,102,0.45)',
                      fontFamily: 'var(--f-mono)', fontSize: 9, color: '#607866', letterSpacing: '0.1em', flexShrink: 0,
                    }}>{ps.step}</span>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'rgba(96,120,102,0.55)' }}>{ps.code}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--f-zh)', fontWeight: 900, fontSize: 22, color: '#F2EFEA', letterSpacing: '0.04em', marginBottom: 12 }}>{ps.label}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(242,239,234,0.48)', marginBottom: 28 }}>{ps.desc}</p>
                  <div style={{ borderTop: '1px solid rgba(96,120,102,0.2)', paddingTop: 18 }}>
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'rgba(96,120,102,0.45)', marginBottom: 6 }}>{ps.duration}</p>
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 18, fontWeight: 700, color: '#607866', letterSpacing: '0.04em', marginBottom: 10 }}>{ps.price}</p>
                    <p style={{ fontSize: 11, color: 'rgba(242,239,234,0.28)', lineHeight: 1.65 }}>{ps.fit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 05 服務細項 ══════════════════════════════════════════════════════ */}
      <section style={{ padding: T.sectionPad, background: '#fff' }}>
        <div className="wrap">
          <p style={{ ...T.secLabel }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#607866', opacity: 0.5 }} />
            服務細項
          </p>
          <h2 style={{ ...T.h2Light }}>費用、規格與聯絡方式</h2>
          <p style={{ ...T.bodyLight, maxWidth: 480, marginBottom: 64 }}>
            所有服務均為 1 對 1，線上或實體皆可，以中文（繁體）進行。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 960 }}>
            {serviceGroups.map((g, gi) => (
              <div key={gi}>
                {/* Group header */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 32, paddingBottom: 14, borderBottom: `2px solid ${g.accentColor}` }}>
                  <h3 style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.15em', color: g.accentColor, fontWeight: 400 }}>{g.group}</h3>
                  <span style={{ fontFamily: 'var(--f-zh)', fontSize: 12, color: '#333', opacity: 0.45 }}>{g.groupSub}</span>
                </div>
                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {g.items.map((item, ii) => (
                    <div key={ii} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: ii < g.items.length - 1 ? '1px solid rgba(96,120,102,0.1)' : 'none' }}>
                      <span style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: g.accentColor, letterSpacing: '0.12em', opacity: 0.65, display: 'block', marginBottom: 5 }}>{item.code}</span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                        <span style={{ fontFamily: 'var(--f-zh)', fontWeight: 700, fontSize: 15, color: '#212E27' }}>{item.name}</span>
                        <span style={{ fontFamily: 'var(--f-mono)', fontSize: 15, fontWeight: 700, color: g.accentColor, letterSpacing: '0.04em', flexShrink: 0, marginLeft: 12 }}>{item.price}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontSize: 13, color: '#333', opacity: 0.55, lineHeight: 1.7 }}>{item.desc}</p>
                        <span style={{ fontFamily: 'var(--f-mono)', fontSize: 8, color: '#333', opacity: 0.32, letterSpacing: '0.1em', flexShrink: 0, marginLeft: 16 }}>{item.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 06 諮詢規範 FAQ ═══════════════════════════════════════════════════ */}
      <section style={{ padding: T.sectionPad, background: '#F2EFEA' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start', maxWidth: 960 }}>

            <div style={{ position: 'sticky', top: 120 }}>
              <p style={{ ...T.secLabel }}>
                <span style={{ display: 'block', width: 28, height: 1, background: '#607866', opacity: 0.5 }} />
                諮詢規範
              </p>
              <h2 style={{ ...T.h2Light, fontSize: 'clamp(22px,2.8vw,32px)' }}>
                工作之前，<br />先說清楚
              </h2>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: '#333', opacity: 0.5, maxWidth: 220 }}>
                這些不是限制，是為了讓諮詢真正有效。
              </p>
            </div>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(96,120,102,0.15)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', padding: '26px 0',
                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 20,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--f-zh)', fontWeight: 700, fontSize: 15, color: '#212E27', letterSpacing: '0.02em', lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <span style={{
                      fontFamily: 'var(--f-mono)', fontSize: 16, color: '#607866', opacity: 0.5,
                      transition: 'transform 0.25s', display: 'inline-block', flexShrink: 0,
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}>+</span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 240 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1)' }}>
                    <p style={{ fontSize: 14, lineHeight: 1.9, color: '#333', opacity: 0.62, paddingBottom: 26 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ 07 執行顧問 ══════════════════════════════════════════════════════ */}
      <section style={{ padding: T.sectionPad, background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'center', maxWidth: 900 }}>

            {/* Portrait */}
            <div style={{ position: 'relative', aspectRatio: '3/4', maxWidth: 340, background: 'linear-gradient(160deg,#eaede8,#e2eae4)', borderRadius: 6, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
              <svg viewBox="0 0 300 400" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} fill="none" aria-hidden>
                <ellipse cx="150" cy="290" rx="130" ry="170" fill="rgba(96,120,102,0.07)" />
                <ellipse cx="150" cy="128" rx="54" ry="62" fill="rgba(96,120,102,0.13)" stroke="#607866" strokeWidth="0.8" />
                <path d="M96 188 Q88 244 78 342 L222 342 Q212 244 204 188" fill="rgba(96,120,102,0.1)" stroke="#607866" strokeWidth="0.8" strokeLinejoin="round" />
                {/* Eyes */}
                <circle cx="134" cy="126" r="2.5" fill="#3D5C48" opacity="0.55" />
                <circle cx="166" cy="126" r="2.5" fill="#3D5C48" opacity="0.55" />
                {/* Mouth */}
                <path d="M141 148 Q150 156 159 148" stroke="#3D5C48" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.45" />
                {/* Base line */}
                <path d="M24 366 L276 366" stroke="#607866" strokeWidth="0.5" opacity="0.25" />
              </svg>
              <div style={{ position: 'relative', zIndex: 2, padding: '14px 20px' }}>
                <p style={{ fontFamily: 'var(--f-zh)', fontWeight: 900, fontSize: 24, color: '#212E27', letterSpacing: '0.12em' }}>夏 子</p>
                <p style={{ fontFamily: 'var(--f-mono)', fontSize: 8, letterSpacing: '0.2em', color: '#607866', opacity: 0.65 }}>XIA · CONSULTANT</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p style={{ ...T.secLabel }}>
                <span style={{ display: 'block', width: 28, height: 1, background: '#607866', opacity: 0.5 }} />
                執行顧問
              </p>
              <h2 style={{ ...T.h2Light }}>幫你看見大局的人</h2>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: '#333', opacity: 0.65, marginBottom: 14 }}>
                夏的工作是幫你看清楚你在哪裡，以及你可以往哪裡走。結合易經理路、玄天上帝指引與多年數位品牌實務，她的問題通常很少，但每個都直接擊中那個點。
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: '#333', opacity: 0.65, marginBottom: 40 }}>
                這不是算命，也不是靈媒。這是一種需要你認真參與的對話——你帶來誠實，她帶來視角。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { label: '專業背景', value: '易經理路 × 個人品牌規劃 × 企業顧問' },
                  { label: '代言身份', value: '玄天上帝（帝爺公）代言者' },
                  { label: '服務方式', value: '1 對 1 · 線上或實體' },
                  { label: '語言', value: '中文（繁體）' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '13px 0', borderBottom: '1px solid rgba(96,120,102,0.12)' }}>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.18em', color: '#607866', textTransform: 'uppercase' }}>{item.label}</span>
                    <span style={{ fontSize: 13, color: '#212E27' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 08 CTA ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: T.sectionPad, background: '#212E27', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '70%', height: '200%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(96,120,102,0.18), transparent 70%)' }} />
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ ...T.secLabel, color: 'rgba(96,120,102,0.65)' }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#607866', opacity: 0.4 }} />
            開始合作
          </p>
          <h2 style={{ ...T.h2Dark }}>準備好看清楚了嗎？</h2>
          <p style={{ ...T.bodyDark, maxWidth: 420, marginBottom: 64 }}>
            傳訊告訴夏你目前的狀態，她會幫你確認從哪裡開始最合適。
          </p>

          {/* Booking steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, maxWidth: 860, marginBottom: 64 }}>
            {bookingSteps.map((s, i) => (
              <div key={i} style={{ position: 'relative', paddingRight: i < 3 ? 40 : 0 }}>
                {i < 3 && (
                  <div aria-hidden style={{ position: 'absolute', right: 0, top: 12, width: 40, textAlign: 'center', zIndex: 2 }}>
                    <span style={{ fontSize: 12, color: 'rgba(96,120,102,0.38)' }}>→</span>
                  </div>
                )}
                <div style={{ paddingRight: i < 3 ? 12 : 0 }}>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.15em', color: 'rgba(96,120,102,0.45)', display: 'block', marginBottom: 12 }}>{s.step}</span>
                  <p style={{ fontFamily: 'var(--f-zh)', fontWeight: 700, fontSize: 14, color: '#F2EFEA', marginBottom: 8, letterSpacing: '0.03em' }}>{s.action}</p>
                  <p style={{ fontSize: 12, color: 'rgba(242,239,234,0.33)', lineHeight: 1.75 }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#212E27', textDecoration: 'none',
              background: '#F2EFEA', borderRadius: 999, padding: '14px 32px',
            }}>
              跟夏說說你的狀態 →
            </Link>
            <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
              <a href="#" style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.15em', color: 'rgba(242,239,234,0.38)', textDecoration: 'none', textTransform: 'uppercase' }}>LINE →</a>
              <a href="mailto:hello@zenpple.com" style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.15em', color: 'rgba(242,239,234,0.38)', textDecoration: 'none', textTransform: 'uppercase' }}>Email →</a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
