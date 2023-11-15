require("dotenv").config();

const Configs = {
  PORT: process.env.PORT,
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  JWT_SECRET:process.env.JWT_SECRET
};

module.exports = Configs;
