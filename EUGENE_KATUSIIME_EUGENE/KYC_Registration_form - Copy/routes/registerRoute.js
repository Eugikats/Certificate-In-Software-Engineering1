const express = require('express');
const {Model} = require('mongoose')
const router = express.Router();
const User = require("../models/userModel")

router.get("/register",(req,res)=>{
    res.render("register")
  });

  router.post("/register",async(req,res)=>{
    try{
        const register = new User(req.body);
        await register.save()
        res.redirect("/register")
        console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
})
  module.exports=router