var express = require('express');
var mysql = require('mysql');
var moment=require('moment');
var bodyParser = require('body-parser');
var router = express.Router();
var pool=require('../modules/db');


router.use('/', function(req, res) {
    var sql=`SELECT * FROM \`newslist\``;
    // console.log(sql);
    // var pool = getPool();
    pool.query(sql, function(err, rows, fields) {
        if (err) throw err;
        // console.log(rows);
        
        rows.forEach(function(item){
        	// item.newsTime=moment().format(item.newsTime,'YYYY-MM-DD');
        	
        	console.log(item.newsTime);
        	item.newsTime=moment(item.newsTime).format('YYYY-MM-DD');
        	// console.log(t);

        });
        res.json(rows);
    });
});

module.exports=router;