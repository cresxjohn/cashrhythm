import { createSlice } from '@reduxjs/toolkit'
import { Profile } from './interface'

const initialState: Profile = {
  name: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileName(state, action) {
      state.name = action.payload
    },
  },
})

export const { setProfileName } = profileSlice.actions
