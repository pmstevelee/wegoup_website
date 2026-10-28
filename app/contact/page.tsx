import type { Metadata } from 'next'
import ScrollReveal from '@/components/landing/scroll-reveal'
import ContactForm from '@/components/landing/contact-form'
import LandingNav from '@/components/landing/nav'
import LandingFooter from '@/components/landing/footer'
import CtaButton from '@/components/landing/cta-button'
import { APP_URL, CONTACT } from '@/content/copy'

export const metadata: Metadata = {
  title: CONTACT.metaTitle,
  description: CONTACT.metaDescription,
}

export default function ContactPage() {
  return (
    <>
      <LandingNav />
      <main>
        <section className="px-5 pt-16 md:pt-24 pb-12 text-center">
          <ScrollReveal>
            <h1 className="text-[2.5rem] md:text-6xl font-extrabold tracking-tight text-gray-900 mb-5">
              {CONTACT.title}
            </h1>
            <p className="text-lg text-gray-600">{CONTACT.subtitle}</p>
          </ScrollReveal>
        </section>

        <section className="px-5 pb-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{CONTACT.formTitle}</h2>
                <ContactForm />
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal delay={100}>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{CONTACT.infoTitle}</h2>
                <div className="space-y-3 mb-6">
                  {CONTACT.methods.map((method) => (
                    <div key={method.title} className="bg-gray-100 rounded-[20px] p-5">
                      <div className="font-bold text-gray-900 text-base mb-0.5">{method.title}</div>
                      <div className="text-sm text-gray-500 mb-1.5">{method.desc}</div>
                      {method.link ? (
                        <a
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : undefined}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-base font-semibold text-primary-700 hover:underline"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-base font-semibold text-gray-700">{method.value}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-primary-700 text-white rounded-[20px] p-6">
                  <div className="text-lg font-bold mb-1">{CONTACT.quick.title}</div>
                  <p className="text-sm text-white/80 mb-5">{CONTACT.quick.desc}</p>
                  <CtaButton href={APP_URL} variant="white" size="md">
                    {CONTACT.quick.cta}
                  </CtaButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  )
}
