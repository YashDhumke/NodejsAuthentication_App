const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

// check json web token exist s and it is verified or not 
const requireAuth = (req, res, next) =>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, "yash dhumke", (err, decodedToken)=>{
            if(err){
                // console.log(err.message)
                res.redirect('/login')
            }else{
                // console.log(decodedToken)
                next()
            }
        })
    }
    else{
        res.redirect('/login')
    }
}

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'yash dhumke', async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

module.exports = {requireAuth, checkUser}