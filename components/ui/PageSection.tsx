import React from 'react'

interface PageSectionProps {
  children: React.ReactNode
  ghost?: React.ReactNode
  style?: React.CSSProperties
  id?: string
  className?: string
}

export default function PageSection({ children, ghost, style, id, className }: PageSectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        paddingTop: 'clamp(120px, 15vw, 160px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        paddingLeft: 'clamp(24px, 5vw, 72px)',
        paddingRight: 'clamp(24px, 5vw, 72px)',
        background: 'var(--base)',
        position: 'relative',
        ...style,
      }}
    >
      {ghost && (
        <div
          aria-hidden="true"
          style={{
            fontFamily: 'var(--f-impact)',
            fontWeight: 900,
            fontSize: 'clamp(50px, 10vw, 80px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            opacity: 0.04,
            position: 'absolute',
            top: 'clamp(28px, 4vw, 48px)',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
            textAlign: 'center',
          }}
        >
          {ghost}
        </div>
      )}
      {children}
    </section>
  )
}
