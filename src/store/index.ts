import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as useReduxDispatch } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers'

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
}

// const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDispatch = () => useReduxDispatch<AppDispatch>()
