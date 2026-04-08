'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './hl-page.css'
import HlHero from '@/components/hl/HlHero'
import HlSection from '@/components/hl/HlSection'
import HlTitleSection from '@/components/hl/HlTitleSection'
import HlPathsPanel from '@/components/hl/HlPathsPanel'

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
  const [crOpen, setCrOpen] = useState(false)
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
      <HlSection id="steps">
        <HlTitleSection
          eyebrow="HOW IT WORKS"
          title="定頻邏輯兩步驟"
          subtitle="每段旅程都遵循兩個核心步驟——從精準掃描到深度清理。"
        />

        <div className="steps-flow">
          {/* Step 01 */}
          <div className="step-col" onClick={() => navScrollTo('sound-mapping')}>
            <div className="step-dot-wrap">
              <Image src="/resource/circle/pink/粉點-1.png" alt="" fill style={{ objectFit: 'contain' }} aria-hidden="true" />
              <span className="step-dot-num">01</span>
            </div>
            <div className="step-word">掃描</div>
            <div className="step-sub">生命音譜掃描</div>
          </div>

          {/* Connector */}
          <div className="step-connector" aria-hidden="true">
            <div className="step-conn-line" />
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M1 1 L7 6 L1 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 02 */}
          <div className="step-col step-col-2" onClick={() => navScrollTo('paths')}>
            <div className="step-dot-wrap">
              <Image src="/resource/circle/pink/粉點-2.png" alt="" fill style={{ objectFit: 'contain' }} aria-hidden="true" />
              <span className="step-dot-num">02</span>
            </div>
            <div className="step-word">清理</div>
            <div className="step-sub">選擇你的路徑</div>
          </div>
        </div>
      </HlSection>

      {/* Wave: steps → sound-mapping — soft rose cloud wisps on cream */}
      <div className="sm-wave-enter" aria-hidden="true">
        <svg viewBox="0 0 1440 44" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,22 C240,40 560,6 840,26 C1060,42 1280,10 1440,22 L1440,44 L0,44 Z" fill="rgba(196,123,123,0.13)" />
          <path d="M0,30 C320,14 680,44 1000,28 C1180,18 1340,38 1440,32 L1440,44 L0,44 Z" fill="rgba(196,123,123,0.07)" />
          <path d="M0,36 C400,24 800,44 1160,34 C1300,28 1390,40 1440,38 L1440,44 L0,44 Z" fill="rgba(196,123,123,0.04)" />
        </svg>
      </div>

      {/* ── SOUND MAPPING ── */}
      <HlSection id="sound-mapping" className="sound-mapping">
        <div className="sm-step-icon">
          {/* Active: 01 */}
          <div className="sm-step-dot-wrap">
            <Image src="/resource/circle/pink/粉點-1.png" alt="" fill style={{ objectFit: 'contain' }} aria-hidden="true" />
            <span className="step-dot-num">01</span>
          </div>
          <div className="sm-step-connector" aria-hidden="true" />
          {/* Nav → 02 */}
          <div className="sm-step-dot-wrap sm-step-dot-wrap--nav" onClick={() => navScrollTo('paths')} role="button" aria-label="前往第二步">
            <Image src="/resource/circle/pink/粉點-2.png" alt="" fill style={{ objectFit: 'contain' }} aria-hidden="true" />
            <span className="step-dot-num step-dot-num--muted">02</span>
          </div>
        </div>
        <HlTitleSection
          eyebrow="STEP 01"
          title="生命音譜掃描"
          subtitle="以 1.5 小時深度工作，建立身心現況雷達，形成可視化的能量地圖。"
        />
        <div className="sm-inner" id="sm-card">
          <div className="sm-left">
            <p>以頌缽、音叉與直覺讀取，禿禿掃描你七個脈輪的振動狀態，辨識阻塞區域、能量漏失點與長期壓抑的情緒訊號。</p>
            <p style={{ fontSize: 14, color: '#999', lineHeight: 1.85, marginTop: 12 }}>
              這份掃描不只是診斷——它是你後續所有清理工作的地圖，讓每一步都精準落在真正需要移動的地方。
            </p>
          </div>
          <div className="sm-right">
            {/* View A: 完成後你會獲得 */}
            <div className={`sm-view${smOpen ? ' sm-view--hidden' : ''}`}>
              <div className="sm-view-spacer" />
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
              <button className="sm-toggle" onClick={() => setSmOpen(true)}>
                <span>查看費用與形式</span><span>→</span>
              </button>
            </div>
            {/* View B: 規格表 */}
            <div className={`sm-view${!smOpen ? ' sm-view--hidden' : ''}`}>
              <div className="sm-view-spacer" />
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
              <button className="sm-toggle" onClick={() => setSmOpen(false)}>
                <span>← 返回</span>
              </button>
            </div>
          </div>
        </div>
      </HlSection>

      {/* Wave: sound-mapping → paths — rose into cream */}
      <div className="sm-wave-exit" aria-hidden="true">
        <svg viewBox="0 0 1440 44" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,22 C280,4 620,42 960,18 C1160,4 1320,36 1440,20 L1440,44 L0,44 Z" fill="#f8f5f0" />
          <path d="M0,32 C360,48 720,16 1080,36 C1240,46 1360,22 1440,30 L1440,44 L0,44 Z" fill="#f8f5f0" opacity="0.58" />
          <path d="M0,38 C480,28 880,46 1200,36 C1320,30 1400,42 1440,40 L1440,44 L0,44 Z" fill="#f8f5f0" opacity="0.30" />
        </svg>
      </div>

      {/* ── PATH SELECTION ── */}
      <HlPathsPanel />

      {/* Wave: paths → core-reset — lavender into deep lavender */}
      <div className="cr-wave-enter" aria-hidden="true">
        <svg viewBox="0 0 1440 44" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,22 C240,40 560,6 840,26 C1060,42 1280,10 1440,22 L1440,44 L0,44 Z" fill="#f2e8e7" />
          <path d="M0,30 C320,14 680,44 1000,28 C1180,18 1340,38 1440,32 L1440,44 L0,44 Z" fill="#f2e8e7" opacity="0.55" />
          <path d="M0,36 C400,24 800,44 1160,34 C1300,28 1390,40 1440,38 L1440,44 L0,44 Z" fill="#f2e8e7" opacity="0.28" />
        </svg>
      </div>

      {/* ── CORE RESET ── */}
      <HlSection id="core-reset" className="core-reset">
        <HlTitleSection
          eyebrow="全面式系統清理"
          title="七脈輪能量調和"
          subtitle="從基底到頂點的系統性重整，讓身心頻率徹底回歸原始和諧。"
        />
        <div className="cr-card">
          <div className="cr-left">
            <p>針對目前面臨的重大生命課題，由基底海底輪向上延伸至頂輪，進行系統性的頻率重整。藉由頌缽穩定的物理波頻，逐一清理累積在七個能量中心的雜訊，重新建立各中心點之間的流動與同步。</p>
            <p>這是一場讓身心頻率徹底「Core Reset」的過程——幫助你在面對人生轉折與大課題時，擁有一套穩定、純粹且充滿力量的內在支持系統。</p>
          </div>
          <div className="cr-right">
            {/* View A: 療程流程 */}
            <div className={`cr-view${crOpen ? ' cr-view--hidden' : ''}`}>
              <div className="cr-view-spacer" />
              <span className="cr-section-label">療程流程</span>
              <div className="cr-process">
                {[
                  ['30 min', '抽脈輪牌卡 + 冥想引導'],
                  ['70 min', '七脈輪淨化 & 脈輪能量平衡'],
                  ['80 min', '七脈輪能量解讀與平衡指引'],
                ].map(([time, label]) => (
                  <div className="cr-process-row" key={time}>
                    <span className="cr-process-time">{time}</span>
                    <span className="cr-process-label">{label}</span>
                  </div>
                ))}
              </div>
              <button className="cr-toggle" onClick={() => setCrOpen(true)}>
                查看費用與資訊 →
              </button>
            </div>
            {/* View B: 規格表 */}
            <div className={`cr-view${!crOpen ? ' cr-view--hidden' : ''}`}>
              <div className="cr-view-spacer" />
              <div className="cr-meta-list">
                {[
                  ['服務形式', '1 對 1 · 實體預約'],
                  ['前置條件', '須先完成生命音譜掃描'],
                  ['投入時間', '3 小時'],
                  ['費用',     'NT$45,000'],
                  ['銜接方案', '可接續陪跑計劃'],
                ].map(([label, val]) => (
                  <div className="cr-meta-row" key={label}>
                    <span className="cr-meta-label">{label}</span>
                    <span className="cr-meta-val">{val}</span>
                  </div>
                ))}
              </div>
              <div className="cr-toggle-row">
                <button className="cr-toggle" onClick={() => setCrOpen(false)}>← 返回</button>
                <button className="cr-cta" onClick={() => navScrollTo('followup')}>了解陪跑計劃 →</button>
              </div>
            </div>
          </div>
        </div>
      </HlSection>

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
