const { GraphQLServer } = require("graphql-yoga");
const DB = require("./db");
const idCount = DB.idCount;

// actual implementation of the GraphQL schema
const resolvers = {
  Query: {
    info: () => `this is the API endpoints of a Hacker News Clone`,
    feed: () =>
      [...DB.entries()].map(entry => ({
        id: entry[0],
        ...entry[1]
      })),
    link: (parent, args) => {
      return DB.get(args.id);
    }
  },
  Mutation: {
    post: (parent, args) => {
      const id = `link-${idCount++}`;
      const link = {
        description: args.description,
        url: args.url
      };
      DB.set(id, link);
      return { id, ...link };
    },
    updateLink: (parent, args) => {
      if (DB.has(args.id)) {
        const original = DB.get(args.id);
        DB.addToDB(
          args.id,
          args.url || original.url,
          args.description || original.description
        );
        return DB.get(args.id);
      } else {
        return null;
      }
    },
    deleteLink: (parent, args) => {
      if (DB.has(args.id)) {
        const data = {
          id: args.id,
          ...DB.get(args.id)
        };
        DB.delete(args.id);
        return data;
      } else {
        return null;
      }
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`server is running on http://localhost:4000`));
