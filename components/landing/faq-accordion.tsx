'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

function AccordionItem({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-gray-100 rounded-[20px] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-bold text-gray-900 text-lg">{q}</span>
        <span className="text-2xl font-light text-gray-400 shrink-0 leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-6 pb-6 text-base text-gray-600 leading-relaxed">{a}</div>}
    </div>
  )
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <AccordionItem key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  )
}
