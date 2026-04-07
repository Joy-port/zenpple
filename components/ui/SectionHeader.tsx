interface SectionHeaderProps {
  label: string
  title: string
  sub?: string
  align?: 'left' | 'center'
  divider?: boolean
  style?: React.CSSProperties
}

export default function SectionHeader({
  label,
  title,
  sub,
  align = 'left',
  divider = false,
  style,
}: SectionHeaderProps) {
  return (
    <div style={{ textAlign: align, ...style }}>
      {divider && (
        <svg
          viewBox="0 0 800 40"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', maxWidth: 640, margin: align === 'center' ? '0 auto 48px' : '0 0 48px' }}
        >
          <line x1="0" y1="20" x2="355" y2="20" stroke="#c0b8ae" strokeWidth="0.5" />
          <circle cx="400" cy="20" r="6" fill="none" stroke="#a09888" strokeWidth="1" />
          <circle cx="400" cy="20" r="12" fill="none" stroke="#c0b8ae" strokeWidth="0.5" />
          <line x1="445" y1="20" x2="800" y2="20" stroke="#c0b8ae" strokeWidth="0.5" />
        </svg>
      )}

      <p className="sec-label" style={align === 'center' ? { justifyContent: 'center' } : undefined}>
        {label}
      </p>

      {sub && (
        <p style={{
          fontFamily: 'var(--f-zh-sans)',
          fontWeight: 300,
          fontSize: 'clamp(16px, 2vw, 26px)',
          letterSpacing: '0.12em',
          color: 'var(--muted)',
          marginBottom: 10,
        }}>
          {sub}
        </p>
      )}

      <h2 style={{
        fontFamily: 'var(--f-zh-sans)',
        fontWeight: 700,
        fontSize: 'clamp(22px, 3vw, 34px)',
        letterSpacing: '0.04em',
        color: 'var(--ink)',
      }}>
        {title}
      </h2>
    </div>
  )
}
