import SectionHeader from '@/components/ui/SectionHeader'

interface PageTitleProps {
  sub?: string
  title: string
  align?: 'left' | 'center'
}

export default function PageTitle({ sub, title, align = 'center' }: PageTitleProps) {
  return (
    <div style={{ marginBottom: 52, position: 'relative', zIndex: 1 }}>
      <SectionHeader sub={sub} title={title} align={align} />
    </div>
  )
}
