/*
开启后台主页
 */

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var admin={name:'admin'};


router.get('/admin',function(req, res, next) {
  if(req.session.user){
	res.render('newsdashboard');
  }else{
  	res.render('admin',{info:'请登录'});
  }
});


router.post('/',function(req,res,next){
	
		if(req.body.username === 'admin' && req.body.password === 'admin' ){
			req.session.user = admin;
			//console.log(req.session);
			res.render('newsdashboard');		
		}else{
			res.render('admin',{info:'登录信息有误'});
		}

});

module.exports = router;