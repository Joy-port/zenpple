import { ReactNode } from 'react'

interface Props {
  id?: string
  className?: string
  children: ReactNode
}

/**
 * HlSection — reusable centered section wrapper for the HL page.
 * Handles vertical rhythm and generous horizontal centering.
 * Set background / any section-specific overrides via className.
 */
export default function HlSection({ id, className = '', children }: Props) {
  return (
    <section id={id} className={`hl-section${className ? ` ${className}` : ''}`}>
      <div className="hl-section-inner">
        {children}
      </div>
    </section>
  )
}
