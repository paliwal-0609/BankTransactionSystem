const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Email is required for creating a user"],
        unique: [true, 'Email already exists'],
        trim: true, //trims whitespace from the beginning/end of the string
        lowercase: true, //converts the email to lowercase before saving
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            'Please fill a valid email address']
    },
    name:{
        type: String,
        required: [true, "Name is required for creating an account"]
    },
    password:{
        type: String,
        required:[true, "Password is required for creating an account"],
        minlength: [6, "password should contain 6 or more characters"],
        select: false
    },
    systemUser:{
        type: Boolean,
        deafult: false,
        immutable:true,
        select: false
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function(){
    if(!this.modifiedPaths("password")){
        return
    }
    const hash = await  bcrypt.hash(this.password, 10);
    this.password = hash

    return
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password) //compare return true or false
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;