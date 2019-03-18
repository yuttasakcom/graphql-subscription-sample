import { gql } from 'apollo-server-express'

const baseTypeDefs = gql`
  type Query {
    _: Boolean
    hello: String!
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
    count: Int!
  }
`

export default [baseTypeDefs]
