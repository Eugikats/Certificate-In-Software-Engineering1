const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("homepage")
  })






  // node sees files as modules
  module.exports = router