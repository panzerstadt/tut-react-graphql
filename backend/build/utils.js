"use strict";
var jwt = require("jsonwebtoken");
var APP_SECRET = "this-is-A-t3st-pri5ma-tutor1al";
var getUserId = function (context) {
    var Authorization = context.request.get("Authorization");
    if (Authorization) {
        var token = Authorization.replace("Bearer ", "");
        var userId = jwt.verify(token, APP_SECRET).userId;
        return userId;
    }
    throw new Error("Not Authenticated");
};
/*
The getUserId function is a helper function that you’ll call
in resolvers which require authentication (such as post).
It first retrieves the Authorization header
(which contains the User’s JWT) from the context.
It then verifies the JWT and retrieves the User’s ID from it.
Notice that if that process is not successful for any reason,
the function will throw an exception.
You can therefore use it to “protect” the resolvers which
require authentication.
*/
module.exports = {
    APP_SECRET: APP_SECRET,
    getUserId: getUserId
};
