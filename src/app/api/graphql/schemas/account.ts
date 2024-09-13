import { gql } from 'graphql-tag'

export default gql`
  type Account {
    id: ID!
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
    createAccount(clientId: ID!, input: CreateAccountInput!): Account!
    updateAccount(accountId: ID!, input: UpdateAccountInput!): Account!
    deleteAccount(accountId: ID!, clientId: ID!): Account!
    archiveAccount(accountId: ID!): Account!
    unarchiveAccount(accountId: ID!): Account!
  }
`
