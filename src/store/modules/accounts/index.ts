import { createSlice } from '@reduxjs/toolkit'
import { AccountState } from './interface'

const initialState: AccountState = {
  list: [],
}

export const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccountList(state, action) {
      state.list = action.payload
    },
  },
})

export const { setAccountList } = accountSlice.actions
