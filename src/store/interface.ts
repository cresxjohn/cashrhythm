import { Account } from './modules/accounts/interface'
import { Profile } from './modules/profile/interface'

export interface State {
  profile: Profile
  accounts: Account[]
}
