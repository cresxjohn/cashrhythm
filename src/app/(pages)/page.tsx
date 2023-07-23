'use client'

import withStoreProvider from '@/app/(store)/Provider'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

const Home: FC = () => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/') router.replace('/dashboard')
  }, [pathname, router])

  return null
}

export default withStoreProvider(Home)
