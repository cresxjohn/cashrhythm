import { gql } from 'graphql-tag'

export default gql`
  type Account {
    _id: ID!
    name: String!
    category: String!
    balance: Float!
    creditLimit: Float
    onHoldAmount: Float
    statementDate: String
    daysFromStatementToDueDate: Int
    dateIssued: String
    excludeInStats: Boolean
    isArchived: Boolean
  }

  input CreateAccountInput {
    name: String!
    category: String!
    balance: Float!
    creditLimit: Float
    onHoldAmount: Float
    statementDate: String
    daysFromStatementToDueDate: Int
    dateIssued: String
    excludeInStats: Boolean
    isArchived: Boolean
  }

  input UpdateAccountInput {
    name: String
    category: String
    balance: Float
    creditLimit: Float
    onHoldAmount: Float
    statementDate: String
    daysFromStatementToDueDate: Int
    dateIssued: String
    excludeInStats: Boolean
    isArchived: Boolean
  }

  type Mutation {
    createAccount(clientID: ID!, input: CreateAccountInput!): Account!
    updateAccount(accountID: ID!, input: UpdateAccountInput!): Account!
    deleteAccount(accountID: ID!, clientID: ID!): Account!
    archiveAccount(accountID: ID!): Account!
    unarchiveAccount(accountID: ID!): Account!
  }
`
