'use client'

import HomeLayout from '@/layout/HomeLayout'
import withStoreProvider from '@/store/Provider'
import { getProfileName } from '@/store/modules/profile/getter'
import { FC } from 'react'
import { useSelector } from 'react-redux'

const Dashboard: FC = () => {
  const name = useSelector(getProfileName)

  // Use to update state
  // const dispatch = useDispatch()

  // const handleInputChange = (e) => {
  //   const name = e.target.value
  //   dispatch(setProfileName(name))
  // }

  return (
    <HomeLayout>
      <div></div>
    </HomeLayout>
  )
}

export default withStoreProvider(Dashboard)
