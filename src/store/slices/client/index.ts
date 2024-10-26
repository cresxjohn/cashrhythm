import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Account, Client } from './interface'

const initialState: Client = {
  user: {
    username: '',
    email: '',
  },
  accounts: [
    {
      _id: 1,
      name: 'General Cash',
      category: 'Cash',
      balance: 2354312.34,
    },
    {
      _id: 2,
      name: 'BPI Amore Cashback',
      category: 'Credit Card',
      accountNumber: '542353',
      balance: 12645.43,
      creditLimit: 31000,
    },
    {
      _id: 3,
      name: 'Own Bank',
      category: 'Savings',
      accountNumber: '342353',
      balance: 122645.43,
    },
  ],
  payments: [],
}

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    createAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload)
    },
  },
})

export const { createAccount } = clientSlice.actions
