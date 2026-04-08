import React from 'react'

interface Props {
  className?: string
  style?: React.CSSProperties
  'aria-hidden'?: boolean | 'true' | 'false'
}

/** Concentric circles icon for 主題精準路徑 */
export default function HlIconThemePath({ className, style, 'aria-hidden': ariaHidden }: Props) {
  return (
    <svg width="28" height="28" viewBox="0 0 56 56" fill="none" className={className} style={style} aria-hidden={ariaHidden}>
      <circle cx="28" cy="28" r="18" fill="currentColor" opacity="0.18" />
      <circle cx="28" cy="28" r="12" fill="currentColor" opacity="0.42" />
      <circle cx="28" cy="28" r="7"  fill="currentColor" opacity="0.90" />
      <circle cx="24" cy="23" r="2.5" fill="white"       opacity="0.45" />
    </svg>
  )
}
