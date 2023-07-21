const express = require("express");
const router = express.Router();
const shortId = require('shortid');
const UrlTable = require('../models/urltable');
const mongoose = require('mongoose');
var setup = require('../dbconfig/db');

router.post('/', function(req, res, next) {

    var params = req.body;
    var url = params.longUrl;

    shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ^*')
    var shortid = shortId.generate();
    
    var objurl = { shortUrl: shortid, longUrl: url};
    
    mongoose.connect(setup.mongo_db, setup.mongo_options);

    UrlTable.create(objurl, function (err, objurl) {
      if (err) console.log(err);
      res.send("http://localhost:3000/" + shortid);
    });

    return;
});

module.exports = router;