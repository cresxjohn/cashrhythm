'use client'

import { Provider } from 'react-redux'
import { persistor, store } from '.'
import { FC, ReactNode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

interface Props {
  children: ReactNode
}

export const StoreProvider: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  )
}

const withStoreProvider = (Component: FC) => {
  const WrappedComponent: FC = () => (
    <StoreProvider>
      <Component />
    </StoreProvider>
  )

  return WrappedComponent
}

export default withStoreProvider
