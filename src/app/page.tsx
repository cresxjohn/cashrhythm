'use client'

import { createCalculateCashflowWorker } from '@/lib/workers'
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

  // calculate cashflow on load
  useEffect(() => {
    const worker = createCalculateCashflowWorker()

    worker.onmessage = (event) => {
      console.log(event.data.result)
    }

    worker.postMessage({ num: 5 })

    return () => {
      worker.terminate()
    }
  }, [])

  return null
}

export default withStoreProvider(Home)
