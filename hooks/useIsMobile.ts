'use client'

import { useState, useEffect } from 'react'

/**
 * Returns:
 *   null  — not yet hydrated (render a neutral/skeleton fallback)
 *   true  — confirmed mobile  (< 768 px)
 *   false — confirmed desktop (≥ 768 px)
 *
 * Use ONLY for behaviour differences (different interaction models).
 * Use CSS / Tailwind breakpoints for all layout and typography changes.
 */
export function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return isMobile
}
