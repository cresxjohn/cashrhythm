import { createSlice } from '@reduxjs/toolkit'
import { CashFlow } from './interface'

const initialState: CashFlow = {}

export const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState,
  reducers: {},
})

export const {} = cashflowSlice.actions
