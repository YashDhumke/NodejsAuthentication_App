const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// error handling at server side
const handleErrors = (err) => {
  // console.log(err.message)
  let errors = { email: "", password: "" };
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  if(err.message === "incorrect email"){
    errors.email = "email is not registered"
    return errors;
  }
  if(err.message === "incorrect password"){
    errors.email = "the password is incorrect"
    return errors;
  }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    return errors;

  }
};

// token creation
const createToken = (id) => {
  return jwt.sign({ id }, "yash dhumke", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body; // way to get the body of post message passed as a request to the server
  
  try {

    const user = await User.create({ email, password }); // way to create the document of the model
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err)
    // console.log(errors)
    res.status(400).json({errors});
  }

};

module.exports.logout_get = async (req, res) =>{
  res.cookie('jwt', "", {maxage:1});
  res.redirect('/');
}
