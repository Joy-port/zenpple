import React from 'react'

interface PageSectionProps {
  children: React.ReactNode
  ghost?: React.ReactNode
  style?: React.CSSProperties
}

export default function PageSection({ children, ghost, style }: PageSectionProps) {
  return (
    <section
      style={{
        paddingTop: 'clamp(300px, 18vw, 280px)',
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
            top: '15%',
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
