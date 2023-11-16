const mongoose = require("mongoose");


const companySchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    type: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    user: {
        type: Number,
        require: true,
    },
    country:{
        type: String,
        require: true,
    },
    currency: {
        type: String,
    },
    remarks:{
        type: String,
    },
    deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamp:true
}
)



const Company = mongoose.model("Company", companySchema);

module.exports = Company;