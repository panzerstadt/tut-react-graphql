/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  info: string;
  links: Array<GQLLink>;
  link: GQLLink;
  search: Array<GQLLink>;
}

export interface GQLLink {
  id: string;
  description: string;
  url: string;
  postedBy?: GQLUser;
  lastUpdatedBy?: GQLUser;
  createdAt: string;
  updatedAt: string;
}

export interface GQLUser {
  id: string;
  name: string;
  email: string;
  links: Array<GQLLink>;
}

export interface GQLMutation {
  createLink: GQLLink;
  updateLink?: GQLLink;
  deleteLink?: GQLLink;
  signup?: GQLAuthPayload;
  login?: GQLAuthPayload;
}

export interface GQLAuthPayload {
  token?: string;
  user?: GQLUser;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  Link?: GQLLinkTypeResolver;
  User?: GQLUserTypeResolver;
  Mutation?: GQLMutationTypeResolver;
  AuthPayload?: GQLAuthPayloadTypeResolver;
}
export interface GQLQueryTypeResolver<TParent = any> {
  info?: QueryToInfoResolver<TParent>;
  links?: QueryToLinksResolver<TParent>;
  link?: QueryToLinkResolver<TParent>;
  search?: QueryToSearchResolver<TParent>;
}

export interface QueryToInfoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToLinksResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToLinkArgs {
  id: string;
}
export interface QueryToLinkResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToLinkArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToSearchArgs {
  text?: string;
}
export interface QueryToSearchResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToSearchArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLLinkTypeResolver<TParent = any> {
  id?: LinkToIdResolver<TParent>;
  description?: LinkToDescriptionResolver<TParent>;
  url?: LinkToUrlResolver<TParent>;
  postedBy?: LinkToPostedByResolver<TParent>;
  lastUpdatedBy?: LinkToLastUpdatedByResolver<TParent>;
  createdAt?: LinkToCreatedAtResolver<TParent>;
  updatedAt?: LinkToUpdatedAtResolver<TParent>;
}

export interface LinkToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LinkToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LinkToUrlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LinkToPostedByResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LinkToLastUpdatedByResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LinkToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LinkToUpdatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserTypeResolver<TParent = any> {
  id?: UserToIdResolver<TParent>;
  name?: UserToNameResolver<TParent>;
  email?: UserToEmailResolver<TParent>;
  links?: UserToLinksResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToLinksResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMutationTypeResolver<TParent = any> {
  createLink?: MutationToCreateLinkResolver<TParent>;
  updateLink?: MutationToUpdateLinkResolver<TParent>;
  deleteLink?: MutationToDeleteLinkResolver<TParent>;
  signup?: MutationToSignupResolver<TParent>;
  login?: MutationToLoginResolver<TParent>;
}

export interface MutationToCreateLinkArgs {
  url: string;
  description: string;
}
export interface MutationToCreateLinkResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateLinkArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateLinkArgs {
  id: string;
  url?: string;
  description?: string;
}
export interface MutationToUpdateLinkResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateLinkArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToDeleteLinkArgs {
  id: string;
}
export interface MutationToDeleteLinkResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToDeleteLinkArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToSignupArgs {
  email: string;
  password: string;
  name: string;
}
export interface MutationToSignupResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToSignupArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToLoginArgs {
  email: string;
  password: string;
}
export interface MutationToLoginResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToLoginArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLAuthPayloadTypeResolver<TParent = any> {
  token?: AuthPayloadToTokenResolver<TParent>;
  user?: AuthPayloadToUserResolver<TParent>;
}

export interface AuthPayloadToTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AuthPayloadToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
