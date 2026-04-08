interface Props {
  label: string
  title: string
  desc?: string
}

/**
 * HlSectionTitle — centered section header for the HL page.
 * label   : mono eyebrow text (HOW IT WORKS / 掃描 · 第一步 …)
 * title   : main h2 heading
 * desc    : optional sub-description paragraph
 */
export default function HlSectionTitle({ label, title, desc }: Props) {
  return (
    <div className="hl-section-title">
      <div className="section-label">{label}</div>
      <h2 className="sec-h2">{title}</h2>
      {desc && <p className="hl-section-desc">{desc}</p>}
    </div>
  )
}
