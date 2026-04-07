'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PageSection from '@/components/ui/PageSection'
import PageTitle from '@/components/ui/PageTitle'
import { useIsMobile } from '@/hooks/useIsMobile'

const CLIP_AS = 'M 290,158 L 293,77 L 296,67 L 299,61 L 302,57 L 305,53 L 308,50 L 311,47 L 314,44 L 317,41 L 320,39 L 323,37 L 326,35 L 329,33 L 332,32 L 335,30 L 338,29 L 341,28 L 344,27 L 347,27 L 350,26 L 353,26 L 356,26 L 359,26 L 362,27 L 365,27 L 368,28 L 371,28 L 374,29 L 377,30 L 380,31 L 383,32 L 386,34 L 389,35 L 392,37 L 395,39 L 398,42 L 401,44 L 404,47 L 407,51 L 410,54 L 413,58 L 416,63 L 419,69 L 422,80 L 422,94 L 419,102 L 416,108 L 413,112 L 410,116 L 407,119 L 404,122 L 401,124 L 398,126 L 395,129 L 392,132 L 389,136 L 386,140 L 383,142 L 380,144 L 377,145 L 374,145 L 371,145 L 368,146 L 365,148 L 362,150 L 359,154 L 356,158 L 353,161 L 350,164 L 347,167 L 344,170 L 341,172 L 338,174 L 335,174 L 332,174 L 329,173 L 326,172 L 323,170 L 320,168 L 317,164 L 314,160 L 311,157 L 308,156 L 305,156 L 302,157 L 299,159 L 296,162 L 293,164 L 290,164 Z'
const CLIP_SC = 'M 239,240 L 242,234 L 245,226 L 248,219 L 251,212 L 254,206 L 257,201 L 260,196 L 263,192 L 266,188 L 269,185 L 272,181 L 275,179 L 278,177 L 281,175 L 284,173 L 287,169 L 290,165 L 293,162 L 296,159 L 299,157 L 302,156 L 305,155 L 308,154 L 311,155 L 314,157 L 317,160 L 320,162 L 323,165 L 326,168 L 329,171 L 332,172 L 335,173 L 338,173 L 341,172 L 344,170 L 347,168 L 350,165 L 353,162 L 356,159 L 359,156 L 362,153 L 365,150 L 368,148 L 371,146 L 374,145 L 377,145 L 380,145 L 383,144 L 386,142 L 389,139 L 392,136 L 395,133 L 398,130 L 401,127 L 404,124 L 407,123 L 410,123 L 413,124 L 416,126 L 419,130 L 422,135 L 425,141 L 428,148 L 431,153 L 434,157 L 437,160 L 440,162 L 443,166 L 446,177 L 449,185 L 452,192 L 455,196 L 458,199 L 461,202 L 464,204 L 467,206 L 470,207 L 473,207 L 476,207 L 479,210 L 482,217 L 485,222 L 488,227 L 491,232 L 494,237 L 497,241 L 500,246 L 503,251 L 506,259 L 506,266 L 503,263 L 500,261 L 497,258 L 494,256 L 491,253 L 488,251 L 485,248 L 482,246 L 479,244 L 476,242 L 473,242 L 470,241 L 467,241 L 464,239 L 461,237 L 458,235 L 455,233 L 452,232 L 449,232 L 446,233 L 443,234 L 440,236 L 437,237 L 434,239 L 431,241 L 428,243 L 425,244 L 422,246 L 419,247 L 416,249 L 413,250 L 410,251 L 407,251 L 404,252 L 401,252 L 398,252 L 395,252 L 392,252 L 389,251 L 386,250 L 383,249 L 380,247 L 377,245 L 374,242 L 371,240 L 368,237 L 365,234 L 362,232 L 359,229 L 356,226 L 353,223 L 350,221 L 347,218 L 344,217 L 341,216 L 338,216 L 335,215 L 332,213 L 329,211 L 326,209 L 323,207 L 320,204 L 317,201 L 314,199 L 311,196 L 308,195 L 305,195 L 302,195 L 299,196 L 296,197 L 293,198 L 290,200 L 287,202 L 284,204 L 281,207 L 278,209 L 275,212 L 272,215 L 269,218 L 266,222 L 263,225 L 260,228 L 257,232 L 254,234 L 251,236 L 248,237 L 245,238 L 242,240 L 239,241 Z'
const CLIP_HL = 'M 187,313 L 190,306 L 193,302 L 196,298 L 199,295 L 202,292 L 205,288 L 208,284 L 211,279 L 214,273 L 217,268 L 220,263 L 223,259 L 226,255 L 229,251 L 232,248 L 235,244 L 238,241 L 241,238 L 244,237 L 247,236 L 250,235 L 253,234 L 256,232 L 259,230 L 262,227 L 265,223 L 268,220 L 271,216 L 274,213 L 277,210 L 280,207 L 283,204 L 286,201 L 289,199 L 292,197 L 295,196 L 298,195 L 301,194 L 304,194 L 307,194 L 310,195 L 313,197 L 316,199 L 319,202 L 322,206 L 325,208 L 328,210 L 331,212 L 334,213 L 337,214 L 340,215 L 343,216 L 346,217 L 349,219 L 352,221 L 355,223 L 358,226 L 361,229 L 364,233 L 367,237 L 370,240 L 373,242 L 376,243 L 379,245 L 382,246 L 385,247 L 388,249 L 391,250 L 394,250 L 397,251 L 400,250 L 403,250 L 406,249 L 409,248 L 412,248 L 415,246 L 418,245 L 421,243 L 424,242 L 427,240 L 430,238 L 433,237 L 436,235 L 439,234 L 442,233 L 445,232 L 448,232 L 451,232 L 454,232 L 457,233 L 460,234 L 463,236 L 466,238 L 469,240 L 472,241 L 475,242 L 478,243 L 481,244 L 484,246 L 487,248 L 490,250 L 493,253 L 496,256 L 499,258 L 502,260 L 505,263 L 508,264 L 511,266 L 514,268 L 517,269 L 520,271 L 523,274 L 526,278 L 529,282 L 532,285 L 535,288 L 538,291 L 541,294 L 544,296 L 547,298 L 550,300 L 553,302 L 556,304 L 559,306 L 559,307 L 556,306 L 553,305 L 550,304 L 547,303 L 544,302 L 541,300 L 538,299 L 535,297 L 532,294 L 529,293 L 526,292 L 523,291 L 520,289 L 517,288 L 514,287 L 511,285 L 508,283 L 505,281 L 502,280 L 499,278 L 496,277 L 493,276 L 490,274 L 487,272 L 484,271 L 481,269 L 478,268 L 475,267 L 472,266 L 469,266 L 466,266 L 463,266 L 460,267 L 457,267 L 454,268 L 451,269 L 448,270 L 445,272 L 442,273 L 439,275 L 436,276 L 433,277 L 430,278 L 427,279 L 424,280 L 421,281 L 418,281 L 415,282 L 412,281 L 409,281 L 406,281 L 403,281 L 400,282 L 397,282 L 394,283 L 391,285 L 388,286 L 385,288 L 382,289 L 379,291 L 376,293 L 373,294 L 370,296 L 367,298 L 364,299 L 361,301 L 358,302 L 355,304 L 352,306 L 349,307 L 346,308 L 343,309 L 340,310 L 337,311 L 334,311 L 331,311 L 328,311 L 325,312 L 322,312 L 319,312 L 316,312 L 313,312 L 310,311 L 307,311 L 304,311 L 301,310 L 298,310 L 295,309 L 292,308 L 289,308 L 286,307 L 283,306 L 280,305 L 277,304 L 274,303 L 271,302 L 268,301 L 265,300 L 262,299 L 259,299 L 256,298 L 253,298 L 250,298 L 247,298 L 244,298 L 241,298 L 238,298 L 235,298 L 232,299 L 229,300 L 226,301 L 223,302 L 220,303 L 217,304 L 214,306 L 211,307 L 208,309 L 205,310 L 202,312 L 199,314 L 196,316 L 193,317 L 190,318 L 187,316 Z'
const CLIP_QI = 'M 133,348 L 136,343 L 139,339 L 142,337 L 145,336 L 148,335 L 151,334 L 154,333 L 157,332 L 160,332 L 163,331 L 166,330 L 169,329 L 172,328 L 175,326 L 178,325 L 181,323 L 184,321 L 187,319 L 190,318 L 193,316 L 196,314 L 199,313 L 202,311 L 205,310 L 208,309 L 211,308 L 214,306 L 217,305 L 220,304 L 223,302 L 226,301 L 229,300 L 232,299 L 235,299 L 238,298 L 241,297 L 244,297 L 247,297 L 250,297 L 253,297 L 256,297 L 259,297 L 262,298 L 265,299 L 268,299 L 271,300 L 274,301 L 277,303 L 280,305 L 283,306 L 286,307 L 289,309 L 292,310 L 295,311 L 298,311 L 301,312 L 304,312 L 307,313 L 310,313 L 313,313 L 316,313 L 319,313 L 322,313 L 325,313 L 328,313 L 331,312 L 334,311 L 337,311 L 340,310 L 343,309 L 346,308 L 349,307 L 352,306 L 355,305 L 358,304 L 361,303 L 364,301 L 367,300 L 370,298 L 373,296 L 376,294 L 379,292 L 382,290 L 385,288 L 388,286 L 391,285 L 394,283 L 397,282 L 400,281 L 403,281 L 406,281 L 409,281 L 412,281 L 415,281 L 418,281 L 421,281 L 424,281 L 427,280 L 430,279 L 433,278 L 436,277 L 439,276 L 442,275 L 445,273 L 448,272 L 451,271 L 454,270 L 457,269 L 460,268 L 463,267 L 466,266 L 469,266 L 472,265 L 475,266 L 478,267 L 481,268 L 484,270 L 487,271 L 490,273 L 493,274 L 496,275 L 499,277 L 502,278 L 505,279 L 508,280 L 511,282 L 514,283 L 517,285 L 520,286 L 523,288 L 526,290 L 529,291 L 532,293 L 535,294 L 538,296 L 541,298 L 544,299 L 547,301 L 550,302 L 553,304 L 556,306 L 559,307 L 562,308 L 565,309 L 568,311 L 571,312 L 574,314 L 577,315 L 580,317 L 583,319 L 586,321 L 589,324 L 592,327 L 595,332 L 598,339 L 598,347 L 595,348 L 592,349 L 589,350 L 586,351 L 583,352 L 580,352 L 577,353 L 574,353 L 571,353 L 568,353 L 565,353 L 562,353 L 559,353 L 556,353 L 553,353 L 550,353 L 547,353 L 544,353 L 541,352 L 538,352 L 535,352 L 532,352 L 529,352 L 526,352 L 523,351 L 520,351 L 517,350 L 514,350 L 511,350 L 508,350 L 505,350 L 502,350 L 499,350 L 496,350 L 493,350 L 490,350 L 487,350 L 484,350 L 481,350 L 478,350 L 475,351 L 472,351 L 469,351 L 466,352 L 463,352 L 460,352 L 457,353 L 454,353 L 451,354 L 448,354 L 445,354 L 442,355 L 439,355 L 436,355 L 433,356 L 430,356 L 427,356 L 424,357 L 421,357 L 418,357 L 415,357 L 412,358 L 409,358 L 406,358 L 403,358 L 400,358 L 397,358 L 394,358 L 391,359 L 388,359 L 385,359 L 382,359 L 379,359 L 376,359 L 373,359 L 370,359 L 367,358 L 364,358 L 361,358 L 358,357 L 355,357 L 352,356 L 349,355 L 346,355 L 343,354 L 340,353 L 337,352 L 334,352 L 331,352 L 328,351 L 325,351 L 322,351 L 319,351 L 316,352 L 313,352 L 310,352 L 307,352 L 304,352 L 301,353 L 298,353 L 295,354 L 292,354 L 289,354 L 286,355 L 283,355 L 280,355 L 277,356 L 274,356 L 271,357 L 268,357 L 265,357 L 262,357 L 259,357 L 256,357 L 253,356 L 250,356 L 247,355 L 244,355 L 241,354 L 238,354 L 235,354 L 232,354 L 229,353 L 226,353 L 223,353 L 220,353 L 217,354 L 214,354 L 211,354 L 208,354 L 205,355 L 202,355 L 199,356 L 196,356 L 193,356 L 190,357 L 187,357 L 184,358 L 181,358 L 178,358 L 175,358 L 172,359 L 169,359 L 166,359 L 163,360 L 160,360 L 157,360 L 154,360 L 151,360 L 148,360 L 145,359 L 142,358 L 139,358 L 136,356 L 133,354 Z'

const zones = [
  {
    id: 'AS',
    code: 'AS · TS-PE',
    href: '/as',
    img: '/index/mountain-cut-as.png',
    clipPath: CLIP_AS,
    accent: '#E1C06F',
    accentRgb: '225,192,111',
    label: '高階職業養成',
    shortLabel: '高階',
    sub: '從自覺走向大地',
    tipPos: { top: '5%', left: '62%' } as React.CSSProperties,
    dot: '#e8c000',
    dotLabel: 'AS · TS-PE　高階職業養成',
  },
  {
    id: 'SC',
    code: 'SC',
    href: '/sc',
    img: '/index/mountain-cut-sc.png',
    clipPath: CLIP_SC,
    accent: '#ADBCC8',
    accentRgb: '173,188,200',
    label: '薩滿靈魂覺醒',
    shortLabel: '薩滿',
    sub: '學會與高靈團隊航行',
    tipPos: { top: '30%', right: '8%' } as React.CSSProperties,
    dot: '#9090c8',
    dotLabel: 'SC　薩滿靈魂覺醒',
  },
  {
    id: 'HL',
    code: 'HL',
    href: '/hl',
    img: '/index/mountain-cut-hl.png',
    clipPath: CLIP_HL,
    accent: '#D09D9F',
    accentRgb: '208,157,159',
    label: '深層系統對齊',
    shortLabel: '深層',
    sub: '校準生命的了心共振',
    tipPos: { top: '40%', left: '8%' } as React.CSSProperties,
    dot: '#d08090',
    dotLabel: 'HL　深層系統對齊',
  },
  {
    id: 'QI',
    code: 'QI',
    href: '/qi-sb',
    img: '/index/mountain-cut-qi.png',
    clipPath: CLIP_QI,
    accent: '#CB9E85',
    accentRgb: '203,158,133',
    label: '即時洞察與梳理',
    shortLabel: '即時',
    sub: '在迷霧中看清局勢',
    tipPos: { top: '67%', left: '1.5%' } as React.CSSProperties,
    dot: '#c8a070',
    dotLabel: 'QI　即時洞察與梳理',
  },
]

export default function EcosystemMountain2() {
  const router = useRouter()
  const [hovered, setHovered] = useState<string | null>(null)
  const isMobile = useIsMobile()

  return (
    <PageSection ghost="SENSING WAVE" style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>

      <div className="wrap">

        {/* ── Outer container ── */}
        <div style={{ position: 'relative' }}>

          <PageTitle sub="Two Paths, One Mountain" title="兩個方向，一座山" />

          {/* ── Mountain + tooltips ── */}
          {/* Full-bleed on mobile via CSS: -mx-[var(--gutter)] escapes .wrap gutter, md:mx-0 resets on desktop */}
          <div className="-mx-[var(--gutter)] md:mx-0" style={{ position: 'relative', zIndex: 1 }}>
            <svg
              viewBox="0 0 700 390"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', display: 'block' }}
            >
              <defs>
                {zones.map(z => (
                  <clipPath key={`clip-${z.id}`} id={`clip-${z.id}`}>
                    <path d={z.clipPath} />
                  </clipPath>
                ))}
              </defs>

              {/* Base: full mountain */}
              <image
                href="/index/mountain-full.png"
                x="0" y="0" width="700" height="390"
                preserveAspectRatio="xMidYMid meet"
                style={{ opacity: hovered ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
              />

              {/* Cut layers */}
              {zones.map((z, i) => {
                let opacity = 0
                if (hovered) {
                  const hoveredIdx = zones.findIndex(h => h.id === hovered)
                  if (z.id === hovered) opacity = 1
                  else if (i < hoveredIdx) opacity = 0.3
                }
                return (
                  <image
                    key={`img-${z.id}`}
                    href={z.img}
                    x="0" y="0" width="700" height="390"
                    preserveAspectRatio="xMidYMid meet"
                    clipPath={`url(#clip-${z.id})`}
                    style={{ opacity, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}
                  />
                )
              })}

              {/* Hit zones */}
              {zones.map(z => (
                <path
                  key={`zone-${z.id}`}
                  d={z.clipPath}
                  fill="transparent"
                  stroke="none"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={isMobile === false ? () => setHovered(z.id) : undefined}
                  onMouseLeave={isMobile === false ? () => setHovered(null) : undefined}
                  onClick={() => router.push(z.href)}
                />
              ))}
            </svg>

            {/* Tooltips — hidden until hydrated (isMobile !== null) to avoid SSR/CSR mismatch */}
            {isMobile !== null && zones.map(z => (
              <div
                key={`tip-${z.id}`}
                onClick={isMobile === true ? () => router.push(z.href) : undefined}
                style={{
                  position: 'absolute',
                  ...z.tipPos,
                  /* Behaviour: mobile always visible; desktop fades on hover */
                  opacity: isMobile === true ? 1 : (hovered === null ? 1 : (hovered === z.id ? 1 : 0)),
                  transition: 'opacity 0.25s ease',
                  /* Behaviour: mobile is tappable; desktop is pointer-events:none (hit zones handle clicks) */
                  pointerEvents: isMobile === true ? 'auto' : 'none',
                  cursor: isMobile === true ? 'pointer' : 'default',
                  zIndex: 10,
                  background: `rgba(${z.accentRgb}, 0.12)`,
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderLeft: `4px solid ${z.accent}`,
                  borderRadius: '4px 10px 10px 4px',
                  /* Layout: CSS clamp handles padding + maxWidth responsively */
                  padding: 'clamp(7px, 1vw, 12px) clamp(11px, 1.5vw, 16px)',
                  maxWidth: 'clamp(90px, 15vw, 210px)',
                }}
              >
                {/* Label — behaviour: short on mobile, full on desktop */}
                <div style={{
                  fontFamily: 'var(--f-zh)',
                  fontWeight: 500,
                  fontSize: 'clamp(13px, 2vw, 20px)',
                  letterSpacing: '0.04em',
                  color: 'var(--ink)',
                  lineHeight: 1.2,
                  marginBottom: isMobile === true ? 0 : 6,
                }}>
                  {isMobile === true ? z.shortLabel : z.label}
                </div>

                {/* Desktop only: horizontal divider + sub text */}
                {isMobile === false && (
                  <>
                    <div style={{ width: 24, height: 1, background: z.accent, opacity: 0.4, marginBottom: 6 }} />
                    <div style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 'clamp(12px, 1.2vw, 15px)',
                      letterSpacing: '0.08em',
                      color: 'var(--muted)',
                      lineHeight: 1.6,
                    }}>
                      {z.sub}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
    </PageSection>
  )
}
