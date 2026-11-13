import { SOCIAL } from '@/content/copy'

/** 유튜브·쓰레드·인스타그램 글자 링크 (새 창) */
export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {SOCIAL.map(({ id, label, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`위고업잉글리시 ${label} (새 창)`}
            className="inline-flex h-10 items-center rounded-full bg-white px-4 text-sm font-semibold text-gray-600 border border-gray-200 hover:text-primary-700 hover:border-primary-700 transition-colors"
          >
            {label} ↗
          </a>
        </li>
      ))}
    </ul>
  )
}
