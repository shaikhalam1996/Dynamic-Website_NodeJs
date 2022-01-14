const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    mobile:{
        type:Number,
        required:true,
        min:10
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    address:{
        type:String,
        required:true,
        minLength:3
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
    
})


const Userdata = new mongoose.model("user",userSchema);
module.exports = Userdata;