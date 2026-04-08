import React from 'react'

interface Props {
  className?: string
  style?: React.CSSProperties
  'aria-hidden'?: boolean | 'true' | 'false'
}

/** Vertical dots icon for 完整系統路徑 */
export default function HlIconSystemPath({ className, style, 'aria-hidden': ariaHidden }: Props) {
  return (
    <svg width="28" height="28" viewBox="0 0 56 56" fill="none" className={className} style={style} aria-hidden={ariaHidden}>
      <circle cx="28" cy="8"    r="4"   fill="currentColor" opacity="0.90" />
      <circle cx="28" cy="20"   r="3.5" fill="currentColor" opacity="0.75" />
      <circle cx="28" cy="30.5" r="3"   fill="currentColor" opacity="0.60" />
      <circle cx="28" cy="39.5" r="2.5" fill="currentColor" opacity="0.45" />
      <circle cx="28" cy="47"   r="2"   fill="currentColor" opacity="0.32" />
      <circle cx="20" cy="23"   r="2"   fill="currentColor" opacity="0.28" />
      <circle cx="36" cy="23"   r="2"   fill="currentColor" opacity="0.28" />
    </svg>
  )
}
