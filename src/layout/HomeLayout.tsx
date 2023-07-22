import MainHeader from '@/layout/headers/Main'
import { FC, ReactNode } from 'react'
import './style.css'

interface Props {
  children: ReactNode
}

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col items-center">
      <MainHeader />
      <div className="layout-home">{children}</div>
    </main>
  )
}

export default HomeLayout
