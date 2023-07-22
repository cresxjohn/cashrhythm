import resolvers from '@/app/api/graphql/resolvers'
import typeDefs from '@/app/api/graphql/schema'
import { createSchema, createYoga } from 'graphql-yoga'
import mongoose from 'mongoose'

// Connect to MongoDB database
mongoose.connect(
  process.env.API_MONGODB_URL || 'mongodb://localhost:27017/wallet',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', () => {
  console.log('🌿 Connected to MongoDB!')
})

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST }
