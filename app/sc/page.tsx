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
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', background:'#2B4A5E' }}>
        {/* Blue-teal wash */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 80% at 20% 50%, rgba(74,107,138,0.9) 0%, rgba(43,74,94,0.6) 40%, transparent 75%), radial-gradient(ellipse 60% 70% at 85% 60%, rgba(94,142,138,0.55) 0%, rgba(65,110,106,0.3) 45%, transparent 70%)', pointerEvents:'none' }} />

        {/* Calligraphy image */}
        <Image
          src="/sc/black/方形薩滿冥想.png"
          alt=""
          aria-hidden
          width={900}
          height={900}
          style={{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-50%)', height:'110vh', width:'auto', filter:'invert(1) sepia(0.35) saturate(1.8) hue-rotate(195deg) brightness(1.15)', mixBlendMode:'screen', opacity:0.38, pointerEvents:'none' }}
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
          <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:'clamp(13px,1.4vw,16px)', letterSpacing:'0.32em', color:'#7A9AB5', marginBottom:20, opacity:0.75, textTransform:'uppercase' }}>
            Shamanic Soul Awakening
          </p>
          <p style={{ fontFamily:'var(--f-elegant)', fontStyle:'italic', fontWeight:700, fontSize:'clamp(16px,2.2vw,22px)', color:'#7A9AB5', letterSpacing:'0.04em', marginBottom:20, lineHeight:1.6 }}>
            透過古老智慧，連結靈魂最原始的力量
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute', bottom:36, left:'50%', display:'flex', flexDirection:'column', alignItems:'center', gap:8, opacity:0.4, animation:'sc-float 2.5s ease-in-out infinite' }}>
          <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'#7A9AB5' }}>SCROLL</span>
          <div style={{ width:1, height:40, background:'linear-gradient(to bottom, #7A9AB5, transparent)' }} />
        </div>
      </section>

      {/* ═══ 薩滿介紹 ═══ */}
      <section style={{ background:'#26424F', padding:'120px 0 80px', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(94,142,138,0.22) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 10% 20%, rgba(74,107,138,0.18) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center', position:'relative', zIndex:2 }}>
          <div>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#7A9AB5', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              WHAT IS SHAMANISM
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              薩滿，<br />最古老的療癒智慧
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#7A9AB5', marginBottom:24, opacity:0.8 }}>
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
              style={{ width:340, height:'auto', mixBlendMode:'screen', filter:'brightness(1.5) sepia(0.6) saturate(2) hue-rotate(155deg) contrast(0.85)', opacity:0.55, animation:'sc-breathe 4s ease-in-out infinite' }}
            />
            <Image
              src="/sc/intro-sun.png"
              alt=""
              aria-hidden
              width={200}
              height={200}
              style={{ position:'absolute', width:200, height:200, bottom:-30, right:10, mixBlendMode:'screen', filter:'hue-rotate(160deg) saturate(0.6) brightness(0.8)', opacity:0.5 }}
            />
          </div>
        </div>
      </section>

      {/* ═══ 三個世界 ═══ — removed */}
      {false && <section style={{ background:'#091320', padding:'80px 0 100px', position:'relative', overflow:'hidden' }}>
        {/* Bg washes */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(43,74,106,0.4) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(94,142,138,0.15) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 60% 80%, rgba(196,120,74,0.1) 0%, transparent 50%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 8vw', position:'relative', zIndex:2 }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#7A9AB5', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              THE THREE WORLDS
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              上、中、下部世界
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#7A9AB5', opacity:0.8 }}>
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
                  <div style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:12, letterSpacing:'0.2em', color:'#7A9AB5', opacity:0.75, marginBottom:6 }}>UPPER WORLD</div>
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
      </section>}

      {/* ═══ 薩滿旅程五步驟 ═══ */}
      <section style={{ padding:'100px 0 80px', background:'#1E3845', position:'relative', overflow:'hidden' }} id="journey">
        {/* Blue-teal bg wash */}
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,107,138,0.25) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 90% 100%, rgba(94,142,138,0.2) 0%, transparent 55%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 8vw', position:'relative', zIndex:2 }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#7A9AB5', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              THE SHAMANIC JOURNEY
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              薩滿旅程五步驟
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#7A9AB5', opacity:0.8, marginBottom:12 }}>
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
                  <stop offset="0%" stopColor="#2B4A6A" stopOpacity="1"/>
                  <stop offset="60%" stopColor="#4A6B8A" stopOpacity="1"/>
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
              <line x1="280" y1="140" x2="280" y2="175" stroke="#7A9AB5" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="280" cy="140" r={activeNode === 'sc02' ? 10 : 7} fill="#7A9AB5" opacity="0.9" onClick={() => selectNode('sc02')} style={{ cursor:'pointer' }} filter={activeNode === 'sc02' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="280" cy="140" r="14" fill="none" stroke="#7A9AB5" strokeWidth="1" opacity="0.2"/>

              {/* SC-03 */}
              <line x1="540" y1="122" x2="540" y2="68" stroke="#5E8E8A" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="540" cy="122" r={activeNode === 'sc03' ? 10 : 7} fill="#5E8E8A" opacity="0.9" onClick={() => selectNode('sc03')} style={{ cursor:'pointer' }} filter={activeNode === 'sc03' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="540" cy="122" r="14" fill="none" stroke="#5E8E8A" strokeWidth="1" opacity="0.2"/>

              {/* SC-04 */}
              <line x1="800" y1="140" x2="800" y2="175" stroke="#4A6B8A" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="800" cy="140" r={activeNode === 'sc04' ? 10 : 7} fill="#4A6B8A" opacity="0.9" onClick={() => selectNode('sc04')} style={{ cursor:'pointer' }} filter={activeNode === 'sc04' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="800" cy="140" r="14" fill="none" stroke="#4A6B8A" strokeWidth="1" opacity="0.2"/>

              {/* SC-05 */}
              <line x1="1045" y1="122" x2="1045" y2="68" stroke="#7A9AB5" strokeWidth="1" strokeDasharray="3,4" opacity="0.4"/>
              <circle cx="1045" cy="122" r={activeNode === 'sc05' ? 10 : 7} fill="#7A9AB5" opacity="0.9" onClick={() => selectNode('sc05')} style={{ cursor:'pointer' }} filter={activeNode === 'sc05' ? 'url(#nodeGlow)' : undefined}/>
              <circle cx="1045" cy="122" r="14" fill="none" stroke="#7A9AB5" strokeWidth="1" opacity="0.2"/>
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
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(74,107,138,0.18)', color:'#7A9AB5', whiteSpace:'nowrap' }}>靈魂碎片團圓</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#7A9AB5', opacity:0.8, marginTop:2 }}>05</div>
              </div>
              {/* BELOW: 02 */}
              <div style={{ position:'absolute', left:'calc(280/1100*100%)', bottom:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column-reverse', alignItems:'center', gap:5, paddingBottom:6, cursor:'pointer', pointerEvents:'auto' }} onClick={() => selectNode('sc02')}>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#7A9AB5', opacity:0.8, marginBottom:2 }}>02</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(122,154,181,0.18)', color:'#7A9AB5', whiteSpace:'nowrap' }}>上部世界</div>
                <div style={{ fontSize:16, fontWeight:700, color:'#F2EFEA', whiteSpace:'nowrap' }}>指導靈</div>
              </div>
              {/* BELOW: 04 */}
              <div style={{ position:'absolute', left:'calc(800/1100*100%)', bottom:0, transform:'translateX(-50%)', display:'flex', flexDirection:'column-reverse', alignItems:'center', gap:5, paddingBottom:6, cursor:'pointer', pointerEvents:'auto' }} onClick={() => selectNode('sc04')}>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.15em', color:'#4A6B8A', opacity:0.8, marginBottom:2 }}>04</div>
                <div style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.1em', padding:'3px 9px', background:'rgba(74,107,138,0.18)', color:'#4A6B8A', whiteSpace:'nowrap' }}>整合階段</div>
                <div style={{ fontSize:16, fontWeight:700, color:'#F2EFEA', whiteSpace:'nowrap' }}>連結高我</div>
              </div>
            </div>
          </div>

        </div>

        {/* 薩滿旅程的線 calligraphy overlay */}
        <Image src="/sc/white/薩滿旅程的線-白.png" alt="" aria-hidden width={1400} height={400}
          style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', width:'100%', height:'auto',
            mixBlendMode:'screen', opacity:0.18, pointerEvents:'none' }} />
      </section>

      {/* ═══ SC-01 尋找力量動物 ═══ */}
      {/* Theme: 大地 · 土壤 · 原始生命力 — deep earth, amber/sienna */}
      <section id="section-sc01" style={{ padding:'100px 0', background:'#1A1410', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 80% at 15% 55%, rgba(160,100,40,0.28) 0%, rgba(120,70,20,0.15) 45%, transparent 70%), radial-gradient(ellipse 40% 40% at 85% 15%, rgba(140,80,30,0.14) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* 書法圖 */}
        <Image src="/sc/black/力量動物-直.png" alt="" aria-hidden width={600} height={800}
          style={{ position:'absolute', right:'-3%', top:'50%', transform:'translateY(-50%)', height:'90vh', width:'auto',
            filter:'invert(1) sepia(0.5) saturate(1.8) hue-rotate(15deg) brightness(1.05)', mixBlendMode:'screen', opacity:0.22, pointerEvents:'none' }} />
        {/* 力量動物-橫 secondary layer */}
        <Image src="/sc/black/力量動物-橫.png" alt="" aria-hidden width={900} height={400}
          style={{ position:'absolute', bottom:'-5%', left:'-5%', width:'55%', height:'auto',
            filter:'invert(1) sepia(0.4) saturate(1.6) hue-rotate(15deg) brightness(1.0)', mixBlendMode:'screen', opacity:0.1, pointerEvents:'none' }} />
        {/* 撇筆觸 decoration */}
        <Image src="/resource/single/材質-1-撇/材質-1-2.png" alt="" aria-hidden width={400} height={400}
          style={{ position:'absolute', top:'8%', right:'38%', width:280, height:'auto',
            filter:'invert(1) sepia(0.4) saturate(1.4) hue-rotate(20deg)', mixBlendMode:'screen', opacity:0.13, pointerEvents:'none', transform:'rotate(-15deg)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'#A0763A', opacity:0.9, padding:'4px 12px', border:'1px solid rgba(160,118,58,0.4)' }}>SC-01</div>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'rgba(160,118,58,0.65)' }}>下部世界 · Lower World</div>
            </div>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#F2EFEA', marginBottom:10 }}>尋找力量動物</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.28em', color:'#A0763A', opacity:0.85, marginBottom:28, textTransform:'uppercase' }}>Power Animal · Workshop</p>
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(242,239,234,0.7)', marginBottom:32, maxWidth:480 }}>
              透過頌缽波頻為你的身體進行「接地（Grounding）」，讓腦波在安全的共振中進入深度放鬆。在這樣的狀態下進入薩滿旅程，你將能精準地與你的力量動物相遇——祂是你靈魂最原始的盟友，代表著你與生俱來的特質與守護力量。<br /><br />
              這不僅是一次連結，更教導你如何在日常抉擇、焦慮或失落時，隨時回到內在中心，與你的力量動物並肩航行。
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:36 }}>
              {[
                ['核心學習', '連結下部世界守護盟友、海底輪頌缽接地'],
                ['課程形式', '一對一 · 兩人團班 · 2-6人小組'],
                ['課程時長', '4 小時'],
                ['銜接建議', '進入所有進階課程的基石，建議首選'],
              ].map(([k,v]) => (
                <div key={k} style={{ display:'flex', gap:16, fontSize:13, paddingBottom:10, borderBottom:'1px solid rgba(160,118,58,0.12)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#A0763A', opacity:0.85, flexShrink:0, width:72 }}>{k}</span>
                  <span style={{ color:'rgba(242,239,234,0.65)', lineHeight:1.7 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap:16, padding:'16px 20px', background:'rgba(160,118,58,0.07)', border:'1px solid rgba(160,118,58,0.22)' }}>
              <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#A0763A', opacity:0.8 }}>INVESTMENT</span>
              <div style={{ fontSize:13, color:'rgba(242,239,234,0.7)', lineHeight:1.8 }}>
                一對一 NT. 60,000　·　兩人 NT. 30,000/人　·　小組 NT. 15,000/人
              </div>
            </div>
          </div>
          <div style={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center', minHeight:400 }}>
            <Image src="/sc/animals/dragon.png" alt="" aria-hidden width={420} height={420}
              style={{ width:'min(360px,85%)', height:'auto', filter:'sepia(0.6) hue-rotate(10deg) saturate(1.5) brightness(0.82)', opacity:0.55, animation:'sc-breathe 5s ease-in-out infinite', mixBlendMode:'luminosity' }} />
            <Image src="/sc/animals/akita.png" alt="" aria-hidden width={200} height={200}
              style={{ position:'absolute', bottom:20, right:20, width:120, height:'auto', filter:'sepia(0.5) hue-rotate(15deg) saturate(1.3) brightness(0.8)', opacity:0.35, mixBlendMode:'luminosity' }} />
          </div>
        </div>
      </section>

      {/* ═══ SC-02 連結高維指導靈 ═══ */}
      {/* Theme: 夜空 · 月光 · 高維頻道 — near-black with cool silver-pearl */}
      <section id="section-sc02" style={{ padding:'100px 0', background:'#090C14', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,215,235,0.12) 0%, rgba(160,185,215,0.06) 45%, transparent 70%), radial-gradient(ellipse 35% 50% at 10% 75%, rgba(180,200,225,0.07) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* 書法圖 */}
        <Image src="/sc/black/指導靈.png" alt="" aria-hidden width={600} height={700}
          style={{ position:'absolute', left:'-2%', top:'50%', transform:'translateY(-50%)', height:'85vh', width:'auto',
            filter:'invert(1) sepia(0.15) saturate(0.8) brightness(1.15)', mixBlendMode:'screen', opacity:0.18, pointerEvents:'none' }} />
        {/* 薩滿巫 secondary */}
        <Image src="/sc/black/薩滿巫.png" alt="" aria-hidden width={500} height={600}
          style={{ position:'absolute', right:'5%', bottom:'-10%', width:'28%', height:'auto',
            filter:'invert(1) sepia(0.1) brightness(1.1)', mixBlendMode:'screen', opacity:0.08, pointerEvents:'none' }} />
        {/* 圓圈 celestial orb */}
        <Image src="/resource/single/材質-4-圓圈/黑圈-3.png" alt="" aria-hidden width={300} height={300}
          style={{ position:'absolute', top:'12%', left:'42%', width:180, height:'auto',
            filter:'invert(1)', mixBlendMode:'screen', opacity:0.09, pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div style={{ order:2 }}>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'#B0C4DC', opacity:0.9, padding:'4px 12px', border:'1px solid rgba(176,196,220,0.35)' }}>SC-02</div>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'rgba(176,196,220,0.6)' }}>上部世界 · Upper World</div>
            </div>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#F2EFEA', marginBottom:10 }}>連結高維指導靈</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.28em', color:'#B0C4DC', opacity:0.85, marginBottom:28, textTransform:'uppercase' }}>Spirit Guide · Upper World</p>
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(242,239,234,0.7)', marginBottom:32, maxWidth:480 }}>
              不同於守護與行動力的力量動物，指導靈是純粹的光與愛，是具備高度智慧的靈魂導師。祂們持有你的生命藍圖，能在你面臨人生十字路口時，提供超越小我視角的宏觀指引。<br /><br />
              課程中將建立嚴謹的辨識機制——在宇宙中，愛的能量是無法偽造的——協助你學會區分大腦雜訊與來自高維的真實訊息。
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:36 }}>
              {[
                ['核心學習', '開啟上部世界通訊頻道、辨識愛的能量訊息'],
                ['課程形式', '一對一 · 兩人團班'],
                ['課程時長', '2 – 3.5 小時'],
                ['銜接建議', '強化日常生命抉擇的導航力，建議完成 SC-01 後進行'],
              ].map(([k,v]) => (
                <div key={k} style={{ display:'flex', gap:16, fontSize:13, paddingBottom:10, borderBottom:'1px solid rgba(176,196,220,0.1)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#B0C4DC', opacity:0.85, flexShrink:0, width:72 }}>{k}</span>
                  <span style={{ color:'rgba(242,239,234,0.65)', lineHeight:1.7 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap:16, padding:'16px 20px', background:'rgba(176,196,220,0.06)', border:'1px solid rgba(176,196,220,0.18)' }}>
              <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#B0C4DC', opacity:0.8 }}>INVESTMENT</span>
              <div style={{ fontSize:13, color:'rgba(242,239,234,0.7)', lineHeight:1.8 }}>
                一對一 NT. 20,000　·　兩人 NT. 10,000/人
              </div>
            </div>
          </div>
          <div style={{ order:1, position:'relative', display:'flex', justifyContent:'center', alignItems:'center', minHeight:400 }}>
            <Image src="/sc/animals/crane.png" alt="" aria-hidden width={400} height={400}
              style={{ width:'min(320px,80%)', height:'auto', filter:'sepia(0.1) saturate(0.7) brightness(1.1)', opacity:0.55, animation:'sc-breathe 6s ease-in-out infinite', mixBlendMode:'luminosity' }} />
            <Image src="/sc/animals/crane2.png" alt="" aria-hidden width={250} height={250}
              style={{ position:'absolute', top:10, right:0, width:140, height:'auto', filter:'sepia(0.1) saturate(0.6) brightness(1.05)', opacity:0.28, mixBlendMode:'luminosity' }} />
          </div>
        </div>
      </section>

      {/* ═══ SC-03 七脈輪情緒覺察 ═══ */}
      {/* Theme: 身體 · 情緒 · 流動感 — deep warm terracotta, body warmth */}
      <section id="section-sc03" style={{ padding:'100px 0', background:'#1C0E0A', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 65% 75% at 10% 50%, rgba(180,105,65,0.25) 0%, rgba(140,75,40,0.12) 50%, transparent 70%), radial-gradient(ellipse 45% 55% at 90% 20%, rgba(160,85,50,0.15) 0%, transparent 60%)', pointerEvents:'none' }} />
        {/* 書法圖 */}
        <Image src="/sc/black/七脈輪情緒覺察.png" alt="" aria-hidden width={600} height={700}
          style={{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-50%)', height:'88vh', width:'auto',
            filter:'invert(1) sepia(0.5) saturate(1.8) hue-rotate(340deg) brightness(1.05)', mixBlendMode:'screen', opacity:0.2, pointerEvents:'none' }} />
        {/* 波浪筆觸 = emotion flow */}
        <Image src="/resource/single/材質-5-波/材質-5-1.png" alt="" aria-hidden width={400} height={400}
          style={{ position:'absolute', bottom:'15%', right:'30%', width:200, height:'auto',
            filter:'invert(1) sepia(0.5) hue-rotate(340deg)', mixBlendMode:'screen', opacity:0.14, pointerEvents:'none', transform:'rotate(20deg)' }} />
        <Image src="/resource/single/材質-5-波/材質-5-1_2.png" alt="" aria-hidden width={400} height={400}
          style={{ position:'absolute', top:'10%', left:'42%', width:160, height:'auto',
            filter:'invert(1) sepia(0.4) hue-rotate(340deg)', mixBlendMode:'screen', opacity:0.1, pointerEvents:'none', transform:'rotate(-10deg)' }} />
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'#C4906A', opacity:0.9, padding:'4px 12px', border:'1px solid rgba(196,144,106,0.38)' }}>SC-03</div>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'rgba(196,144,106,0.62)' }}>中部世界 · Middle World</div>
            </div>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#F2EFEA', marginBottom:10 }}>七脈輪情緒覺察</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.28em', color:'#C4906A', opacity:0.85, marginBottom:28, textTransform:'uppercase' }}>Chakra &amp; Emotion · Awareness</p>
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(242,239,234,0.7)', marginBottom:32, maxWidth:480 }}>
              七脈輪是情緒的儲存槽。透過薩滿冥想，我們引領你親自進入脈輪空間，覺察那些被身體凍結的感受。透過「看見」與「表達」，協助能量重新流動，找回情緒的主控權。<br /><br />
              這不是理論課，而是一場深度內在實作——拒絕空談，直接透過薩滿冥想進入潛意識，與真實的情緒感受正面相遇。
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:36 }}>
              {[
                ['核心學習', '薩滿冥想實作脈輪內視、情緒轉化與能量清理'],
                ['課程形式', '一對一'],
                ['課程時長', '2 小時'],
                ['銜接建議', '適合感官敏銳、欲修復情緒慣性的探索者'],
              ].map(([k,v]) => (
                <div key={k} style={{ display:'flex', gap:16, fontSize:13, paddingBottom:10, borderBottom:'1px solid rgba(196,144,106,0.12)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#C4906A', opacity:0.85, flexShrink:0, width:72 }}>{k}</span>
                  <span style={{ color:'rgba(242,239,234,0.65)', lineHeight:1.7 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap:16, padding:'16px 20px', background:'rgba(196,144,106,0.07)', border:'1px solid rgba(196,144,106,0.22)' }}>
              <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#C4906A', opacity:0.8 }}>INVESTMENT</span>
              <div style={{ fontSize:13, color:'rgba(242,239,234,0.7)', lineHeight:1.8 }}>
                一對一 NT. 15,000
              </div>
            </div>
          </div>
          <div style={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center', minHeight:400 }}>
            <Image src="/sc/animals/octopus.png" alt="" aria-hidden width={400} height={400}
              style={{ width:'min(340px,82%)', height:'auto', filter:'sepia(0.6) hue-rotate(340deg) saturate(1.6) brightness(0.82)', opacity:0.55, animation:'sc-breathe 7s ease-in-out infinite', mixBlendMode:'luminosity' }} />
          </div>
        </div>
      </section>

      {/* ═══ SC-04 連結高我 ═══ */}
      {/* Theme: 神聖 · 金光 · 靈魂主權 — near-black with sacred gold */}
      <section id="section-sc04" style={{ padding:'100px 0', background:'#0C0A06', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 70% at 80% 40%, rgba(200,168,72,0.18) 0%, rgba(160,130,50,0.08) 50%, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 70%, rgba(180,148,60,0.1) 0%, transparent 55%)', pointerEvents:'none' }} />
        {/* 書法圖 */}
        <Image src="/sc/black/高我.png" alt="" aria-hidden width={600} height={700}
          style={{ position:'absolute', left:'-2%', top:'50%', transform:'translateY(-50%)', height:'85vh', width:'auto',
            filter:'invert(1) sepia(0.6) saturate(1.8) hue-rotate(38deg) brightness(1.1)', mixBlendMode:'screen', opacity:0.2, pointerEvents:'none' }} />
        {/* 圓圈 sacred circle */}
        <Image src="/resource/single/材質-4-圓圈/黑圈-7.png" alt="" aria-hidden width={400} height={400}
          style={{ position:'absolute', top:'50%', right:'8%', transform:'translateY(-50%)', width:300, height:'auto',
            filter:'invert(1) sepia(0.6) hue-rotate(38deg)', mixBlendMode:'screen', opacity:0.07, pointerEvents:'none' }} />
        <Image src="/resource/single/材質-4-圓圈/黑圈-12.png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', top:'10%', left:'44%', width:110, height:'auto',
            filter:'invert(1) sepia(0.5) hue-rotate(38deg)', mixBlendMode:'screen', opacity:0.08, pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div style={{ order:2 }}>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'#C4B060', opacity:0.9, padding:'4px 12px', border:'1px solid rgba(196,176,96,0.4)' }}>SC-04</div>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'rgba(196,176,96,0.65)' }}>靈魂整合 · Soul Alignment</div>
            </div>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#F2EFEA', marginBottom:10 }}>連結高我</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.28em', color:'#C4B060', opacity:0.85, marginBottom:28, textTransform:'uppercase' }}>Higher Self · Soul Alignment</p>
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(242,239,234,0.7)', marginBottom:24, maxWidth:480 }}>
              高我是你靈魂最純粹、最神聖的面向，持有你此生的生命藍圖。透過這門課，你將在身體高度通透的狀態下，正式接通內在的神聖源頭，完成身心靈合一的全面對齊，找回真正的靈魂主權。
            </p>
            <div style={{ marginBottom:28, padding:'14px 18px', background:'rgba(196,144,106,0.06)', border:'1px solid rgba(196,144,106,0.22)', fontSize:13, lineHeight:1.8, color:'rgba(242,239,234,0.6)' }}>
              <span style={{ fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'0.15em', color:'#C4784A', opacity:0.85, display:'block', marginBottom:6 }}>前置課程 · PREREQUISITE</span>
              本課程建議在參與<strong style={{ color:'rgba(242,239,234,0.85)', fontWeight:500 }}>雅妃老師的重生呼吸課</strong>後進行，讓身體通透感轉化為與高我對話的導航能力。
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:36 }}>
              {[
                ['核心學習', '接通神聖名諱，完成身心靈合一的終極對齊'],
                ['課程形式', '一對一'],
                ['課程時長', '1 小時'],
                ['銜接建議', '建議先完成 SC-01、SC-02，並完成重生呼吸課後進行'],
              ].map(([k,v]) => (
                <div key={k} style={{ display:'flex', gap:16, fontSize:13, paddingBottom:10, borderBottom:'1px solid rgba(196,176,96,0.1)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#C4B060', opacity:0.85, flexShrink:0, width:72 }}>{k}</span>
                  <span style={{ color:'rgba(242,239,234,0.65)', lineHeight:1.7 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap:16, padding:'16px 20px', background:'rgba(196,176,96,0.07)', border:'1px solid rgba(196,176,96,0.22)' }}>
              <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#C4B060', opacity:0.8 }}>INVESTMENT</span>
              <div style={{ fontSize:13, color:'rgba(242,239,234,0.7)', lineHeight:1.8 }}>
                一對一 NT. 8,000
              </div>
            </div>
          </div>
          <div style={{ order:1, position:'relative', display:'flex', justifyContent:'center', alignItems:'center', minHeight:400 }}>
            <Image src="/sc/animals/unicorn.png" alt="" aria-hidden width={400} height={400}
              style={{ width:'min(360px,85%)', height:'auto', filter:'sepia(0.5) hue-rotate(38deg) saturate(1.5) brightness(0.88)', opacity:0.5, animation:'sc-breathe 9s ease-in-out infinite', mixBlendMode:'luminosity' }} />
          </div>
        </div>
      </section>

      {/* ═══ SC-05 尋找內在小孩 ═══ */}
      {/* Theme: 療癒 · 柔韌 · 重新歸位 — deep plum with soft violet warmth */}
      <section id="section-sc05" style={{ padding:'100px 0', background:'#140A16', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 65% 75% at 12% 55%, rgba(160,100,165,0.22) 0%, rgba(120,70,128,0.1) 50%, transparent 70%), radial-gradient(ellipse 40% 50% at 88% 25%, rgba(140,85,148,0.14) 0%, transparent 60%)', pointerEvents:'none' }} />
        {/* 書法圖 */}
        <Image src="/sc/black/內在小孩.png" alt="" aria-hidden width={600} height={700}
          style={{ position:'absolute', right:'-2%', top:'50%', transform:'translateY(-50%)', height:'88vh', width:'auto',
            filter:'invert(1) sepia(0.4) saturate(1.6) hue-rotate(270deg) brightness(1.1)', mixBlendMode:'screen', opacity:0.2, pointerEvents:'none' }} />
        {/* 內在小孩-拿心 secondary */}
        <Image src="/sc/black/內在小孩-拿心.png" alt="" aria-hidden width={400} height={500}
          style={{ position:'absolute', left:'5%', bottom:'-5%', width:'22%', height:'auto',
            filter:'invert(1) sepia(0.35) hue-rotate(270deg)', mixBlendMode:'screen', opacity:0.09, pointerEvents:'none' }} />
        {/* 粉點裝飾 */}
        <Image src="/resource/single/粉點-白/點-1(2).png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', top:'15%', right:'35%', width:120, height:'auto',
            mixBlendMode:'screen', opacity:0.12, pointerEvents:'none' }} />
        <Image src="/resource/single/粉點-白/點-2(2).png" alt="" aria-hidden width={200} height={200}
          style={{ position:'absolute', bottom:'20%', left:'40%', width:90, height:'auto',
            mixBlendMode:'screen', opacity:0.1, pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'#B088B8', opacity:0.9, padding:'4px 12px', border:'1px solid rgba(176,136,184,0.38)' }}>SC-05</div>
              <div style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'rgba(176,136,184,0.62)' }}>靈魂整合 · The Missing Piece</div>
            </div>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,52px)', letterSpacing:'0.03em', lineHeight:1.1, color:'#F2EFEA', marginBottom:10 }}>尋找內在小孩</h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:13, letterSpacing:'0.28em', color:'#B088B8', opacity:0.85, marginBottom:28, textTransform:'uppercase' }}>Inner Child · Soul Retrieval</p>
            <p style={{ fontSize:14, lineHeight:1.95, color:'rgba(242,239,234,0.7)', marginBottom:32, maxWidth:480 }}>
              當個體遭遇超載的創傷，大腦會啟動保護機制，將受傷的意識片段解離並封存——這些被凍結的自我，即是「內在小孩」。<br /><br />
              我們不採取暴力挖掘，而是透過高我與指導靈的導航，辨識那些被凍結在生命角落的「身心過敏原」。以現在的成熟意識進行跨時空的連結，讓因保護而遺落的碎片重新歸位。
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:36 }}>
              {[
                ['核心學習', '辨識身心過敏原，找回解離的靈魂片段'],
                ['課程形式', '一對一深度工作'],
                ['課程時長', '3 小時'],
                ['銜接建議', '建議具備豐富薩滿實踐經驗，完成 SC-01 至 SC-04 後進行'],
              ].map(([k,v]) => (
                <div key={k} style={{ display:'flex', gap:16, fontSize:13, paddingBottom:10, borderBottom:'1px solid rgba(176,136,184,0.12)' }}>
                  <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.12em', color:'#B088B8', opacity:0.85, flexShrink:0, width:72 }}>{k}</span>
                  <span style={{ color:'rgba(242,239,234,0.65)', lineHeight:1.7 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap:16, padding:'16px 20px', background:'rgba(176,136,184,0.07)', border:'1px solid rgba(176,136,184,0.22)' }}>
              <span style={{ fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.15em', color:'#B088B8', opacity:0.8 }}>INVESTMENT</span>
              <div style={{ fontSize:13, color:'rgba(242,239,234,0.7)', lineHeight:1.8 }}>
                一對一 NT. 45,000
              </div>
            </div>
          </div>
          <div style={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center', minHeight:400 }}>
            <Image src="/sc/animals/capybara.png" alt="" aria-hidden width={400} height={400}
              style={{ width:'min(340px,82%)', height:'auto', filter:'sepia(0.4) hue-rotate(270deg) saturate(1.4) brightness(0.85)', opacity:0.5, animation:'sc-breathe 6s ease-in-out infinite', mixBlendMode:'luminosity' }} />
            <Image src="/sc/animals/dik-dik.png" alt="" aria-hidden width={200} height={200}
              style={{ position:'absolute', bottom:30, right:10, width:110, height:'auto', filter:'sepia(0.35) hue-rotate(270deg) saturate(1.3) brightness(0.8)', opacity:0.3, mixBlendMode:'luminosity' }} />
          </div>
        </div>
      </section>

      {/* ═══ 推薦整合搭配 + CTA ═══ */}
      <section style={{ padding:'100px 0', background:'#233D4C', position:'relative' }}>
        <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(94,142,138,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 15% 80%, rgba(74,107,138,0.2) 0%, transparent 55%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 10vw', position:'relative', zIndex:2 }}>

          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <p style={{ fontFamily:'var(--f-mono)', fontSize:12, letterSpacing:'0.22em', color:'#7A9AB5', opacity:0.75, marginBottom:14, textTransform:'uppercase' }}>
              RECOMMENDED PAIRING
            </p>
            <h2 className="tr-d2" style={{ fontSize:'clamp(28px,4vw,48px)', letterSpacing:'0.03em', lineHeight:1.2, color:'#F2EFEA', marginBottom:16 }}>
              推薦整合搭配
            </h2>
            <p style={{ fontFamily:'var(--f-display)', fontWeight:100, fontSize:14, letterSpacing:'0.28em', color:'#7A9AB5', opacity:0.8, marginBottom:24 }}>
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
              <div key={card.title} style={{ display:'flex', flexDirection:'row', border:'1px solid rgba(74,107,138,0.15)', position:'relative', overflow:'hidden', transition:'border-color 0.35s' }}>
                <div style={{ flex:'0 0 65%', padding:'36px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <div>
                    <div className="tr-d2" style={{ fontSize:22, color:'#F2EFEA', marginBottom:16 }}>{card.title}</div>
                    <p style={{ fontSize:13, lineHeight:1.85, color:'rgba(242,239,234,0.55)', marginBottom:24 }}>{card.desc}</p>
                  </div>
                  <Link href={card.href} style={{ display:'inline-flex', alignItems:'center', gap:10, fontFamily:'var(--f-display)', fontWeight:300, fontSize:12, letterSpacing:'0.22em', color:'#7A9AB5', textDecoration:'none', borderBottom:'1px solid rgba(74,107,138,0.35)', paddingBottom:4 }}>
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
          <div style={{ textAlign:'center', paddingTop:64, borderTop:'1px solid rgba(74,107,138,0.1)' }}>
            <div className="tr-d2" style={{ fontSize:28, color:'#F2EFEA', marginBottom:12 }}>準備好開始你的薩滿旅程了嗎？</div>
            <div style={{ fontFamily:'var(--f-elegant)', fontStyle:'italic', fontSize:16, color:'#7A9AB5', marginBottom:32 }}>每一個靈魂都有它的路，讓我們一起找到你的。</div>
            <Link href="/contact" className="sc-cta-btn">
              預約探索諮詢 &nbsp;·&nbsp; BOOK A SESSION
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
