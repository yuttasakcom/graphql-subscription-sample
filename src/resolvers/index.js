export default {
  Query: {
    hello: () => 'Hello, Graphql',
  },
  Mutation: {},
  Subscription: {
    count: {
      subscribe(root, args, { pubsub }, info) {
        let count = 0

        setInterval(() => {
          count++
          pubsub.publish('count', { count })
        }, 1000)

        return pubsub.asyncIterator('count')
      },
    },
  },
}
