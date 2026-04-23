import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | 위고업잉글리시',
    default: '위고업잉글리시 — AI 영어학원 학습관리 시스템',
  },
  description:
    '적응형 레벨 테스트, AI 맞춤 학습, 자동 성적 분석까지. 선생님은 교육에 집중하고 나머지는 위고업잉글리시가 합니다. 14일 무료 체험.',
  openGraph: {
    siteName: '위고업잉글리시',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
