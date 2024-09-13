import { gql } from 'graphql-tag'

export default gql`
  type Payment {
    id: ID!
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
    createPayment(clientId: ID!, input: CreatePaymentInput!): Payment!
    updatePayment(paymentId: ID!, input: UpdatePaymentInput!): Payment!
    deletePayment(paymentId: ID!, clientId: ID!): Payment!
    archivePayment(paymentId: ID!): Payment!
    unarchivePayment(paymentId: ID!): Payment!
  }
`
