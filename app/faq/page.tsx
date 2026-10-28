import type { Metadata } from 'next'
import LandingNav from '@/components/landing/nav'
import LandingFooter from '@/components/landing/footer'
import ScrollReveal from '@/components/landing/scroll-reveal'
import CtaButton from '@/components/landing/cta-button'
import FaqAccordion from '@/components/landing/faq-accordion'
import { APP_URL, FAQ } from '@/content/copy'

export const metadata: Metadata = {
  title: FAQ.metaTitle,
  description: FAQ.metaDescription,
}

export default function FaqPage() {
  return (
    <>
      <LandingNav />
      <main>
        <section className="px-5 pt-16 md:pt-24 pb-12 text-center">
          <ScrollReveal>
            <h1 className="text-[2.5rem] md:text-6xl font-extrabold tracking-tight text-gray-900 mb-5">{FAQ.title}</h1>
            <p className="text-lg text-gray-600">{FAQ.subtitle}</p>
          </ScrollReveal>
        </section>

        <section className="px-5 pb-20">
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={FAQ.items} />
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-14">
              <CtaButton href={APP_URL} size="md">
                {FAQ.cta}
              </CtaButton>
              <CtaButton href="/contact" variant="outline" size="md">
                {FAQ.contact}
              </CtaButton>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  )
}
