'use client'

import { useEffect, useRef } from 'react'

/**
 * HlHeroBackground
 * Animated canvas background for the HL page hero section.
 *
 * Animation principles (design_template.html §08):
 *   - Slow, organic, non-distracting — the space breathes, it doesn't dance
 *   - Gradient drift: ~10s cycle
 *   - Breathing orbs: 3.5–5s scale+opacity pulse
 *   - Ripple rings: sporadic water-drop rings
 */

// ── HL colour palette ────────────────────────────────────────────────────────
// rose: #C47B7B   purple: #7B6B9E   deep: #3a2d40

// Breathing background orbs — drift slowly around their anchor
const BG_ORBS = [
  { bx: 0.22, by: 0.42, r: 1.05, dx: 0.008,  dy: 0.006,  phase: 0.0, breatheSpeed: 0.040 },
  { bx: 0.72, by: 0.55, r: 0.90, dx: -0.006, dy: 0.008,  phase: 2.1, breatheSpeed: 0.038 },
  { bx: 0.48, by: 0.18, r: 0.78, dx: 0.005,  dy: -0.005, phase: 4.4, breatheSpeed: 0.044 },
]

// Water-ripple spawn anchors
const DROP_ANCHORS = [
  { bx: 0.25, by: 0.35 },
  { bx: 0.70, by: 0.60 },
  { bx: 0.45, by: 0.72 },
]

type RingState = { r: number; maxR: number; alpha: number; speed: number }
type DropState = { bx: number; by: number; rings: RingState[]; nextDrop: number; frame: number }

export default function HlHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const stateRef  = useRef({
    time: 0,
    drops: DROP_ANCHORS.map((a, i): DropState => ({
      ...a,
      rings: [],
      nextDrop: 80 + i * 90,
      frame: 0,
    })),
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const state = stateRef.current

    // ── Resize (Retina-safe) ──
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // ── Helpers ──
    function spawnRing(drop: DropState, w: number, h: number) {
      drop.rings.push({
        r:     1,
        maxR:  (0.055 + Math.random() * 0.12) * Math.max(w, h),
        alpha: 0.22 + Math.random() * 0.10,
        speed: 0.006 + Math.random() * 0.005,
      })
    }

    // ── Draw frame ──
    function draw(t: number) {
      const w = canvas!.width
      const h = canvas!.height
      ctx.clearRect(0, 0, w, h)

      // 01 · Gradient drift base (~10s cycle)
      const flowT  = t * 0.01
      const focalX = 0.35 + Math.sin(flowT) * 0.18
      const focalY = 0.45 + Math.cos(flowT * 0.7) * 0.10
      const stop1  = 0.38 + Math.sin(flowT * 1.1) * 0.08
      const stop2  = 0.72 + Math.cos(flowT * 0.9) * 0.06

      // 01 · Gradient drift — 煙霞玫 #C47B7B primary, 暮紫 #7B6B9E secondary
      //      Never darker than the base hues; avoid deep purple
      const base = ctx.createRadialGradient(
        focalX * w, focalY * h, 0,
        focalX * w, focalY * h, w * 0.88,
      )
      base.addColorStop(0,     '#D4908A')   // light 煙霞玫
      base.addColorStop(stop1, '#C47B7B')   // 煙霞玫 exact
      base.addColorStop(stop2, '#9A8FBE')   // light 暮紫
      base.addColorStop(1,     '#7B6B9E')   // 暮紫 — ceiling of darkness
      ctx.fillStyle = base
      ctx.fillRect(0, 0, w, h)

      // Soft rose vignette at corners (replaces deep-purple corners)
      const corners: [number, number][] = [[0, 0], [1, 0], [0, 1], [1, 1]]
      corners.forEach(([fx, fy]) => {
        const cx = fx * w, cy = fy * h
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.70)
        g.addColorStop(0,   'rgba(175,105,115,0.28)')
        g.addColorStop(0.5, 'rgba(175,105,115,0.08)')
        g.addColorStop(1,   'rgba(175,105,115,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      })

      // 02 · Breathing orbs — stay in rose range, only gently shift toward light amethyst at edges
      BG_ORBS.forEach(s => {
        const bx      = s.bx + Math.sin(t * s.dx + s.phase) * 0.07
        const by      = s.by + Math.cos(t * s.dy + s.phase + 0.5) * 0.06
        const breathe = 1 + Math.sin(t * s.breatheSpeed + s.phase) * 0.07
        const cx      = bx * w, cy = by * h
        const radius  = s.r * Math.max(w, h) * breathe

        const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        rg.addColorStop(0,    'rgba(220,152,152,0.42)')  // warm light rose
        rg.addColorStop(0.15, 'rgba(196,123,123,0.28)')  // 煙霞玫
        rg.addColorStop(0.35, 'rgba(185,120,138,0.15)')  // rose-pink
        rg.addColorStop(0.60, 'rgba(165,120,158,0.07)')  // light mauve
        rg.addColorStop(0.85, 'rgba(148,130,175,0.03)')  // light amethyst
        rg.addColorStop(1,    'rgba(140,125,170,0)')
        ctx.fillStyle = rg
        ctx.fillRect(0, 0, w, h)
      })

      // Thin rose veil overlay
      const veil = ctx.createLinearGradient(0, 0, w, h)
      veil.addColorStop(0,   'rgba(215,148,148,0.07)')  // warm rose
      veil.addColorStop(0.5, 'rgba(196,123,140,0.04)')
      veil.addColorStop(1,   'rgba(180,130,160,0.05)')  // light mauve edge
      ctx.fillStyle = veil
      ctx.fillRect(0, 0, w, h)

      // 03 · Water ripple rings (sporadic, rose-purple hue)
      state.drops.forEach(drop => {
        const cx = drop.bx * w
        const cy = drop.by * h

        drop.frame++
        if (drop.frame >= drop.nextDrop) {
          spawnRing(drop, w, h)
          drop.nextDrop = drop.frame + 150 + Math.random() * 220
        }

        drop.rings = drop.rings.filter(ring => ring.alpha > 0.004)
        drop.rings.forEach(ring => {
          const progress = ring.r / ring.maxR
          ring.r      += ring.speed * Math.max(w, h)
          ring.alpha  *= 0.984 - progress * 0.012

          const innerR = ring.r * (0.55 + progress * 0.28)
          const a0 = ring.alpha
          const a1 = ring.alpha * 0.50
          const a2 = ring.alpha * 0.16

          const rg = ctx.createRadialGradient(cx, cy, innerR, cx, cy, ring.r)
          rg.addColorStop(0,    'rgba(220,155,155,0)')
          rg.addColorStop(0.25, `rgba(210,148,148,${a0})`)   // warm rose ring
          rg.addColorStop(0.60, `rgba(196,123,138,${a1})`)   // 煙霞玫
          rg.addColorStop(0.85, `rgba(175,115,148,${a2})`)   // rose-mauve
          rg.addColorStop(1,    'rgba(155,110,155,0)')

          ctx.fillStyle = rg
          ctx.beginPath()
          ctx.arc(cx, cy, ring.r, 0, Math.PI * 2)
          ctx.fill()
        })
      })
    }

    // ── Animation loop (pause when off-screen) ──
    let visible = true
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    io.observe(canvas)

    function loop() {
      if (visible) {
        state.time += 0.003   // ~10s base cycle at 60fps
        draw(state.time)
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    />
  )
}
