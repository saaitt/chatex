const express = require('express');
let router = express.Router();
var app = require('express')();


router.get('/', function(req, res){
    res.sendFile( process.cwd()+ '/views/chat.html');
  });


  
module.exports = router;
