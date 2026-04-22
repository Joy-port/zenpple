'use client'
import { useEffect } from 'react'

/**
 * SnapPageEffect
 * Drop into any page to upgrade scroll-snap from proximity → mandatory,
 * ensuring every full-height section snaps fully into view on swipe / scroll.
 * Self-cleaning: removes the class when the component unmounts (route change).
 */
export default function SnapPageEffect() {
  useEffect(() => {
    document.documentElement.classList.add('snap-mandatory')
    return () => {
      document.documentElement.classList.remove('snap-mandatory')
    }
  }, [])
  return null
}
