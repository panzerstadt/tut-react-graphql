"use strict";
var info = function () { return "this is a Hacker News Clone"; };
var feed = function (parent, args, context, info) { return context.prisma.links(); };
module.exports = {
    info: info,
    feed: feed
};
