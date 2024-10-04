import { gql } from 'graphql-tag'

export default gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
  }

  type Client {
    _id: ID!
    user: User!
    accounts: [Account!]!
    payments: [Payment!]!
  }

  input GetClientInput {
    userID: String!
  }

  input CreateUserInput {
    username: String!
    password: String!
    email: String!
  }

  input DeactivateUserInput {
    userID: ID!
  }

  type CreateUserPayload {
    user: User!
    client: Client!
  }

  type Query {
    getClient(input: GetClientInput!): Client!
  }

  type Mutation {
    createUser(input: CreateUserInput!): CreateUserPayload!
    deactivateUser(input: DeactivateUserInput!): User!
  }
`
