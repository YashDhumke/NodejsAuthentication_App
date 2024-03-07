// smoothies application

// necessary imports 
const express = require("express");
const mongoose = require("mongoose");
const authRoutes  = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');
const {requireAuth, checkUser} = require("./middleware/authmiddleware");

const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');


// setting up the middleware 
app.use(express.static('public'))  // to serve the public files to the server like stylesheets and images 
app.use(express.json())      // it takes any json data which come along with the request and it passes it into a javascript object so that we can use it inside the code 
app.use(cookieParser())
// database connectivity ..
mongoose.connect("mongodb+srv://dhumkeyash:%40Yash_007@smoothiescluster.d0qowsq.mongodb.net/?retryWrites=true&w=majority&appName=smoothiesCluster")
  .then(
    app.listen(PORT, () => {
      console.log("listning to the port");
    })
  )
  .catch((err) => {
    console.log(err);
  });

app.get("*",checkUser)

app.get("/", requireAuth, (req, res) => {
  res.render("home");
});

app.get("/smoothies", requireAuth ,(req, res)=>{
    res.render("smoothies")
})

// routing 
app.use(authRoutes);


