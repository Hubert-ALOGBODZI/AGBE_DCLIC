const mongoose = require("mongoose");


const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
 
    date:{
        type: Date,
        required: true
    },
    rdv:String
   
});
const UserModel= mongoose.model('Users',User); 
module.exports =UserModel;