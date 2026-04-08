'use client'

import { useState, useCallback } from 'react'
import HlSection from './HlSection'
import HlSectionTitle from './HlSectionTitle'
import HlPathStepNav from './HlPathStepNav'

const Chevron = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polyline points="4,6 8,10 12,6"/>
  </svg>
)

export default function HlPathsSplit() {
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

      <div className="ps-outer">
        <div className="ps-container">

          {/* Left: 完整系統路徑 */}
          <div className="ps-panel ps-panel--rose">
            <div className="ps-path-icon">
              <div className="ps-dots-icon">
                <span className="ps-dot" />
                <span className="ps-dot ps-dot--mid" />
                <span className="ps-dot ps-dot--bot" />
              </div>
              <span className="ps-icon-label">完 整 系 統 路 徑</span>
            </div>
            <p className="ps-path-desc">適合初次接觸、或感覺全身失衡、不確定問題在哪裡的人。兩個模組相互搭配使用。</p>

            <div className={`ps-card ps-card--rose${expandA ? ' open' : ''}`} onClick={() => setExpandA(v => !v)}>
              <div className="ps-card-header">
                <div>
                  <div className="ps-card-title">全面式系統清理</div>
                  <div className="ps-card-sub">七脈輪能量調和 · Core Reset</div>
                </div>
                <div className={`ps-chevron${expandA ? ' open' : ''}`}><Chevron /></div>
              </div>
              <div className="ps-card-body">
                <div className="ps-divider" />
                <div className="ps-body-section">
                  <div className="ps-body-label">服務說明</div>
                  <div className="ps-body-text">以七脈輪為框架，系統性掃描與清理全身能量阻塞點。每次療程針對當下能量地圖，進行頻率校準與情緒釋放。</div>
                </div>
                <div className="ps-body-section">
                  <div className="ps-body-label">適合對象</div>
                  <div className="ps-pills">
                    {['初次接觸能量療癒', '全身感覺沉重失衡', '不確定問題根源'].map(t => (
                      <span className="ps-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="ps-body-section">
                  <div className="ps-body-label">課程資訊</div>
                  <div className="ps-price-row">
                    <span className="ps-price-amount">NT$45,000</span>
                    <span className="ps-price-unit">/ 3 小時</span>
                  </div>
                  <div className="ps-price-note">1 對 1 · 實體</div>
                </div>
              </div>
            </div>

            <div className="ps-connector">
              <div className="ps-connector-line" />
              <span className="ps-connector-plus">＋ 搭配</span>
            </div>

            <div className={`ps-card ps-card--rose${expandC ? ' open' : ''}`} onClick={() => setExpandC(v => !v)}>
              <div className="ps-card-header">
                <div>
                  <div className="ps-card-title">陪跑計劃</div>
                  <div className="ps-card-sub">頻率定錨隨行 · Anchor</div>
                </div>
                <div className={`ps-chevron${expandC ? ' open' : ''}`}><Chevron /></div>
              </div>
              <div className="ps-card-body">
                <div className="ps-divider" />
                <div className="ps-body-section">
                  <div className="ps-body-label">服務說明</div>
                  <div className="ps-body-text">療程後的頻率維護計劃。透過定期追蹤與微調，確保清理後的能量狀態穩定落地，不回彈。</div>
                </div>
                <div className="ps-body-section">
                  <div className="ps-body-label">適合對象</div>
                  <div className="ps-pills">
                    {['完成 Core Reset 後', '需要長期定錨支持'].map(t => (
                      <span className="ps-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="ps-body-section">
                  <div className="ps-body-label">課程資訊</div>
                  <div className="ps-price-row">
                    <span className="ps-price-amount">NT$3,800</span>
                    <span className="ps-price-unit">/ 1.5 小時 · 堂</span>
                  </div>
                  <div className="ps-price-note">須完成 Core Reset 後方可加入</div>
                </div>
              </div>
            </div>

            <div className="ps-cta-wrap">
              <button className="ps-cta ps-cta--rose" onClick={e => { e.stopPropagation(); navScrollTo('core-reset') }}>了解完整路徑 →</button>
            </div>
          </div>

          {/* Right: 主題精準路徑 */}
          <div className="ps-panel ps-panel--purple">
            <div className="ps-path-icon">
              <div className="ps-circle-icon" />
              <span className="ps-icon-label">主 題 精 準 路 徑</span>
            </div>
            <p className="ps-path-desc">已知卡點、想針對單一主題快速處理的人。選擇一個對應你當下狀態的主題。</p>

            <div className={`ps-card ps-card--purple${expandB ? ' open' : ''}`} onClick={() => setExpandB(v => !v)}>
              <div className="ps-card-header">
                <div>
                  <div className="ps-card-title">針對式主題對齊</div>
                  <div className="ps-card-sub">六大定音珍珠 · Pearls</div>
                </div>
                <div className={`ps-chevron${expandB ? ' open' : ''}`}><Chevron /></div>
              </div>
              <div className="ps-card-body">
                <div className="ps-divider" />
                <div className="ps-body-section">
                  <div className="ps-body-label">服務說明</div>
                  <div className="ps-body-text">針對六大生命主題，以定音珍珠頻率進行精準對齊。每次聚焦一個主題，清理該領域的核心阻塞與信念模式。</div>
                </div>
                <div className="ps-body-section">
                  <div className="ps-body-label">可選主題</div>
                  <div className="ps-pills">
                    {['文昌對齊', '身體健康', '能量保護', '愛的流動', '金錢豐盛', '關係共振'].map(t => (
                      <span className="ps-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="ps-body-section">
                  <div className="ps-body-label">課程資訊</div>
                  <div className="ps-price-row">
                    <span className="ps-price-amount">NT$12,000</span>
                    <span className="ps-price-unit">/ 主題</span>
                  </div>
                  <div className="ps-price-note">90 分鐘 · 1 對 1 · 實體</div>
                </div>
              </div>
            </div>

            <div className="ps-cta-wrap">
              <button className="ps-cta ps-cta--purple" onClick={e => { e.stopPropagation(); navScrollTo('pearls') }}>選擇精準路徑 →</button>
            </div>
          </div>

        </div>
        <div className="ps-or-badge">or</div>
      </div>

      <p className="ps-path-note">不確定哪條適合你？完成生命音譜掃描後，禿禿會協助你判斷。</p>
    </HlSection>
  )
}
