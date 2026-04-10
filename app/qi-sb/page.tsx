'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/qi-sb/SectionTitle'
import WhatIsSection2 from '@/components/qi-sb/WhatIsSection2'

// ── Course data ───────────────────────────────────────────────────────────────
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

// ── FAQ data ──────────────────────────────────────────────────────────────────
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

// ── Brainwave data ────────────────────────────────────────────────────────────
const brainwaves = [
  {
    label: 'β Beta · 日常清醒',
    hz: '13–30 Hz',
    desc: '緊繃、思緒快速流動的日常狀態。頌缽開始之前，多數人在這裡。',
    color: '#90CCBF',
    strokeWidth: 2.2,
    points: '0,18 12,8 18,26 24,6 30,28 36,10 42,24 48,4 54,30 60,8 66,22 72,4 78,28 84,10 90,20 96,6 102,26 108,4 114,28 120,8 126,22 132,4 138,30 144,10 150,22 156,6 162,26 168,8 174,24 180,10 186,28 192,6 198,22 204,8 210,26 216,6 222,24 228,10 234,22 240,6 246,28 252,12 260,18',
    bg: 'rgba(90,165,178,0.06)',
  },
  {
    label: 'α Alpha · 放鬆專注',
    hz: '8–12 Hz',
    desc: '心智清明、身體放鬆。頌缽聲中，這是最常出現的狀態轉換入口。',
    color: '#65BAAF',
    strokeWidth: 2.6,
    points: '0,18 18,6 36,30 54,6 72,28 90,8 108,26 126,6 144,28 162,8 180,28 198,8 216,28 234,8 252,24 260,18',
    bg: 'rgba(90,165,178,0.12)',
  },
  {
    label: 'θ Theta · 深層冥想',
    hz: '4–7 Hz',
    desc: '內在意象浮現，無意識智慧可及。薩滿旅程與靈性洞察在此層發生。',
    color: '#5DA5B5',
    strokeWidth: 3.0,
    points: '0,18 30,4 60,32 90,4 120,30 150,6 180,28 210,4 240,28 260,18',
    bg: 'rgba(90,165,178,0.2)',
  },
]

export default function QiSbPage() {
  const [openCourse, setOpenCourse] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ── */}
      <section
        data-nav-theme="dark"
        data-nav-color="rgba(90,165,178,0.12)"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(150deg, #6AAEBB 0%, #6BBFB2 40%, #7DCCC0 70%, #6BB8C2 100%)',
        }}
      >
        {/* Watercolor wash overlays */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,255,255,0.07) 0%, transparent 60%),' +
              'radial-gradient(ellipse 50% 70% at 75% 70%, rgba(60,130,148,0.4) 0%, transparent 65%),' +
              'radial-gradient(ellipse 40% 40% at 50% 50%, rgba(90,165,178,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Ghost text — two stacked lines */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '-10px',
            bottom: '4vh',
            fontFamily: 'var(--f-impact)',

            fontWeight: 700,
            fontSize: 'clamp(56px,9vw,120px)',
            lineHeight: 1.05,
            color: 'rgba(255,255,255,0.05)',
            letterSpacing: '-0.01em',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          SINGING<br />BOWL
        </div>

        {/* Ripple rings — centred in section */}
        {[0, 1, 2].map(i => (
          <div
            key={i}
            aria-hidden
            style={{
              position: 'absolute',
              width: 'clamp(200px,30vw,400px)',
              height: 'clamp(200px,30vw,400px)',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.12)',
              animation: `qi-ripple 4s ease-out ${i * 1.3}s infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Background bowl image — right side */}
        <Image
          src="/qi-sb/bowl-white.png"
          alt=""
          aria-hidden
          width={600}
          height={600}
          style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(300px,42vw,600px)',
            height: 'auto',
            opacity: 0.10,
            pointerEvents: 'none',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: 'clamp(100px,15vw,160px) clamp(24px,5vw,72px) clamp(60px,8vw,100px)',
            maxWidth: 680,
          }}
        >
          <h1
            className="tr-d2"
            style={{ fontFamily: 'var(--f-impact)', fontWeight: 900,
              fontSize: 'clamp(32px,5vw,58px)',
              color: '#FDFBF8',
              lineHeight: 1.25,
              marginBottom: 14,
            }}
          >
            聲音是最古老的<br />回家方式
          </h1>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 300,
              fontSize: 20,
              letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.65)',
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            Sound is the oldest way home
          </p>
          <p
            style={{
              fontFamily: 'var(--f-body)',
              fontWeight: 300,
              fontSize: 15,
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.68)',
              maxWidth: 420,
              margin: '0 auto 44px',
            }}
          >
            不需翻譯，不需理解，<br />
            只需讓缽聲穿透——<br />
            你的細胞已知道路。
          </p>
        </div>
      </section>

      {/* ── 為什麼頌缽可以放鬆腦波 ── */}
      <section
        data-nav-theme="dark"
        data-nav-color="rgba(90,165,178,0.12)"
        style={{
          background: 'linear-gradient(180deg, #6AAEBB 0%, #6BBFB2 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(60px,8vh,100px) clamp(24px,5vw,72px)',
          textAlign: 'center',
        }}
      >
        {/* Radial glow behind bowl */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 55% 55% at 50% 52%, rgba(90,165,178,0.30) 0%, rgba(90,165,178,0.08) 55%, transparent 80%)',
            pointerEvents: 'none',
          }}
        />

        {/* Animated ripple rings */}
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            aria-hidden
            style={{
              position: 'absolute',
              width: `clamp(${200 + i * 90}px, ${22 + i * 9}vw, ${420 + i * 120}px)`,
              height: `clamp(${200 + i * 90}px, ${22 + i * 9}vw, ${420 + i * 120}px)`,
              borderRadius: '50%',
              border: `1px solid rgba(90,165,178,${(0.16 - i * 0.03).toFixed(2)})`,
              animation: `qi-ripple 5s ease-out ${i * 1.2}s infinite`,
              pointerEvents: 'none',
            } as React.CSSProperties}
          />
        ))}


        {/* Title */}
        <h2
          className="tr-d2"
          style={{ fontFamily: 'var(--f-impact)', fontWeight: 900,
            position: 'relative',
            zIndex: 2,
            fontSize: 'clamp(20px,2.8vw,34px)',
            color: 'rgba(255,255,255,0.82)',
            letterSpacing: '0.05em',
            lineHeight: 1.35,
            marginBottom: 52,
          }}
        >
          為什麼頌缽可以放鬆腦波
        </h2>
        <p
          style={{
            position: 'relative',
            zIndex: 2,
            fontFamily: 'var(--f-display)',
            fontWeight: 300,
            fontSize: 20,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
            marginBottom: 52,
            marginTop: -36,
          }}
        >
          Why Singing Bowl Relaxes Brainwaves
        </p>

        {/* Animated SVG waves — radiating from center */}
        <svg
          aria-hidden
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, opacity: 0.18 }}
        >
          <defs>
            {[0, 1, 2, 3, 4, 5].map(i => (
              <animateTransform
                key={i}
                id={`wt${i}`}
                attributeName="transform"
                type="translate"
                from={`${i * 18} 0`}
                to={`${-1440 + i * 18} 0`}
                dur={`${7 + i * 1.2}s`}
                repeatCount="indefinite"
              />
            ))}
          </defs>

          {/* 6 wave paths — varied thickness, slow scroll + vertical drift */}
          {([
            { amp: 18, phase: 0,   period: 320, y: 193, opacity: 0.50, stroke: 'rgba(90,165,178,1)',  sw: 2.5, dur: 18, vAmp:  5, vDur: 12 },
            { amp: 28, phase: 60,  period: 280, y: 204, opacity: 0.35, stroke: 'rgba(90,165,178,1)',  sw: 0.6, dur: 24, vAmp:  0, vDur:  0 },
            { amp: 12, phase: 120, period: 360, y: 196, opacity: 0.28, stroke: 'rgba(255,255,255,1)', sw: 1.5, dur: 20, vAmp:  4, vDur: 16 },
            { amp: 22, phase: 180, period: 300, y: 207, opacity: 0.20, stroke: 'rgba(255,255,255,1)', sw: 3.5, dur: 28, vAmp:  0, vDur:  0 },
            { amp: 34, phase: 240, period: 260, y: 200, opacity: 0.14, stroke: 'rgba(90,165,178,1)',  sw: 0.8, dur: 22, vAmp:  6, vDur: 20 },
            { amp: 10, phase: 300, period: 400, y: 202, opacity: 0.10, stroke: 'rgba(255,255,255,1)', sw: 2.0, dur: 32, vAmp:  0, vDur:  0 },
          ] as const).map((w, i) => {
            const pts: string[] = []
            for (let x = -w.period; x <= 1440 + w.period; x += 4) {
              const y = w.y + w.amp * Math.sin((x + w.phase) * (2 * Math.PI / w.period))
              pts.push(`${x},${y.toFixed(1)}`)
            }
            return (
              <g key={i}>
                {/* Vertical drift — only on odd waves */}
                {w.vAmp > 0 && (
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0 0; 0 ${w.vAmp}; 0 0; 0 ${-w.vAmp}; 0 0`}
                    dur={`${w.vDur}s`}
                    repeatCount="indefinite"
                    additive="sum"
                  />
                )}
                <polyline
                  points={pts.join(' ')}
                  fill="none"
                  stroke={w.stroke}
                  strokeWidth={w.sw}
                  opacity={w.opacity}
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    from={`0 0`}
                    to={`${-w.period} 0`}
                    dur={`${w.dur}s`}
                    repeatCount="indefinite"
                    additive="sum"
                  />
                </polyline>
              </g>
            )
          })}
        </svg>

        {/* Bowl image — bowl-white, centered */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            src="/qi-sb/bowl-white.png"
            alt="頌缽"
            width={600}
            height={600}
            style={{
              position: 'relative',
              width: 'clamp(220px,38vw,460px)',
              height: 'auto',
              opacity: 0.55,
              filter: 'drop-shadow(0 0 40px rgba(90,165,178,0.42)) drop-shadow(0 0 90px rgba(90,165,178,0.18))',
            }}
          />
        </div>

        {/* Brainwave journey — minimal, atmospheric */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            marginTop: 52,
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(16px,3.5vw,44px)',
          }}
        >
          {([
            { wave: 'β', state: '清醒緊繃', hz: '13–30 Hz' },
            { wave: '→', state: '', hz: '' },
            { wave: 'α', state: '放鬆專注', hz: '8–12 Hz' },
            { wave: '→', state: '', hz: '' },
            { wave: 'θ', state: '深層冥想', hz: '4–7 Hz' },
          ] as const).map((item, i) =>
            item.wave === '→' ? (
              <span key={i} style={{ color: 'rgba(90,165,178,0.45)', fontSize: 20, fontFamily: 'var(--f-display)', lineHeight: 1 }}>→</span>
            ) : (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--f-display)', fontWeight: 100, fontSize: 'clamp(22px,2.8vw,36px)', color: 'rgba(255,255,255,0.68)', lineHeight: 1, marginBottom: 8 }}>{item.wave}</p>
                <p style={{ fontFamily: 'var(--f-display)', fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.32)', marginBottom: 4 }}>{item.hz}</p>
                <p style={{ fontFamily: 'var(--f-zh)', fontSize: 12, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.08em' }}>{item.state}</p>
              </div>
            )
          )}
        </div>

        {/* Bottom caption */}
        <p
          style={{
            position: 'relative',
            zIndex: 2,
            fontFamily: 'var(--f-display)',
            fontWeight: 100,
            fontSize: 11,
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginTop: 36,
          }}
        >
          聲波共振 · 腦波同步 · 神經系統自然修復
        </p>
      </section>

      {/* ── WAVE: section1 → courses ── */}
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, marginBottom: -2, background: '#6BBFB2' }}
      >
        <path
          d="M0,10 C240,75 480,5 720,50 C960,90 1200,15 1440,52 L1440,90 L0,90 Z"
          fill="rgba(232,239,232,0.45)"
        />
        <path
          d="M0,30 C300,85 600,8 900,55 C1100,85 1300,25 1440,60 L1440,90 L0,90 Z"
          fill="#E8EFE8"
        />
      </svg>

      {/* ── COURSES ── */}
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

        <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>
          <SectionTitle zh="課程與體驗" en="Sessions & Experiences" mb={16} center />
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85, marginBottom: 48 }}>
            每一次的頌缽都是獨特的旅程。點擊展開詳細說明。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {courses.map(c => {
              const isOpen = openCourse === c.id
              return (
                <div
                  key={c.id}
                  style={{
                    borderTop: '1px solid rgba(90,165,178,0.18)',
                    ...(c.id === courses.length ? { borderBottom: '1px solid rgba(90,165,178,0.18)' } : {}),
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
                        fontSize: 11,
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
                      <div style={{ marginBottom: 4 }}>
                        <div
                          style={{
                            fontFamily: 'var(--f-impact)',
                            fontWeight: 900,
                            fontSize: 18,
                            color: '#2E5A6A',
                          }}
                        >
                          {c.name}
                        </div>
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--f-display)',
                          fontWeight: 300,
                          fontSize: 11,
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
                        fontSize: 10,
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
                      style={{
                        padding: '24px 0 40px 56px',
                        borderTop: '1px solid rgba(90,165,178,0.1)',
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '0 40px',
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
                                  fontSize: 10,
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
                                  fontSize: 10,
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

                      {/* Right: price top, CTA bottom */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', height: '100%', gap: 24, paddingRight: 0 }}>
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
                            fontSize: 12,
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


      {/* ── WAVE: cream → base ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, background: '#E8EFE8' }}
      >
        <path
          d="M0,0 C240,55 480,5 720,40 C960,75 1200,10 1440,45 L1440,60 L0,60 Z"
          fill="var(--base)"
        />
      </svg>

      {/* ── WHAT IS 頌缽音流 ── */}
      <WhatIsSection2 />

      {/* ── WAVE: base → dark ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, marginBottom: -2, background: 'var(--base)' }}
      >
        <path
          d="M0,0 C180,55 360,5 540,40 C720,75 900,10 1080,42 C1260,68 1380,20 1440,38 L1440,60 L0,60 Z"
          fill="#5DA5B5"
        />
      </svg>

      {/* ── 禿禿 TWO TWO ── */}
      <section id="two-two" style={{ background: '#5DA5B5', position: 'relative', overflow: 'hidden' }}>
        {/* Ghost word */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: '-10px',
            top: '20px',
            fontFamily: 'var(--f-impact)',
            fontWeight: 700,
            fontSize: 'clamp(100px,15vw,200px)',
            color: 'rgba(255,255,255,0.07)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          TWO TWO
        </div>

        <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px,6vw,80px)',
              alignItems: 'center',
            }}
          >
            {/* Left: name + bio */}
            <div>
              <h2
                className="tr-d2"
                style={{ fontFamily: 'var(--f-impact)', fontWeight: 900,
                  fontSize: 'clamp(28px,4vw,48px)',
                  color: '#fff',
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                禿禿 TWO TWO
              </h2>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
                {['頌缽', '薩滿', '能量定頻'].map(r => (
                  <span
                    key={r}
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontSize: 9,
                      letterSpacing: '0.14em',
                      color: 'rgba(255,255,255,0.45)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 999,
                      padding: '4px 14px',
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: 'rgba(255,255,255,0.72)',
                  marginBottom: 20,
                }}
              >
                以聲音為媒介，禿禿的工作是進入你看不見的地方，把東西帶回來。
              </p>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: 'rgba(255,255,255,0.48)',
                }}
              >
                多年的頌缽訓練與薩滿修習，讓她能夠精準感知能量阻塞，並以頌缽頻率、音叉與薩滿技術，協助主體重新定頻。身心狀態、潛意識模式、靈魂碎片——她都去過。
              </p>
            </div>

            {/* Right: 吉祥物禿 */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="/index/吉祥物禿.png"
                alt="禿禿"
                width={400}
                height={400}
                style={{
                  width: 'clamp(180px,28vw,340px)',
                  height: 'auto',
                  opacity: 0.92,
                  filter: 'drop-shadow(0 0 28px rgba(90,165,178,0.32))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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

        <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>
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

      {/* ── WAVE 4: indigo → base ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, marginBottom: -2, background: '#5DA5B5' }}
      >
        <path
          d="M0,0 C360,55 720,10 1080,48 C1260,62 1380,22 1440,40 L1440,60 L0,60 Z"
          fill="#F2EFEA"
        />
      </svg>

      {/* ── CTA ── */}
      <section
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--base)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          padding: 'clamp(60px,8vh,100px) clamp(24px,8vw,120px)',
        }}
      >
        {/* Ghost words */}
        <div aria-hidden style={{ position:'absolute', left:'-20px', top:'18%', fontFamily:'var(--f-impact)', fontWeight:900, fontSize:'clamp(100px,16vw,220px)', color:'rgba(90,165,178,0.10)', lineHeight:1, pointerEvents:'none', userSelect:'none', letterSpacing:'-0.01em' }}>
          SOUND
        </div>
        <div aria-hidden style={{ position:'absolute', right:'-20px', top:'42%', fontFamily:'var(--f-impact)', fontWeight:900, fontSize:'clamp(80px,12vw,170px)', color:'rgba(90,165,178,0.08)', lineHeight:1, pointerEvents:'none', userSelect:'none', letterSpacing:'-0.01em' }}>
          FLOW
        </div>
        <div aria-hidden style={{ position:'absolute', left:'5%', bottom:'12%', fontFamily:'var(--f-impact)', fontWeight:900, fontSize:'clamp(60px,9vw,130px)', color:'rgba(90,165,178,0.07)', lineHeight:1, pointerEvents:'none', userSelect:'none', letterSpacing:'-0.01em' }}>
          home
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2
            className="tr-d2"
            style={{ fontFamily: 'var(--f-impact)', fontWeight: 900,
              fontSize: 'clamp(26px,4vw,44px)',
              color: '#2E5A6A',
              marginBottom: 16,
            }}
          >
            準備好讓聲音帶你回家了嗎
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: 400,
              margin: '0 auto 40px',
            }}
          >
            帶著你的當下就好，其他的交給頌缽。傳訊給我們預約或詢問。
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--f-display)',
              fontSize: 12,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#fff',
              textDecoration: 'none',
              background: '#6AAEBB',
              borderRadius: 999,
              padding: '14px 36px',
              transition: 'background 0.2s',
            }}
          >
            預約頌缽體驗 →
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--f-display)',
              fontSize: 12,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#2E5A6A',
              textDecoration: 'none',
              border: '1px solid rgba(90,165,178,0.45)',
              borderRadius: 999,
              padding: '14px 36px',
              transition: 'background 0.2s',
            }}
          >
            BOOK A SESSION →
          </Link>
          </div>
        </div>
      </section>
    </>
  )
}
