'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import './hl-page.css'
import HlHero from '@/components/hl/HlHero'

// ── Pearl data ──────────────────────────────────────────────────────────────
const pearlData: Record<string, { name: string; en: string; lightBg: string; desc: string }> = {
  p: {
    name: '文昌對齊',
    en: 'Academic & Creative Alignment',
    lightBg: 'linear-gradient(135deg,#f5f4d8,#eeec9a)',
    desc: '清理思維阻塞，讓學習力、表達力、創意與直覺重新流動。適合準備考試、創作瓶頸、思維混濁、語言表達受阻者。',
  },
  h: {
    name: '身體健康祈福',
    en: 'Physical Vitality & Healing',
    lightBg: 'linear-gradient(135deg,#f0e8ff,#ddc8f8)',
    desc: '針對身體議題進行能量支持，啟動自癒頻率，讓物質層面的阻塞鬆動。協助身體找回與自然節律的連結。',
  },
  e: {
    name: '能量保護罩',
    en: 'Energy Shield & Boundaries',
    lightBg: 'linear-gradient(135deg,#daeeff,#b8d8f8)',
    desc: '建立個人能量邊界，清理外來干擾與能量漏失，重建氣場的完整性與穩定性。適合敏感體質、容易被環境影響者。',
  },
  a: {
    name: '金錢豐盛',
    en: 'Abundance & Prosperity',
    lightBg: 'linear-gradient(135deg,#fff4cc,#fde898)',
    desc: '清理對金錢的匱乏信念與能量收縮，重建對豐盛的接收通道。讓你與財富之間的頻率重新對準。',
  },
  l: {
    name: '愛的流動',
    en: 'Love & Heart Opening',
    lightBg: 'linear-gradient(135deg,#d8f5e8,#a8eacc)',
    desc: '清理心輪阻塞，釋放過去愛的傷痕，重建與自己及他人之間愛的連結能力。讓給予與接收愛都變得自然。',
  },
  r: {
    name: '關係共振',
    en: 'Relationship Resonance',
    lightBg: 'linear-gradient(135deg,#ffe8f0,#ffccdc)',
    desc: '處理深層的關係模式與依附傾向，清理影響關係的舊有頻率，讓真實的連結得以發生。',
  },
}

export default function HlPage() {
  useEffect(() => {
    document.body.classList.add('page-hl')
    return () => { document.body.classList.remove('page-hl') }
  }, [])

  const [smOpen, setSmOpen] = useState(false)
  const [flippedA, setFlippedA] = useState(false)
  const [flippedB, setFlippedB] = useState(false)
  const [openPlans, setOpenPlans] = useState<Record<string, boolean>>({})
  const [activePearl, setActivePearl] = useState<string | null>(null)

  const navScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('header') as HTMLElement
    const navH = nav ? nav.offsetHeight : 72
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  const togglePlan = (id: string) => {
    setOpenPlans(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const pearl = activePearl ? pearlData[activePearl] : null

  return (
    <>
      {/* ── HERO ── */}
      <HlHero />

      {/* ── HOW IT WORKS ── */}
      <section id="steps">
        <div className="section-label">HOW IT WORKS</div>
        <h2 className="sec-h2">定頻邏輯三步驟</h2>
        <p className="steps-desc">每個完整的旅程都遵循三個核心步驟，從精準掃描到深度清理，最後落地整合。點擊步驟了解更多。</p>

        <div className="steps-horiz">
          <div className="step-card" onClick={() => navScrollTo('sound-mapping')}>
            <div className="step-card-num">
              <div className="step-card-num-txt">01</div>
            </div>
            <h3>掃描<br />生命音譜掃描</h3>
            <p>以 1.5 小時深度工作，建立你的身心現況雷達，形成可視化的能量地圖。</p>
            <div className="step-card-link">了解詳情 →</div>
          </div>
          <div className="step-card" onClick={() => navScrollTo('paths')}>
            <div className="step-card-num">
              <div className="step-card-num-txt">02</div>
            </div>
            <h3>清理<br />選擇你的路徑</h3>
            <p>根據掃描結果，選擇全面式系統清理或針對式主題對齊，兩條路徑皆由禿禿親自執行。</p>
            <div className="step-card-link">了解詳情 →</div>
          </div>
          <div className="step-card" onClick={() => navScrollTo('followup')}>
            <div className="step-card-num">
              <div className="step-card-num-txt">03</div>
            </div>
            <h3>落地陪跑<br />能量整合計畫</h3>
            <p>清理之後的整合，才是真正的改變。持續陪跑，協助你將內在轉變帶入日常。</p>
            <div className="step-card-link">了解詳情 →</div>
          </div>
        </div>
      </section>

      {/* ── SOUND MAPPING ── */}
      <section id="sound-mapping">
        <div className="section-label">掃描 · 第一步</div>
        <h2 className="sec-h2">生命音譜掃描</h2>
        <p style={{ fontSize: 15, color: '#888', lineHeight: 1.9, maxWidth: 520, marginBottom: 40 }}>
          以 1.5 小時深度工作，建立身心現況雷達，形成可視化的能量地圖。
        </p>
        <div className={`sm-inner${smOpen ? ' expanded' : ''}`} id="sm-card">
          <div className="sm-left">
            <p>以頌缽、音叉與直覺讀取，禿禿掃描你七個脈輪的振動狀態，辨識阻塞區域、能量漏失點與長期壓抑的情緒訊號。</p>
            <p style={{ fontSize: 14, color: '#999', lineHeight: 1.85, marginTop: 12 }}>
              這份掃描不只是診斷——它是你後續所有清理工作的地圖，讓每一步都精準落在真正需要移動的地方。
            </p>
          </div>
          <div className="sm-right">
            <div className="sm-right-title">完成後你會獲得</div>
            <div className="sm-what-list">
              {[
                '個人七脈輪能量現況報告（口頭傳達）',
                '主要阻塞區域與情緒根源初判',
                '量身推薦的清理路徑（全面式或針對式）',
                '後續是否適合陪跑計畫的評估建議',
              ].map(item => (
                <div className="sm-what-item" key={item}>
                  <div className="sm-what-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="sm-meta-reveal">
              <div className="sm-meta-list">
                {[
                  ['服務形式', '1 對 1 · 實體預約'],
                  ['投入時間', '1.5 小時'],
                  ['費用', 'NT$8,000'],
                  ['備注', '建議作為後續清理的前置診斷'],
                ].map(([label, val]) => (
                  <div className="sm-meta-row" key={label}>
                    <span className="sm-meta-label">{label}</span>
                    <span className="sm-meta-val">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="sm-toggle" onClick={() => setSmOpen(v => !v)}>
              <span>{smOpen ? '收起' : '查看費用與形式'}</span>
              <span style={{ transition: 'transform .3s', display: 'inline-block', transform: smOpen ? 'rotate(180deg)' : 'none' }}>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── PATH SELECTION ── */}
      <section id="paths">
        <div className="section-label">選擇路徑</div>
        <h2 className="sec-h2">選擇你的清理路徑</h2>
        <p className="paths-desc">完成生命音譜掃描後，根據你的能量地圖結果，選擇最適合你的清理路徑。點擊卡片翻面查看詳情。</p>
        <div className="paths-grid">

          {/* Card A */}
          <div className={`flip-outer${flippedA ? ' flipped' : ''}`} onClick={() => setFlippedA(v => !v)}>
            <div className="flip-inner">
              <div className="flip-front">
                <div className="path-icon path-icon-rose">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="8" r="4" fill="currentColor" opacity="0.9" />
                    <circle cx="28" cy="20" r="3.5" fill="currentColor" opacity="0.75" />
                    <circle cx="28" cy="30.5" r="3" fill="currentColor" opacity="0.6" />
                    <circle cx="28" cy="39.5" r="2.5" fill="currentColor" opacity="0.45" />
                    <circle cx="28" cy="47" r="2" fill="currentColor" opacity="0.32" />
                    <circle cx="20" cy="23" r="2" fill="currentColor" opacity="0.28" />
                    <circle cx="36" cy="23" r="2" fill="currentColor" opacity="0.28" />
                  </svg>
                </div>
                <h3>全面式系統清理</h3>
                <p>七脈輪能量調和。從海底輪到頂輪的全系統能量重建，適合需要深度清理或長期卡關者。</p>
                <div className="flip-hint">點擊翻面查看詳情</div>
              </div>
              <div className="flip-back rose">
                <h3>全面式系統清理</h3>
                <p>整個過程由禿禿引導，透過頌缽頻率、音叉定點與冥想引導的組合，系統性地清理每一個脈輪的能量阻塞，重建能量流動的完整性。</p>
                <div className="flip-back-meta">
                  {[['服務形式', '1 對 1 · 實體'], ['投入時間', '3 小時'], ['費用', 'NT$45,000']].map(([l, v]) => (
                    <div className="flip-back-meta-row" key={l}>
                      <span className="flip-back-meta-label">{l}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
                <button className="flip-btn" onClick={e => { e.stopPropagation(); navScrollTo('followup') }}>了解陪跑計畫 →</button>
              </div>
            </div>
          </div>

          {/* Card B */}
          <div className={`flip-outer${flippedB ? ' flipped' : ''}`} onClick={() => setFlippedB(v => !v)}>
            <div className="flip-inner">
              <div className="flip-front purple">
                <div className="path-icon path-icon-purple">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="18" fill="currentColor" opacity="0.12" />
                    <circle cx="28" cy="28" r="12" fill="currentColor" opacity="0.38" />
                    <circle cx="28" cy="28" r="7" fill="currentColor" opacity="0.85" />
                    <circle cx="24" cy="23" r="2.5" fill="white" opacity="0.42" />
                  </svg>
                </div>
                <h3>針對式主題對齊</h3>
                <p>六大定音珍珠系列。針對單一主題進行深度對齊，適合有明確議題或想針對特定生命面向進行清理者。</p>
                <div className="flip-hint purple">點擊翻面查看詳情</div>
              </div>
              <div className="flip-back purple">
                <h3>針對式主題對齊</h3>
                <p>每顆珍珠對應一個核心生命主題——文昌對齊、身體健康祈福、能量保護罩、愛的流動、金錢豐盛、關係共振。由禿禿親自執行。</p>
                <div className="flip-back-meta" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  {[['服務形式', '1 對 1 · 實體'], ['投入時間', '90 分鐘 / 主題'], ['費用', 'NT$12,000 / 主題']].map(([l, v]) => (
                    <div className="flip-back-meta-row" key={l}>
                      <span className="flip-back-meta-label">{l}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
                <button className="flip-btn" onClick={e => { e.stopPropagation(); navScrollTo('pearls') }}>查看六大定音主題 →</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FOLLOW-UP ── */}
      <section id="followup">
        <div className="section-label">落地整合</div>
        <h2 className="sec-h2">能量陪跑定錨計畫</h2>
        <p className="fu-sub">清理之後，整合才是真正的改變。持續的陪跑支持，讓頻率真正落地為日常。</p>
        <div className="fu-card-wrap">
          <div className="fu-card" id="fu-card">
            <div className="fu-card-left">
              <p>清理之後的整合，才是真正落地的工作。每一堂陪跑由禿禿親自執行，從頻率預熱、意識對話到共振引導，最後以具體的實踐策略收尾。</p>
              <p style={{ fontSize: 14, color: '#c49898', lineHeight: 1.85, marginTop: 12 }}>
                這不是諮詢，也不是複習——而是讓你的身體繼續在更深的層次移動，直到改變真正成為你的一部分。
              </p>
              <div className="fu-steps-list">
                {[
                  ['頻', '頻率預熱 ― 透過頌缽聲頻卸下日常雜訊，確認本次校準方向'],
                  ['識', '意識對話 ― 深度對談浮現的議題，以薩滿或易經視角梳理模式'],
                  ['振', '共振引導 ― 針對鎖定課題進行頌缽頻率校準，讓理解落體至身體'],
                  ['踐', '實踐分享 ― 提供具體行動建議與日常定錨策略'],
                ].map(([mark, text]) => (
                  <div className="fu-step-row" key={mark}>
                    <span className="fu-step-mark">{mark}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fu-card-right">
              <div className="fu-caps-row">
                {['1 對 1 · 實體預約', '1.5 小時 / 堂', '完成系統清理後可加選'].map(cap => (
                  <span className="fu-cap" key={cap}>{cap}</span>
                ))}
              </div>
              <div className="fu-card-right-title">選擇你的方案</div>
              <div className="fu-plans-compact">
                {[
                  { id: 'fpc-5',  name: '五堂計畫',     duration: '1.5 小時 / 堂 · 共 5 堂',  price: 'NT$75,000',  prereq: '完成系統清理' },
                  { id: 'fpc-10', name: '十堂計畫',     duration: '1.5 小時 / 堂 · 共 10 堂', price: 'NT$150,000', prereq: '完成系統清理' },
                  { id: 'fpc-15', name: '十五堂旗艦計畫', duration: '1.5 小時 / 堂 · 共 15 堂', price: 'NT$225,000', prereq: '完成系統清理 · 長期深度整合' },
                ].map(plan => (
                  <div className={`fu-plan-c${openPlans[plan.id] ? ' open' : ''}`} key={plan.id}>
                    <div className="fu-plan-c-header" onClick={() => togglePlan(plan.id)}>
                      <span className="fu-plan-c-name">{plan.name}</span>
                      <span className="fu-plan-c-plus">+</span>
                    </div>
                    <div className="fu-plan-c-detail">
                      <div className="fu-cd-row"><span className="fu-cd-label">投入時間</span><span className="fu-cd-val">{plan.duration}</span></div>
                      <div className="fu-cd-row"><span className="fu-cd-label">費用</span><span className="fu-cd-val">{plan.price}</span></div>
                      <div className="fu-cd-row"><span className="fu-cd-label">前提</span><span className="fu-cd-val">{plan.prereq}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PEARLS ── */}
      <section id="pearls">
        <div className="section-label" style={{ position: 'relative' }}>六大定音</div>
        <h2 className="sec-h2">六大定音珍珠系列</h2>
        <p className="pearls-desc">每顆珍珠對應一個核心生命主題，單獨或組合體驗皆可。點擊珍珠查看詳情。</p>
        <p className="pearls-meta">NT$12,000 / 主題 · 90 min · 禿禿 親自執行</p>

        <div className="pearls-ring-wrap">
          <div className="pearls-ring-halo" />
          {(['p','h','e','l','a','r'] as const).map(key => (
            <div className={`pearl-item pos-${key}`} key={key} onClick={() => setActivePearl(key)}>
              <div className="pearl-halo" />
              <div className={`dot-pearl pearl-${key}`}>
                <div className="dot-pearl-color" />
                <div className="dot-pearl-shine" />
              </div>
              <div className="pearl-name">{pearlData[key].name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PEARL MODAL ── */}
      {pearl && (
        <div className="pearl-modal open" onClick={e => { if (e.target === e.currentTarget) setActivePearl(null) }}>
          <div className="pearl-modal-inner" style={{ background: pearl.lightBg }}>
            <button className="pearl-modal-close" onClick={() => setActivePearl(null)}>×</button>
            <h3>{pearl.name}</h3>
            <div className="pd-en">{pearl.en}</div>
            <p>{pearl.desc}</p>
            <div className="pearl-modal-meta">
              {['NT$12,000', '90 分鐘', '1 對 1 · 實體', '禿禿 親自執行'].map(cap => (
                <span className="pearl-cap" key={cap}>{cap}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section id="hl-cta">
        <div className="cta-deep">深</div>
        <h2>準備好從根源重新調頻？</h2>
        <p>從生命音譜掃描開始，讓禿禿帶你找到屬於你的清理路徑。</p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn-primary">預約生命音譜掃描 →</Link>
          <Link href="/about" className="btn-ghost">了解森波</Link>
        </div>
      </section>
    </>
  )
}
