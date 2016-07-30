var express=require('express');
var router=express.Router();
var pool=require('../modules/db');
var xss=require('xss');



router.post('/',function(req,res){
	// var pool=getPool();
	var newsTitle=xss(req.body.newsTitle);
	var newsContent=xss(req.body.newsContent);
	var newsImg=xss(req.body.newsImg);
	var newsSrc=xss(req.body.newsSrc);
	var newsTime=xss(req.body.newsTime);
	var newsTag=xss(req.body.newsTag);
	var sql=`INSERT INTO \`newslist\` (\`newsId\`, \`newsTitle\`, \`newsContent\`, \`newsImg\`, \`newsSrc\`, \`newsTag\`, \`newsTime\`) VALUES (NULL, '${newsTitle}', '${newsContent}', '${newsImg}', '${newsSrc}', '${newsTag}', '${newsTime}')`;
	console.log(sql);
	pool.query(sql,function(err,rows,fields){
		if (err) throw err;
		res.json({succus:'ok'});
	});
});


module.exports=router;