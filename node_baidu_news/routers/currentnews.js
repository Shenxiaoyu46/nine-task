var express = require('express');
var router=express.Router();
var moment=require('moment');
var bodyParser = require('body-parser');
var router = express.Router();
var pool=require('../modules/db');



router.use('/',function(req,res){
	// var pool=getPool();
	var newsId=req.query.newsId;
	console.log(newsId);
	var sql=`SELECT * FROM \`newslist\` WHERE \`newsId\` = '${newsId}'`;
	pool.query(sql,function(err,rows,fields){
		console.log(rows);
		rows.forEach(function(item){
        	item.newsTime=moment(item.newsTime).format('YYYY-MM-DD');
        });
		res.json(rows);
	});

});


module.exports=router;