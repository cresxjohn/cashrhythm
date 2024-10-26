// app/providers.tsx
'use client'

import { store } from '@/store'
import { NextUIProvider } from '@nextui-org/react'
import { Provider as ReduxProvider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </NextUIProvider>
  )
}
