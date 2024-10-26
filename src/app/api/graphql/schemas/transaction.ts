import { gql } from 'graphql-tag'

export default gql`
  type Transaction {
    _id: ID!
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

  type Mutation {
    updateTransaction(
      transactionID: ID!
      input: UpdateTransactionInput!
    ): Transaction!
    deleteTransaction(transactionID: ID!, paymentID: ID!): Transaction!
    skipTransaction(transactionID: ID!): Transaction!
    voidTransaction(transactionID: ID!): Transaction!
  }
`
