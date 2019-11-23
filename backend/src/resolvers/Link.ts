// a Link resolver is needed because there are custom relationships (params referring to other interfaces)
// that you need to teach graphql to resolve
// because graphql doesn't know how to infer where to get that data from.
// https://www.howtographql.com/graphql-js/6-authentication/
import { Context } from "../schema-local";
import { GQLLinkTypeResolver } from "../schema";

export const link: GQLLinkTypeResolver = {
  postedBy: (parent, args, context: Context, info) =>
    context.prisma.link({ id: parent.id }).postedBy(), // WHAT??
  lastUpdatedBy: (parent, args, context: Context, info) =>
    context.prisma.link({ id: parent.id }).lastUpdatedBy(), // maybe think of this as promise.resolve?
  createdAt: (parent, args, context: Context, info) =>
    context.prisma.link({ id: parent.id }).createdAt(),
  updatedAt: (parent, args, context: Context, info) =>
    context.prisma.link({ id: parent.id }).updatedAt()
};

/*
In the postedBy resolver, 
you’re first fetching the Link using the prisma client 
instance and then invoke postedBy on it. 
Notice that the resolver needs to be called postedBy 
because it resolves the postedBy field from the 
Link type in schema.graphql.
*/
