import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '薩滿靈魂覺醒 · Shamanic Soul Awakening — ZENPPLE 森波',
  description: '透過薩滿古老智慧，連結力量動物、高維指導靈與內在小孩，找回靈魂最原始的完整性。ZENPPLE 森波 · 薩滿靈魂覺醒課程。',
  keywords: ['薩滿', '薩滿靈魂覺醒', '力量動物', '指導靈', '內在小孩', '脈輪', '高我', 'ZENPPLE', '森波'],
  openGraph: {
    title: '薩滿靈魂覺醒 · Shamanic Soul Awakening',
    description: '透過薩滿古老智慧，連結力量動物、高維指導靈與內在小孩，找回靈魂最原始的完整性。',
    locale: 'zh_TW',
    type: 'website',
  },
}

export default function ScLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
