import { createSlice } from '@reduxjs/toolkit'
import { Root } from './interface'

const initialState: Root = {
  showProcessingLoader: false,
  client: {},
}

export const rootSlice = createSlice({
  name: 'Root',
  initialState,
  reducers: {
    setShowProcessingLoader(state, action) {
      state.showProcessingLoader = action.payload
    },
  },
})

export const { setShowProcessingLoader } = rootSlice.actions
