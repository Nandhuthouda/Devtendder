const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, 'First name is required'],
        minlength: [4, 'First name must be at least 4 characters'],
        maxlength: [50, 'First name must not exceed 50 characters'],
        // validate(value){
        //     if(value.length()>=50){
        //         throw new Error("namenot valid");
        //     }
        // },

    },
    lastName : {
        type: String,
        lowercase:true
    },
    emailId :{
        type:String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type: String,
        

    },
    age :{
        type : Number,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male", "female","Others"].includes(value)){
                throw new Error("Gender data in not valid");
            }
        },
    },
    skills:{
        type:Array,

    },
    bf :{
        type:String,
    }
},
{
    timestamps:true,
}); 

const User = mongoose.model('User', userSchema);

module.exports = User;