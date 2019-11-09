const { prisma } = require("./generated/prisma-client");
require("colors");

const main = async () => {
  // create new link
  const newLink = await prisma.createLink({
    description: "something that i just placed onto aws!",
    url: "www.google.com"
  });

  console.log(
    `just created a new link ${newLink.id} at ${newLink.createdAt} about "${newLink.description}"`
      .bgCyan
  );

  // view links
  const viewLinks = await prisma.links();
  console.log("all the links".yellow);
  console.log(viewLinks);
};

main().catch(e => console.error(e));
