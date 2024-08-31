import { gql } from 'graphql-tag'

export default gql`
  type Transaction {
    id: ID!
    amount: Float!
    dueDate: String!
    paymentDate: String
    isSkipped: Boolean
    isPaid: Boolean
  }

  input UpdateTransactionInput {
    amount: Float
    dueDate: String
    paymentDate: String
    isSkipped: Boolean
    isPaid: Boolean
  }

  extend type Mutation {
    updateTransaction(
      transactionId: ID!
      input: UpdateTransactionInput!
    ): Transaction!
    deleteTransaction(transactionId: ID!, paymentId: ID!): Transaction!
    skipTransaction(transactionId: ID!): Transaction!
    voidTransaction(transactionId: ID!): Transaction!
  }
`
