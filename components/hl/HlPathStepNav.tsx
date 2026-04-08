'use client'

import { useCallback } from 'react'
import Image from 'next/image'

/**
 * HlPathStepNav — step 01/02 navigation dots for the paths section.
 * 01 is a nav anchor back to #sound-mapping; 02 is the active step.
 */
export default function HlPathStepNav() {
  const navScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('header') as HTMLElement
    const navH = nav ? nav.offsetHeight : 72
    const top = el.getBoundingClientRect().top + window.scrollY - navH - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return (
    <div className="sm-step-icon">
      <div
        className="sm-step-dot-wrap sm-step-dot-wrap--nav"
        onClick={() => navScrollTo('sound-mapping')}
        role="button"
        aria-label="前往第一步"
      >
        <Image src="/resource/circle/pink/粉點-1.png" alt="" fill style={{ objectFit: 'contain' }} aria-hidden="true" />
        <span className="step-dot-num step-dot-num--muted">01</span>
      </div>
      <div className="sm-step-connector" aria-hidden="true" />
      <div className="sm-step-dot-wrap">
        <Image src="/resource/circle/pink/粉點-2.png" alt="" fill style={{ objectFit: 'contain' }} aria-hidden="true" />
        <span className="step-dot-num">02</span>
      </div>
    </div>
  )
}
