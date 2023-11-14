require("dotenv").config();

const Configs = {
  PORT: process.env.PORT,
  MONGO_DB_URI: process.env.MONGO_DB_URI,
};

module.exports = Configs;
