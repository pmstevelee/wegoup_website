import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE } from '@/content/copy'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
