const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');//support parsing of application/json type post data
app.use(bodyParser.json());

const registerRoutes = require("./routes/registerRoute")
const homepageRoutes = require("./routes/homepageRoute")



//support parsing of application/x-www-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true}))

const config = require("./config/database")
mongoose.connect(config.database,{
    // useNew gets data then converts it to data that is understandable in backend
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  const db = mongoose.connection
  //checking if db has connected
  db.once("open", ()=>{
    console.log("connected to db")
  })
  db.on("error",(err)=>{
  console.error(err )
  })
  
  app.set("view engine","pug")
//   app.set("views",(path.join(__dirname,"views")))
  //load assets
app.use('/css',express.static(path.resolve(__dirname,"public/css")))
app.use('/img',express.static(path.resolve(__dirname,"public/img")))
app.use('/js',express.static(path.resolve(__dirname,"public/js")))
//css/custom_css





app.use("/",registerRoutes)
app.use("/",homepageRoutes)

//this is what shows that a page doesn't exist
app.get("*", (req,res)=>{
    res.status(404).send("Page does not exist")
  })
  //This should always be the last line in your server file
    
app.listen(3002, () => console.log('listening on port 3002'));