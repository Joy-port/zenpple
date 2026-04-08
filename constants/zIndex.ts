/**
 * Global z-index scale — import from here, never hardcode z-index values in components.
 *
 * Usage:
 *   import { Z } from '@/constants/zIndex'
 *   style={{ zIndex: Z.modal }}
 */
export const Z = {
  /** Default page content */
  base: 0,
  /** Sticky nav, floating badges */
  sticky: 10,
  /** Nav bar */
  nav: 100,
  /** Tooltips, dropdowns */
  overlay: 200,

  // ── Pearl section (hl page) ─────────────────────────────────────────────
  /** Pearl ring items — local stacking within .pearls-ring-wrap (halo=0 < dot=1 < shine=2) */
  pearlRingBase: 1,
  /** Pearl detail overlay backdrop — sits above page content, below nav */
  pearlBackdrop: 300,
  /** Pearl detail panel card */
  pearlPanel: 310,

  // ── Persona card modal (homepage) ───────────────────────────────────────
  /** Modals, drawers, lightboxes — blocks all page content */
  modal: 99999,
  /** Grain / global film overlay — must stay above everything including modals */
  grain: 999999,
} as const
