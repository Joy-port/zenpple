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
      <circle cx="28" cy="10" r="10" fill="currentColor" opacity="0.90" />
      <circle cx="28" cy="30" r="8"  fill="currentColor" opacity="0.65" />
      <circle cx="28" cy="47" r="6"  fill="currentColor" opacity="0.40" />
    </svg>
  )
}
