import { gql } from 'graphql-tag'

export default gql`
  type Payment {
    _id: ID!
    name: String!
    amount: Float!
    fromAccount: Account!
    toAccount: Account
    isRecurring: Boolean!
    startDate: String!
    frequency: String
    recurringEndType: String
    endDate: String
    noOfEvents: Int
    url: String
    payee: String
    note: String
    transactions: [Transaction!]!
    isArchived: Boolean
  }

  input CreatePaymentInput {
    name: String!
    amount: Float!
    fromAccount: ID!
    toAccount: ID
    isRecurring: Boolean!
    startDate: String!
    frequency: String
    recurringEndType: String
    endDate: String
    noOfEvents: Int
    url: String
    payee: String
    note: String
    transactions: [ID!]!
    isArchived: Boolean
  }

  input UpdatePaymentInput {
    name: String
    amount: Float
    fromAccount: ID
    toAccount: ID
    isRecurring: Boolean
    startDate: String
    frequency: String
    recurringEndType: String
    endDate: String
    noOfEvents: Int
    url: String
    payee: String
    note: String
    isArchived: Boolean
  }

  type Mutation {
    createPayment(clientID: ID!, input: CreatePaymentInput!): Payment!
    updatePayment(paymentID: ID!, input: UpdatePaymentInput!): Payment!
    deletePayment(paymentID: ID!, clientID: ID!): Payment!
    archivePayment(paymentID: ID!): Payment!
    unarchivePayment(paymentID: ID!): Payment!
  }
`
