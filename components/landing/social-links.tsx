import type { ReactNode } from 'react'
import { SOCIAL } from '@/content/copy'

// 아이콘 모양 (24×24 선 아이콘)
const ICONS: Record<(typeof SOCIAL)[number]['id'], ReactNode> = {
  youtube: (
    <>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </>
  ),
  threads: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </>
  ),
  instagram: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </>
  ),
}

/** 유튜브·쓰레드·인스타그램 아이콘 링크 (새 창) */
export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {SOCIAL.map(({ id, label, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            aria-label={`위고업잉글리시 ${label} (새 창)`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 border border-gray-200 hover:text-primary-700 hover:border-primary-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {ICONS[id]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
