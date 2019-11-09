const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
require("colors");

// actual implementation of the GraphQL schema
const resolvers = {
  Query: {
    info: () => `this is the API endpoints of a Hacker News Clone`,
    feed: (root, args, context, info) => context.prisma.links(),
    link: (parent, args, context, info) => {
      return context.prisma.link({
        id: args.id
      });
    }
  },
  Mutation: {
    post: (root, args, context, info) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description
      });
    },
    updateLink: (parent, args, context, info) => {
      return context.prisma.updateLink({
        data: {
          url: args.url,
          description: args.description
        },
        where: {
          id: args.id
        }
      });
    },
    deleteLink: (parent, args, context, info) => {
      return context.prisma.deleteLink({
        id: args.id
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});

server
  .start(() =>
    console.log(`server is running on http://localhost:4000`.bgBlack.cyan)
  )
  .catch(e =>
    console.error(
      `something bad happened! check out what it is: ${e}`.bgBlack.red
    )
  );
