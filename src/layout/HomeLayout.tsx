'use client'

import Image from 'next/image'
import { FC, ReactNode } from 'react'
import './style.css'
import MainTabs from './tabs/MainTabs'

interface Props {
  children: ReactNode
}

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col items-center">
      <div className="layout-home pt-6">
        <Image
          width={40}
          height={40}
          alt="logo"
          src="/logo.png"
          className="mb-4 ml-3"
        />
        <MainTabs />
        {children}
      </div>
    </main>
  )
}

export default HomeLayout
