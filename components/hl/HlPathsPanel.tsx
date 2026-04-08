'use client'

import { useState, useCallback } from 'react'
import HlSection from './HlSection'
import HlTitleSection from './HlTitleSection'
import HlPathStepNav from './HlPathStepNav'
import HlIconSystemPath from './HlIconSystemPath'
import HlIconThemePath from './HlIconThemePath'

const chevron = (
  <svg width="16" height="10" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 1.5 L11 11.5 L20.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function HlPathsPanel() {
  const [expandA, setExpandA] = useState(false)
  const [expandC, setExpandC] = useState(false)
  const [expandB, setExpandB] = useState(false)

  const navScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('header') as HTMLElement
    const navH = nav ? nav.offsetHeight : 72
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return (
    <HlSection id="paths">
      <HlPathStepNav />
      <HlTitleSection
        eyebrow="STEP 02"
        title="選擇你的清理路徑"
        subtitle="完成生命音譜掃描後，根據你的能量地圖結果，選擇最適合你的清理路徑。"
      />

      <div className="ps-outer">

        {/* Branching arrow SVG */}
        <svg width="100%" height="60" viewBox="0 0 400 60" aria-hidden="true" className="ps-branch-svg">
          <circle cx="200" cy="8" r="4" fill="#C49A96"/>
          <line x1="200" y1="12" x2="200" y2="30" stroke="#C49A96" strokeWidth="1"/>
          <line x1="200" y1="30" x2="100" y2="50" stroke="#C49A96" strokeWidth="1"/>
          <line x1="200" y1="30" x2="300" y2="50" stroke="#C49A96" strokeWidth="1"/>
          <polyline points="93,45 100,50 107,45" fill="none" stroke="#C49A96" strokeWidth="1"/>
          <polyline points="293,45 300,50 307,45" fill="none" stroke="#C49A96" strokeWidth="1"/>
        </svg>

        {/* Description row — below SVG, above cards */}
        <div className="ps-desc-row">
          <p className="ps-desc-col ps-desc-col--rose">適合初次接觸、或感覺全身失衡、不確定問題在哪裡的人。兩個模組相互搭配使用。</p>
          <p className="ps-desc-col ps-desc-col--purple">已知卡點、想針對單一主題快速處理的人。選擇一個對應你當下狀態的主題。</p>
        </div>

        <div className="ps-columns">

          {/* Left outer card */}
          <div className="ps-outer-card ps-outer-card--rose">
            {/* Header */}
            <div className="ps-path-header">
              <div className="ps-path-header-row">
                <div className="ps-path-icon">
                  <HlIconSystemPath style={{ color: '#B87C78' }} aria-hidden="true" />
                </div>
                <span className="ps-icon-label">完整系統路徑</span>
              </div>
            </div>

            {/* Cards */}
            <div className={`path-expand-card${expandA ? ' expanded' : ''}`}>
              <div className="path-expand-header" onClick={() => setExpandA(v => !v)}>
                <div className="path-expand-titles">
                  <h3>全面式系統清理</h3>
                  <p>七脈輪能量調和</p>
                </div>
                <span className="path-expand-toggle">{chevron}</span>
              </div>
              <div className="path-expand-body">
                <div className="path-expand-body-inner">
                  <p className="path-expand-desc">以七脈輪為框架，系統性掃描與清理全身能量阻塞點。每次療程針對當下能量地圖，進行頻率校準與情緒釋放。</p>
                  <div className="path-expand-suited">
                    {['初次接觸能量療癒', '全身感覺沉重失衡', '不確定問題根源'].map(t => (
                      <span className="path-expand-pill" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="path-expand-meta">
                    {[['服務形式', '1 對 1 · 實體'], ['投入時間', '3 小時'], ['費用', 'NT$45,000']].map(([l, v]) => (
                      <div className="path-expand-row" key={l}>
                        <span className="path-expand-label">{l}</span>
                        <span className="path-expand-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="ps-connector">
              <div className="ps-connector-line" />
              <span className="ps-connector-plus">＋ 搭配</span>
            </div>

            <div className={`path-expand-card${expandC ? ' expanded' : ''}`}>
              <div className="path-expand-header" onClick={() => setExpandC(v => !v)}>
                <div className="path-expand-titles">
                  <h3>陪跑計劃</h3>
                  <p>頻率定錨隨行</p>
                </div>
                <span className="path-expand-toggle">{chevron}</span>
              </div>
              <div className="path-expand-body">
                <div className="path-expand-body-inner">
                  <p className="path-expand-desc">療程後的頻率維護計劃。透過定期追蹤與微調，確保清理後的能量狀態穩定落地，不回彈。</p>
                  <div className="path-expand-suited">
                    {['完成 Core Reset 後', '需要長期定錨支持'].map(t => (
                      <span className="path-expand-pill" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="path-expand-meta">
                    {[['服務形式', '1 對 1 · 實體預約'], ['投入時間', '1.5 小時 / 堂'], ['前提', '完成系統清理後可加選']].map(([l, v]) => (
                      <div className="path-expand-row" key={l}>
                        <span className="path-expand-label">{l}</span>
                        <span className="path-expand-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="ps-cta-wrap ps-cta-wrap--dual">
              <button className="ps-cta ps-cta--rose" onClick={e => { e.stopPropagation(); navScrollTo('core-reset') }}>了解全面式系統清理</button>
              <button className="ps-cta ps-cta--rose" onClick={e => { e.stopPropagation(); navScrollTo('followup') }}>了解陪跑計劃</button>
            </div>
          </div>

          {/* Right outer card */}
          <div className="ps-outer-card ps-outer-card--purple">
            {/* Header */}
            <div className="ps-path-header">
              <div className="ps-path-header-row">
                <div className="ps-path-icon">
                  <HlIconThemePath style={{ color: '#8880B0' }} aria-hidden="true" />
                </div>
                <span className="ps-icon-label">主題精準路徑</span>
              </div>
            </div>

            <div className="ps-topic-tags">
              <span className="ps-topic-label">可選主題</span>
              <div className="ps-topic-pills">
                {['文昌對齊', '身體健康祈福', '能量保護罩', '愛的流動', '金錢豐盛', '關係共振'].map(t => (
                  <span className="ps-topic-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className={`path-expand-card path-expand-card--purple${expandB ? ' expanded' : ''}`}>
              <div className="path-expand-header" onClick={() => setExpandB(v => !v)}>
                <div className="path-expand-titles">
                  <h3>針對式主題對齊</h3>
                  <p>六大定音珍珠</p>
                </div>
                <span className="path-expand-toggle">{chevron}</span>
              </div>
              <div className="path-expand-body">
                <div className="path-expand-body-inner">
                  <p className="path-expand-desc">針對單一主題進行深度對齊，每顆珍珠對應一個核心生命主題，由禿禿親自執行。</p>
                  <div className="path-expand-suited path-expand-suited--purple">
                    {['有明確生命議題', '想針對單一面向清理', '已知卡點所在'].map(t => (
                      <span className="path-expand-pill" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="path-expand-meta">
                    {[['服務形式', '1 對 1 · 實體'], ['投入時間', '90 分鐘 / 主題'], ['費用', 'NT$12,000 / 主題']].map(([l, v]) => (
                      <div className="path-expand-row" key={l}>
                        <span className="path-expand-label">{l}</span>
                        <span className="path-expand-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="ps-cta-wrap">
              <button className="ps-cta ps-cta--purple" onClick={e => { e.stopPropagation(); navScrollTo('pearls') }}>查看六大定音主題</button>
            </div>
          </div>

        </div>
        <div className="ps-or-badge">or</div>
      </div>

      <p className="ps-path-note">不確定哪條適合你？完成生命音譜掃描後，禿禿會協助你判斷。</p>
    </HlSection>
  )
}
