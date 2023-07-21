const express = require("express");
const router = express.Router();
const UrlTable = require('../models/urltable');
const mongoose = require('mongoose');
var setup = require('../dbconfig/db');

router.get('/:shortUrl', function (req, res, next) {
    var shortUrl = req.params.shortUrl;
    mongoose.connect(setup.mongo_db, setup.mongo_options);
    UrlTable.findOne({ shortUrl:shortUrl }).then((result) => {
        res.redirect(result.longUrl);
    })
});

module.exports = router;