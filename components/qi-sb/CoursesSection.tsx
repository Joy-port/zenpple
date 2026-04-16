'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionTitle from './SectionTitle'

const courses = [
  {
    id: 1,
    name: '脈輪牌卡問事＋放鬆頌缽',
    nameEn: 'Chakra Card Reading + Relaxation Bowl',
    meta: '1:1 · 60 分鐘',
    headerLabel: '1 對 1',
    price: 'NT$3,500',
    typeTags: ['1:1 私人體驗', '實體'],
    desc: '結合牌卡分析與全身放鬆的入門實體體驗。適合想了解當下身心狀態，並在諮詢後透過頌缽達到深層紓壓的你。先透過脈輪牌卡讀取能量現況，再以頌缽頻率引導全身放鬆，讓神經系統在聲波中自然進入修復狀態。',
    tags: ['30min 牌卡 + 30min 頌缽', 'TWO TWO'],
  },
  {
    id: 2,
    name: '脈輪牌卡問事＋放鬆頌缽［團體］',
    nameEn: 'Group Chakra Card + Sound Bath',
    meta: '3–5 人 · 約 60 分鐘',
    headerLabel: '3–5 人',
    price: 'NT$3,200 / 人',
    typeTags: ['3–5 人小團體', '實體'],
    desc: '結合直覺牌卡解析與團體全身放鬆頌缽的私密療癒聚會。適合想與閨蜜好友共度質感時光、初次體驗靈性療癒的你們。10 分鐘快速牌卡讀取當下狀態，再以 30 分鐘團體放鬆頌缽讓每個人在聲波中完美沉澱。每場 3 人起，5 人滿。',
    tags: ['10min 牌卡 + 30min 頌缽', '閨蜜私密'],
  },
  {
    id: 3,
    name: '能量療癒占卜旗艦',
    nameEn: 'Flagship Energy Healing & Divination',
    meta: '1:1 · 60 分鐘',
    headerLabel: '1 對 1',
    price: 'NT$10,000',
    typeTags: ['1:1 私人體驗', '實體'],
    desc: '針對特定問題進行「深度拆解」與「頻率清理」的旗艦體驗。先透過牌卡問事深度讀取問題背後的隱藏訊息，再由禿禿敲擊通靈頌缽，針對該問題的阻礙點進行深層敲擊與頻率疏通。適合正在面對人生重大卡點、需要被深度看見的你。',
    tags: ['30min 深度問事 + 30min 專項頌缽', '通靈解析'],
  },
]

export default function CoursesSection() {
  const [openCourse, setOpenCourse] = useState<number | null>(null)

  return (
    <section
      id="courses"
      style={{ background: '#E8EFE8', position: 'relative', overflow: 'hidden' }}
    >
      {/* bg ripple deco */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 380,
          height: 380,
          borderRadius: '50%',
          border: '1px solid rgba(90,165,178,0.08)',
          boxShadow:
            '0 0 0 40px rgba(90,165,178,0.04), 0 0 0 80px rgba(90,165,178,0.025), 0 0 0 120px rgba(90,165,178,0.015)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="wrap"
        style={{
          paddingTop: 'clamp(80px,10vw,120px)',
          paddingBottom: 'clamp(80px,10vw,120px)',
          paddingLeft: 'clamp(48px,8vw,120px)',
          paddingRight: 'clamp(48px,8vw,120px)',
        }}
      >
        <SectionTitle zh="課程與體驗" en="Sessions & Experiences" mb={48} center />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {courses.map(c => {
            const isOpen = openCourse === c.id
            return (
              <div
                key={c.id}
                style={{
                  borderTop: '1px solid rgba(90,165,178,0.18)',
                  overflow: 'hidden',
                }}
              >
                {/* Row header */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenCourse(isOpen ? null : c.id)}
                  onKeyDown={e => e.key === 'Enter' && setOpenCourse(isOpen ? null : c.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '28px 0',
                    cursor: 'pointer',
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontSize: 'clamp(13px, 1.2vw, 15px)',
                      letterSpacing: '0.2em',
                      color: isOpen ? '#65BAAF' : 'var(--muted)',
                      opacity: isOpen ? 1 : 0.4,
                      width: 40,
                      flexShrink: 0,
                      transition: 'color .3s, opacity .3s',
                    }}
                  >
                    {String(c.id).padStart(2, '0')}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: 'var(--f-zh-sans)',
                        fontWeight: 900,
                        fontSize: 18,
                        color: '#2E5A6A',
                        marginBottom: 4,
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--f-display)',
                        fontWeight: 400,
                        fontSize: 'clamp(13px, 1.2vw, 15px)',
                        letterSpacing: '0.25em',
                        color: 'var(--muted)',
                        textTransform: 'uppercase',
                        marginTop: 10,
                      }}
                    >
                      {c.nameEn}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontSize: 'clamp(13px, 1.2vw, 15px)',
                      letterSpacing: '0.15em',
                      color: 'var(--muted)',
                      flexShrink: 0,
                      marginRight: 12,
                    }}
                  >
                    {c.headerLabel}
                  </span>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: '1px solid rgba(90,165,178,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isOpen ? '#2E5A6A' : '#65BAAF',
                      background: isOpen ? 'rgba(90,165,178,0.08)' : 'transparent',
                      fontSize: 18,
                      lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'all .3s',
                    }}
                  >
                    +
                  </div>
                </div>

                {/* Expanded panel */}
                <div
                  style={{
                    maxHeight: isOpen ? 600 : 0,
                    overflow: 'hidden',
                    transition: 'max-height .5s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <div
                    className="flex flex-col md:grid"
                    style={{
                      padding: '24px 0 40px 56px',
                      borderTop: '1px solid rgba(90,165,178,0.1)',
                      gridTemplateColumns: '1fr auto',
                      gap: '24px 40px',
                      alignItems: 'start',
                    }}
                  >
                    {/* Left: desc + tags */}
                    <div>
                      <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 2.0, maxWidth: 420, marginBottom: 24 }}>
                        {c.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {[...c.typeTags, ...c.tags].map(tag =>
                          tag === 'TWO TWO' ? (
                            <a
                              key={tag}
                              href="#two-two"
                              style={{
                                fontFamily: 'var(--f-display)',
                                fontSize: 'clamp(13px, 1.2vw, 15px)',
                                letterSpacing: '0.12em',
                                padding: '5px 12px',
                                background: 'rgba(90,165,178,0.08)',
                                color: '#2E5A6A',
                                borderRadius: 1,
                                textDecoration: 'none',
                              }}
                            >
                              {tag} ↓
                            </a>
                          ) : (
                            <span
                              key={tag}
                              style={{
                                fontFamily: 'var(--f-display)',
                                fontSize: 'clamp(13px, 1.2vw, 15px)',
                                letterSpacing: '0.12em',
                                padding: '5px 12px',
                                background: 'rgba(90,165,178,0.08)',
                                color: '#2E5A6A',
                                borderRadius: 1,
                              }}
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Right: price + CTA */}
                    <div className="items-start md:items-end" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontFamily: 'var(--f-display)',
                          fontWeight: 400,
                          fontSize: 22,
                          color: '#2E5A6A',
                          letterSpacing: '0.08em',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {c.price}
                      </span>
                      <Link
                        href="/contact"
                        style={{
                          fontFamily: 'var(--f-display)',
                          fontSize: 'clamp(13px, 1.2vw, 15px)',
                          fontWeight: 400,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: '#fff',
                          textDecoration: 'none',
                          background: '#5DA5B5',
                          borderRadius: 999,
                          padding: '10px 24px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        預約此服務 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* last border */}
          <div style={{ borderTop: '1px solid rgba(90,165,178,0.18)' }} />
        </div>
      </div>
    </section>
  )
}
