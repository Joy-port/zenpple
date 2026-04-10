interface SectionTitleProps {
  zh: string
  en: string
  dark?: boolean
  mb?: number
  center?: boolean
}

export default function SectionTitle({ zh, en, dark = false, mb = 48, center = false }: SectionTitleProps) {
  const zhColor = dark ? '#fff' : '#2E5A6A'
  const enColor = dark ? 'rgba(255,255,255,0.3)' : 'var(--muted)'

  return (
    <div style={{ marginBottom: mb, textAlign: center ? 'center' : 'left' }}>
      <h2
        className="tr-d2"
        style={{
          fontFamily: 'var(--f-impact)',
          fontWeight: 900,
          fontSize: 'clamp(26px,3.5vw,38px)',
          color: zhColor,
          lineHeight: 1.3,
          marginBottom: 10,
        }}
      >
        {zh}
      </h2>
      <p
        style={{
          fontFamily: 'var(--f-display)',
          fontWeight: 300,
          fontSize: 20,
          letterSpacing: '0.22em',
          color: enColor,
          textTransform: 'uppercase',
        }}
      >
        {en}
      </p>
    </div>
  )
}
