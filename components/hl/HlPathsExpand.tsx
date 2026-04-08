'use client'

import { useState, useCallback } from 'react'
import HlSection from './HlSection'
import HlSectionTitle from './HlSectionTitle'
import HlPathStepNav from './HlPathStepNav'
import HlIconSystemPath from './HlIconSystemPath'
import HlIconThemePath from './HlIconThemePath'

const chevron = (
  <svg width="16" height="10" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 1.5 L11 11.5 L20.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function HlPathsExpand() {
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

      <HlSectionTitle
        label="選擇路徑"
        title="選擇你的清理路徑"
        desc="完成生命音譜掃描後，根據你的能量地圖結果，選擇最適合你的清理路徑。"
      />

      <div className="paths-grid">

        {/* Left: paired group */}
        <div className="paths-left">
          <div className="paths-group-label">
            <HlIconSystemPath className="paths-group-icon" aria-hidden="true" />
            <span>完整系統路徑</span>
          </div>

          <div className={`path-expand-card${expandA ? ' expanded' : ''}`}>
            <div className="path-expand-header" onClick={() => setExpandA(v => !v)}>
              <div className="path-expand-titles">
                <h3>全面式系統清理</h3>
                <p>七脈輪能量調和 · Core Reset</p>
              </div>
              <span className="path-expand-toggle">{chevron}</span>
            </div>
            <div className="path-expand-body">
              <div className="path-expand-body-inner">
                <p className="path-expand-desc">七脈輪能量調和。從海底輪到頂輪的全系統能量重建，適合需要深度清理或長期卡關者。</p>
                <div className="path-expand-meta">
                  {[['服務形式', '1 對 1 · 實體'], ['投入時間', '3 小時'], ['費用', 'NT$45,000']].map(([l, v]) => (
                    <div className="path-expand-row" key={l}>
                      <span className="path-expand-label">{l}</span>
                      <span className="path-expand-val">{v}</span>
                    </div>
                  ))}
                </div>
                <button className="path-expand-cta" onClick={e => { e.stopPropagation(); navScrollTo('core-reset') }}>了解詳情 →</button>
              </div>
            </div>
          </div>

          <div className={`path-expand-card${expandC ? ' expanded' : ''}`}>
            <div className="path-expand-header" onClick={() => setExpandC(v => !v)}>
              <div className="path-expand-titles">
                <h3>陪跑計劃</h3>
                <p>頻率定錨隨行 · Anchor</p>
              </div>
              <span className="path-expand-toggle">{chevron}</span>
            </div>
            <div className="path-expand-body">
              <div className="path-expand-body-inner">
                <p className="path-expand-desc">清理後的深度整合陪伴，確保新的頻率能在日常生活中穩定落地，不回彈。</p>
                <div className="path-expand-meta">
                  {[['服務形式', '1 對 1 · 實體預約'], ['投入時間', '1.5 小時 / 堂'], ['前提', '完成系統清理後可加選']].map(([l, v]) => (
                    <div className="path-expand-row" key={l}>
                      <span className="path-expand-label">{l}</span>
                      <span className="path-expand-val">{v}</span>
                    </div>
                  ))}
                </div>
                <button className="path-expand-cta" onClick={e => { e.stopPropagation(); navScrollTo('followup') }}>了解陪跑計劃 →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: purple card */}
        <div className="paths-right">
          <div className="paths-group-label paths-group-label--purple">
            <HlIconThemePath className="paths-group-icon paths-group-icon--purple" aria-hidden="true" />
            <span>主題精準路徑</span>
          </div>

          <div className={`path-expand-card path-expand-card--purple${expandB ? ' expanded' : ''}`}>
            <div className="path-expand-header" onClick={() => setExpandB(v => !v)}>
              <div className="path-expand-titles">
                <h3>針對式主題對齊</h3>
                <p>六大定音珍珠 · Pearls</p>
              </div>
              <span className="path-expand-toggle">{chevron}</span>
            </div>
            <div className="path-expand-body">
              <div className="path-expand-body-inner">
                <p className="path-expand-desc">針對單一主題進行深度對齊，適合有明確議題或想針對特定生命面向進行清理者。</p>
                <p className="path-expand-desc">每顆珍珠對應一個核心生命主題——文昌對齊、身體健康祈福、能量保護罩、愛的流動、金錢豐盛、關係共振。由禿禿親自執行。</p>
                <div className="path-expand-meta">
                  {[['服務形式', '1 對 1 · 實體'], ['投入時間', '90 分鐘 / 主題'], ['費用', 'NT$12,000 / 主題']].map(([l, v]) => (
                    <div className="path-expand-row" key={l}>
                      <span className="path-expand-label">{l}</span>
                      <span className="path-expand-val">{v}</span>
                    </div>
                  ))}
                </div>
                <button className="path-expand-cta path-expand-cta--purple" onClick={e => { e.stopPropagation(); navScrollTo('pearls') }}>查看六大定音主題 →</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </HlSection>
  )
}
