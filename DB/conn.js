///////////////////////////
// Environmental Variables
///////////////////////////
if (process.env.NODE_ENV === "development") {
  // env.yaml only used in development, npm run dev
  // will error if file does not exist
  const yenv = require("yenv");
  const env = yenv("env.yaml", { env: process.env.NODE_ENV });
  process.env = { ...process.env, ...env };
}

///////////////////////////////////
//Initialize Objection
///////////////////////////////////
const { Model } = require("objection");

/////////////////////////////////
// Database Connection
/////////////////////////////////
const { DBHOST, DBUSER, DBPASSWORD, DATABASE } = process.env;

const pg = require("knex")({
  client: "pg",
  connection: {
    host: DBHOST,
    user: DBUSER,
    password: DBPASSWORD,
    database: DATABASE,
  },
});

Model.knex(pg);

module.exports = { pg, Model };
