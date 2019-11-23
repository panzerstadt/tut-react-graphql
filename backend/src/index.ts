import "colors.ts";
import { GraphQLServer } from "graphql-yoga";
import { prisma, Prisma } from "./generated/prisma-client";

import { query } from "./resolvers/Query";
import { mutation } from "./resolvers/Mutation";
import { user } from "./resolvers/User";
import { link } from "./resolvers/Link";

import { IResolvers } from "graphql-tools";
import { GQLResolver } from "./schema";
import { DateTimeResolver } from "graphql-scalars";

const resolvers = {
  Query: query,
  Mutation: mutation,
  User: user,
  Link: link,
  // custom types
  DateTime: DateTimeResolver
} as GQLResolver;

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers as IResolvers, // https://github.com/prisma-labs/graphqlgen/issues/209
  context: request => {
    const p: Prisma = prisma;
    return {
      ...request,
      prisma: p
    };
  }
});

server
  .start(() =>
    console.log(`server is running on http://localhost:4000`.bg_black.cyan)
  )
  .catch((e: any) =>
    console.error(
      `something bad happened! check out what it is: ${e}`.bg_black.red
    )
  );
