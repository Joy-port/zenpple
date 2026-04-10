'use client'

import { useState } from 'react'
import SectionTitle from './SectionTitle'

const faqs = [
  {
    q: '需要有靈性背景或冥想經驗才能參加嗎？',
    a: '完全不需要。頌缽音流的作用是透過物理聲波引發身體的放鬆反應，不依賴特定信仰或練習基礎。你唯一需要的是一個願意躺下來聆聽的自己。很多第一次體驗者因為「沒有預設」反而進入得更深。',
  },
  {
    q: '可以線上體驗嗎？效果和實體有差別嗎？',
    a: '目前 QI-SB 系列為實體體驗優先。實體的優勢在於缽的物理振動直接透過空氣傳遞到身體，讓聲波在空間中全面包圍，這是線上無法完全複製的體感。建議首次體驗選擇實體，充分感受頌缽共振的物理層次。',
  },
  {
    q: '體驗過程中會發生什麼？我需要做什麼嗎？',
    a: '你不需要「做」任何事。整個過程你只需要躺著、閉上眼睛、讓聲音流過。禿禿會在過程中引導節奏，並在聲音中傳遞接收到的洞見。有些人會看到畫面，有些人只是很放鬆，有些人會哭——每種反應都是完整的，沒有正確答案。',
  },
]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      style={{
        background: '#5DA5B5',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost "FAQ" deco */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-10px',
          top: '20px',
          fontFamily: 'var(--f-impact)',
          fontWeight: 700,
          fontSize: 200,
          color: 'rgba(255,255,255,0.07)',
          letterSpacing: '-0.01em',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        FAQ
      </div>

      <div
        className="wrap"
        style={{
          paddingTop: 'clamp(80px,10vw,120px)',
          paddingBottom: 'clamp(80px,10vw,120px)',
          paddingLeft: 'clamp(48px,8vw,120px)',
          paddingRight: 'clamp(48px,8vw,120px)',
        }}
      >
        <SectionTitle zh="常見問題" en="Frequently Asked Questions" dark />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i
            return (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  ...(i === faqs.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.1)' } : {}),
                  overflow: 'hidden',
                }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  onKeyDown={e => e.key === 'Enter' && setOpenFaq(isOpen ? null : i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 0',
                    cursor: 'pointer',
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-zh)',
                      fontWeight: 500,
                      fontSize: 16,
                      color: 'rgba(255,255,255,0.88)',
                      letterSpacing: '0.04em',
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: 20,
                      color: isOpen ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)',
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
                    maxHeight: isOpen ? 300 : 0,
                    overflow: 'hidden',
                    transition: 'max-height .45s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <p
                    style={{
                      padding: '0 60px 28px 0',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.62)',
                      lineHeight: 1.85,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
