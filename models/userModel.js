const mongoose = require("mongoose")
const validator = require("validator")   // this is the module used to validate the data which is get entered into the database 
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    email :{
        type:String,
        required:[true, "Please enter the email"],
        unique:true,
        lowercase:true,
        validate:[ validator.isEmail , "Please enter a valid email"]   // validator.isEmail is used to validate the entered email
    },
    password:{
        type:String,
        required:[true, "Plese enter the password"],
        unique:true,
        minlength:[6, "minimum length of the password is 6"]
    }
})



// applying a function before the doc is get saved in db
// if you have to use this keyword then you only have to use normal functions 

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// static method to login user
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('User', userSchema);
module.exports = User; 





// mongoose hooks are used to fire a function after any mongoose related activity is get happened