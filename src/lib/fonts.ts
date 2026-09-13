import { Schibsted_Grotesk } from 'next/font/google'

// One family, self-paired. Hierarchy comes from size, weight and colour only.
export const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})
