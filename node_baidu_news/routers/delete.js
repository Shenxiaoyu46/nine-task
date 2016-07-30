var express=require('express');
var router=express.Router();
var pool=require('../modules/db'); 



router.use('/',function(req,res){
	// var pool=getPool();
	var newsId=req.body.newsId;
	var sql=`DELETE FROM \`newslist\` WHERE \`newslist\`.\`newsId\` = ${newsId}`;
	pool.query(sql,function(err,rows,fields){
		res.json({succus:"ok",type:"delete"});
	});
});

module.exports=router;