import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '森波 ZENPPLE — 往內定頻，走回自己',
  description: '森波是意識邊界校準場，以頌缽音流、深層系統對齊與薩滿靈魂覺醒，陪你回到主體覺醒。Tune inward. Return to self.',
  keywords: ['ZENPPLE', '森波', '頌缽', '薩滿', '能量定頻', '靈性校準'],
  openGraph: {
    title: '森波 ZENPPLE — 往內定頻，走回自己',
    description: '意識邊界校準場。以聲音、薩滿與深層能量對齊，陪你走回自己。',
    locale: 'zh_TW',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
