'use client'

import { useState } from 'react'
import Link from 'next/link'

const pearls = [
  { key: 'p', name: '文昌對齊',   en: 'Wisdom Alignment',    desc: '啟動思緒流動、學習吸收與表達清晰的能量場，適合考試、升學或創作卡關期。' },
  { key: 'h', name: '身體健康祈福', en: 'Health & Vitality',  desc: '為身體系統傳送修復與支持的頻率，配合大自然的療癒力量進行祈福定頻。' },
  { key: 'e', name: '能量保護罩', en: 'Energy Shield',        desc: '建立個人能量邊界，阻擋不必要的外來干擾，強化自我主體性。' },
  { key: 'l', name: '愛的流動',   en: 'Love Flow',            desc: '疏通心輪阻塞，讓愛的能量能夠自然流入與流出，而非積滯於恐懼中。' },
  { key: 'a', name: '金錢豐盛',   en: 'Abundance',            desc: '清理與金錢相關的匱乏信念與情緒記憶，重新校準對豐盛的接收頻率。' },
  { key: 'r', name: '關係共振',   en: 'Relationship Resonance', desc: '處理深層的關係模式與依附傾向，讓真實的連結得以發生。' },
]

const steps = [
  { num: '01', title: '生命音譜掃描', en: 'Sound Mapping', desc: '以頌缽、音叉與直覺讀取，掃描七個脈輪的振動狀態，建立個人能量地圖。', duration: '1.5 小時', price: 'NT$8,000' },
  { num: '02', title: '清理，選擇路徑', en: 'Clearing', desc: '根據掃描結果，選擇全面式系統清理（NT$45,000 / 3hr）或針對式主題對齊（NT$12,000 / 主題），由禿禿親自執行。', duration: '3 小時 / 90 分鐘', price: 'NT$45,000 起' },
  { num: '03', title: '能量陪跑定錨', en: 'Integration', desc: '清理後的整合工作：頻率預熱 → 意識對話 → 共振引導 → 實踐分享。', duration: '1.5 小時 / 堂', price: 'NT$15,000 / 堂起' },
]

export default function HlPage() {
  const [activePearl, setActivePearl] = useState<string | null>(null)
  const pearl = pearls.find(p => p.key === activePearl)

  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(120px,15vw,180px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
          background: 'linear-gradient(160deg, #3a2d40 0%, #4a3060 30%, #7B6B9E 65%, #C47B7B 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(280px,40vw,480px)',
              color: 'rgba(255,255,255,0.07)',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            深
          </span>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span style={{ display: 'block', width: 40, height: 1, background: 'rgba(255,255,255,0.35)' }} />
            HL · DEEP SYSTEM ALIGNMENT
          </p>
          <h1
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(36px,6vw,68px)',
              lineHeight: 1.1,
              letterSpacing: '0.03em',
              marginBottom: 12,
              color: '#fff',
            }}
          >
            深層系統對齊
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.48)',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Deep System Alignment
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 480,
            }}
          >
            不是頭痛醫頭——從根源找到能量系統的阻塞點，系統性地重建流動。由禿禿親自執行。
          </p>
        </div>
      </section>

      {/* THREE STEPS */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
        }}
      >
        <div className="wrap">
          <p className="sec-label">流程</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 16,
            }}
          >
            三步清理路徑
          </h2>
          <p style={{ fontSize: 15, color: '#888', lineHeight: 1.9, maxWidth: 520, marginBottom: 56 }}>
            每一步都有對應的方法，每一步都真實發生。
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {steps.map(step => (
              <div
                key={step.num}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  padding: '44px 36px',
                  border: '1px solid rgba(196,123,123,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--f-zh)',
                    fontWeight: 900,
                    fontSize: 28,
                    color: 'rgba(196,123,123,0.3)',
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--f-zh)',
                      fontWeight: 700,
                      fontSize: 18,
                      letterSpacing: '0.05em',
                      marginBottom: 4,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontWeight: 100,
                      fontSize: 10,
                      letterSpacing: '0.25em',
                      color: '#C47B7B',
                      marginBottom: 12,
                    }}
                  >
                    {step.en}
                  </p>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: '#888' }}>{step.desc}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: 16,
                    borderTop: '1px solid rgba(196,123,123,0.1)',
                    fontSize: 12,
                    fontFamily: 'var(--f-mono)',
                    marginTop: 'auto',
                  }}
                >
                  <span style={{ color: '#C47B7B' }}>{step.duration}</span>
                  <span>{step.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX PEARLS */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: '#faf8f5',
        }}
      >
        <div className="wrap">
          <p className="sec-label" style={{ color: '#C47B7B' }}>六大定音</p>
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(24px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 8,
            }}
          >
            六大定音珍珠系列
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 8 }}>
            NT$12,000 / 主題 · 90 分鐘 · 禿禿親自執行
          </p>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 48, lineHeight: 1.8 }}>
            每顆珍珠對應一個核心生命主題，針對式主題對齊。點擊查看詳情。
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
              maxWidth: 780,
            }}
          >
            {pearls.map(p => (
              <button
                key={p.key}
                onClick={() => setActivePearl(prev => (prev === p.key ? null : p.key))}
                style={{
                  background: activePearl === p.key ? 'rgba(196,123,123,0.08)' : '#fff',
                  border: `1px solid ${activePearl === p.key ? 'rgba(196,123,123,0.4)' : 'rgba(196,123,123,0.15)'}`,
                  borderRadius: 14,
                  padding: '28px 24px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--f-zh)',
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 4,
                    color: 'var(--ink)',
                  }}
                >
                  {p.name}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontWeight: 100,
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: '#C47B7B',
                  }}
                >
                  {p.en}
                </p>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {pearl && (
            <div
              style={{
                marginTop: 24,
                maxWidth: 780,
                background: 'rgba(196,123,123,0.06)',
                border: '1px solid rgba(196,123,123,0.15)',
                borderRadius: 14,
                padding: '32px 36px',
                animation: 'fade-slide 0.3s ease forwards',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--f-zh)',
                  fontWeight: 700,
                  fontSize: 20,
                  marginBottom: 12,
                  color: 'var(--ink)',
                }}
              >
                {pearl.name}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--ink)', opacity: 0.7 }}>
                {pearl.desc}
              </p>
              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  gap: 24,
                  fontSize: 12,
                  fontFamily: 'var(--f-mono)',
                  color: '#C47B7B',
                }}
              >
                <span>90 分鐘</span>
                <span>NT$12,000</span>
                <span>1 對 1 · 實體</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,72px)',
          background: 'var(--base)',
          textAlign: 'center',
        }}
      >
        <div className="wrap">
          <h2
            style={{
              fontFamily: 'var(--f-zh)',
              fontWeight: 900,
              fontSize: 'clamp(22px,3.5vw,40px)',
              letterSpacing: '0.03em',
              marginBottom: 16,
            }}
          >
            準備好從根源重新校準？
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 36, lineHeight: 1.8 }}>
            從生命音譜掃描開始，讓禿禿帶你找到屬於你的清理路徑。
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
              color: '#C47B7B',
              textDecoration: 'none',
              border: '1px solid rgba(196,123,123,0.35)',
              borderRadius: 999,
              padding: '14px 32px',
              transition: 'background 0.2s',
            }}
          >
            預約生命音譜掃描 →
          </Link>
        </div>
      </section>
    </>
  )
}
