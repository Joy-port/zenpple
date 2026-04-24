'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './sc-page.css'

export default function ScPage() {
  useEffect(() => {
    document.body.classList.add('page-sc')
    return () => { document.body.classList.remove('page-sc') }
  }, [])

  const [openDetail, setOpenDetail] = useState<string | null>(null)
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const nodeZoneMap: Record<string, string> = {
    sc01: 'section-sc01',
    sc02: 'section-sc02',
    sc03: 'section-sc03',
    sc04: 'section-sc04',
    sc05: 'section-sc05',
  }

  function selectNode(nodeId: string) {
    setActiveNode(nodeId)
    const zoneId = nodeZoneMap[nodeId]
    if (zoneId) {
      setTimeout(() => {
        document.getElementById(zoneId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
    }
  }

  return (
    <>
      {/* Shared brush-stroke SVG filter definitions */}
      <svg style={{ position:'absolute', width:0, height:0, overflow:'hidden' }} aria-hidden>
        <defs>
          <filter id="sc-brush-icon" x="-15%" y="-15%" width="130%" height="130%">
            <feTurbulence type="fractalNoise" baseFrequency="0.065" numOctaves="3" seed="12" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <filter id="sc-brush-box" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="7" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>

      {/* ═══ HERO ═══ */}
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', overflow:'hidden', background:'#2B4A5E' }}>
        {/* Airy blue-teal wash */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 90% 80% at 50% 40%, rgba(94,142,138,0.28) 0%, transparent 65%), radial-gradient(ellipse 60% 70% at 10% 70%, rgba(74,107,138,0.35) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 90% 15%, rgba(74,107,138,0.18) 0%, transparent 55%)', pointerEvents:'none' }} />

        {/* 薩滿巫 — full-bg, right-biased, large and atmospheric */}
        <Image
          src="/sc/black/薩滿巫.png"
          alt=""
          aria-hidden
          width={800}
          height={800}
          style={{ position:'absolute', right:0, bottom:0, width:'40%', height:'auto', filter:'invert(1) sepia(0.18) saturate(1.1) hue-rotate(185deg) brightness(1.08)', mixBlendMode:'screen', opacity:0.45, pointerEvents:'none' }}
        />

        {/* Ripple rings — mid-right */}
        <div style={{ position:'absolute', right:'25%', top:'48%', pointerEvents:'none' }}>
          <div className="sc-ripple" />
          <div className="sc-ripple" />
          <div className="sc-ripple" />
        </div>

        {/* Content — vertical top-down flow, centered */}
        <div style={{ position:'relative', zIndex:2, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'clamp(100px,14vh,140px) clamp(20px,8vw,120px) clamp(80px,10vh,100px)', gap:0 }}>

          {/* EN label */}
          <p style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.38em', color:'rgba(200,220,235,1)', marginBottom:28, textTransform:'uppercase' }}>
            SC · Shamanic Soul Awakening
          </p>

          {/* 薩滿冥想-橫 — calligraphy title, horizontal brushwork */}
          <Image
            src="/sc/black/薩滿冥想-橫.png"
            alt="薩滿冥想"
            width={900}
            height={300}
            style={{ width:'clamp(260px,44vw,580px)', height:'auto', filter:'invert(1) sepia(0.12) saturate(1.0) brightness(1.0)', mixBlendMode:'screen', opacity:0.88, marginBottom:32 }}
          />

          {/* h1 subtitle — sits below calligraphy, clear gap */}
          <h1 className="tr-d2" style={{ fontSize:'clamp(20px,2.6vw,36px)', lineHeight:1.3, letterSpacing:'0.06em', color:'rgba(230,242,250,0.85)', marginBottom:20, fontWeight:400 }}>
            靈魂最原始的力量
          </h1>

          <div style={{ width:36, height:1, background:'rgba(200,220,235,0.28)', marginBottom:20 }} />

          <p style={{ fontFamily:'var(--f-elegant)', fontStyle:'italic', fontSize:'clamp(13px,1.3vw,16px)', color:'rgba(200,220,235,1)', letterSpacing:'0.06em', lineHeight:1.9, maxWidth:340 }}>
            透過古老智慧，<br />連結靈魂最原始的力量
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, opacity:0.35, animation:'sc-float 2.5s ease-in-out infinite' }}>
          <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.25em', color:'rgba(200,220,235,0.7)' }}>SCROLL</span>
          <div style={{ width:1, height:40, background:'linear-gradient(to bottom, rgba(200,220,235,0.5), transparent)' }} />
        </div>

        {/* ── Hero→WhatIs transition: ink-smoke brushstroke rip ── */}
        <svg aria-hidden viewBox="0 0 1440 110" preserveAspectRatio="none"
          style={{ position:'absolute', bottom:-1, left:0, width:'100%', height:110, display:'block', pointerEvents:'none' }}>
          {/* Main torn edge — irregular brush feel */}
          <path d="M0,72 C60,55 140,90 240,68 C340,46 420,88 560,62 C680,40 760,82 900,58 C1020,36 1100,78 1220,60 C1310,46 1380,74 1440,65 L1440,110 L0,110 Z"
            fill="#355A6A" opacity="0.95" />
          {/* Second brush layer — slightly offset for depth */}
          <path d="M0,88 C80,70 200,100 340,80 C460,62 560,95 700,75 C820,58 940,92 1080,72 C1200,55 1320,88 1440,78 L1440,110 L0,110 Z"
            fill="#355A6A" opacity="0.50" />
          {/* Ink bleed dots — shamanic texture */}
          <ellipse cx="320" cy="76" rx="18" ry="6" fill="#355A6A" opacity="0.30" />
          <ellipse cx="750" cy="68" rx="12" ry="4" fill="#355A6A" opacity="0.25" />
          <ellipse cx="1100" cy="80" rx="22" ry="5" fill="#355A6A" opacity="0.28" />
        </svg>
      </section>

      {/* ═══ 薩滿介紹 ═══ */}
      <section style={{ background:'#355A6A', padding:'110px 0 90px', minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}>
        {/* Airy wash — lighter, wider spread */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 100% at 60% 50%, rgba(120,175,170,0.2) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 5% 80%, rgba(94,142,138,0.15) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* Decorative bg animals — atmospheric, screen blend */}
        <Image src="/sc/animals/dragon.png" alt="" aria-hidden width={500} height={500}
          style={{ position:'absolute', top:'-8%', left:'-4%', width:'clamp(260px,30vw,420px)', height:'auto', filter:'invert(1)', mixBlendMode:'screen', opacity:0.07, pointerEvents:'none', transform:'scaleX(-1) rotate(-12deg)' }} />
        <Image src="/sc/animals/鶴.png" alt="" aria-hidden width={400} height={400}
          style={{ position:'absolute', bottom:'-6%', right:'2%', width:'clamp(180px,20vw,300px)', height:'auto', filter:'invert(1)', mixBlendMode:'screen', opacity:0.09, pointerEvents:'none', transform:'rotate(8deg)' }} />
        <Image src="/sc/animals/vulture.png" alt="" aria-hidden width={350} height={350}
          style={{ position:'absolute', top:'55%', left:'42%', width:'clamp(140px,14vw,220px)', height:'auto', filter:'invert(1)', mixBlendMode:'screen', opacity:0.06, pointerEvents:'none', transform:'translateY(-50%) rotate(-5deg)' }} />
        <div className="sc-section-grid" style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center', position:'relative', zIndex:2 }}>
          <div className="sc-text-col">
            <p style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.22em', color:'rgba(180,215,220,1)', marginBottom:14, textTransform:'uppercase' }}>
              WHAT IS SHAMANISM
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              薩滿，<br />最古老的療癒智慧
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:14, letterSpacing:'0.28em', color:'rgba(180,215,220,1)', marginBottom:24 }}>
              The Oldest Healing Wisdom
            </p>
            <p style={{ fontSize:14, lineHeight:1.9, color:'rgba(242,239,234,1)', maxWidth:440 }}>
              薩滿不是宗教，是一種與自然、靈性世界深度連結的古老修行。<br /><br />
              透過意識的轉移，薩滿者在三個世界之間旅行，帶回療癒與靈性指引。<br /><br />
              薩滿靈魂覺醒，是找回你與生俱來的完整性。
            </p>
          </div>
          {/* 虎爺 */}
          <div className="sc-image-col" style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:320, position:'relative' }}>
            <Image
              src="/sc/black/虎爺.png"
              alt=""
              aria-hidden
              width={460}
              height={460}
              style={{ width:'min(420px,85%)', height:'auto', filter:'invert(1) sepia(0.5) saturate(1.8) hue-rotate(168deg) brightness(0.88)', mixBlendMode:'screen', opacity:0.55, animation:'sc-breathe 5s ease-in-out infinite' }}
            />
          </div>
        </div>

        {/* ── WhatIs→Journey wave: fills with light journey bg ── */}
        <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none"
          style={{ position:'absolute', bottom:0, left:0, width:'100%', height:80, display:'block', pointerEvents:'none', zIndex:1 }}>
          <path d="M0,45 C220,78 500,12 760,50 C1000,82 1220,20 1440,48 L1440,80 L0,80 Z" fill="#F5EFDF" opacity="0.95" />
          <path d="M0,58 C280,35 580,75 860,50 C1080,32 1300,65 1440,58 L1440,80 L0,80 Z" fill="#F5EFDF" opacity="0.45" />
        </svg>
        {/* ── WhatIs→Journey transition: ceremonial ink divider ── */}
        <div aria-hidden style={{ position:'absolute', bottom:0, left:0, right:0, display:'flex', flexDirection:'column', alignItems:'center', pointerEvents:'none' }}>
          {/* Horizontal ink brush line — full width, feathered */}
          <svg viewBox="0 0 1440 32" preserveAspectRatio="none" style={{ width:'100%', height:32, display:'block' }}>
            <path d="M0,18 C120,10 280,26 480,16 C660,7 820,24 1020,14 C1180,6 1320,22 1440,16"
              stroke="rgba(180,215,220,0.18)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M0,22 C200,14 400,28 640,18 C840,10 1040,26 1280,18 C1360,14 1410,20 1440,18"
              stroke="rgba(180,215,220,0.09)" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
          {/* Centered ripple motif — shamanic gateway */}
          <svg viewBox="0 0 120 40" style={{ width:120, height:40, display:'block', marginTop:-8 }}>
            <ellipse cx="60" cy="20" rx="28" ry="10" stroke="rgba(180,215,220,0.22)" strokeWidth="1" fill="none" />
            <ellipse cx="60" cy="20" rx="16" ry="6" stroke="rgba(180,215,220,0.18)" strokeWidth="1" fill="none" />
            <ellipse cx="60" cy="20" rx="5" ry="3" fill="rgba(180,215,220,0.22)" />
          </svg>
        </div>
      </section>

      {/* ═══ 三個世界 ═══ — removed */}
      {false && <section style={{ background:'#091320', padding:'80px 0 100px', position:'relative', overflow:'hidden' }}>
        {/* Bg washes */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(43,74,106,0.4) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(94,142,138,0.15) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 60% 80%, rgba(196,120,74,0.1) 0%, transparent 50%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 8vw', position:'relative', zIndex:2 }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.22em', color:'#4A6B8A', opacity:0.85, marginBottom:14, textTransform:'uppercase' }}>
              THE THREE WORLDS
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              上、中、下部世界
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:400, fontSize:14, letterSpacing:'0.28em', color:'#7A9AB5', opacity:0.8 }}>
              Realms of the Shamanic Cosmos
            </p>
          </div>

          {/* Pyramid */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', maxWidth:900, margin:'0 auto' }}>

            {/* Upper World */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%', position:'relative', marginBottom:-16 }}>
              <svg viewBox="0 0 340 280" width="300" height="248" style={{ overflow:'visible', display:'block' }}>
                <defs>
                  <filter id="brush-upper" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="2" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                </defs>
                <polygon points="170,18 318,258 22,258" fill="rgba(122,154,181,0.06)" stroke="#7A9AB5" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" filter="url(#brush-upper)" opacity="0.9"/>
                <g transform="translate(152,165)" stroke="#7A9AB5" strokeWidth="1.3" fill="none" opacity="0.75" filter="url(#brush-upper)">
                  <circle cx="18" cy="-30" r="9"/>
                  <path d="M2,0 C2,-22 34,-22 34,0"/>
                  <path d="M2,0 L-7,14 M34,0 L43,14"/>
                  <path d="M8,10 L28,10"/>
                </g>
              </svg>
              <div style={{ position:'absolute', right:0, display:'flex', alignItems:'center', gap:12, width:220 }}>
                <div style={{ fontSize:18, color:'#7A9AB5', opacity:0.5, flexShrink:0 }}>←</div>
                <div>
                  <div className="tr-h1" style={{ fontSize:16, color:'#7A9AB5', marginBottom:2 }}>上部世界</div>
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:400, fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.2em', color:'#7A9AB5', opacity:0.75, marginBottom:6 }}>UPPER WORLD</div>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', lineHeight:1.75, color:'rgba(242,239,234,0.7)' }}>指導靈與祖先智慧的居所。<br />接收更高維度的指引。</div>
                </div>
              </div>
            </div>

            {/* Middle World */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%', position:'relative', marginBottom:-16 }}>
              <svg viewBox="0 0 480 200" width="460" height="192" style={{ overflow:'visible', display:'block' }}>
                <defs>
                  <filter id="brush-mid" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.032" numOctaves="4" seed="5" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                </defs>
                <polygon points="55,18 425,18 468,182 12,182" fill="rgba(94,142,138,0.06)" stroke="#5E8E8A" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" filter="url(#brush-mid)" opacity="0.9"/>
                <g transform="translate(224,100)" stroke="#5E8E8A" strokeWidth="1.3" fill="none" opacity="0.7" filter="url(#brush-mid)">
                  <circle cx="16" cy="0" r="20"/>
                  <circle cx="16" cy="0" r="9" fill="rgba(94,142,138,0.18)"/>
                  <circle cx="42" cy="-6" r="5"/>
                  <circle cx="-10" cy="9" r="4"/>
                </g>
              </svg>
              <div style={{ position:'absolute', left:0, display:'flex', alignItems:'center', gap:12, width:220, flexDirection:'row-reverse', textAlign:'right' }}>
                <div>
                  <div className="tr-h1" style={{ fontSize:16, color:'#5E8E8A', marginBottom:2 }}>中部世界</div>
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:400, fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.2em', color:'#5E8E8A', opacity:0.75, marginBottom:6 }}>MIDDLE WORLD</div>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', lineHeight:1.75, color:'rgba(242,239,234,0.7)' }}>我們生存的當下現實。<br />解讀能量場、清理舊有印記。</div>
                </div>
                <div style={{ fontSize:18, color:'#5E8E8A', opacity:0.5, flexShrink:0 }}>→</div>
              </div>
            </div>

            {/* Lower World */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%', position:'relative' }}>
              <svg viewBox="0 0 620 200" width="620" height="192" style={{ overflow:'visible', display:'block' }}>
                <defs>
                  <filter id="brush-lower" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" seed="8" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                </defs>
                <polygon points="38,18 582,18 608,182 12,182" fill="rgba(196,120,74,0.06)" stroke="#C4784A" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" filter="url(#brush-lower)" opacity="0.9"/>
                <g transform="translate(293,90)" stroke="#C4784A" strokeWidth="1.3" fill="none" opacity="0.7" filter="url(#brush-lower)">
                  <circle cx="16" cy="-24" r="7"/>
                  <line x1="16" y1="-17" x2="16" y2="4"/>
                  <line x1="16" y1="-6" x2="4" y2="5"/>
                  <line x1="16" y1="-6" x2="28" y2="5"/>
                  <line x1="16" y1="4" x2="2" y2="22"/>
                  <line x1="16" y1="4" x2="30" y2="22"/>
                </g>
              </svg>
              <div style={{ position:'absolute', right:0, display:'flex', alignItems:'center', gap:12, width:220 }}>
                <div style={{ fontSize:18, color:'#C4784A', opacity:0.5, flexShrink:0 }}>←</div>
                <div>
                  <div className="tr-h1" style={{ fontSize:16, color:'#C4784A', marginBottom:2 }}>下部世界</div>
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:400, fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.2em', color:'#C4784A', opacity:0.75, marginBottom:6 }}>LOWER WORLD</div>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', lineHeight:1.75, color:'rgba(242,239,234,0.7)' }}>力量動物的棲所。<br />接觸最原始的生命力。</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>}

      {/* ═══ 薩滿旅程五步驟 ═══ */}
      <section style={{ padding:'100px 0 80px', minHeight:'100vh', background:'#F5EFDF', position:'relative', overflow:'hidden' }} id="journey">

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 8vw', position:'relative', zIndex:2 }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.22em', color:'rgba(80,110,90,0.85)', marginBottom:14, textTransform:'uppercase' }}>
              THE SHAMANIC JOURNEY
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#2B3830', marginBottom:16 }}>
              薩滿旅程五步驟
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:14, letterSpacing:'0.28em', color:'rgba(80,110,90,0.85)', marginBottom:12 }}>
              A Path of Awakening &amp; Integration
            </p>
          </div>

          {/* Mobile: vertical path + steps */}
          <div className="md:hidden" style={{ position:'relative', paddingLeft:72, paddingRight:8, marginBottom:8, maxWidth:300, margin:'0 auto' }}>
            {/* Vertical wavy SVG path — passes through each dot at (34, 80+160×n) */}
            <svg aria-hidden style={{ position:'absolute', left:0, top:0, width:68, height:800, pointerEvents:'none' }} viewBox="0 0 68 800">
              <path
                d="M34,0 C18,40 50,120 34,160 C18,200 50,280 34,320 C18,360 50,440 34,480 C18,520 50,600 34,640 C18,680 50,760 34,800"
                stroke="rgba(90,130,105,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round"
              />
            </svg>

            {/* Dots on path — 黑圈 images with glow, absolutely placed at each node */}
            {([
              { id:'sc01', color:'70,140,80',   img:'/resource/single/材質-4-圓圈/黑圈-1.png',  y:80  },
              { id:'sc02', color:'80,140,210',   img:'/resource/single/材質-4-圓圈/黑圈-10.png', y:240 },
              { id:'sc03', color:'200,100,70',   img:'/resource/single/材質-4-圓圈/黑圈-12.png', y:400 },
              { id:'sc04', color:'240,200,30',   img:'/resource/single/材質-4-圓圈/黑圈-18.png', y:560 },
              { id:'sc05', color:'160,80,200',   img:'/resource/single/材質-4-圓圈/黑圈-24.png', y:720 },
            ] as { id:string; color:string; img:string; y:number }[]).map(dot => (
              <div key={`dot-${dot.id}`} style={{ position:'absolute', left:34, top:dot.y, transform:'translate(-50%,-50%)', zIndex:3, pointerEvents:'none' }}>
                <div className="sc-dot-glow" style={{'--glow-color': dot.color} as React.CSSProperties}>
                  <Image src={dot.img} alt="" aria-hidden width={48} height={48}
                    style={{ width:42, height:'auto', filter:'brightness(0.65)', opacity:0.8 }} />
                </div>
              </div>
            ))}

            {/* Step rows — image + text to the right of the path */}
            {([
              { id:'sc01', num:'01', label:'力量動物',    en:'Power Animal',       img:'/sc/journey/龍-color.png',                    glow:'70,140,80',  world:'下部世界',   worldColor:'#C4784A', imgFilter:'saturate(1.7) contrast(1.3) brightness(0.82)' },
              { id:'sc02', num:'02', label:'指導靈',      en:'Spirit Guide',        img:'/sc/journey/指導靈-color.png',                glow:'80,140,210', world:'中部世界',   worldColor:'#5E8E8A', imgFilter:'saturate(0.75) brightness(1.05) contrast(0.90)' },
              { id:'sc03', num:'03', label:'脈輪情緒覺察', en:'Chakra & Emotion',   img:'/sc/journey/七脈輪情緒覺察-color.png',         glow:'200,100,70', world:'上部世界',   worldColor:'#7A9AB5', imgFilter:'saturate(1.1) brightness(0.92) contrast(1.08)' },
              { id:'sc04', num:'04', label:'連結高我',    en:'Higher Self',         img:'/sc/journey/高我-color.png',                  glow:'240,200,30', world:'整合階段',   worldColor:'#8A9E90', imgFilter:'saturate(1.0) brightness(0.82) contrast(1.18)' },
              { id:'sc05', num:'05', label:'尋找內在小孩', en:'Inner Child',         img:'/sc/journey/內在小孩-color.png',              glow:'160,80,200', world:'靈魂碎片團員', worldColor:'#9A7AB5', imgFilter:'saturate(0.78) brightness(1.08) contrast(0.92)' },
            ] as { id:string; num:string; label:string; en:string; img:string; glow:string; world:string; worldColor:string; imgFilter:string }[]).map(step => (
              <a key={step.id} href={`#section-${step.id}`}
                style={{ height:160, display:'flex', alignItems:'center', gap:14, textDecoration:'none', flex:1 }}>
                <div className="sc-glow-wrap" style={{ flexShrink:0, ...({'--glow-color': step.glow} as React.CSSProperties) }}>
                  <Image src={step.img} alt="" aria-hidden width={80} height={80}
                    style={{ width:90, height:'auto', filter:step.imgFilter, opacity:0.95 }} />
                </div>
                <div style={{ textAlign:'center', flex:1, maxWidth:120 }}>
                  {step.world && (
                    <div style={{ display:'inline-flex', alignItems:'center', padding:'2px 8px', borderRadius:20, background:'rgba(80,110,90,0.10)', border:'1px solid rgba(80,110,90,0.28)', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.12em', color:'rgba(60,88,68,0.85)', whiteSpace:'nowrap', marginBottom:5 }}>
                      {step.world}
                    </div>
                  )}
                  <p style={{ fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.2em', color:'rgba(80,110,90,0.45)', marginBottom:2 }}>{step.num}</p>
                  <p style={{ fontSize:15, fontWeight:700, color:'rgba(42,54,46,0.9)', letterSpacing:'0.04em', marginBottom:2 }}>{step.label}</p>
                  <p style={{ fontFamily:'var(--f-display)', fontSize:10, letterSpacing:'0.18em', color:'rgba(80,110,90,0.45)', textTransform:'uppercase' }}>{step.en}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Wave Timeline — desktop only */}
          <div className="hidden md:block" style={{ width:'100%', marginBottom:8 }}>

            {/* Row 1 — above-wave: 01, 03, 05 — theme calligraphy image outward (top), title toward wave (bottom) */}
            <div style={{ position:'relative', height:280, marginBottom:12 }}>
              {/* 01 — 力量動物, green */}
              <div style={{ position:'absolute', left:'calc(90/1100*100%)', bottom:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, cursor:'pointer' }} onClick={() => selectNode('sc01')}>
                <div className="sc-glow-wrap" style={{'--glow-color':'70,140,80'} as React.CSSProperties}>
                  <Image src="/sc/journey/龍-color.png" alt="" aria-hidden width={200} height={200}
                    style={{ maxWidth:150, maxHeight:150, width:'auto', height:'auto', filter:'brightness(0.95) contrast(1.15) saturate(1.3)', opacity:0.95, animation:'sc-breathe 5s ease-in-out infinite' }} />
                </div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'rgba(80,110,90,0.45)', marginBottom:2 }}>01</div>
                <div style={{ fontSize:18, fontWeight:700, color:'rgba(42,54,46,0.85)', whiteSpace:'nowrap', letterSpacing:'0.04em' }}>力量動物</div>
                <div style={{ display:'inline-flex', alignItems:'center', padding:'2px 8px', borderRadius:20, background:'rgba(80,110,90,0.10)', border:'1px solid rgba(80,110,90,0.28)', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.12em', color:'rgba(60,88,68,0.85)', whiteSpace:'nowrap' }}>下部世界</div>
              </div>
              {/* 03 — 七脈輪情緒覺察, terracotta */}
              <div style={{ position:'absolute', left:'calc(540/1100*100%)', bottom:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, cursor:'pointer' }} onClick={() => selectNode('sc03')}>
                <div className="sc-glow-wrap" style={{'--glow-color':'200,100,70'} as React.CSSProperties}>
                  <Image src="/sc/journey/七脈輪情緒覺察-color.png" alt="" aria-hidden width={300} height={300}
                    style={{ height:200, width:'auto', filter:'brightness(0.95) contrast(1.15) saturate(1.3)', opacity:0.95, animation:'sc-breathe 6s ease-in-out infinite' }} />
                </div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'rgba(80,110,90,0.45)', marginBottom:2 }}>03</div>
                <div style={{ fontSize:18, fontWeight:700, color:'rgba(42,54,46,0.85)', whiteSpace:'nowrap', letterSpacing:'0.04em' }}>脈輪情緒覺察</div>
                <div style={{ display:'inline-flex', alignItems:'center', padding:'2px 8px', borderRadius:20, background:'rgba(80,110,90,0.10)', border:'1px solid rgba(80,110,90,0.28)', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.12em', color:'rgba(60,88,68,0.85)', whiteSpace:'nowrap' }}>上部世界</div>
              </div>
              {/* 05 — 內在小孩, purple */}
              <div style={{ position:'absolute', left:'calc(1010/1100*100%)', bottom:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, cursor:'pointer' }} onClick={() => selectNode('sc05')}>
                <div className="sc-glow-wrap" style={{'--glow-color':'160,80,200'} as React.CSSProperties}>
                  <Image src="/sc/journey/內在小孩-color.png" alt="" aria-hidden width={300} height={300}
                    style={{ maxWidth:150, maxHeight:150, width:'auto', height:'auto', filter:'brightness(0.95) contrast(1.15) saturate(1.3)', opacity:0.95, animation:'sc-breathe 7s ease-in-out infinite' }} />
                </div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'rgba(80,110,90,0.45)', marginBottom:2 }}>05</div>
                <div style={{ fontSize:18, fontWeight:700, color:'rgba(42,54,46,0.85)', whiteSpace:'nowrap', letterSpacing:'0.04em' }}>尋找內在小孩</div>
                <div style={{ display:'inline-flex', alignItems:'center', padding:'2px 8px', borderRadius:20, background:'rgba(80,110,90,0.10)', border:'1px solid rgba(80,110,90,0.28)', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.12em', color:'rgba(60,88,68,0.85)', whiteSpace:'nowrap' }}>靈魂碎片團員</div>
              </div>
            </div>

            {/* Row 2 — calligraphy wave + image nodes */}
            <div style={{ position:'relative', width:'100%' }}>
              <Image src="/sc/black/薩滿旅程的線.png" alt="" aria-hidden width={1800} height={320}
                style={{ width:'100%', height:'auto', display:'block',
                  filter:'brightness(0.55)', mixBlendMode:'multiply', opacity:0.45 }} />

              {/* SVG — transparent hit circles only (no drawn circles) */}
              <svg viewBox="0 0 1100 200" style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', overflow:'visible' }}>
                <circle cx="90"   cy="95"  r="30" fill="transparent" onClick={() => selectNode('sc01')} style={{ cursor:'pointer' }}/>
                <circle cx="280"  cy="110" r="30" fill="transparent" onClick={() => selectNode('sc02')} style={{ cursor:'pointer' }}/>
                <circle cx="540"  cy="95"  r="30" fill="transparent" onClick={() => selectNode('sc03')} style={{ cursor:'pointer' }}/>
                <circle cx="800"  cy="110" r="30" fill="transparent" onClick={() => selectNode('sc04')} style={{ cursor:'pointer' }}/>
                <circle cx="1010" cy="95"  r="30" fill="transparent" onClick={() => selectNode('sc05')} style={{ cursor:'pointer' }}/>
              </svg>

              {/* Circle image nodes — absolutely positioned at matching percentages */}
              {/* SC-01: left=~8.2%, top=47.5% — green */}
              <div style={{ position:'absolute', left:'calc(90/1100*100%)', top:'calc(95/200*100%)', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:3 }}>
                <div className="sc-dot-glow" style={{'--glow-color':'70,140,80'} as React.CSSProperties}>
                  <Image src="/resource/single/材質-4-圓圈/黑圈-1.png" alt="" aria-hidden width={80} height={80}
                    style={{ width: activeNode==='sc01' ? 80 : 66, height:'auto', filter:'brightness(0.65)', opacity:0.75, transition:'width 0.2s' }} />
                </div>
              </div>
              {/* SC-02: left=25.45%, top=55% — blue-gray */}
              <div style={{ position:'absolute', left:'calc(280/1100*100%)', top:'calc(110/200*100%)', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:3 }}>
                <div className="sc-dot-glow" style={{'--glow-color':'80,140,210'} as React.CSSProperties}>
                  <Image src="/resource/single/材質-4-圓圈/黑圈-10.png" alt="" aria-hidden width={80} height={80}
                    style={{ width: activeNode==='sc02' ? 80 : 66, height:'auto', filter:'brightness(0.65)', opacity:0.75, transition:'width 0.2s' }} />
                </div>
              </div>
              {/* SC-03: left=49.09%, top=47.5% — terracotta */}
              <div style={{ position:'absolute', left:'calc(540/1100*100%)', top:'calc(95/200*100%)', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:3 }}>
                <div className="sc-dot-glow" style={{'--glow-color':'200,100,70'} as React.CSSProperties}>
                  <Image src="/resource/single/材質-4-圓圈/黑圈-12.png" alt="" aria-hidden width={80} height={80}
                    style={{ width: activeNode==='sc03' ? 80 : 66, height:'auto', filter:'brightness(0.65)', opacity:0.75, transition:'width 0.2s' }} />
                </div>
              </div>
              {/* SC-04: left=72.73%, top=55% — gold */}
              <div style={{ position:'absolute', left:'calc(800/1100*100%)', top:'calc(110/200*100%)', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:3 }}>
                <div className="sc-dot-glow" style={{'--glow-color':'240,200,30'} as React.CSSProperties}>
                  <Image src="/resource/single/材質-4-圓圈/黑圈-18.png" alt="" aria-hidden width={80} height={80}
                    style={{ width: activeNode==='sc04' ? 80 : 66, height:'auto', filter:'brightness(0.65)', opacity:0.75, transition:'width 0.2s' }} />
                </div>
              </div>
              {/* SC-05: left=~91.8%, top=47.5% — purple */}
              <div style={{ position:'absolute', left:'calc(1010/1100*100%)', top:'calc(95/200*100%)', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:3 }}>
                <div className="sc-dot-glow" style={{'--glow-color':'160,80,200'} as React.CSSProperties}>
                  <Image src="/resource/single/材質-4-圓圈/黑圈-24.png" alt="" aria-hidden width={80} height={80}
                    style={{ width: activeNode==='sc05' ? 80 : 66, height:'auto', filter:'brightness(0.65)', opacity:0.75, transition:'width 0.2s' }} />
                </div>
              </div>
            </div>

            {/* Row 3 — below-wave: 02, 04 — title toward wave (top), theme calligraphy image outward (bottom) */}
            <div style={{ position:'relative', height:280, marginTop:12 }}>
              {/* 02 — 指導靈, blue-gray */}
              <div style={{ position:'absolute', left:'calc(280/1100*100%)', top:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, cursor:'pointer' }} onClick={() => selectNode('sc02')}>
                <div style={{ display:'inline-flex', alignItems:'center', padding:'2px 8px', borderRadius:20, background:'rgba(80,110,90,0.10)', border:'1px solid rgba(80,110,90,0.28)', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.12em', color:'rgba(60,88,68,0.85)', whiteSpace:'nowrap' }}>中部世界</div>
                <div style={{ fontSize:18, fontWeight:700, color:'rgba(42,54,46,0.85)', whiteSpace:'nowrap', letterSpacing:'0.04em' }}>指導靈</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'rgba(80,110,90,0.45)', marginTop:2 }}>02</div>
                <div className="sc-glow-wrap" style={{'--glow-color':'80,140,210'} as React.CSSProperties}>
                  <Image src="/sc/journey/指導靈-color.png" alt="" aria-hidden width={250} height={300}
                    style={{ height:200, width:'auto', filter:'brightness(0.95) contrast(1.15) saturate(1.3)', opacity:0.95, animation:'sc-breathe 5.5s ease-in-out infinite' }} />
                </div>
              </div>
              {/* 04 — 高我, gold */}
              <div style={{ position:'absolute', left:'calc(800/1100*100%)', top:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, cursor:'pointer' }} onClick={() => selectNode('sc04')}>
                <div style={{ display:'inline-flex', alignItems:'center', padding:'2px 8px', borderRadius:20, background:'rgba(80,110,90,0.10)', border:'1px solid rgba(80,110,90,0.28)', fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.12em', color:'rgba(60,88,68,0.85)', whiteSpace:'nowrap' }}>整合階段</div>
                <div style={{ fontSize:18, fontWeight:700, color:'rgba(42,54,46,0.85)', whiteSpace:'nowrap', letterSpacing:'0.04em' }}>連結高我</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'rgba(80,110,90,0.45)', marginTop:2 }}>04</div>
                <div className="sc-glow-wrap" style={{'--glow-color':'240,200,30'} as React.CSSProperties}>
                  <Image src="/sc/journey/高我-color.png" alt="" aria-hidden width={250} height={300}
                    style={{ height:200, width:'auto', filter:'brightness(0.95) contrast(1.15) saturate(1.3)', opacity:0.95, animation:'sc-breathe 6.5s ease-in-out infinite' }} />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* bottom wave → SC-01 */}
        <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position:'absolute', bottom:0, left:0, width:'100%', height:80, display:'block', pointerEvents:'none' }}>
          <path d="M0,45 C160,72 380,18 620,52 C860,82 1120,20 1300,46 C1380,56 1420,50 1440,48 L1440,80 L0,80 Z" fill="#E6EDE6" opacity="0.88" />
          <path d="M0,62 C240,42 520,74 780,54 C1020,36 1260,66 1440,60 L1440,80 L0,80 Z" fill="#E6EDE6" opacity="0.45" />
        </svg>
      </section>

      {/* ═══ SC-01 尋找力量動物 ═══ */}
      {/* Theme: 大地 · 土壤 · 原始生命力 — deep earth, amber/sienna */}
      <section id="section-sc01" style={{ padding:'100px 0', background:'#E6EDE6', position:'relative', overflow:'hidden', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 80% at 15% 55%, rgba(50,110,60,0.10) 0%, rgba(40,90,50,0.12) 45%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 15%, rgba(60,120,70,0.12) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* 書法圖 glow */}
        <div aria-hidden style={{ position:'absolute', right:'-5%', top:'50%', transform:'translateY(-50%)', width:'55%', height:'85vh', borderRadius:'50%', background:'radial-gradient(ellipse 70% 90% at 60% 65%, rgba(50,140,70,0.20) 0%, transparent 70%)', pointerEvents:'none', filter:'blur(30px)' }} />
        {/* bottom wave → SC-02 */}
        <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position:'absolute', bottom:0, left:0, width:'100%', height:80, display:'block', pointerEvents:'none' }}>
          <path d="M0,42 C200,72 440,12 700,50 C920,80 1180,16 1360,44 C1410,52 1430,50 1440,49 L1440,80 L0,80 Z" fill="#E4EBF5" opacity="0.88" />
          <path d="M0,58 C280,34 560,72 840,50 C1060,32 1280,64 1440,58 L1440,80 L0,80 Z" fill="#E4EBF5" opacity="0.45" />
        </svg>
        {/* 書法圖 */}
        <Image src="/sc/black/力量動物-直.png" alt="" aria-hidden width={600} height={800}
          style={{ position:'absolute', right:'4%', top:'50%', transform:'translateY(-50%)', height:'clamp(300px,60vh,500px)', width:'auto',
            filter:'sepia(0.3) hue-rotate(80deg) saturate(1.8) brightness(0.72)', mixBlendMode:'multiply', opacity:0.40, pointerEvents:'none' }} />
        {/* 力量動物-橫 secondary layer */}
        <Image src="/sc/black/力量動物-橫.png" alt="" aria-hidden width={900} height={400}
          style={{ position:'absolute', bottom:'-5%', left:'-5%', width:'55%', height:'auto',
            filter:'sepia(0.15) hue-rotate(80deg) saturate(0.8) brightness(0.8)', mixBlendMode:'multiply', opacity:0.05, pointerEvents:'none', transform:'rotate(-8deg) scale(0.75)' }} />
        {/* 獨角獸 — supporting accent, top-left corner */}
        <Image src="/sc/animals/unicorn.png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', left:'5%', top:'8%', width:80, height:'auto',
            filter:'sepia(0.3) hue-rotate(80deg) saturate(1.6) brightness(0.6)', mixBlendMode:'multiply', opacity:0.20, pointerEvents:'none', animation:'sc-breathe 7s ease-in-out infinite' }} />
        <div className="sc-section-grid" style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div className="sc-text-col">

            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#1A3020', marginBottom:10 }}>尋找力量動物</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:15, letterSpacing:'0.22em', color:'#2E5030', opacity:0.9, marginBottom:28, textTransform:'uppercase' }}>Power Animal · Workshop</p>
            <div className="sc-content-block">
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(18,40,22,0.88)', marginBottom:32, maxWidth:480 }}>
              透過頌缽波頻為你的身體進行「接地（Grounding）」，讓腦波在安全的共振中進入深度放鬆。在這樣的狀態下進入薩滿旅程，你將能精準地與你的力量動物相遇——祂是你靈魂最原始的盟友，代表著你與生俱來的特質與守護力量。<br /><br />
              這不僅是一次連結，更教導你如何在日常抉擇、焦慮或失落時，隨時回到內在中心，與你的力量動物並肩航行。
            </p>
            {openDetail === 'sc01' && (
              <div style={{ marginTop:20, background:'rgba(255,255,255,0.82)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderRadius:20, padding:'24px 28px', boxShadow:'0 4px 32px rgba(0,0,0,0.07)', border:'1px solid rgba(255,255,255,0.7)' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#2E5030', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>核心學習</span>
                  <span style={{ color:'rgba(18,40,22,0.85)', lineHeight:1.75 }}>連結下部世界守護盟友、海底輪頌缽接地</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#2E5030', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程形式</span>
                  <span style={{ color:'rgba(18,40,22,0.85)', lineHeight:1.75 }}>一對一 · 兩人團班 · 2-6人小組</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#2E5030', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程時長</span>
                  <span style={{ color:'rgba(18,40,22,0.85)', lineHeight:1.75 }}>4 小時</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#2E5030', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>銜接建議</span>
                  <span style={{ color:'rgba(18,40,22,0.85)', lineHeight:1.75 }}>進入所有進階課程的基石，建議首選</span>
                </div>
                </div>
                <div style={{ display:'flex', alignItems:'baseline', gap:12, padding:'12px 16px', background:'rgba(92,58,20,0.07)', borderRadius:12 }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.15em', color:'#2E5030', opacity:0.75, flexShrink:0 }}>INVESTMENT</span>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', color:'rgba(18,40,22,0.85)', lineHeight:1.8 }}>一對一 NT. 60,000　·　兩人 NT. 30,000/人　·　小組 NT. 15,000/人</div>
                </div>
              </div>
            )}
            <button onClick={() => setOpenDetail(openDetail === 'sc01' ? null : 'sc01')}
              style={{ marginTop:16, display:'inline-flex', alignItems:'center', gap:8, background:'none', border:'none', cursor:'pointer', padding:'6px 0', fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.20em', color:'#2E5030', opacity:0.6 }}>
              {openDetail === 'sc01' ? '收起' : '探索課程細節'} <span style={{ fontSize:'clamp(13px, 1.2vw, 15px)', transition:'transform 0.3s', display:'inline-block', transform: openDetail === 'sc01' ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </button>
            </div>
          </div>
          <div className="sc-image-col" style={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center', minHeight:400 }}>
            <div style={{ position:'relative' }}>
              <Image src="/sc/journey/龍-color.png" alt="" aria-hidden width={420} height={420}
                style={{ width:'min(320px,80%)', height:'auto', filter:'brightness(0.95) contrast(1.15) saturate(1.3)', opacity:0.95, animation:'sc-breathe 5s ease-in-out infinite' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SC-02 連結高維指導靈 ═══ */}
      {/* Theme: 夜空 · 月光 · 高維頻道 — near-black with cool silver-pearl */}
      <section id="section-sc02" style={{ padding:'100px 0', background:'#E4EBF5', position:'relative', overflow:'hidden', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        {/* C-form glow — top-left arc, left spine, bottom-left arc; opening faces right */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 40% 28% at 0% 8%, rgba(40,80,180,0.30) 0%, transparent 100%), radial-gradient(ellipse 20% 60% at 0% 50%, rgba(40,80,180,0.22) 0%, transparent 100%), radial-gradient(ellipse 40% 28% at 0% 92%, rgba(40,80,180,0.28) 0%, transparent 100%)', pointerEvents:'none' }} />
        {/* text-zone lift — brightens the right column where content sits */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 55% 70% at 78% 50%, rgba(30,55,120,0.14) 0%, transparent 70%)', pointerEvents:'none' }} />
        {/* bottom wave → SC-03 */}
        <svg aria-hidden viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position:'absolute', bottom:0, left:0, width:'100%', height:120, display:'block', pointerEvents:'none' }}>
          <path d="M0,68 C200,104 460,32 720,74 C960,112 1200,36 1440,70 L1440,120 L0,120 Z" fill="#F5E2D4" opacity="0.88" />
          <path d="M0,88 C300,58 620,108 920,76 C1140,54 1320,94 1440,86 L1440,120 L0,120 Z" fill="#F5E2D4" opacity="0.48" />
          <path d="M0,104 C360,82 720,118 1080,96 C1260,86 1380,108 1440,105 L1440,120 L0,120 Z" fill="#F5E2D4" opacity="0.22" />
        </svg>
        {/* 書法圖 */}
        <Image src="/sc/black/指導靈.png" alt="" aria-hidden width={600} height={700}
          className="sc-section-bg-calligraphy"
          style={{ position:'absolute', left:'calc(10vw + max(0px, (100vw - 1200px) / 2))', top:'50%', transform:'translateY(-50%)', height:'clamp(300px,60vh,500px)', width:'auto',
            filter:'sepia(0.3) hue-rotate(195deg) saturate(1.6) brightness(0.70)', mixBlendMode:'multiply', opacity:0.44, pointerEvents:'none' }} />
        {/* 薩滿巫 secondary */}
        <Image src="/sc/black/薩滿巫.png" alt="" aria-hidden width={500} height={600}
          className="sc-section-deco"
          style={{ position:'absolute', right:'5%', bottom:'-10%', width:'28%', height:'auto',
            filter:'sepia(0.1) brightness(0.8)', mixBlendMode:'multiply', opacity:0.04, pointerEvents:'none', transform:'rotate(6deg) scale(0.8)' }} />
        {/* 鶴 — small, bottom-right (away from left calligraphy) */}
        <Image src="/sc/animals/鶴.png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', right:'7%', bottom:'10%', width:90, height:'auto',
            filter:'sepia(0.25) saturate(1.6) brightness(0.6)', mixBlendMode:'multiply', opacity:0.22, pointerEvents:'none', animation:'sc-breathe 6s ease-in-out infinite' }} />
        <div className="sc-section-grid" style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div className="sc-text-col" style={{ order:2 }}>

            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#0E1E34', marginBottom:10 }}>連結高維指導靈</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:15, letterSpacing:'0.22em', color:'#1A3050', opacity:0.9, marginBottom:28, textTransform:'uppercase' }}>Spirit Guide</p>
            <div className="sc-content-block">
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(15,28,50,0.88)', marginBottom:32, maxWidth:480 }}>
              不同於守護與行動力的力量動物，指導靈是純粹的光與愛，是具備高度智慧的靈魂導師。祂們持有你的生命藍圖，能在你面臨人生十字路口時，提供超越小我視角的宏觀指引。<br /><br />
              課程中將建立嚴謹的辨識機制——在宇宙中，愛的能量是無法偽造的——協助你學會區分大腦雜訊與來自高維的真實訊息。
            </p>
            {openDetail === 'sc02' && (
              <div style={{ marginTop:20, background:'rgba(255,255,255,0.82)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderRadius:20, padding:'24px 28px', boxShadow:'0 4px 32px rgba(0,0,0,0.07)', border:'1px solid rgba(255,255,255,0.7)' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#1A3050', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>核心學習</span>
                  <span style={{ color:'rgba(15,28,50,0.85)', lineHeight:1.75 }}>開啟上部世界通訊頻道、辨識愛的能量訊息</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#1A3050', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程形式</span>
                  <span style={{ color:'rgba(15,28,50,0.85)', lineHeight:1.75 }}>一對一 · 兩人團班</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#1A3050', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程時長</span>
                  <span style={{ color:'rgba(15,28,50,0.85)', lineHeight:1.75 }}>2 – 3.5 小時</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#1A3050', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>銜接建議</span>
                  <span style={{ color:'rgba(15,28,50,0.85)', lineHeight:1.75 }}>強化日常生命抉擇的導航力，建議完成力量動物課程後進行</span>
                </div>
                </div>
                <div style={{ display:'flex', alignItems:'baseline', gap:12, padding:'12px 16px', background:'rgba(26,48,80,0.06)', borderRadius:12 }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.15em', color:'#1A3050', opacity:0.75, flexShrink:0 }}>INVESTMENT</span>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', color:'rgba(15,28,50,0.85)', lineHeight:1.8 }}>一對一 NT. 20,000　·　兩人 NT. 10,000/人</div>
                </div>
              </div>
            )}
            <button onClick={() => setOpenDetail(openDetail === 'sc02' ? null : 'sc02')}
              style={{ marginTop:16, display:'inline-flex', alignItems:'center', gap:8, background:'none', border:'none', cursor:'pointer', padding:'6px 0', fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.20em', color:'#1A3050', opacity:0.6 }}>
              {openDetail === 'sc02' ? '收起' : '探索課程細節'} <span style={{ fontSize:'clamp(13px, 1.2vw, 15px)', transition:'transform 0.3s', display:'inline-block', transform: openDetail === 'sc02' ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </button>
            </div>
          </div>
          <div className="sc-image-col hidden md:block" />
        </div>
      </section>

      {/* ═══ SC-03 七脈輪情緒覺察 ═══ */}
      {/* Theme: 身體 · 情緒 · 流動感 — deep warm terracotta, body warmth */}
      <section id="section-sc03" style={{ padding:'100px 0', background:'#F5E2D4', position:'relative', overflow:'hidden', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 65% 75% at 10% 50%, rgba(140,60,25,0.1) 0%, rgba(140,75,40,0.12) 50%, transparent 70%), radial-gradient(ellipse 45% 55% at 90% 20%, rgba(160,85,50,0.15) 0%, transparent 60%)', pointerEvents:'none' }} />
        {/* 書法圖 glow */}
        <div aria-hidden style={{ position:'absolute', right:'-5%', top:'50%', transform:'translateY(-50%)', width:'55%', height:'85vh', borderRadius:'50%', background:'radial-gradient(ellipse 70% 90% at 60% 60%, rgba(190,90,40,0.24) 0%, transparent 70%)', pointerEvents:'none', filter:'blur(30px)' }} />
        {/* bottom wave → SC-04 */}
        <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position:'absolute', bottom:0, left:0, width:'100%', height:80, display:'block', pointerEvents:'none' }}>
          <path d="M0,38 C220,70 480,10 740,48 C980,80 1220,18 1420,42 C1430,44 1436,44 1440,44 L1440,80 L0,80 Z" fill="#FFF8CC" opacity="0.88" />
          <path d="M0,54 C300,30 600,70 880,48 C1100,30 1300,62 1440,55 L1440,80 L0,80 Z" fill="#FFF8CC" opacity="0.45" />
        </svg>
        {/* 書法圖 */}
        <Image src="/sc/black/七脈輪情緒覺察.png" alt="" aria-hidden width={600} height={700}
          className="sc-section-bg-calligraphy"
          style={{ position:'absolute', right:'calc(10vw + max(0px, (100vw - 1200px) / 2))', top:'50%', transform:'translateY(-50%)', height:'clamp(300px,60vh,500px)', width:'auto',
            filter:'sepia(0.5) hue-rotate(340deg) saturate(1.8) brightness(0.72)', mixBlendMode:'multiply', opacity:0.38, pointerEvents:'none' }} />
        {/* 擬態章魚 — small, top-left (away from right calligraphy) */}
        <Image src="/sc/animals/擬態章魚.png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', left:'7%', top:'10%', width:90, height:'auto',
            filter:'sepia(0.6) hue-rotate(340deg) saturate(1.7) brightness(0.6)', mixBlendMode:'multiply', opacity:0.22, pointerEvents:'none', animation:'sc-breathe 7s ease-in-out infinite' }} />
        <div className="sc-section-grid" style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div className="sc-text-col">

            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#3C1A08', marginBottom:10 }}>七脈輪情緒覺察</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:15, letterSpacing:'0.22em', color:'#6A3018', opacity:0.9, marginBottom:28, textTransform:'uppercase' }}>Chakra &amp; Emotion · Awareness</p>
            <div className="sc-content-block">
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(50,18,8,0.88)', marginBottom:32, maxWidth:480 }}>
              七脈輪是情緒的儲存槽。透過薩滿冥想，我們引領你親自進入脈輪空間，覺察那些被身體凍結的感受。透過「看見」與「表達」，協助能量重新流動，找回情緒的主控權。<br /><br />
              這不是理論課，而是一場深度內在實作——拒絕空談，直接透過薩滿冥想進入潛意識，與真實的情緒感受正面相遇。
            </p>
            {openDetail === 'sc03' && (
              <div style={{ marginTop:20, background:'rgba(255,255,255,0.82)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderRadius:20, padding:'24px 28px', boxShadow:'0 4px 32px rgba(0,0,0,0.07)', border:'1px solid rgba(255,255,255,0.7)' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#6A3018', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>核心學習</span>
                  <span style={{ color:'rgba(50,18,8,0.85)', lineHeight:1.75 }}>薩滿冥想實作脈輪內視、情緒轉化與能量清理</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#6A3018', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程形式</span>
                  <span style={{ color:'rgba(50,18,8,0.85)', lineHeight:1.75 }}>一對一</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#6A3018', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程時長</span>
                  <span style={{ color:'rgba(50,18,8,0.85)', lineHeight:1.75 }}>2 小時</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#6A3018', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>銜接建議</span>
                  <span style={{ color:'rgba(50,18,8,0.85)', lineHeight:1.75 }}>適合感官敏銳、欲修復情緒慣性的探索者</span>
                </div>
                </div>
                <div style={{ display:'flex', alignItems:'baseline', gap:12, padding:'12px 16px', background:'rgba(106,48,24,0.07)', borderRadius:12 }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.15em', color:'#6A3018', opacity:0.75, flexShrink:0 }}>INVESTMENT</span>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', color:'rgba(50,18,8,0.85)', lineHeight:1.8 }}>一對一 NT. 15,000</div>
                </div>
              </div>
            )}
            <button onClick={() => setOpenDetail(openDetail === 'sc03' ? null : 'sc03')}
              style={{ marginTop:16, display:'inline-flex', alignItems:'center', gap:8, background:'none', border:'none', cursor:'pointer', padding:'6px 0', fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.20em', color:'#6A3018', opacity:0.6 }}>
              {openDetail === 'sc03' ? '收起' : '探索課程細節'} <span style={{ fontSize:'clamp(13px, 1.2vw, 15px)', transition:'transform 0.3s', display:'inline-block', transform: openDetail === 'sc03' ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </button>
            </div>
          </div>
          <div className="sc-image-col hidden md:block" />
        </div>
      </section>

      {/* ═══ SC-04 連結高我 ═══ */}
      {/* Theme: 神聖 · 金光 · 靈魂主權 — near-black with sacred gold */}
      <section id="section-sc04" style={{ padding:'100px 0', background:'#FFF8CC', position:'relative', overflow:'hidden', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 70% at 80% 40%, rgba(255,210,30,0.12) 0%, rgba(240,195,20,0.08) 50%, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 70%, rgba(255,215,20,0.10) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* 書法圖 glow */}
        <div aria-hidden style={{ position:'absolute', left:'-5%', top:'50%', transform:'translateY(-50%)', width:'55%', height:'85vh', borderRadius:'50%', background:'radial-gradient(ellipse 70% 90% at 40% 60%, rgba(255,210,20,0.28) 0%, transparent 70%)', pointerEvents:'none', filter:'blur(30px)' }} />
        {/* bottom wave → SC-05 */}
        <svg aria-hidden viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position:'absolute', bottom:0, left:0, width:'100%', height:120, display:'block', pointerEvents:'none' }}>
          <path d="M0,64 C180,100 420,24 700,68 C960,108 1200,28 1440,66 L1440,120 L0,120 Z" fill="#E4D8F5" opacity="0.88" />
          <path d="M0,84 C320,56 660,106 960,72 C1160,50 1320,90 1440,82 L1440,120 L0,120 Z" fill="#E4D8F5" opacity="0.48" />
          <path d="M0,102 C400,80 800,118 1120,96 C1280,86 1380,108 1440,104 L1440,120 L0,120 Z" fill="#E4D8F5" opacity="0.22" />
        </svg>
        {/* 書法圖 */}
        <Image src="/sc/black/高我.png" alt="" aria-hidden width={600} height={700}
          className="sc-section-bg-calligraphy"
          style={{ position:'absolute', left:'calc(10vw + max(0px, (100vw - 1200px) / 2))', top:'50%', transform:'translateY(-50%)', height:'clamp(300px,60vh,500px)', width:'auto',
            filter:'sepia(0.35) hue-rotate(20deg) saturate(2.0) brightness(0.72)', mixBlendMode:'multiply', opacity:0.42, pointerEvents:'none' }} />
        {/* 獨角獸 — small, bottom-right (away from left calligraphy) */}
        <Image src="/sc/animals/unicorn.png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', right:'7%', bottom:'10%', width:90, height:'auto',
            filter:'sepia(0.35) hue-rotate(20deg) saturate(2.0) brightness(0.6)', mixBlendMode:'multiply', opacity:0.22, pointerEvents:'none', animation:'sc-breathe 9s ease-in-out infinite' }} />
        <div className="sc-section-grid" style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div className="sc-text-col" style={{ order:2 }}>

            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#2A2600', marginBottom:10 }}>連結高我</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:15, letterSpacing:'0.22em', color:'#4A4200', opacity:0.9, marginBottom:28, textTransform:'uppercase' }}>Higher Self</p>
            <div className="sc-content-block">
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(38,36,0,0.88)', marginBottom:24, maxWidth:480 }}>
              高我是你靈魂最純粹、最神聖的面向，持有你此生的生命藍圖。透過這門課，你將在身體高度通透的狀態下，正式接通內在的神聖源頭，完成身心靈合一的全面對齊，找回真正的靈魂主權。
            </p>
            <div style={{ marginBottom:28, padding:'14px 18px', background:'rgba(106,48,24,0.06)', border:'1px solid rgba(106,48,24,0.2)', fontSize:'clamp(13px, 1.2vw, 15px)', lineHeight:1.8, color:'rgba(50,18,8,0.85)' }}>
              <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.15em', color:'#A07800', opacity:0.85, display:'block', marginBottom:6 }}>前置課程 · PREREQUISITE</span>
              本課程建議在參與<strong style={{ color:'rgba(38,36,0,0.9)', fontWeight:600 }}>雅妃老師的重生呼吸課</strong>後進行，讓身體通透感轉化為與高我對話的導航能力。
            </div>
            {openDetail === 'sc04' && (
              <div style={{ marginTop:20, background:'rgba(255,255,255,0.82)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderRadius:20, padding:'24px 28px', boxShadow:'0 4px 32px rgba(0,0,0,0.07)', border:'1px solid rgba(255,255,255,0.7)' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A4200', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>核心學習</span>
                  <span style={{ color:'rgba(38,36,0,0.85)', lineHeight:1.75 }}>接通神聖名諱，完成身心靈合一的終極對齊</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A4200', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程形式</span>
                  <span style={{ color:'rgba(38,36,0,0.85)', lineHeight:1.75 }}>一對一</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A4200', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程時長</span>
                  <span style={{ color:'rgba(38,36,0,0.85)', lineHeight:1.75 }}>1 小時</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A4200', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>銜接建議</span>
                  <span style={{ color:'rgba(38,36,0,0.85)', lineHeight:1.75 }}>建議先完成力量動物、指導靈課程，並完成重生呼吸課後進行</span>
                </div>
                </div>
                <div style={{ display:'flex', alignItems:'baseline', gap:12, padding:'12px 16px', background:'rgba(90,62,8,0.07)', borderRadius:12 }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.15em', color:'#4A4200', opacity:0.75, flexShrink:0 }}>INVESTMENT</span>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', color:'rgba(38,36,0,0.85)', lineHeight:1.8 }}>一對一 NT. 8,000</div>
                </div>
              </div>
            )}
            <button onClick={() => setOpenDetail(openDetail === 'sc04' ? null : 'sc04')}
              style={{ marginTop:16, display:'inline-flex', alignItems:'center', gap:8, background:'none', border:'none', cursor:'pointer', padding:'6px 0', fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.20em', color:'#4A4200', opacity:0.6 }}>
              {openDetail === 'sc04' ? '收起' : '探索課程細節'} <span style={{ fontSize:'clamp(13px, 1.2vw, 15px)', transition:'transform 0.3s', display:'inline-block', transform: openDetail === 'sc04' ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </button>
            </div>
          </div>
          <div className="sc-image-col hidden md:block" />
        </div>
      </section>

      {/* ═══ SC-05 尋找內在小孩 ═══ */}
      {/* Theme: 療癒 · 柔韌 · 重新歸位 — deep plum with soft violet warmth */}
      <section id="section-sc05" style={{ padding:'100px 0', background:'#E4D8F5', position:'relative', overflow:'hidden', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 80% at 15% 50%, rgba(90,30,140,0.18) 0%, rgba(120,50,160,0.12) 50%, transparent 70%), radial-gradient(ellipse 50% 60% at 90% 25%, rgba(140,60,180,0.20) 0%, transparent 60%)', pointerEvents:'none' }} />
        {/* 書法圖 glow */}
        <div aria-hidden style={{ position:'absolute', right:'-5%', top:'50%', transform:'translateY(-50%)', width:'60%', height:'90vh', borderRadius:'50%', background:'radial-gradient(ellipse 75% 90% at 60% 48%, rgba(100,20,180,0.42) 0%, transparent 68%)', pointerEvents:'none', filter:'blur(28px)' }} />
        {/* 水豚 — small accent, top-left corner */}
        <Image src="/sc/animals/水豚.png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', left:'6%', top:'12%', width:80, height:'auto',
            filter:'sepia(0.45) hue-rotate(270deg) saturate(1.6) brightness(0.6)', mixBlendMode:'multiply', opacity:0.20, pointerEvents:'none', animation:'sc-breathe 6s ease-in-out infinite' }} />
        <div className="sc-section-grid" style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div className="sc-text-col">

            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#2A0840', marginBottom:10 }}>尋找內在小孩</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:15, letterSpacing:'0.22em', color:'#4A1560', opacity:0.9, marginBottom:28, textTransform:'uppercase' }}>Inner Child · Soul Retrieval</p>
            <div className="sc-content-block">
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(35,10,48,0.88)', marginBottom:32, maxWidth:480 }}>
              當個體遭遇超載的創傷，大腦會啟動保護機制，將受傷的意識片段解離並封存——這些被凍結的自我，即是「內在小孩」。<br /><br />
              我們不採取暴力挖掘，而是透過高我與指導靈的導航，辨識那些被凍結在生命角落的「身心過敏原」。以現在的成熟意識進行跨時空的連結，讓因保護而遺落的碎片重新歸位。
            </p>
            {openDetail === 'sc05' && (
              <div style={{ marginTop:20, background:'rgba(255,255,255,0.82)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderRadius:20, padding:'24px 28px', boxShadow:'0 4px 32px rgba(0,0,0,0.07)', border:'1px solid rgba(255,255,255,0.7)' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A1560', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>核心學習</span>
                  <span style={{ color:'rgba(35,10,48,0.85)', lineHeight:1.75 }}>辨識身心過敏原，找回解離的靈魂片段</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A1560', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程形式</span>
                  <span style={{ color:'rgba(35,10,48,0.85)', lineHeight:1.75 }}>一對一深度工作</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A1560', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>課程時長</span>
                  <span style={{ color:'rgba(35,10,48,0.85)', lineHeight:1.75 }}>3 小時</span>
                </div>
                <div style={{ display:'flex', gap:14, fontSize:'clamp(13px, 1.2vw, 15px)', paddingBottom:10, borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.14em', color:'#4A1560', opacity:0.75, flexShrink:0, width:76, paddingTop:2 }}>銜接建議</span>
                  <span style={{ color:'rgba(35,10,48,0.85)', lineHeight:1.75 }}>建議具備豐富薩滿實踐經驗，完成前四堂課程後進行</span>
                </div>
                </div>
                <div style={{ display:'flex', alignItems:'baseline', gap:12, padding:'12px 16px', background:'rgba(74,21,96,0.07)', borderRadius:12 }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.15em', color:'#4A1560', opacity:0.75, flexShrink:0 }}>INVESTMENT</span>
                  <div style={{ fontSize:'clamp(13px, 1.2vw, 15px)', color:'rgba(35,10,48,0.85)', lineHeight:1.8 }}>一對一 NT. 45,000</div>
                </div>
              </div>
            )}
            <button onClick={() => setOpenDetail(openDetail === 'sc05' ? null : 'sc05')}
              style={{ marginTop:16, display:'inline-flex', alignItems:'center', gap:8, background:'none', border:'none', cursor:'pointer', padding:'6px 0', fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.20em', color:'#4A1560', opacity:0.6 }}>
              {openDetail === 'sc05' ? '收起' : '探索課程細節'} <span style={{ fontSize:'clamp(13px, 1.2vw, 15px)', transition:'transform 0.3s', display:'inline-block', transform: openDetail === 'sc05' ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </button>
            </div>
          </div>
          <div className="sc-image-col" style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-end', gap:20, minHeight:400, position:'relative' }}>
            {/* 內在小孩 — left of pair */}
            <Image src="/sc/black/內在小孩.png" alt="" aria-hidden width={600} height={700}
              style={{ height:'clamp(260px,44vh,400px)', width:'auto',
                filter:'sepia(0.5) hue-rotate(270deg) saturate(2.2) brightness(0.65)', mixBlendMode:'multiply', opacity:0.75, animation:'sc-breathe 5s ease-in-out infinite' }} />
            {/* 內在小孩-拿心 — right of pair, slightly shorter for visual rhythm */}
            <Image src="/sc/black/內在小孩-拿心.png" alt="" aria-hidden width={400} height={500}
              style={{ height:'clamp(220px,38vh,340px)', width:'auto',
                filter:'sepia(0.5) hue-rotate(270deg) saturate(2.2) brightness(0.65)', mixBlendMode:'multiply', opacity:0.75, animation:'sc-breathe 7s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ═══ 推薦整合搭配 ═══ */}
      <section style={{ padding:'80px 0 100px', background:'#C8D8E4', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(180,210,220,0.45) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2 }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <h2 className="tr-d2" style={{ fontSize:'clamp(24px,3.5vw,42px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#1E3848', marginBottom:12 }}>
              推薦整合搭配
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:600, fontSize:14, letterSpacing:'0.24em', color:'rgba(42,70,90,0.82)', marginBottom:0 }}>
              Complete Your Journey
            </p>
          </div>

          {/* Cards */}
          <div className="sc-reco-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
            {[
              { title:'深層系統對齊', desc:'薩滿打開靈魂的通道，深層對齊讓覺醒的能量落地。從靈性到現實的完整轉化路徑。', href:'/hl', img:'/hl/頌缽波動-黑.png', imgBg:'rgba(176,100,100,0.12)', linkColor:'#8A4040' },
              { title:'靈性頌缽音流', desc:'薩滿旅程後的能量場需要沉澱。頌缽頻率加速整合，讓新的意識狀態滲透進身體。', href:'/qi-sb', img:'/qi-sb/頌缽.png', imgBg:'rgba(60,110,120,0.12)', linkColor:'#2E6A78' },
            ].map(card => (
              <div key={card.title} className="sc-reco-card" style={{ display:'flex', flexDirection:'row', background:'rgba(255,255,255,0.75)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', borderRadius:24, overflow:'hidden', boxShadow:'0 4px 28px rgba(30,60,80,0.08)', transition:'box-shadow 0.3s' }}>
                <div className="sc-reco-card-text" style={{ flex:'0 0 60%', padding:'32px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <div>
                    <div className="tr-d2" style={{ fontSize:20, color:'#1E3848', marginBottom:12 }}>{card.title}</div>
                    <p style={{ fontSize:'clamp(13px, 1.2vw, 15px)', lineHeight:1.85, color:'rgba(30,56,72,0.82)', marginBottom:20 }}>{card.desc}</p>
                  </div>
                  <Link href={card.href} style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--f-mono)', fontSize:'clamp(13px, 1.2vw, 15px)', letterSpacing:'0.18em', color:card.linkColor, textDecoration:'none', opacity:0.85 }}>
                    了解更多 →
                  </Link>
                </div>
                <div className="sc-reco-card-img" style={{ flex:'0 0 40%', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 20px', background:card.imgBg, borderRadius:'0 24px 24px 0' }}>
                  <Image src={card.img} alt="" aria-hidden width={300} height={300} style={{ width:'100%', height:'auto', objectFit:'contain', opacity:0.45, maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)', WebkitMaskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)' }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ minHeight:'100svh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(60px,8vh,100px) clamp(24px,8vw,120px)', background:'linear-gradient(155deg, #2B4A5E 0%, #355A6A 45%, #3A5060 100%)', position:'relative', overflow:'hidden', textAlign:'center' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(94,142,138,0.22) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(74,107,138,0.18) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* Atmospheric bg calligraphy */}
        <Image src="/sc/black/薩滿冥想-橫.png" alt="" aria-hidden width={900} height={300}
          style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'100%', height:'auto', filter:'invert(1) brightness(1.0)', mixBlendMode:'screen', opacity:0.12, pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:2, display:'inline-block', padding:'clamp(36px,5vh,56px) clamp(40px,6vw,80px)', background:'rgba(255,255,255,0.12)', backdropFilter:'blur(3px)', WebkitBackdropFilter:'blur(3px)', borderRadius:24 }}>
          <h2 className="tr-d2" style={{ fontSize:'clamp(24px,3.8vw,52px)', color:'#F2EFEA', letterSpacing:'0.03em', lineHeight:1.2, marginBottom:16 }}>
            準備好開始你的薩滿旅程了嗎？
          </h2>
          <p style={{ fontFamily:'var(--f-elegant)', fontStyle:'italic', fontSize:'clamp(14px,1.4vw,18px)', color:'rgba(180,215,220,1)', marginBottom:48, lineHeight:1.8 }}>
            每一個靈魂都有它的路，讓我們一起找到你的。
          </p>
          <Link href="/contact" className="sc-cta-btn">
            預約探索諮詢 &nbsp;·&nbsp; BOOK A SESSION
          </Link>
        </div>
      </section>
    </>
  )
}
