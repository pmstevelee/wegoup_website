import type { Metadata } from 'next'
import LandingNav from '@/components/landing/nav'
import LandingFooter from '@/components/landing/footer'
import ScrollReveal from '@/components/landing/scroll-reveal'
import CtaButton from '@/components/landing/cta-button'
import { APP_URL, HOME, SITE } from '@/content/copy'

export const metadata: Metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
}

// 카드 색상 (순서대로 적용)
const CARD_COLORS = [
  { bg: 'bg-primary-100', tag: 'bg-white text-primary-700' },
  { bg: 'bg-sky-light', tag: 'bg-white text-sky-700' },
  { bg: 'bg-peach-light', tag: 'bg-white text-orange-600' },
  { bg: 'bg-sun-light', tag: 'bg-white text-amber-600' },
]

function HeroPreview() {
  const p = HOME.preview
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
      {/* 단어 카드 */}
      <div className="bg-primary-700 text-white rounded-[28px] p-7 shadow-xl shadow-primary-700/20">
        <div className="text-sm font-semibold text-white/70 mb-6">{p.wordLabel}</div>
        <div className="text-4xl font-extrabold tracking-tight mb-2">{p.word}</div>
        <div className="text-lg text-white/85">{p.wordMeaning}</div>
        <div className="mt-8 inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-semibold">
          {p.streak}
        </div>
      </div>

      {/* 문법 퀴즈 카드 */}
      <div className="bg-white border border-gray-200 rounded-[28px] p-7 shadow-xl shadow-gray-900/5">
        <div className="text-sm font-semibold text-primary-700 mb-6">{p.grammarLabel}</div>
        <div className="text-xl font-bold text-gray-900 mb-5">{p.grammarQuestion}</div>
        <div className="space-y-2">
          {p.grammarOptions.map((opt) => {
            const correct = opt === p.grammarAnswer
            return (
              <div
                key={opt}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold ${
                  correct ? 'bg-primary-100 text-primary-700 ring-2 ring-primary-700' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {opt}
                {correct && <span aria-label="정답">✓</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <LandingNav />
      <main>
        {/* ① 히어로 */}
        <section className="px-5 pt-16 md:pt-24 pb-20 text-center">
          <ScrollReveal>
            <div className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-1.5 rounded-full mb-7">
              {HOME.hero.badge}
            </div>
            <h1 className="text-[2.75rem] leading-[1.2] md:text-7xl md:leading-[1.15] font-extrabold tracking-tight text-gray-900 mb-6">
              {HOME.hero.titleLine1}
              <br />
              <span className="text-primary-700">{HOME.hero.titleLine2}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 whitespace-pre-line">
              {HOME.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
              <CtaButton href={APP_URL}>{HOME.hero.cta}</CtaButton>
              <CtaButton href="/academy" variant="outline">
                {HOME.hero.secondary}
              </CtaButton>
            </div>
            <p className="text-sm text-gray-400 mb-16">{HOME.hero.note}</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <HeroPreview />
          </ScrollReveal>
        </section>

        {/* ② 공감 훅 */}
        <section className="px-5 py-20 md:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12">
                {HOME.pain.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {HOME.pain.items.map((item, i) => (
                <ScrollReveal key={item.text} delay={i * 100}>
                  <div className="bg-white rounded-[28px] px-6 py-9 h-full">
                    <div className="text-5xl mb-5">{item.emoji}</div>
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <p className="text-xl md:text-2xl font-bold text-primary-700">{HOME.pain.answer}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ③ 3단계 */}
        <section className="px-5 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
                {HOME.steps.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HOME.steps.items.map((step, i) => (
                <ScrollReveal key={step.label} delay={i * 100}>
                  <div className={`${CARD_COLORS[i].bg} rounded-[28px] p-8 h-full`}>
                    <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${CARD_COLORS[i].tag}`}>
                      {step.label}
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ④ 핵심 기능 */}
        <section className="px-5 py-20 md:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center mb-12 whitespace-pre-line leading-tight">
                {HOME.features.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HOME.features.items.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="bg-white rounded-[28px] p-8 h-full">
                    <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${CARD_COLORS[i].bg} text-gray-800`}>
                      {f.tag}
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ⑤ 무료 vs AI */}
        <section className="px-5 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
                {HOME.free.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-3 bg-primary-700 text-white rounded-[28px] p-8">
                  <div className="text-lg font-bold mb-5">✅ {HOME.free.freeTitle}</div>
                  <ul className="grid grid-cols-2 gap-3">
                    {HOME.free.freeItems.map((item) => (
                      <li key={item} className="bg-white/15 rounded-2xl px-4 py-3 text-base font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 bg-gray-100 rounded-[28px] p-8">
                  <div className="text-lg font-bold text-gray-900 mb-5">✨ {HOME.free.aiTitle}</div>
                  <ul className="space-y-3">
                    {HOME.free.aiItems.map((item) => (
                      <li key={item} className="bg-white rounded-2xl px-4 py-3 text-base font-semibold text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-center text-base text-gray-500 mt-6">{HOME.free.note}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ⑥ 숫자 */}
        <section className="px-5 pb-20 md:pb-28">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center">
              {HOME.stats.map((s) => (
                <div key={s.label} className="bg-sky-light rounded-[28px] py-8 px-2">
                  <div className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">{s.value}</div>
                  <div className="text-sm md:text-base text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ⑦ 선생님 배너 */}
        <section className="px-5 pb-20 md:pb-28">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-peach-light rounded-[28px] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{HOME.teacher.title}</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {HOME.teacher.desc}
                </p>
              </div>
              <div className="shrink-0">
                <CtaButton href="/academy" variant="outline" size="md">
                  {HOME.teacher.cta}
                </CtaButton>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ⑧ 마지막 CTA */}
        <section className="px-5 py-24 md:py-32 bg-primary-700 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-10 whitespace-pre-line">
              {HOME.final.title}
            </h2>
            <CtaButton href={APP_URL} variant="white">
              {HOME.final.cta}
            </CtaButton>
            <p className="text-sm text-white/70 mt-4">{HOME.final.note}</p>
          </ScrollReveal>
        </section>
      </main>
      <LandingFooter />
    </>
  )
}
