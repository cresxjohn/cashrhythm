import { gql } from 'graphql-tag'

export default gql`
  type Query {
    hello: String!
  }

  type Mutation {
    greet: String!
  }
`
