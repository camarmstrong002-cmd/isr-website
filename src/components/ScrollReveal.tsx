'use client'
import { useRef, useEffect, ReactNode } from 'react'

// Sections rise from a visible state. Never from opacity 0.
export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in')
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in')
        observer.unobserve(el)
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="rise" style={delay ? { transitionDelay: `${delay * 60}ms` } : undefined}>
      {children}
    </div>
  )
}
