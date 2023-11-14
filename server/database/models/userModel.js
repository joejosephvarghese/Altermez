const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    },
})


const User = mongoose.model("User", userSchema);

module.exports = User;