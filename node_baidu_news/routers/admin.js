/*
开启后台主页
 */

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




router.get('/',function(req, res, next) {
  res.render('admin',{info:''});
});


module.exports = router;