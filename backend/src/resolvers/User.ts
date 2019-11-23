import { GQLUserTypeResolver } from "../schema";
import { Context } from "../schema-local";

export const user: GQLUserTypeResolver = {
  links: (parent, args, context: Context, info) =>
    context.prisma.user({ id: parent.id }).links()
};
