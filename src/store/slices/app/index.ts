import { createSlice } from '@reduxjs/toolkit'
import { App } from './interface'

const initialState: App = {
  showProcessingLoader: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowProcessingLoader(state, action) {
      state.showProcessingLoader = action.payload
    },
  },
})

export const { setShowProcessingLoader } = appSlice.actions
