const DB = new Map();

const addToDB = (key, url, description) => DB.set(key, { url, description });

addToDB("link-0", "www.howtographql.com", "Fullstack tutorial for GraphQL");
addToDB("link-1", "www.google.com", "search for the internet");
addToDB("link-2", "www.yahoo.com", "old school search for the internet");

const moduleExport = (module.exports = DB);
moduleExport.addToDB = addToDB;
