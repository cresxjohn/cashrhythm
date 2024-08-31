import { mergeTypeDefs } from '@graphql-tools/merge'

import BaseSchemas from './base'
import UserSchemas from './user'
import AccountSchemas from './account'
import PaymentSchemas from './payment'
import TransactionSchemas from './transaction'

const typeDefs = mergeTypeDefs([
  BaseSchemas,
  UserSchemas,
  AccountSchemas,
  PaymentSchemas,
  TransactionSchemas,
])

export default typeDefs
