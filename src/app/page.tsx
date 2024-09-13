'use client'

import withStoreProvider from '@/store/Provider'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

const Home: FC = () => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/') router.replace('/dashboard')
  }, [pathname, router])

  // load client data
  useEffect(() => {}, [])

  return null
}

export default withStoreProvider(Home)
