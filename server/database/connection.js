const mongoose = require("mongoose");
const Configs = require("../utils/constants")

const MONGO_DB_URI = Configs.MONGO_DB_URI;
mongoose.connect(MONGO_DB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connetion error:"));
db.once("open", () =>{
    console.log(`Connected to mongoDB!`)
})




module.exports = db;
