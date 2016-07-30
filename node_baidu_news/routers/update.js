var express = require('express');
var router=express.Router();
var bodyParser = require('body-parser');
var router = express.Router();
var pool=require('../modules/db');
var xss = require('xss');



router.use('/',function(req,res){
	// var pool=getPool();
	var newsId=xss(req.body.newsId);
	var newsTitle=xss(req.body.newsTitle);
	var newsContent=xss(req.body.newsContent);
	var newsImg=xss(req.body.newsImg);
	var newsSrc=xss(req.body.newsSrc);
	var newsTime=xss(req.body.newsTime);
	var newsTag=xss(req.body.newsTag);
	var sql=`UPDATE \`newslist\` SET \`newsTitle\`='${newsTitle}',\`newsContent\`='${newsContent}',\`newsImg\`='${newsImg}',\`newsSrc\`='${newsSrc}',\`newsTag\`='${newsTag}',\`newsTime\`= '${newsTime}'WHERE \`newsId\` = '${newsId}'`;
	console.log(sql);
	pool.query(sql,function(err,rows,fields){
		if (err) throw err;
		res.json({succus:'ok'});
	});
});

module.exports=router;