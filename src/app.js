import http from 'http'
import express from 'express'
import { ApolloServer, PubSub } from 'apollo-server-express'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const app = express()
const pubsub = new PubSub()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pubsub },
  subscriptions: {
    onConnect: () => console.log('Connected to websocket'),
  },
  tracing: true,
})

server.applyMiddleware({ app })
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

export default httpServer
