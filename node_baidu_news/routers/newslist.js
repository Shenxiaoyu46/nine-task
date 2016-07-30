const express = require('express');
// const path = require('path');
const mysql = require('mysql');
const moment=require('moment');
const bodyParser = require('body-parser');
var router = express.Router();
var pool=require('../modules/db');


router.use('/', function(req, res) {
    var newstag=req.param('newsTag');
    var sql=`SELECT * FROM \`newslist\` WHERE \`newsTag\` = '${newstag}'`;
    console.log(sql);
    // var pool = getPool();
    pool.query(sql, function(err, rows, fields) {
       if (err) {
            console.log(err);
            return;
        } 
         console.log(rows);
        
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