import { gql } from '@apollo/client'

export const getAccountsQuery = gql`
  query getAccounts {
    result: items {
      id
      name
      description
    }
  }
`

