prisma backend on an AWS aurora server.

server: https://app.prisma.io/tang-li-qun-b48c3d/services/prisma-us1/tut-react-graphql-prisma-backend/dev/databrowser
prisma admin: https://us1.prisma.sh/tang-li-qun-b48c3d/tut-react-graphql-prisma-backend/dev/_admin

some example queries:

```graphql
# Write your query or mutation here
mutation Add {
  post(url: "https://www.hackernews.com", description: "for hackish news") {
    id
  }
}

query View {
  feed {
    id
    description
    url
  }
}

query GetLink {
  link(id: "ck2rbvy383wr90b095b28yq17") {
    url
    description
  }
}

mutation DeleteLink {
  deleteLink(id: "link-1") {
    id
    description
    url
  }
}

mutation UpdateLink {
  updateLink(
    id: "ck2rbzwpau2k50b00z79iwtx6"
    url: "www.testingjavascript.com"
    description: "the current gold standard in demystifying the act of writing tests."
  ) {
    id
    url
    description
  }
}
```
