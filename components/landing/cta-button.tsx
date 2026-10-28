import Link from 'next/link'
import type { ReactNode } from 'react'

interface CtaButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'white'
  size?: 'md' | 'lg'
}

const VARIANTS = {
  primary: 'bg-primary-700 text-white hover:bg-primary-800',
  outline: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50',
  white: 'bg-white text-primary-700 hover:bg-primary-50',
}

const SIZES = {
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function CtaButton({ href, children, variant = 'primary', size = 'lg' }: CtaButtonProps) {
  const className = `inline-flex items-center justify-center rounded-full font-bold transition-colors ${VARIANTS[variant]} ${SIZES[size]}`
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
