import EnvironmentBanner from '@/components/env-banner'
import { Providers } from '@/providers'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wallet',
  description: 'Your financial companion',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <EnvironmentBanner />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
