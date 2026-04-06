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

  function toggleDetail(id: string) {
    setOpenDetail(prev => (prev === id ? null : id))
  }

  const nodeZoneMap: Record<string, string> = {
    sc01: 'zone-awakening',
    sc02: 'zone-awakening',
    sc03: 'zone-awakening',
    sc04: 'zone-integration',
    sc05: 'zone-integration',
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
      <style>{`
        @keyframes ripple-out {
          0%   { width:0; height:0; top:50%; left:50%; opacity:0.6; transform:translate(-50%,-50%); }
          100% { width:400px; height:400px; top:50%; left:50%; opacity:0; transform:translate(-50%,-50%); }
        }
        .sc-ripple { position:absolute; border-radius:50%; border:1px solid rgba(123,107,158,0.15); animation:ripple-out 8s ease-out infinite; }
        .sc-ripple:nth-child(2) { animation-delay:2s; }
        .sc-ripple:nth-child(3) { animation-delay:4s; }
        @keyframes sc-float {
          0%,100% { transform:translateX(-50%) translateY(0); }
          50%      { transform:translateX(-50%) translateY(8px); }
        }
        @keyframes sc-breathe {
          0%,100% { transform:scale(1); }
          50%      { transform:scale(1.03) translateY(-6px); }
        }
        @keyframes sc-pulse-sun {
          0%,100% { transform:scale(1) rotate(0deg); }
          50%      { transform:scale(1.08) rotate(5deg); }
        }

        /* ── Brush-stroke card border ── */
        .sc-card-brush { position:relative; }
        .sc-card-brush::before {
          content:''; position:absolute; inset:0;
          border:1.5px solid rgba(123,107,158,0.18);
          pointer-events:none;
          filter:url(#sc-brush-box);
          z-index:1;
        }
        .sc-card-brush:hover::before { border-color:rgba(123,107,158,0.42); }

        .sc-card-lower::before  { border-color:rgba(196,120,74,0.22); }
        .sc-card-lower:hover::before  { border-color:rgba(196,120,74,0.5); }
        .sc-card-middle::before { border-color:rgba(94,142,138,0.22); }
        .sc-card-middle:hover::before { border-color:rgba(94,142,138,0.5); }

        /* ── Integration step card ── */
        .sc-if-card { position:relative; }
        .sc-if-card::before {
          content:''; position:absolute; inset:0;
          border:1.5px solid rgba(123,107,158,0.18);
          pointer-events:none;
          filter:url(#sc-brush-box);
          z-index:1;
        }
        .sc-if-card:hover::before { border-color:rgba(123,107,158,0.42); }
        .sc-if-card-orange::before { border-color:rgba(196,120,74,0.22); }
        .sc-if-card-orange:hover::before { border-color:rgba(196,120,74,0.5); }

        /* ── CTA button brush ── */
        .sc-cta-btn {
          position:relative; overflow:hidden;
          display:inline-flex; align-items:center; gap:12px;
          padding:16px 40px;
          background:rgba(123,107,158,0.12);
          color:#F2EFEA;
          font-family:var(--f-display); font-weight:300; font-size:13px; letter-spacing:0.25em;
          text-decoration:none; cursor:pointer;
          transition:all 0.35s;
        }
        .sc-cta-btn::before {
          content:''; position:absolute; inset:0;
          border:1px solid rgba(123,107,158,0.45);
          filter:url(#sc-brush-box);
          pointer-events:none;
        }
        .sc-cta-btn::after {
          content:''; position:absolute; inset:0;
          background:rgba(123,107,158,0.15);
          transform:scaleX(0); transform-origin:left;
          transition:transform 0.4s ease;
          pointer-events:none;
        }
        .sc-cta-btn:hover::after { transform:scaleX(1); }
        .sc-cta-btn:hover::before { border-color:rgba(169,155,196,0.7); }
      `}</style>

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
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', background:'#1a1520' }}>
        {/* Purple wash */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 80% at 25% 50%, rgba(78,63,110,0.85) 0%, rgba(26,21,32,0.95) 65%)', pointerEvents:'none' }} />

        {/* Calligraphy image */}
        <Image
          src="/sc/hero-bg-calligraphy.png"
          alt=""
          aria-hidden
          width={900}
          height={1100}
          style={{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-50%)', height:'110vh', width:'auto', filter:'invert(1) sepia(1) saturate(0.3) hue-rotate(250deg) brightness(1.1)', mixBlendMode:'screen', opacity:0.55, pointerEvents:'none' }}
        />

        {/* Ripple rings */}
        <div style={{ position:'absolute', left:'30%', top:'50%', pointerEvents:'none' }}>
          <div className="sc-ripple" />
          <div className="sc-ripple" />
          <div className="sc-ripple" />
        </div>

        <div style={{ position:'relative', zIndex:2, textAlign:'left', padding:'0 6vw', maxWidth:700, marginRight:'auto' }}>
          <h1 className="tr-d2" style={{ fontSize:'clamp(38px,6vw,72px)', lineHeight:1.1, letterSpacing:'0.02em', color:'#F2EFEA', marginBottom:16 }}>
            靈魂最原始<br />的力量
          </h1>
          <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:'clamp(13px,1.4vw,16px)', letterSpacing:'0.32em', color:'#A99BC4', marginBottom:20, opacity:0.75, textTransform:'uppercase' }}>
            Shamanic Soul Awakening
          </p>
          <p style={{ fontFamily:'var(--f-elegant)', fontStyle:'italic', fontWeight:700, fontSize:'clamp(16px,2.2vw,22px)', color:'#A99BC4', letterSpacing:'0.04em', marginBottom:20, lineHeight:1.6 }}>
            透過古老智慧，連結靈魂最原始的力量
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute', bottom:36, left:'50%', display:'flex', flexDirection:'column', alignItems:'center', gap:8, opacity:0.4, animation:'sc-float 2.5s ease-in-out infinite' }}>
          <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'#A99BC4' }}>SCROLL</span>
          <div style={{ width:1, height:40, background:'linear-gradient(to bottom, #A99BC4, transparent)' }} />
        </div>
      </section>

      {/* ═══ 薩滿介紹 ═══ */}
      <section style={{ background:'#16111e', padding:'120px 0 80px', position:'relative', overflow:'hidden' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#A99BC4', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              WHAT IS SHAMANISM
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              薩滿，<br />最古老的療癒智慧
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#A99BC4', marginBottom:24, opacity:0.8 }}>
              The Oldest Healing Wisdom
            </p>
            <p style={{ fontSize:14, lineHeight:1.9, color:'rgba(242,239,234,0.65)', maxWidth:440 }}>
              薩滿不是宗教，是一種與自然、靈性世界深度連結的古老修行。<br /><br />
              透過意識的轉移，薩滿者在三個世界之間旅行，帶回療癒與靈性指引。<br /><br />
              薩滿靈魂覺醒，是找回你與生俱來的完整性。
            </p>
          </div>
          {/* Intro images */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:300, position:'relative' }}>
            <Image
              src="/sc/intro-cat.png"
              alt=""
              aria-hidden
              width={340}
              height={340}
              style={{ width:340, height:'auto', mixBlendMode:'screen', filter:'brightness(1.6) sepia(0.8) saturate(2.5) hue-rotate(340deg) contrast(0.85)', opacity:0.55, animation:'sc-breathe 4s ease-in-out infinite' }}
            />
            <Image
              src="/sc/intro-sun.png"
              alt=""
              aria-hidden
              width={200}
              height={200}
              style={{ position:'absolute', width:200, height:200, bottom:-30, right:10, mixBlendMode:'screen', filter:'hue-rotate(240deg) saturate(0.5) brightness(0.7)', opacity:0.6 }}
            />
          </div>
        </div>
      </section>

      {/* ═══ 三個世界 ═══ */}
      <section style={{ background:'#0c0915', padding:'80px 0 100px', position:'relative', overflow:'hidden' }}>
        {/* Bg washes */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(78,63,110,0.4) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(94,142,138,0.15) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 60% 80%, rgba(196,120,74,0.1) 0%, transparent 50%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 8vw', position:'relative', zIndex:2 }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#A99BC4', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              THE THREE WORLDS
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              上、中、下部世界
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#A99BC4', opacity:0.8 }}>
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
                <polygon points="170,18 318,258 22,258" fill="rgba(169,155,196,0.06)" stroke="#A99BC4" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" filter="url(#brush-upper)" opacity="0.9"/>
                <g transform="translate(152,165)" stroke="#A99BC4" strokeWidth="1.3" fill="none" opacity="0.75" filter="url(#brush-upper)">
                  <circle cx="18" cy="-30" r="9"/>
                  <path d="M2,0 C2,-22 34,-22 34,0"/>
                  <path d="M2,0 L-7,14 M34,0 L43,14"/>
                  <path d="M8,10 L28,10"/>
                </g>
              </svg>
              <div style={{ position:'absolute', right:0, display:'flex', alignItems:'center', gap:12, width:220 }}>
                <div style={{ fontSize:18, color:'#A99BC4', opacity:0.5, flexShrink:0 }}>←</div>
                <div>
                  <div className="tr-h1" style={{ fontSize:16, color:'#A99BC4', marginBottom:2 }}>上部世界</div>
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:12, letterSpacing:'0.2em', color:'#A99BC4', opacity:0.75, marginBottom:6 }}>UPPER WORLD</div>
                  <div style={{ fontSize:13, lineHeight:1.75, color:'rgba(242,239,234,0.7)' }}>指導靈與祖先智慧的居所。<br />接收更高維度的指引。</div>
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
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:12, letterSpacing:'0.2em', color:'#5E8E8A', opacity:0.75, marginBottom:6 }}>MIDDLE WORLD</div>
                  <div style={{ fontSize:13, lineHeight:1.75, color:'rgba(242,239,234,0.7)' }}>我們生存的當下現實。<br />解讀能量場、清理舊有印記。</div>
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
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:12, letterSpacing:'0.2em', color:'#C4784A', opacity:0.75, marginBottom:6 }}>LOWER WORLD</div>
                  <div style={{ fontSize:13, lineHeight:1.75, color:'rgba(242,239,234,0.7)' }}>力量動物的棲所。<br />接觸最原始的生命力。</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 薩滿旅程五步驟 ═══ */}
      <section style={{ padding:'100px 0 80px', background:'#12101a', position:'relative', overflow:'hidden' }} id="journey">
        {/* Purple bg wash */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(78,63,110,0.3) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 10% 100%, rgba(123,107,158,0.15) 0%, transparent 50%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 8vw', position:'relative', zIndex:2 }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#A99BC4', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              THE SHAMANIC JOURNEY
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              薩滿旅程五步驟
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#A99BC4', opacity:0.8, marginBottom:12 }}>
              A Path of Awakening &amp; Integration
            </p>
            <p style={{ fontSize:14, lineHeight:1.9, color:'rgba(242,239,234,0.65)', textAlign:'center', margin:'0 auto' }}>
              點擊任一步驟，進入詳細探索。
            </p>
          </div>

          {/* Wave Timeline SVG */}
          <div style={{ position:'relative', width:'100%', marginBottom:16 }}>
            <svg viewBox="0 0 1100 260" style={{ width:'100%', height:260, display:'block', overflow:'visible' }}>
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4E3F6E" stopOpacity="1"/>
                  <stop offset="60%" stopColor="#7B6B9E" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#5E8E8A" stopOpacity="1"/>
                </linearGradient>
                <filter id="wavRough">
                  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" result="noise"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="4" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              <path d="M 55 130 C 140 90, 195 175, 280 135 C 365 95, 420 175, 540 130 C 660 85, 715 175, 800 135 C 885 95, 940 170, 1045 130"
                fill="none" stroke="url(#waveGrad)" strokeWidth="3" strokeLinecap="round" filter="url(#wavRough)" opacity="0.7"/>

              {/* SC-01 */}
              <line x1="55" y1="122" x2="55" y2="68" stroke="#C4784A" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="55" cy="122" r={activeNode === 'sc01' ? 10 : 7} fill="#C4784A" opacity="0.9" onClick={() => selectNode('sc01')} style={{ cursor:'pointer' }} filter={activeNode === 'sc01' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="55" cy="122" r="14" fill="none" stroke="#C4784A" strokeWidth="1" opacity="0.2"/>

              {/* SC-02 */}
              <line x1="280" y1="140" x2="280" y2="175" stroke="#A99BC4" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="280" cy="140" r={activeNode === 'sc02' ? 10 : 7} fill="#A99BC4" opacity="0.9" onClick={() => selectNode('sc02')} style={{ cursor:'pointer' }} filter={activeNode === 'sc02' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="280" cy="140" r="14" fill="none" stroke="#A99BC4" strokeWidth="1" opacity="0.2"/>

              {/* SC-03 */}
              <line x1="540" y1="122" x2="540" y2="68" stroke="#5E8E8A" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="540" cy="122" r={activeNode === 'sc03' ? 10 : 7} fill="#5E8E8A" opacity="0.9" onClick={() => selectNode('sc03')} style={{ cursor:'pointer' }} filter={activeNode === 'sc03' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="540" cy="122" r="14" fill="none" stroke="#5E8E8A" strokeWidth="1" opacity="0.2"/>

              {/* SC-04 */}
              <line x1="800" y1="140" x2="800" y2="175" stroke="#7B6B9E" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="800" cy="140" r={activeNode === 'sc04' ? 10 : 7} fill="#7B6B9E" opacity="0.9" onClick={() => selectNode('sc04')} style={{ cursor:'pointer' }} filter={activeNode === 'sc04' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="800" cy="140" r="14" fill="none" stroke="#7B6B9E" strokeWidth="1" opacity="0.2"/>

              {/* SC-05 */}
              <line x1="1045" y1="122" x2="1045" y2="68" stroke="#A99BC4" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="1045" cy="122" r={activeNode === 'sc05' ? 10 : 7} fill="#A99BC4" opacity="0.9" onClick={() => selectNode('sc05')} style={{ cursor:'pointer' }} filter={activeNode === 'sc05' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="1045" cy="122" r="14" fill="none" stroke="#A99BC4" strokeWidth="1" opacity="0.2"/>
            </svg>

            {/* Wave labels */}
            <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
              {/* ABOVE: 01 */}
              <div style={{ position:'absolute', left:'calc(55/1100*100%)', top:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:5, paddingTop:6, cursor:'pointer', pointerEvents:'auto' }} onClick={() => selectNode('sc01')}>
                <div style={{ fontSize:16, fontWeight:700, color:'#F2EFEA', whiteSpace:'nowrap' }}>力量動物</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(196,120,74,0.18)', color:'#C4784A', whiteSpace:'nowrap' }}>下部世界</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#C4784A', opacity:0.8, marginTop:2 }}>01</div>
              </div>
              {/* ABOVE: 03 */}
              <div style={{ position:'absolute', left:'calc(540/1100*100%)', top:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:5, paddingTop:6, cursor:'pointer', pointerEvents:'auto' }} onClick={() => selectNode('sc03')}>
                <div style={{ fontSize:16, fontWeight:700, color:'#F2EFEA', whiteSpace:'nowrap' }}>脈輪情緒覺察</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(94,142,138,0.18)', color:'#5E8E8A', whiteSpace:'nowrap' }}>中部世界</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#5E8E8A', opacity:0.8, marginTop:2 }}>03</div>
              </div>
              {/* ABOVE: 05 */}
              <div style={{ position:'absolute', left:'calc(1045/1100*100%)', top:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:5, paddingTop:6, cursor:'pointer', pointerEvents:'auto' }} onClick={() => selectNode('sc05')}>
                <div style={{ fontSize:16, fontWeight:700, color:'#F2EFEA', whiteSpace:'nowrap' }}>尋找內在小孩</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(123,107,158,0.18)', color:'#A99BC4', whiteSpace:'nowrap' }}>靈魂碎片團圓</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.8, marginTop:2 }}>05</div>
              </div>
              {/* BELOW: 02 */}
              <div style={{ position:'absolute', left:'calc(280/1100*100%)', bottom:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column-reverse', alignItems:'center', gap:5, paddingBottom:6, cursor:'pointer', pointerEvents:'auto' }} onClick={() => selectNode('sc02')}>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.8, marginBottom:2 }}>02</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(169,155,196,0.18)', color:'#A99BC4', whiteSpace:'nowrap' }}>上部世界</div>
                <div style={{ fontSize:16, fontWeight:700, color:'#F2EFEA', whiteSpace:'nowrap' }}>指導靈</div>
              </div>
              {/* BELOW: 04 */}
              <div style={{ position:'absolute', left:'calc(800/1100*100%)', bottom:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column-reverse', alignItems:'center', gap:5, paddingBottom:6, cursor:'pointer', pointerEvents:'auto' }} onClick={() => selectNode('sc04')}>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#7B6B9E', opacity:0.8, marginBottom:2 }}>04</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(123,107,158,0.18)', color:'#7B6B9E', whiteSpace:'nowrap' }}>整合階段</div>
                <div style={{ fontSize:16, fontWeight:700, color:'#F2EFEA', whiteSpace:'nowrap' }}>連結高我</div>
              </div>
            </div>
          </div>

          <div style={{ height:56 }} />

          {/* ── ZONE A: 覺醒 ── */}
          <div id="zone-awakening">
            {/* Zone header */}
            <div style={{ display:'flex', alignItems:'center', gap:20, margin:'40px 0 28px' }}>
              <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(123,107,158,0.45))' }} />
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3, whiteSpace:'nowrap' }}>
                <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.22em', color:'#A99BC4', opacity:0.7 }}>THE AWAKENING</span>
                <span className="tr-d2" style={{ fontSize:18, letterSpacing:'0.04em', color:'#F2EFEA' }}>建構靈魂的支持網：大地守護與高維智慧</span>
              </div>
              <div style={{ flex:1, height:1, background:'linear-gradient(to left, transparent, rgba(123,107,158,0.45))' }} />
            </div>

            {/* SC-02 指導靈 */}
            <div className="sc-card-brush" style={{ margin:'0 96px 16px', position:'relative' }}>
              <div style={{ height:2, background:'linear-gradient(to right, #A99BC4 0%, rgba(169,155,196,0.15) 100%)' }} />
              <div style={{ display:'flex', gap:0 }}>
                <div style={{ flex:'0 0 220px', padding:'28px 28px 24px', borderRight:'1px solid rgba(123,107,158,0.08)' }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.14em', color:'rgba(169,155,196,0.75)', marginBottom:10 }}>上部世界 · Upper World</div>
                  <div className="tr-d2" style={{ fontSize:24, letterSpacing:'0.02em', color:'#F2EFEA', marginBottom:4 }}>指導靈</div>
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.22em', color:'#A99BC4', opacity:0.7, marginBottom:20 }}>Spirit Guide</div>
                  <button onClick={() => toggleDetail('sc02')} style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.1em', background:'none', border:'1px solid rgba(169,155,196,0.25)', color:'#A99BC4', padding:'7px 14px', cursor:'pointer' }}>
                    {openDetail === 'sc02' ? '收合課程詳情 ↑' : '展開課程詳情 ↓'}
                  </button>
                </div>
                <div style={{ flex:1, padding:'28px 32px 24px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start', gap:16 }}>
                  <div style={{ fontSize:14, lineHeight:1.75, color:'rgba(242,239,234,0.45)', fontStyle:'italic', fontFamily:'var(--f-body)' }}>持有生命藍圖的高維導師，純粹的光與愛。</div>
                  <div style={{ alignSelf:'flex-end', opacity:0.9 }}>
                    <svg viewBox="0 0 100 90" width="80" height="72" opacity="0.45">
                      <g stroke="#A99BC4" fill="none" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)">
                        <line x1="50" y1="16" x2="50" y2="4"/><line x1="50" y1="16" x2="62" y2="6"/>
                        <line x1="50" y1="16" x2="70" y2="12"/><line x1="50" y1="16" x2="76" y2="22"/>
                        <line x1="50" y1="16" x2="38" y2="6"/><line x1="50" y1="16" x2="30" y2="12"/>
                        <line x1="50" y1="16" x2="24" y2="22"/>
                        <circle cx="50" cy="16" r="9" strokeWidth="1.5"/>
                        <circle cx="50" cy="16" r="4" fill="rgba(169,155,196,0.2)"/>
                      </g>
                      <g transform="translate(32,38)" stroke="#A99BC4" strokeWidth="1.6" fill="none" strokeLinecap="round" filter="url(#sc-brush-icon)">
                        <circle cx="18" cy="-4" r="8"/>
                        <path d="M4,12 C4,-6 32,-6 32,12"/>
                        <path d="M4,12 L-2,22 M32,12 L38,22"/>
                        <line x1="8" y1="18" x2="28" y2="18"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              {openDetail === 'sc02' && (
                <div style={{ borderTop:'1px solid rgba(123,107,158,0.1)' }}>
                  <div style={{ padding:'28px 32px' }}>
                    <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.75, marginBottom:12 }}>DETAIL</div>
                    <p style={{ fontSize:13.5, lineHeight:1.9, color:'rgba(242,239,234,0.65)', marginBottom:20 }}>每個靈魂都有屬於自己的指導靈。前往上部世界，建立清晰的連結頻道，學習在日常中接收指引，獲得超越小我視角的宏觀智慧。</p>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 24px' }}>
                      {[['形式','薩滿鼓旅程冥想 · 一對一'],['時長','2.5–3.5 小時'],['適合','已有靈性基礎 · 希望深化連結的學員'],['包含','上部世界旅程 · 指導靈訊息解讀 · 日常連結練習']].map(([k,v]) => (
                        <div key={k} style={{ display:'flex', flexDirection:'column', gap:4, fontSize:13, color:'rgba(242,239,234,0.7)', borderBottom:'1px solid rgba(123,107,158,0.08)', paddingBottom:10 }}>
                          <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#A99BC4', opacity:0.8 }}>{k}</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SC-03 七脈輪情緒覺察 */}
            <div className="sc-card-brush sc-card-middle" style={{ margin:'0 48px 16px', position:'relative' }}>
              <div style={{ height:2, background:'linear-gradient(to right, #5E8E8A 0%, rgba(94,142,138,0.15) 100%)' }} />
              <div style={{ display:'flex', gap:0 }}>
                <div style={{ flex:'0 0 220px', padding:'28px 28px 24px', borderRight:'1px solid rgba(123,107,158,0.08)' }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.14em', color:'rgba(94,142,138,0.75)', marginBottom:10 }}>中部世界 · Middle World</div>
                  <div className="tr-d2" style={{ fontSize:24, letterSpacing:'0.02em', color:'#F2EFEA', marginBottom:4 }}>七脈輪情緒覺察</div>
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.22em', color:'#5E8E8A', opacity:0.7, marginBottom:20 }}>Chakra &amp; Emotional Awareness</div>
                  <button onClick={() => toggleDetail('sc03')} style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.1em', background:'none', border:'1px solid rgba(94,142,138,0.25)', color:'#5E8E8A', padding:'7px 14px', cursor:'pointer' }}>
                    {openDetail === 'sc03' ? '收合課程詳情 ↑' : '展開課程詳情 ↓'}
                  </button>
                </div>
                <div style={{ flex:1, padding:'28px 32px 24px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start', gap:16 }}>
                  <div style={{ fontSize:14, lineHeight:1.75, color:'rgba(94,142,138,0.75)', fontStyle:'italic', fontFamily:'var(--f-body)' }}>指導靈與力量動物之間的橋樑。<br />體感式覺察，轉化凍結的情緒。</div>
                  <div style={{ alignSelf:'flex-end', opacity:0.9 }}>
                    <svg viewBox="0 0 100 90" width="80" height="72" opacity="0.45">
                      <g transform="translate(30,20)" stroke="#5E8E8A" fill="none" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)">
                        <circle cx="20" cy="25" r="22"/>
                        <circle cx="20" cy="25" r="12" fill="rgba(94,142,138,0.12)"/>
                        <circle cx="20" cy="25" r="5" fill="rgba(94,142,138,0.25)"/>
                        <circle cx="46" cy="18" r="5" fill="rgba(94,142,138,0.12)"/>
                        <circle cx="-4" cy="36" r="4" fill="rgba(94,142,138,0.1)"/>
                        <line x1="-10" y1="50" x2="50" y2="50" strokeWidth="1.2" opacity="0.6"/>
                        <line x1="-6" y1="55" x2="46" y2="55" strokeWidth="0.8" opacity="0.4"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              {openDetail === 'sc03' && (
                <div style={{ borderTop:'1px solid rgba(123,107,158,0.1)' }}>
                  <div style={{ padding:'28px 32px' }}>
                    <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#5E8E8A', opacity:0.75, marginBottom:12 }}>DETAIL</div>
                    <p style={{ fontSize:13.5, lineHeight:1.9, color:'rgba(242,239,234,0.65)', marginBottom:20 }}>情緒是訊息，不是敵人。透過薩滿能量掃描，直接進入脈輪空間，找出情緒背後的核心信念，讓舊模式在光中被看見、被釋放。</p>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 24px' }}>
                      {[['形式','薩滿能量掃描 · 情緒地圖工作'],['時長','3–4 小時'],['適合','情緒模式困擾 · 反覆同樣關係動態的探索者'],['包含','能量體掃描 · 情緒信念解讀 · 釋放儀式']].map(([k,v]) => (
                        <div key={k} style={{ display:'flex', flexDirection:'column', gap:4, fontSize:13, color:'rgba(242,239,234,0.7)', borderBottom:'1px solid rgba(123,107,158,0.08)', paddingBottom:10 }}>
                          <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#5E8E8A', opacity:0.8 }}>{k}</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SC-01 力量動物 */}
            <div className="sc-card-brush sc-card-lower" style={{ marginBottom:16, position:'relative' }}>
              <div style={{ height:2, background:'linear-gradient(to right, #C4784A 0%, rgba(196,120,74,0.15) 100%)' }} />
              <div style={{ display:'flex', gap:0 }}>
                <div style={{ flex:'0 0 220px', padding:'28px 28px 24px', borderRight:'1px solid rgba(123,107,158,0.08)' }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.14em', color:'rgba(196,120,74,0.75)', marginBottom:10 }}>下部世界 · Lower World</div>
                  <div className="tr-d2" style={{ fontSize:24, letterSpacing:'0.02em', color:'#F2EFEA', marginBottom:4 }}>力量動物</div>
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.22em', color:'#C4784A', opacity:0.7, marginBottom:20 }}>Power Animal</div>
                  <button onClick={() => toggleDetail('sc01')} style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.1em', background:'none', border:'1px solid rgba(196,120,74,0.25)', color:'#C4784A', padding:'7px 14px', cursor:'pointer' }}>
                    {openDetail === 'sc01' ? '收合課程詳情 ↑' : '展開課程詳情 ↓'}
                  </button>
                </div>
                <div style={{ flex:1, padding:'28px 32px 24px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start', gap:16 }}>
                  <div style={{ fontSize:14, lineHeight:1.75, color:'rgba(196,120,74,0.75)', fontStyle:'italic', fontFamily:'var(--f-body)' }}>靈魂最原始的盟友，地上的守護者。</div>
                  <div style={{ alignSelf:'flex-end', opacity:0.9 }}>
                    <svg viewBox="0 0 100 90" width="80" height="72" opacity="0.45">
                      <g stroke="#C4784A" fill="none" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)">
                        <line x1="50" y1="8" x2="50" y2="30"/>
                        <path d="M50,30 C44,42 32,52 18,66"/>
                        <path d="M50,30 C56,42 68,52 82,66"/>
                        <path d="M50,30 C48,44 44,56 40,74"/>
                        <path d="M50,30 C52,44 56,56 60,74"/>
                        <path d="M34,50 C28,56 20,62 10,72"/>
                        <path d="M66,50 C72,56 80,62 90,72"/>
                        <circle cx="50" cy="14" r="7" fill="rgba(196,120,74,0.15)"/>
                        <circle cx="40" cy="7" r="3.5"/>
                        <circle cx="50" cy="4" r="3.5"/>
                        <circle cx="60" cy="7" r="3.5"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              {openDetail === 'sc01' && (
                <div style={{ borderTop:'1px solid rgba(123,107,158,0.1)' }}>
                  <div style={{ padding:'28px 32px' }}>
                    <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#C4784A', opacity:0.75, marginBottom:12 }}>DETAIL</div>
                    <p style={{ fontSize:13.5, lineHeight:1.9, color:'rgba(242,239,234,0.65)', marginBottom:20 }}>透過薩滿鼓聲引導的意識旅程，前往下部世界，與你的力量動物相遇。透過海底輪接地（Grounding），進入深度放鬆，獲得能量保護與勇氣支持。</p>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 24px' }}>
                      {[['形式','薩滿鼓旅程冥想 · 一對一或小組'],['時長','2–3 小時'],['適合','初次接觸薩滿 · 正在尋找靈性方向的探索者'],['包含','鼓旅程引導 · 力量動物解讀 · 整合討論']].map(([k,v]) => (
                        <div key={k} style={{ display:'flex', flexDirection:'column', gap:4, fontSize:13, color:'rgba(242,239,234,0.7)', borderBottom:'1px solid rgba(123,107,158,0.08)', paddingBottom:10 }}>
                          <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#C4784A', opacity:0.8 }}>{k}</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── ZONE B: 整合 ── */}
          <div id="zone-integration">
            {/* Zone header */}
            <div style={{ display:'flex', alignItems:'center', gap:20, margin:'40px 0 28px' }}>
              <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(123,107,158,0.5))' }} />
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3, whiteSpace:'nowrap' }}>
                <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.22em', color:'#A99BC4', opacity:0.7 }}>THE INTEGRATION</span>
                <span className="tr-d2" style={{ fontSize:18, letterSpacing:'0.04em', color:'#F2EFEA' }}>終極對齊：找回遺落的靈魂碎片</span>
              </div>
              <div style={{ flex:1, height:1, background:'linear-gradient(to left, transparent, rgba(123,107,158,0.5))' }} />
            </div>

            {/* Integration flow */}
            <div style={{ display:'flex', alignItems:'stretch', gap:0, marginBottom:16 }}>

              {/* Card: 重生呼吸 — 雅妃 */}
              <div onClick={() => toggleDetail('yafei')} className="sc-if-card sc-if-card-orange" style={{ flex:1, display:'flex', flexDirection:'column', position:'relative', background:'rgba(18,16,26,0.55)', cursor:'pointer', padding:0 }}>
                <div style={{ padding:'24px 16px 12px', display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.7, padding:'3px 10px', border:'1px solid rgba(123,107,158,0.25)' }}>雅妃 · MARGA</div>
                  <svg viewBox="0 0 60 60" width="50" height="50">
                    <ellipse cx="30" cy="30" rx="22" ry="14" fill="none" stroke="rgba(196,120,74,0.55)" strokeWidth="2" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                    <ellipse cx="30" cy="30" rx="13" ry="7" fill="rgba(196,120,74,0.06)" stroke="rgba(196,120,74,0.4)" strokeWidth="1.6" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                    <circle cx="30" cy="30" r="4" fill="rgba(196,120,74,0.2)" stroke="rgba(196,120,74,0.65)" strokeWidth="1.4" filter="url(#sc-brush-icon)"/>
                    <line x1="30" y1="6" x2="30" y2="16" stroke="rgba(196,120,74,0.5)" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                    <line x1="30" y1="44" x2="30" y2="54" stroke="rgba(196,120,74,0.5)" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                  </svg>
                </div>
                <div style={{ flex:1, padding:'0 16px 12px', display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <div className="tr-h1" style={{ fontSize:15, color:'rgba(196,120,74,0.9)', marginBottom:8 }}>重生呼吸</div>
                  <div style={{ fontSize:13, lineHeight:1.75, color:'rgba(242,239,234,0.65)', textAlign:'center' }}>從呼吸開始，讓身體重新連結。釋放凍結的模式，身心靈回歸完整的整合狀態。</div>
                </div>
                <div style={{ padding:'8px 16px 18px', minHeight:34, display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.1em', color:'#A99BC4', opacity:0.65 }}>了解課程 ↓</span>
                </div>
              </div>

              <div style={{ display:'flex', alignItems:'center', padding:'0 5px', color:'rgba(169,155,196,0.25)', fontSize:16, flexShrink:0 }}>→</div>

              {/* Card: 連結高我 — 禿禿 */}
              <div onClick={() => toggleDetail('sc04')} className="sc-if-card" style={{ flex:1, display:'flex', flexDirection:'column', position:'relative', background:'rgba(18,16,26,0.55)', cursor:'pointer' }}>
                <div style={{ padding:'24px 16px 12px', display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.7, padding:'3px 10px', border:'1px solid rgba(123,107,158,0.25)' }}>禿禿</div>
                  <svg viewBox="0 0 60 60" width="50" height="50">
                    <rect x="11" y="11" width="38" height="38" rx="2" fill="none" stroke="rgba(123,107,158,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#sc-brush-icon)"/>
                    <circle cx="30" cy="30" r="8" fill="rgba(123,107,158,0.1)" stroke="rgba(169,155,196,0.55)" strokeWidth="1.6" filter="url(#sc-brush-icon)"/>
                    <line x1="30" y1="11" x2="30" y2="22" stroke="rgba(169,155,196,0.5)" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                    <line x1="30" y1="38" x2="30" y2="49" stroke="rgba(169,155,196,0.5)" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                    <line x1="11" y1="30" x2="22" y2="30" stroke="rgba(169,155,196,0.5)" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                    <line x1="38" y1="30" x2="49" y2="30" stroke="rgba(169,155,196,0.5)" strokeWidth="1.8" strokeLinecap="round" filter="url(#sc-brush-icon)"/>
                  </svg>
                </div>
                <div style={{ flex:1, padding:'0 16px 12px', display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <div className="tr-h1" style={{ fontSize:15, color:'#F2EFEA', marginBottom:8 }}>連結高我</div>
                  <div style={{ fontSize:13, lineHeight:1.75, color:'rgba(242,239,234,0.65)', textAlign:'center' }}>接通內在神聖源頭，讓高我成為每日決策的絕對導師，身心靈合一。</div>
                </div>
                <div style={{ padding:'8px 16px 18px', minHeight:34, display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.1em', color:'#A99BC4', opacity:0.65 }}>了解課程 ↓</span>
                </div>
              </div>

              <div style={{ display:'flex', alignItems:'center', padding:'0 5px', color:'rgba(169,155,196,0.25)', fontSize:16, flexShrink:0 }}>→</div>

              {/* Bridge card */}
              <div style={{ flex:1, display:'flex', flexDirection:'column', background:'transparent', opacity:0.7 }}>
                <div style={{ padding:'24px 16px 12px', display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'rgba(242,239,234,0.4)', marginBottom:4 }}>整合前的觀察</div>
                </div>
                <div style={{ flex:1, padding:'0 16px 12px', display:'flex', flexDirection:'column', alignItems:'center', gap:8, marginTop:8 }}>
                  {['辨識過敏原','內在觀察','看見保護策略','非侵入式探索'].map(kw => (
                    <span key={kw} style={{ fontSize:11, color:'rgba(242,239,234,0.35)', letterSpacing:'0.04em', fontStyle:'italic' }}>{kw}</span>
                  ))}
                </div>
                <div style={{ padding:'8px 16px 18px', minHeight:34 }} />
              </div>

              <div style={{ display:'flex', alignItems:'center', padding:'0 5px', color:'rgba(169,155,196,0.25)', fontSize:16, flexShrink:0 }}>→</div>

              {/* Card: 尋找內在小孩 — 禿禿 */}
              <div onClick={() => toggleDetail('sc05')} className="sc-if-card" style={{ flex:1, display:'flex', flexDirection:'column', position:'relative', background:'rgba(18,16,26,0.55)', cursor:'pointer' }}>
                <div style={{ padding:'24px 16px 12px', display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.7, padding:'3px 10px', border:'1px solid rgba(123,107,158,0.25)' }}>禿禿</div>
                  <svg viewBox="0 0 60 60" width="50" height="50">
                    <polygon points="30,5 56,22 46,52 14,52 4,22" fill="none" stroke="rgba(169,155,196,0.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#sc-brush-icon)"/>
                    <polygon points="30,17 47,29 40,47 20,47 13,29" fill="rgba(123,107,158,0.07)" stroke="rgba(169,155,196,0.3)" strokeWidth="1.2" strokeLinejoin="round" filter="url(#sc-brush-icon)"/>
                    <circle cx="30" cy="33" r="6" fill="rgba(123,107,158,0.16)" stroke="rgba(169,155,196,0.6)" strokeWidth="1.4" filter="url(#sc-brush-icon)"/>
                  </svg>
                </div>
                <div style={{ flex:1, padding:'0 16px 12px', display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <div className="tr-h1" style={{ fontSize:15, color:'#F2EFEA', marginBottom:8 }}>尋找內在小孩</div>
                  <div style={{ fontSize:13, lineHeight:1.75, color:'rgba(242,239,234,0.65)', textAlign:'center' }}>帶回失落的靈魂碎片，讓因保護而解離的自我重新歸位，回到完整的自己。</div>
                </div>
                <div style={{ padding:'8px 16px 18px', minHeight:34, display:'flex', alignItems:'flex-end', justifyContent:'center' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.1em', color:'#A99BC4', opacity:0.65 }}>了解課程 ↓</span>
                </div>
              </div>

            </div>

            {/* Expandable details for integration zone */}
            {openDetail === 'sc04' && (
              <div style={{ borderTop:'1px solid rgba(123,107,158,0.1)', marginBottom:16 }}>
                <div style={{ padding:'28px 32px' }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.75, marginBottom:12 }}>連結高我 · Higher Self Alignment <span style={{ opacity:0.6, fontSize:11, marginLeft:8 }}>禿禿</span></div>
                  <p style={{ fontSize:13.5, lineHeight:1.9, color:'rgba(242,239,234,0.65)', marginBottom:20 }}>高我是你最高頻率的自己，始終清明、始終完整。透過薩滿旅程與高我直接對話，讓每個決策回歸靈魂的真實意志。</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 24px' }}>
                    {[['形式','高我對話旅程 · 能量對齊工作'],['時長','3–4 小時'],['適合','人生抉擇期 · 渴望回歸靈魂方向的探索者'],['包含','高我對話 · 信念清理 · 能量校準儀式']].map(([k,v]) => (
                      <div key={k} style={{ display:'flex', flexDirection:'column', gap:4, fontSize:13, color:'rgba(242,239,234,0.7)', borderBottom:'1px solid rgba(123,107,158,0.08)', paddingBottom:10 }}>
                        <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#A99BC4', opacity:0.8 }}>{k}</span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {openDetail === 'sc05' && (
              <div style={{ borderTop:'1px solid rgba(123,107,158,0.1)', marginBottom:16 }}>
                <div style={{ padding:'28px 32px' }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#A99BC4', opacity:0.75, marginBottom:12 }}>尋找內在小孩 · Inner Child Reunion <span style={{ opacity:0.6, fontSize:11, marginLeft:8 }}>禿禿</span></div>
                  <p style={{ fontSize:13.5, lineHeight:1.9, color:'rgba(242,239,234,0.65)', marginBottom:20 }}>當我們經歷深刻創傷，靈魂的碎片會離開以自我保護。靈魂找回（Soul Retrieval）是最深層的薩滿療癒——帶回失落的碎片，讓你回到完整的自己。</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 24px' }}>
                    {[['形式','靈魂找回儀式 · 一對一深度工作'],['時長','4–5 小時'],['適合','深層創傷整合 · 感覺靈魂不完整的探索者'],['包含','靈魂碎片找回 · 整合儀式 · 後續支持方案']].map(([k,v]) => (
                      <div key={k} style={{ display:'flex', flexDirection:'column', gap:4, fontSize:13, color:'rgba(242,239,234,0.7)', borderBottom:'1px solid rgba(123,107,158,0.08)', paddingBottom:10 }}>
                        <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#A99BC4', opacity:0.8 }}>{k}</span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {openDetail === 'yafei' && (
              <div style={{ borderTop:'1px solid rgba(123,107,158,0.1)', marginBottom:16 }}>
                <div style={{ padding:'28px 32px' }}>
                  <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#C4784A', opacity:0.75, marginBottom:12 }}>重生呼吸 <span style={{ opacity:0.65, fontSize:11, marginLeft:8 }}>雅妃 · MARGA</span></div>
                  <p style={{ fontSize:13.5, lineHeight:1.9, color:'rgba(242,239,234,0.65)', marginBottom:20 }}>呼吸是身體最原始的語言。雅妃的重生呼吸課程以呼吸為入口，透過有意識的呼吸引導，釋放身體凍結的情緒記憶，讓身心靈重新連結，為靈魂旅程的深度整合建立穩固的身體基礎。</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 24px' }}>
                    {[['定位','身體是靈魂回家的第一站，從身體的感知開始整合'],['過程','建立身體覺察 · 釋放凍結的模式 · 讓身心靈重新連結'],['適合','感覺身心靈脫節 · 長期壓力積累 · 準備進入更深整合的探索者'],['導師','雅妃 · MARGA（詳細課程資訊請洽詢）']].map(([k,v]) => (
                      <div key={k} style={{ display:'flex', flexDirection:'column', gap:4, fontSize:13, color:'rgba(242,239,234,0.7)', borderBottom:'1px solid rgba(123,107,158,0.08)', paddingBottom:10 }}>
                        <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#C4784A', opacity:0.8 }}>{k}</span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ═══ 推薦整合搭配 + CTA ═══ */}
      <section style={{ padding:'100px 0', background:'#0e0a18', position:'relative' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(78,63,110,0.25) 0%, transparent 65%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2 }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#A99BC4', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              RECOMMENDED PAIRING
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              推薦整合搭配
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#A99BC4', opacity:0.8, marginBottom:24 }}>
              Complete Your Journey
            </p>
            <p style={{ fontSize:14, lineHeight:1.9, color:'rgba(242,239,234,0.65)', margin:'0 auto' }}>
              薩滿覺醒的效果，在整合中才真正落地。
            </p>
          </div>

          {/* Cards */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginBottom:64 }}>
            {[
              { title:'深層系統對齊', desc:'薩滿打開靈魂的通道，深層對齊讓覺醒的能量落地。從靈性到現實的完整轉化路徑。', href:'/hl', img:'/sc/sc-cta-hl.png' },
              { title:'靈性頌缽音流', desc:'薩滿旅程後的能量場需要沉澱。頌缽頻率加速整合，讓新的意識狀態滲透進身體。', href:'/qi-sb', img:'/sc/sc-cta-qi-sb.png' },
            ].map(card => (
              <div key={card.title} style={{ display:'flex', flexDirection:'row', border:'1px solid rgba(123,107,158,0.15)', position:'relative', overflow:'hidden', transition:'border-color 0.35s' }}>
                <div style={{ flex:'0 0 65%', padding:'36px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <div>
                    <div className="tr-d2" style={{ fontSize:22, color:'#F2EFEA', marginBottom:16 }}>{card.title}</div>
                    <p style={{ fontSize:13, lineHeight:1.85, color:'rgba(242,239,234,0.55)', marginBottom:24 }}>{card.desc}</p>
                  </div>
                  <Link href={card.href} style={{ display:'inline-flex', alignItems:'center', gap:10, fontFamily:'var(--f-display)', fontWeight:300, fontSize:12, letterSpacing:'0.22em', color:'#A99BC4', textDecoration:'none', borderBottom:'1px solid rgba(123,107,158,0.35)', paddingBottom:4 }}>
                    了解更多
                  </Link>
                </div>
                <div style={{ flex:'0 0 35%', position:'relative', overflow:'hidden', maxHeight:200 }}>
                  <Image src={card.img} alt="" aria-hidden fill style={{ objectFit:'cover', opacity:0.75 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div style={{ textAlign:'center', paddingTop:64, borderTop:'1px solid rgba(123,107,158,0.1)' }}>
            <div className="tr-d2" style={{ fontSize:28, color:'#F2EFEA', marginBottom:12 }}>準備好開始你的薩滿旅程了嗎？</div>
            <div style={{ fontFamily:'var(--f-elegant)', fontStyle:'italic', fontSize:16, color:'#A99BC4', marginBottom:32 }}>每一個靈魂都有它的路，讓我們一起找到你的。</div>
            <Link href="/contact" className="sc-cta-btn">
              預約探索諮詢 &nbsp;·&nbsp; BOOK A SESSION
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
