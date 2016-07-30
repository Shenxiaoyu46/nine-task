$(document).ready(function(){
	refrashNews("推荐");
	$(".news_taglist a").each(function(index,item){
		$(this).click(function(event){
			event.preventDefault();
			var newsTag=$(this).html();
			$(this).addClass("active");
			$(this).parent().siblings().children().removeClass("active");
			console.log(newsTag);
			refrashNews(newsTag);
		});
	});
});


function refrashNews(newsTag){
	// 清空新闻窗口中的所有内容
	$ul=$("article ul");
	$ul.empty();
	$.get("/newstag",{newsTag:newsTag},function(data){
		//get json_obj form server
		console.log(data);
		$.each(data,function(index,item){
			var $li=$("<li>").addClass("news_item").prependTo($ul);
			var $divImg=$("<div>").addClass("news_img").appendTo($li);
			var $img=$("<img>").attr("src",item.newsImg).appendTo($divImg);
			var $h1=$("<h1>").text(item.newsTitle).appendTo($li);
			var $divInfo=$("<div>").addClass("news_info").appendTo($li);
			var $divTime=$("<div>").addClass("news_time").text(item.newsTime).appendTo($divInfo);
			var $divSrc=$("<div>").addClass("news_src").text(item.newsSrc).appendTo($divInfo);

		});


	});
}