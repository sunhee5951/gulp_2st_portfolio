$(document).ready(function(){	 
	var $bannerTop = $(".top").find("ul");
	var $bannerBot = $(".bottom").find("ul");
	var rollingId;
	var rollingId2;
	var widT = $bannerTop.children("li").outerWidth();
	var numT = $bannerTop.children("li").length;
	var widB = $bannerBot.children("li").outerWidth();
	var numB = $bannerBot.children("li").length;
	var totalWid = widT*numT;
	var totalWid2 = widB*numB;
	$bannerTop.width(totalWid);
	$bannerBot.width(totalWid2);

	//정해진 초마다 함수 실행
	rollingId = setInterval(function() { rollingTop(); }, 2400);//다음 
	rollingId2 = setInterval(function() { rollingBot(); }, 2400);

	//마우스 오버시 롤링을 멈춘다.
	$("#boxGroup2").on("mouseenter",function(){
		clearInterval(rollingId); //중지
		clearInterval(rollingId2);
	});

	//마우스 아웃되면 다시 시작
	$("#boxGroup2").on("mouseleave",function(){
		rollingId = setInterval(function() { rollingTop(); }, 2400);
		rollingId2 = setInterval(function() { rollingBot(); }, 2400);
	});

	function rollingTop() {
		$bannerTop.animate({left: -widT + "px"}, 1500, function() {
			$bannerTop.children("li").first().appendTo($bannerTop);
		$(this).css("left", 0);
		});
	}
	function rollingBot() {
		$bannerBot.animate({left: -widB + "px"}, 1500, function() {
			$bannerBot.children("li").first().appendTo($bannerBot);
		$(this).css("left", 0);
		});
	}

	$(".btnNext").on("click",function(e){
		e.preventDefault();
		$(".top>ul>li").first().appendTo(".top>ul");
		$(".bottom>ul>li").first().appendTo(".bottom>ul");
    });
});