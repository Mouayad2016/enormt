require("dotenv").config(); // this is important!
module.exports = {
  development: {
    dialect: process.env.DEVELOPMENT_DIALECT,
    storage: process.env.DEVELOPMENT_STORAGE,
  },
  production: {
    username: process.env.PRODUCTION_DATA_BASE_USERNAME,
    password: process.env.PRODUCTION_DATA_BASE_PASSWORD,
    database: process.env.PRODUCTION_DATABASE,
    host: "dpg-cgk5n2ceoogkndh8lp90-a",
    port: 5432,
    dialect: "postgres",
  },
};
