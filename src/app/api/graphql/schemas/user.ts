import { gql } from 'graphql-tag'

export default gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
  }

  type Client {
    id: ID!
    user: User!
    accounts: [Account!]!
    payments: [Payment!]!
  }

  input GetClientInput {
    userId: String!
  }

  input CreateUserInput {
    username: String!
    password: String!
    email: String!
  }

  input DeactivateUserInput {
    userId: ID!
  }

  type CreateUserPayload {
    user: User!
    client: Client!
  }

  extend type Query {
    getClient(input: ): Client!
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): CreateUserPayload!
    deactivateUser(input: DeactivateUserInput!): User!
  }
`
