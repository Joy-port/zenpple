'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ── Course data ───────────────────────────────────────────────────────────────
const courses = [
  {
    id: 1,
    code: 'QI-SB-01',
    name: '脈輪牌卡問事＋放鬆頌缽',
    nameEn: 'Chakra Card Reading + Relaxation Bowl',
    meta: '1:1 · 60 分鐘',
    price: 'NT$3,500',
    desc: '結合牌卡分析與全身放鬆的入門實體體驗。適合想了解當下身心狀態，並在諮詢後透過頌缽達到深層紓壓的你。先透過脈輪牌卡讀取能量現況，再以頌缽頻率引導全身放鬆，讓神經系統在聲波中自然進入修復狀態。',
    tags: ['1:1 私人體驗', '實體', '30min 牌卡 + 30min 頌缽', 'TWO TWO'],
  },
  {
    id: 2,
    code: 'QI-SB-01-G',
    name: '［團體］脈輪牌卡問事＋放鬆頌缽',
    nameEn: 'Group Chakra Card + Sound Bath',
    meta: '3–5 人 · 約 60 分鐘',
    price: 'NT$3,200 / 人',
    desc: '結合直覺牌卡解析與團體全身放鬆頌缽的私密療癒聚會。適合想與閨蜜好友共度質感時光、初次體驗靈性療癒的你們。10 分鐘快速牌卡讀取當下狀態，再以 30 分鐘團體放鬆頌缽讓每個人在聲波中完美沉澱。每場 3 人起，5 人滿。',
    tags: ['3–5 人小團體', '實體', '10min 牌卡 + 30min 頌缽', '閨蜜私密'],
  },
  {
    id: 3,
    code: 'QI-SB-02',
    name: '能量療癒占卜旗艦',
    nameEn: 'Flagship Energy Healing & Divination',
    meta: '1:1 · 60 分鐘',
    price: 'NT$10,000',
    desc: '針對特定問題進行「深度拆解」與「頻率清理」的旗艦體驗。先透過牌卡問事深度讀取問題背後的隱藏訊息，再由禿禿敲擊通靈頌缽，針對該問題的阻礙點進行深層敲擊與頻率疏通。適合正在面對人生重大卡點、需要被深度看見的你。',
    tags: ['1:1 私人體驗', '實體', '30min 深度問事 + 30min 專項頌缽', '通靈解析'],
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
    color: '#7AAEB8',
    strokeWidth: 2.2,
    points: '0,18 12,8 18,26 24,6 30,28 36,10 42,24 48,4 54,30 60,8 66,22 72,4 78,28 84,10 90,20 96,6 102,26 108,4 114,28 120,8 126,22 132,4 138,30 144,10 150,22 156,6 162,26 168,8 174,24 180,10 186,28 192,6 198,22 204,8 210,26 216,6 222,24 228,10 234,22 240,6 246,28 252,12 260,18',
    bg: 'rgba(58,125,142,0.06)',
  },
  {
    label: 'α Alpha · 放鬆專注',
    hz: '8–12 Hz',
    desc: '心智清明、身體放鬆。頌缽聲中，這是最常出現的狀態轉換入口。',
    color: '#3A7D8E',
    strokeWidth: 2.6,
    points: '0,18 18,6 36,30 54,6 72,28 90,8 108,26 126,6 144,28 162,8 180,28 198,8 216,28 234,8 252,24 260,18',
    bg: 'rgba(58,125,142,0.12)',
  },
  {
    label: 'θ Theta · 深層冥想',
    hz: '4–7 Hz',
    desc: '內在意象浮現，無意識智慧可及。薩滿旅程與靈性洞察在此層發生。',
    color: '#25525F',
    strokeWidth: 3.0,
    points: '0,18 30,4 60,32 90,4 120,30 150,6 180,28 210,4 240,28 260,18',
    bg: 'rgba(58,125,142,0.2)',
  },
]

export default function QiSbPage() {
  const [openCourse, setOpenCourse] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(150deg, #1A3C48 0%, #25525F 35%, #3A7D8E 65%, #2D6070 100%)',
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
              'radial-gradient(ellipse 50% 70% at 75% 70%, rgba(20,58,68,0.4) 0%, transparent 65%),' +
              'radial-gradient(ellipse 40% 40% at 50% 50%, rgba(58,125,142,0.18) 0%, transparent 70%)',
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
            fontFamily: 'var(--f-display)',
            fontWeight: 100,
            fontSize: 'clamp(56px,9vw,120px)',
            lineHeight: 1.05,
            color: 'rgba(255,255,255,0.04)',
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
            style={{
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
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.32em',
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
        style={{
          background: 'linear-gradient(180deg, #1A3C48 0%, #25525F 100%)',
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
              'radial-gradient(ellipse 55% 55% at 50% 52%, rgba(58,125,142,0.30) 0%, rgba(58,125,142,0.08) 55%, transparent 80%)',
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
              border: `1px solid rgba(58,125,142,${(0.16 - i * 0.03).toFixed(2)})`,
              animation: `qi-ripple 5s ease-out ${i * 1.2}s infinite`,
              pointerEvents: 'none',
            } as React.CSSProperties}
          />
        ))}

        {/* Section label */}
        <p
          style={{
            position: 'relative',
            zIndex: 2,
            fontFamily: 'var(--f-mono)',
            fontSize: 10,
            letterSpacing: '0.32em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginBottom: 36,
          }}
        >
          01 · WHY SINGING BOWL
        </p>

        {/* Title */}
        <h2
          className="tr-d2"
          style={{
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
            { amp: 18, phase: 0,   period: 320, y: 185, opacity: 0.50, stroke: 'rgba(58,125,142,1)',  sw: 2.5, dur: 18, vAmp: 14, vDur: 12 },
            { amp: 28, phase: 60,  period: 280, y: 210, opacity: 0.35, stroke: 'rgba(58,125,142,1)',  sw: 0.6, dur: 24, vAmp:  0, vDur:  0 },
            { amp: 12, phase: 120, period: 360, y: 170, opacity: 0.28, stroke: 'rgba(255,255,255,1)', sw: 1.5, dur: 20, vAmp: 12, vDur: 16 },
            { amp: 22, phase: 180, period: 300, y: 225, opacity: 0.20, stroke: 'rgba(255,255,255,1)', sw: 3.5, dur: 28, vAmp:  0, vDur:  0 },
            { amp: 34, phase: 240, period: 260, y: 200, opacity: 0.14, stroke: 'rgba(58,125,142,1)',  sw: 0.8, dur: 22, vAmp: 16, vDur: 20 },
            { amp: 10, phase: 300, period: 400, y: 215, opacity: 0.10, stroke: 'rgba(255,255,255,1)', sw: 2.0, dur: 32, vAmp:  0, vDur:  0 },
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

        {/* Bowl image — dominant, centered — bowl-white behind, 頌缽 in front */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Large white bowl behind */}
          <Image
            src="/qi-sb/bowl-white.png"
            alt=""
            aria-hidden
            width={700}
            height={700}
            style={{
              position: 'absolute',
              width: 'clamp(300px,52vw,620px)',
              height: 'auto',
              opacity: 0.07,
            }}
          />
          {/* Main bowl — lighter opacity */}
          <Image
            src="/qi-sb/頌缽.png"
            alt="頌缽"
            width={600}
            height={600}
            style={{
              position: 'relative',
              width: 'clamp(220px,38vw,460px)',
              height: 'auto',
              opacity: 0.80,
              filter: 'drop-shadow(0 0 40px rgba(58,125,142,0.42)) drop-shadow(0 0 90px rgba(58,125,142,0.18))',
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
              <span key={i} style={{ color: 'rgba(58,125,142,0.45)', fontSize: 20, fontFamily: 'var(--f-display)', lineHeight: 1 }}>→</span>
            ) : (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--f-display)', fontWeight: 100, fontSize: 'clamp(22px,2.8vw,36px)', color: 'rgba(255,255,255,0.68)', lineHeight: 1, marginBottom: 8 }}>{item.wave}</p>
                <p style={{ fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.32)', marginBottom: 4 }}>{item.hz}</p>
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

      {/* ── WAVE: dark → cream ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, background: '#25525F' }}
      >
        <path
          d="M0,0 C180,55 360,5 540,40 C720,75 900,10 1080,42 C1260,68 1380,20 1440,38 L1440,60 L0,60 Z"
          fill="var(--cream)"
        />
      </svg>

      {/* ── COURSES ── */}
      <section
        id="courses"
        style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}
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
            border: '1px solid rgba(58,125,142,0.08)',
            boxShadow:
              '0 0 0 40px rgba(58,125,142,0.04), 0 0 0 80px rgba(58,125,142,0.025), 0 0 0 120px rgba(58,125,142,0.015)',
            pointerEvents: 'none',
          }}
        />

        <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>
          <p className="sec-label">02 · SESSIONS</p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(26px,3.5vw,38px)',
              color: '#25525F',
              lineHeight: 1.3,
              marginBottom: 12,
            }}
          >
            課程與體驗
          </h2>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Sessions &amp; Experiences
          </p>
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
                    borderTop: '1px solid rgba(58,125,142,0.18)',
                    ...(c.id === courses.length ? { borderBottom: '1px solid rgba(58,125,142,0.18)' } : {}),
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
                        fontFamily: 'var(--f-mono)',
                        fontSize: 11,
                        letterSpacing: '0.2em',
                        color: isOpen ? '#3A7D8E' : 'var(--muted)',
                        width: 40,
                        flexShrink: 0,
                        transition: 'color .3s',
                      }}
                    >
                      {String(c.id).padStart(2, '0')}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div
                        className="tr-h1"
                        style={{
                          fontSize: 18,
                          color: '#25525F',
                        }}
                      >
                        {c.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--f-display)',
                          fontWeight: 100,
                          fontSize: 11,
                          letterSpacing: '0.25em',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                          marginTop: 4,
                        }}
                      >
                        {c.nameEn}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: 11,
                        color: 'var(--muted)',
                        textAlign: 'right',
                        marginRight: 20,
                        lineHeight: 1.6,
                        flexShrink: 0,
                      }}
                    >
                      {c.meta.split(' · ').join('\n')}
                      <br />
                      {c.price}
                    </div>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        border: '1px solid rgba(58,125,142,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: isOpen ? '#fff' : '#3A7D8E',
                        background: isOpen ? '#3A7D8E' : 'transparent',
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
                      maxHeight: isOpen ? 400 : 0,
                      overflow: 'hidden',
                      transition: 'max-height .5s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    <div
                      style={{
                        padding: '0 0 40px 56px',
                        borderTop: '1px solid rgba(58,125,142,0.1)',
                        paddingTop: 24,
                      }}
                    >
                      <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85, maxWidth: 540, marginBottom: 20 }}>
                        {c.desc}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                        {c.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: 'var(--f-mono)',
                              fontSize: 10,
                              letterSpacing: '0.12em',
                              padding: '5px 12px',
                              border: '1px solid rgba(58,125,142,0.3)',
                              color: '#3A7D8E',
                              borderRadius: 1,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                        <span
                          style={{
                            fontFamily: 'var(--f-mono)',
                            fontSize: 15,
                            fontWeight: 700,
                            color: '#25525F',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {c.price}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--f-mono)',
                            fontSize: 10,
                            color: 'var(--muted)',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {c.code}
                        </span>
                        <Link
                          href="/contact"
                          style={{
                            fontFamily: 'var(--f-mono)',
                            fontSize: 10,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#3A7D8E',
                            textDecoration: 'none',
                            border: '1px solid rgba(58,125,142,0.4)',
                            borderRadius: 999,
                            padding: '7px 16px',
                            marginLeft: 'auto',
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
            <div style={{ borderTop: '1px solid rgba(58,125,142,0.18)' }} />
          </div>
        </div>
      </section>


      {/* ── WAVE: cream → base ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, background: 'var(--cream)' }}
      >
        <path
          d="M0,0 C240,55 480,5 720,40 C960,75 1200,10 1440,45 L1440,60 L0,60 Z"
          fill="var(--base)"
        />
      </svg>

      {/* ── WHAT IS 頌缽音流 ── */}
      <section style={{ background: 'var(--base)', position: 'relative', overflow: 'hidden' }}>
        {/* ghost "sound" watermark */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '-20px',
            top: '40px',
            fontFamily: 'var(--f-display)',
            fontWeight: 100,
            fontSize: 200,
            color: 'rgba(58,125,142,0.04)',
            letterSpacing: '-0.02em',
            pointerEvents: 'none',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          sound
        </div>

        <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>
          <p className="sec-label">03 · WHAT IS IT</p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(26px,3.5vw,38px)',
              color: '#25525F',
              lineHeight: 1.3,
              marginBottom: 12,
            }}
          >
            什麼是靈性頌缽音流
          </h2>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              marginBottom: 48,
            }}
          >
            Singing Bowl Sound Flow
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px,6vw,80px)',
              alignItems: 'start',
            }}
          >
            {/* Left: text + brainwave cards */}
            <div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: 'var(--muted)',
                  marginBottom: 36,
                  maxWidth: 520,
                }}
              >
                頌缽發出的泛音頻率，能同步引導腦波從 β 波（清醒緊張）過渡到 α 波（放鬆專注）乃至 θ
                波（深層冥想），讓神經系統進入自然的修復狀態。這不是催眠，而是聲音的物理共振在身體層面發生作用。
              </p>

              {/* Brainwave section label */}
              <p
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  color: 'var(--muted)',
                  marginBottom: 20,
                }}
              >
                · 腦波調頻原理 ·
              </p>

              {/* SVG roughness filter — defined once */}
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <filter id="bw-rough">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.04 0.08"
                      numOctaves="3"
                      seed="2"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="1.8"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                </defs>
              </svg>

              {brainwaves.map(bw => (
                <div
                  key={bw.label}
                  style={{
                    background: bw.bg,
                    borderRadius: 2,
                    padding: '20px 24px',
                    marginBottom: 12,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 10,
                      letterSpacing: '0.15em',
                      color: '#3A7D8E',
                      marginBottom: 6,
                    }}
                  >
                    {bw.label}
                  </p>
                  <p
                    className="tr-h1"
                    style={{
                      fontSize: 15,
                      color: '#25525F',
                      marginBottom: 6,
                    }}
                  >
                    {bw.hz}
                  </p>
                  <svg
                    viewBox="0 0 260 36"
                    width="100%"
                    height="32"
                    style={{ display: 'block', margin: '8px 0 10px' }}
                    preserveAspectRatio="none"
                  >
                    <polyline
                      filter="url(#bw-rough)"
                      points={bw.points}
                      fill="none"
                      stroke={bw.color}
                      strokeWidth={bw.strokeWidth}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{bw.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: why different */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Bowl ripple illustration */}
              <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" opacity={0.7}>
                  <circle cx="100" cy="100" r="90" stroke="#3A7D8E" strokeWidth="1.2" strokeDasharray="4 3"/>
                  <circle cx="100" cy="100" r="68" stroke="#3A7D8E" strokeWidth="1" strokeDasharray="3 4"/>
                  <circle cx="100" cy="100" r="46" stroke="#25525F" strokeWidth="1.4"/>
                  <circle cx="100" cy="100" r="24" stroke="#25525F" strokeWidth="1.8" fill="rgba(58,125,142,0.06)"/>
                  <ellipse cx="100" cy="118" rx="42" ry="14" stroke="#3A7D8E" strokeWidth="1.2" fill="none"/>
                  <path d="M58 118 Q100 102 142 118" stroke="#3A7D8E" strokeWidth="1" fill="none" opacity={0.6}/>
                  <path d="M70 112 Q100 100 130 112" stroke="#25525F" strokeWidth="0.8" fill="none" opacity={0.5}/>
                </svg>
              </div>

              {/* Why different block */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #25525F 0%, #3A7D8E 100%)',
                  borderRadius: 4,
                  padding: '32px 36px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    right: -40,
                    top: -40,
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    pointerEvents: 'none',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 10,
                  }}
                >
                  · 為什麼森波的頌缽不一樣 ·
                </p>
                <h3
                  className="tr-h1"
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    marginBottom: 16,
                  }}
                >
                  聲音 × 薩滿 × 通靈解析
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.72)',
                    lineHeight: 1.85,
                  }}
                >
                  大多數的頌缽課程停在聲音的放鬆層面。森波的頌缽音流，同時結合薩滿意識旅程與通靈解析——禿禿在缽聲之中接收個案的能量訊息，引導每次體驗不只是「被聲音泡著」，而是有意識地鬆動特定能量阻塞，並帶回可落地的洞見。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── WAVE: base → dark ── */}
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', marginTop: -2, background: 'var(--base)' }}
      >
        <path
          d="M0,0 C180,55 360,5 540,40 C720,75 900,10 1080,42 C1260,68 1380,20 1440,38 L1440,60 L0,60 Z"
          fill="#25525F"
        />
      </svg>

      {/* ── 禿禿 TWO TWO ── */}
      <section style={{ background: '#25525F', position: 'relative', overflow: 'hidden' }}>
        {/* Ghost word */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: '-10px',
            top: '-10px',
            fontFamily: 'var(--f-display)',
            fontWeight: 100,
            fontSize: 'clamp(100px,15vw,200px)',
            color: 'rgba(255,255,255,0.03)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          TWO TWO
        </div>

        <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>
          <p className="sec-label" style={{ color: 'rgba(255,255,255,0.3)' }}>04 · THE PRACTITIONER</p>

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
                style={{
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
                      fontFamily: 'var(--f-mono)',
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

            {/* Right: bowl image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="/qi-sb/頌缽.png"
                alt="頌缽"
                width={400}
                height={400}
                style={{
                  width: 'clamp(180px,28vw,340px)',
                  height: 'auto',
                  opacity: 0.72,
                  filter: 'drop-shadow(0 0 28px rgba(58,125,142,0.32))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          background: '#25525F',
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
            fontFamily: 'var(--f-display)',
            fontWeight: 100,
            fontSize: 200,
            color: 'rgba(255,255,255,0.03)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          FAQ
        </div>

        <div className="wrap" style={{ paddingTop: 'clamp(80px,10vw,120px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>
          <p
            className="sec-label"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            05 · FAQ
          </p>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(26px,3.5vw,38px)',
              color: '#fff',
              lineHeight: 1.3,
              marginBottom: 12,
            }}
          >
            常見問題
          </h2>
          <p
            style={{
              fontFamily: 'var(--f-display)',
              fontWeight: 100,
              fontSize: 13,
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              marginBottom: 48,
            }}
          >
            Frequently Asked Questions
          </p>

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
        style={{ display: 'block', width: '100%', marginTop: -2, marginBottom: -2, background: '#25525F' }}
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
        {/* Ghost word */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--f-display)',
            fontWeight: 100,
            fontSize: 220,
            color: 'rgba(58,125,142,0.04)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          home
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2
            className="tr-d2"
            style={{
              fontSize: 'clamp(26px,4vw,44px)',
              color: '#25525F',
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
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--f-mono)',
              fontSize: 12,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#fff',
              textDecoration: 'none',
              background: '#3A7D8E',
              borderRadius: 999,
              padding: '14px 36px',
              transition: 'background 0.2s',
            }}
          >
            預約頌缽體驗 →
          </Link>
        </div>
      </section>
    </>
  )
}
