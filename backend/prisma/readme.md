this example uses AWS aurora as a DB

- to setup own DB
  - https://www.howtographql.com/graphql-js/4-adding-a-database/
  - https://www.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/

regenerate prisma mappings on change:

deploy new API to server with `prisma deploy`
update new API autocomplete with `prisma generate`

_lines 13-15 in `prisma.yml` perform that as a post-deploy hook_
