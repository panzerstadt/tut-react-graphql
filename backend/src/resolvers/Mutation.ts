import { GQLMutationTypeResolver } from "../schema";
import { Context } from "../schema-local"; // https://github.com/graphql-boilerplates/typescript-graphql-server/blob/master/basic/src/utils.ts

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { APP_SECRET, getUserId } from "../utils"

export const mutation: GQLMutationTypeResolver = {
  createLink: (parent, args, context: Context, info) => {
    const userId = getUserId(context);
    return context.prisma.createLink({
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } }
    });
  },
  updateLink: (parent, args, context: Context, info) => {
    const userId = getUserId(context);
    return context.prisma.updateLink({
      data: {
        url: args.url,
        description: args.description,
        lastUpdatedBy: { connect: { id: userId } }
      },
      where: {
        id: args.id
      }
    });
  },
  deleteLink: (parent, args, context: Context, info) => {
    const userId = getUserId(context);
    return context.prisma.deleteLink({
      id: args.id
    });
  },
  signup: async (parent, args, context: Context, info) => {
    const password = await bcrypt.hash(args.password, 10);

    const user = await context.prisma.createUser({ ...args, password });
    // the beauty of spreading here is that you've already validated what comes in
    // at the schema level, so you can't get anything except
    // signup(email: String!, password: String!, name: String!): AuthPayload

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
      token,
      user
    };
  },
  login: async (parent, args, context: Context, info) => {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
      throw new Error("No such user found");
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
      token,
      user
    };
  }
};
