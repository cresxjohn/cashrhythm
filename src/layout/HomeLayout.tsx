'use client'

import Image from 'next/image'
import { FC, ReactNode } from 'react'
import './style.css'
import MainTabs from './tabs/MainTabs'
import Loader from '@/assets/animations/Loader'

interface Props {
  children: ReactNode
}

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <main className="p-4">
      <div className="flex justify-between mx-4 gap-4">
        <div className="flex flex-row items-center gap-4">
          <Image
            width={24}
            height={24}
            alt="logo"
            src="/logo.png"
            className="-mt-1"
          />
          <MainTabs />
        </div>
        <Loader />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1080px] pt-10">{children}</div>
      </div>
    </main>
  )
}

export default HomeLayout
