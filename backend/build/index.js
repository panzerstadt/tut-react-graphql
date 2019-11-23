"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var GraphQLServer = require("graphql-yoga").GraphQLServer;
var prisma = require("./generated/prisma-client").prisma;
require("colors");
var Query = require("./resolvers/Query");
var Mutation = require("./resolvers/Mutation");
var resolvers = {
    Query: Query,
    Mutation: Mutation
};
var server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: resolvers,
    context: function (request) {
        return __assign(__assign({}, request), { prisma: prisma });
    }
});
server
    .start(function () {
    return console.log("server is running on http://localhost:4000".bgBlack.cyan);
})
    .catch(function (e) {
    return console.error(("something bad happened! check out what it is: " + e).bgBlack.red);
});
