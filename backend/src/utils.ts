export { }; // https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

import jwt from "jsonwebtoken";
export const APP_SECRET = "this-is-A-t3st-pri5ma-tutor1al";

export const getUserId = (context: any) => {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const result = jwt.verify(token, APP_SECRET);
    console.log("result!", result)
    // @ts-ignore
    const { userId } = result
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
