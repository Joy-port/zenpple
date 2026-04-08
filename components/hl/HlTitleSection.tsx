interface Props {
  eyebrow?: string  // mono eyebrow, uppercase, rose color (optional — omit to hide)
  title: string     // main heading, Noto Serif TC
  subtitle: string  // sub copy, DM Sans, 60% of title size
}

export default function HlTitleSection({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="hts-wrap">
      {eyebrow && <p className="hts-eyebrow">{eyebrow}</p>}
      <h2 className="hts-title">{title}</h2>
      <p className="hts-subtitle">{subtitle}</p>
    </div>
  )
}
