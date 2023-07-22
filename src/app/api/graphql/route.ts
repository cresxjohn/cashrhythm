import resolvers from '@/graphql/resolvers'
import typeDefs from '@/graphql/schema'
import { createSchema, createYoga } from 'graphql-yoga'

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST }
