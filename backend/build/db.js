"use strict";
// this is the offline DB
// by adding prisma, the code will stop using this and connect to the AWS aurora instance as DB instead
var DB = new Map();
var addToDB = function (key, url, description) { return DB.set(key, { url: url, description: description }); };
addToDB("link-0", "www.howtographql.com", "Fullstack tutorial for GraphQL");
addToDB("link-1", "www.google.com", "search for the internet");
addToDB("link-2", "www.yahoo.com", "old school search for the internet");
var moduleExport = (module.exports = DB);
moduleExport.addToDB = addToDB;
moduleExport.idCount = DB.size;
