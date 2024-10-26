'use client'

import HomeLayout from '@/layout/HomeLayout'
import withStoreProvider from '@/store/Provider'
import { FC } from 'react'

const Dashboard: FC = () => {
  // Use to update state
  // const dispatch = useDispatch()

  // const handleInputChange = (e) => {
  //   const name = e.target.value
  //   dispatch(setProfileName(name))
  // }

  return (
    <HomeLayout>
      <main className="flex min-h-screen flex-col py-10 px-4 gap-6">
        <p className="text-3xl font-semibold">Dashboard</p>
      </main>
    </HomeLayout>
  )
}

export default withStoreProvider(Dashboard)
