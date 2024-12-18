import type { Metadata } from 'next'
import '@/styles/globals.css'
export const metadata: Metadata = {
  title: 'مختبرات نورمار',
  description: 'خدمات معمل الأسنان عالية الجودة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body >{children}</body>
    </html>
  )
}

