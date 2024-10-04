import { RootState } from '@/store'

export const getAccounts = (state: RootState) => state.client.accounts
