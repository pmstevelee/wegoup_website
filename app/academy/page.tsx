import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LandingNav from '@/components/landing/nav'
import LandingFooter from '@/components/landing/footer'
import ScrollReveal from '@/components/landing/scroll-reveal'
import CtaButton from '@/components/landing/cta-button'
import { ACADEMY, APP_URL } from '@/content/copy'

export const metadata: Metadata = {
  title: ACADEMY.metaTitle,
  description: ACADEMY.metaDescription,
}

const CARD_BG = ['bg-primary-100', 'bg-sky-light', 'bg-peach-light', 'bg-sun-light']

export default function AcademyPage() {
  return (
    <>
      <LandingNav />
      <main>
        {/* 히어로 */}
        <section className="px-5 pt-16 md:pt-24 pb-16 text-center">
          <ScrollReveal>
            <div className="inline-block bg-peach-light text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-7">
              {ACADEMY.hero.badge}
            </div>
            <h1 className="text-[2.5rem] leading-[1.2] md:text-6xl md:leading-[1.15] font-extrabold tracking-tight text-gray-900 mb-6 whitespace-pre-line">
              {ACADEMY.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">{ACADEMY.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <CtaButton href={APP_URL}>{ACADEMY.hero.cta}</CtaButton>
              <CtaButton href="/contact" variant="outline">
                {ACADEMY.hero.secondary}
              </CtaButton>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="max-w-5xl mx-auto mt-16 bg-gray-100 rounded-[28px] p-3 md:p-5">
              <div className="relative aspect-[1440/760] rounded-[20px] overflow-hidden bg-white">
                <Image
                  src="/images/screenshot-role-teacher.png"
                  alt="선생님 학생 관리 화면"
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 이런 게 편해져요 */}
        <section className="px-5 py-20 md:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
                {ACADEMY.benefits.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACADEMY.benefits.items.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 80}>
                  <div className="bg-white rounded-[28px] p-8 h-full">
                    <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 text-gray-800 ${CARD_BG[i]}`}>
                      {b.tag}
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 시작은 이렇게 */}
        <section className="px-5 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
                {ACADEMY.howTo.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ACADEMY.howTo.items.map((item, i) => (
                  <li key={item} className={`${CARD_BG[i]} rounded-[28px] p-8 text-center`}>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white text-primary-700 text-xl font-extrabold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="text-xl font-bold text-gray-900">{item}</div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </section>

        {/* 마지막 CTA */}
        <section className="px-5 py-24 md:py-32 bg-primary-700 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {ACADEMY.final.title}
            </h2>
            <p className="text-lg text-white/80 mb-10">{ACADEMY.final.desc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <CtaButton href={APP_URL} variant="white">
                {ACADEMY.final.cta}
              </CtaButton>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full font-bold px-8 py-4 text-lg text-white border border-white/40 hover:bg-white/10 transition-colors"
              >
                {ACADEMY.final.secondary}
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <LandingFooter />
    </>
  )
}
