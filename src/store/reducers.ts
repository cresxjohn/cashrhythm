import { accountSlice } from './modules/accounts'
import { profileSlice } from './modules/profile'

const reducers = {
  [profileSlice.name]: profileSlice.reducer,
  [accountSlice.name]: accountSlice.reducer,
}

export default reducers
