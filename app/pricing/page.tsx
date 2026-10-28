import type { Metadata } from 'next'
import LandingNav from '@/components/landing/nav'
import LandingFooter from '@/components/landing/footer'
import ScrollReveal from '@/components/landing/scroll-reveal'
import CtaButton from '@/components/landing/cta-button'
import { PRICING } from '@/content/copy'
import Link from 'next/link'

export const metadata: Metadata = {
  title: PRICING.metaTitle,
  description: PRICING.metaDescription,
}

export default function PricingPage() {
  return (
    <>
      <LandingNav />
      <main>
        <section className="px-5 pt-16 md:pt-24 pb-12 text-center">
          <ScrollReveal>
            <h1 className="text-[2.5rem] leading-[1.2] md:text-6xl md:leading-[1.15] font-extrabold tracking-tight text-gray-900 mb-5 whitespace-pre-line">
              {PRICING.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">{PRICING.subtitle}</p>
          </ScrollReveal>
        </section>

        {/* 플랜 카드 */}
        <section className="px-5 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRICING.plans.map((plan, i) => {
              const isFree = plan.id === 'student'
              return (
                <ScrollReveal key={plan.id} delay={i * 80}>
                  <div
                    className={`relative rounded-[28px] p-7 flex flex-col h-full ${
                      isFree
                        ? 'bg-primary-700 text-white'
                        : plan.highlight
                          ? 'bg-white ring-2 ring-primary-700'
                          : 'bg-gray-100'
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute top-6 right-6 bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                    <div className={`text-xl font-extrabold mb-1 ${isFree ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </div>
                    <div className={`text-sm mb-6 ${isFree ? 'text-white/75' : 'text-gray-500'}`}>{plan.target}</div>
                    <div className="mb-6">
                      <span className={`text-4xl font-extrabold ${isFree ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                      {!isFree && <span className="text-base text-gray-500 ml-1">{PRICING.perMonth}</span>}
                    </div>
                    <ul className="space-y-2.5 flex-1 mb-8">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className={`flex items-start gap-2 text-[15px] ${isFree ? 'text-white/90' : 'text-gray-700'}`}
                        >
                          <span className={isFree ? 'text-white' : 'text-primary-700'}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <CtaButton
                      href={plan.href}
                      variant={isFree ? 'white' : plan.highlight ? 'primary' : 'outline'}
                      size="md"
                    >
                      {plan.cta}
                    </CtaButton>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">{PRICING.footnote}</p>
        </section>

        {/* 비교표 */}
        <section className="px-5 py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center mb-10">
                {PRICING.compareTitle}
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-[28px] overflow-x-auto">
                <table className="w-full min-w-[560px] text-[15px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      {PRICING.compareHeader.map((h, i) => (
                        <th
                          key={i}
                          className={`py-5 px-4 font-bold ${i === 0 ? 'text-left' : 'text-center'} ${
                            i === 1 ? 'text-primary-700' : 'text-gray-900'
                          }`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING.compareRows.map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100 last:border-0">
                        {row.map((cell, i) => (
                          <td
                            key={i}
                            className={`py-4 px-4 ${i === 0 ? 'text-left font-semibold text-gray-900' : 'text-center text-gray-600'}`}
                          >
                            {cell === '✓' ? <span className="text-primary-700 font-bold">✓</span> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
            <p className="text-center text-base text-gray-500 mt-10">
              {PRICING.contactPrompt}{' '}
              <Link href="/contact" className="text-primary-700 font-semibold hover:underline">
                {PRICING.contactLink}
              </Link>
            </p>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  )
}
