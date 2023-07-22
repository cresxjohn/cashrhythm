'use client'

import Image from 'next/image'
import { FC } from 'react'
import Button from '../../components/button'
import IconButton from '../../components/icon-button'
import './style.css'

const MainHeader: FC = () => {
  return (
    <div className="header-main">
      <div className="header-main-body grid grid-cols-3 gap-10 items-center">
        <div>
          <IconButton type="menu" />
        </div>
        <div className="relative flex justify-center py-5">
          <Image
            src={'/logo.png'}
            alt={'Logo'}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="flex justify-end">
          <Button className="font-semibold text-color-primary">
            NEW RECORD
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
