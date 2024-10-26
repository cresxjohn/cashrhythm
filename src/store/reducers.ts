import { combineReducers } from '@reduxjs/toolkit'
import { appSlice } from './slices/app'
import { clientSlice } from './slices/client'
import { cashflowSlice } from './slices/cashflow'

const reducers = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [clientSlice.name]: clientSlice.reducer,
  [cashflowSlice.name]: cashflowSlice.reducer,
})

export default reducers
