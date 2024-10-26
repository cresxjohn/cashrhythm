import { RootState } from '@/store'

export const getShowProcessingLoader = (state: RootState) =>
  state.app.showProcessingLoader
