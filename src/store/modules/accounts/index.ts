import { createSlice } from '@reduxjs/toolkit'
import { Account } from './interface'

const initialState: Account = {}

export const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccount(state, action) {
      state = action.payload
    },
  },
})

export const { setAccount } = accountSlice.actions
