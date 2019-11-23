// generate types from your custom schema.graphql: https://medium.com/@pongsatt/how-to-generate-typescript-types-from-graphql-schemas-8d63ed6cda2e
import { GQLQueryTypeResolver } from "../schema";
import { Context } from "../schema-local"; // https://github.com/graphql-boilerplates/typescript-graphql-server/blob/master/basic/src/utils.ts
import { isContext } from "vm";

export const query: GQLQueryTypeResolver = {
  info: () => `this is a hacker news clone!`,
  link: (parent, args, context: Context, info) =>
    context.prisma.link({ id: args.id }),
  links: (parent, args, context: Context, info) => context.prisma.links(),
  search: (parent, args, context: Context, info) =>
    context.prisma.links({
      where: {
        OR: [
          { description_contains: args.text },
          { url_contains: args.text },
          { id_contains: args.text }
        ]
      }
    })
};
