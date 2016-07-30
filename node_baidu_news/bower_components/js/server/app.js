/*
防止xss攻击要前后端同时进行，前端应该在和后端有交互的的环节尽量过滤，前端的过滤防君子不防小人
关键的防护还是在服务器端。


我修改的第一步是在添加新闻的环节，
    1.显示新闻列表功能上原来使用jquery.html的全部换成了jquery.text，
      jquery可以在输入新闻列表的时候自动转义，防止输出的内容中带有可被注入的标签。
    2.在添加新闻环节使用xss fliter进行过滤，这个可以在前端中使用，也可以在nodejs中使用，我先在前端过滤一下。
 */



// 这个变量用来存储是做插入数据还是更新数据
var isUpdate=false;
//更新新闻的时候保存当前的新闻id
var currentNewsId=null;
//保存节点对象，这个节点为新闻列表中的表身部分
var $newsTable=$("#newsListTable tbody");
/*
页面载入的时候连接服务器端，获取新闻列表，展示在表格中。表格右侧添加一个删除按钮
 */
$(document).ready(function(){
    refreshList();
    $("#newsTime").val(getNowFormatDate());

});
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
/*
refreshList函数，刷新一下右侧新闻列表，server端传回为json数据。
[{
    "newsId": "2",
    "newsTitle": "qwe",
    "newsContent": "wer",
    "newsTime": "2011-09-09",
    "newsTag": "qaz",
    "newsImg": "asd"
}, {
    "newsId": "6",
    "newsTitle": "wqe",
    "newsContent": "rq",
    "newsTime": "2016-02-03",
    "newsTag": "122133",
    "newsImg": "qwe"
}
]

 */
function refreshList(){
    // empty all table
    $newsTable.empty();
    $.ajax({
        type:"GET",
        url:"admin/getlist",
        success:function(data){
            // var obj=JSON.parse(data);
            // 遍历每个data中的对象，准备添加表格
            $.each(data,function(index,item){
                var $tdId=$("<td>").text(item.newsId);
                var $tdTitle=$("<td>").text(item.newsTitle);
                var $tdTime=$("<td>").text(item.newsTime);
                var $btn=$("<button>").addClass("btn btn-danger").text("删除");
                var $tdCtl=$("<td></td>").append($btn);
                var $tRow=$("<tr>");
                $tRow.append($tdId,$tdTitle,$tdTime,$tdCtl);
                $newsTable.append($tRow);
            });
        }
    });
}

/*
    程序功能：删除新闻
    程序思路：点击按钮，发送后端执行删除对应的新闻，前端重新执行一次刷新列表
*/ 
$("#newsListTable tbody").on("click","button",function(e){
    delNewsId=$(this).parent().prevAll().eq(2).text();
    $("#myModal").modal("show");
    e.stopPropagation();
});

$("#myModal .btn-danger").eq(0).click(function(){
    $.post("admin/delete",{newsId:delNewsId},function(data){
        console.log(data);
        $("#myModal").modal("hide");
        refreshList();
    });
});

/*
    程序功能：修改新闻
    设计思路，点击表格，将对应数据库中的数据发送到表单中，然后设置一下isupdate为true
 */
$("#newsListTable tbody").on("click","tr",function(e){
    var newsId=$(this).children("td").eq(0).text();
    $.getJSON("admin/currentnews",{newsId:newsId},function(data){
        currentNewsId=data[0].newsId;
        console.log(isUpdate);
        $("#newsTitle").val(data[0].newsTitle);
        $("#newsContent").val(data[0].newsContent);
        $("#newsImg").val(data[0].newsImg);
        $("#newsSrc").val(data[0].newsSrc);
        $("#newsTime").val(data[0].newsTime);
        $("#newsTag").val(data[0].newsTag);
        isUpdate=true;
    });
});


// 提交按钮点击后的事件
$("#submit").click(function() {
    // 提交按钮点击事件
    // 先判断必填项目是否全部有内容
    if ($("#newsTitle").val() === "" || $("#newsContent").val() === "" || $("#newsImg").val() === "" || $("#newsSrc").val() === "" || $("#newsTime").val() === "") {
        // 有空白情况下执行的内容
        if($("#newsTitle").val() === ""){
            $("#newsTitle").parent().addClass("has-error");
        }else{
            $("#newsTitle").parent().removeClass("has-error");
        }
        if($("#newsContent").val() === ""){
            $("#newsContent").parent().addClass("has-error");
        }else{
            $("#newsContent").parent().removeClass("has-error");
        }
        if($("#newsImg").val() === ""){
            $("#newsImg").parent().addClass("has-error");
        }else{
            $("#newsImg").parent().removeClass("has-error");
        }
        if($("#newsSrc").val() === ""){
            $("#newsSrc").parent().addClass("has-error");
        }else{
            $("#newsSrc").parent().removeClass("has-error");
        }
    } else {
        var d = new Date();
        // 这里还要判断是执行insert还是执行update
        var jsonstr = {
            newsId:currentNewsId,
            newsTitle: $("#newsTitle").val(),
            newsContent: $("#newsContent").val(),
            newsImg: $("#newsImg").val(),
            newsSrc: $("#newsSrc").val(),
            newsTime: $("#newsTime").val(),
            newsTag: $("#newsTag").val()
        };
        if(isUpdate){
            $.ajax({
                type: 'POST',
                url: "admin/update",
                data: jsonstr,
                success: function(data) {
                    $("#newsTitle").val("");
                    $("#newsContent").val("");
                    $("#newsImg").val("");
                    $("#newsSrc").val("");
                    $("#newsTime").val(getNowFormatDate());
                    $("#newsTag").val("推荐");
                    refreshList();
                    console.log(data);
                    // 重置
                    isUpdate=false;
                },
            });
        }else{
            $.ajax({
                type: 'POST',
                url: "admin/insert",
                data: jsonstr,
                success: function(data) {
                    $("#newsTitle").val("");
                    $("#newsContent").val("");
                    $("#newsImg").val("");
                    $("#newsSrc").val("");
                    $("#newsTime").val(getNowFormatDate());
                    $("#newsTag").val("推荐");
                    refreshList();
                    // 重置
                    isUpdate=false;
                },
            });
        }
        
    }
});
