import Link from 'next/link'
import { FOOTER, NAV, SITE } from '@/content/copy'

const SUPPORT_LINKS = [
  { href: '/contact', label: '문의하기' },
  { href: '/terms', label: '이용약관' },
  { href: '/privacy', label: '개인정보처리방침' },
]

export default function LandingFooter() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="text-xl font-extrabold text-primary-700 mb-3">{SITE.name}</div>
            <p className="text-[15px] leading-relaxed whitespace-pre-line">{FOOTER.intro}</p>
          </div>

          <div>
            <div className="text-sm font-bold text-gray-900 mb-4">{FOOTER.serviceTitle}</div>
            <ul className="space-y-2.5">
              {NAV.links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] hover:text-gray-900 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold text-gray-900 mb-4">{FOOTER.supportTitle}</div>
            <ul className="space-y-2.5">
              {SUPPORT_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[15px] hover:text-gray-900 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold text-gray-900 mb-4">{FOOTER.contactTitle}</div>
            <ul className="space-y-2.5 text-[15px]">
              <li>{SITE.email}</li>
              <li>카카오톡 {SITE.kakao}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-[13px] text-gray-500 leading-relaxed space-y-1">
          {FOOTER.company.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="pt-3">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
