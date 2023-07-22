import { Provider } from 'react-redux'
import { store } from '.'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const StoreProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
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
