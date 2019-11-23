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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var GraphQLServer = require("graphql-yoga").GraphQLServer;
var DB = require("./db");
var idCount = DB.idCount;
// actual implementation of the GraphQL schema
var resolvers = {
    Query: {
        info: function () { return "this is the API endpoints of a Hacker News Clone"; },
        feed: function () {
            return __spreadArrays(DB.entries()).map(function (entry) { return (__assign({ id: entry[0] }, entry[1])); });
        },
        link: function (parent, args) {
            return DB.get(args.id);
        }
    },
    Mutation: {
        post: function (parent, args) {
            var id = "link-" + idCount++;
            var link = {
                description: args.description,
                url: args.url
            };
            DB.set(id, link);
            return __assign({ id: id }, link);
        },
        updateLink: function (parent, args) {
            if (DB.has(args.id)) {
                var original = DB.get(args.id);
                DB.addToDB(args.id, args.url || original.url, args.description || original.description);
                return DB.get(args.id);
            }
            else {
                return null;
            }
        },
        deleteLink: function (parent, args) {
            if (DB.has(args.id)) {
                var data = __assign({ id: args.id }, DB.get(args.id));
                DB.delete(args.id);
                return data;
            }
            else {
                return null;
            }
        }
    }
};
var server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: resolvers
});
server.start(function () { return console.log("server is running on http://localhost:4000"); });
