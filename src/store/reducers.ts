import { combineReducers } from '@reduxjs/toolkit'
import { rootSlice } from './slices/root'

const reducers = combineReducers({
  [rootSlice.name]: rootSlice.reducer,
})

export default reducers
