import { mergeResolvers } from '@graphql-tools/merge'

import BaseResolvers from './base'
import UserResolvers from './user'
import AccountResolvers from './account'
import PaymentResolvers from './payment'
import TransactionResolvers from './transaction'

const typeDefs = mergeResolvers([
  BaseResolvers,
  UserResolvers,
  AccountResolvers,
  PaymentResolvers,
  TransactionResolvers,
])

export default typeDefs
