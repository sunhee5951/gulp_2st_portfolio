$(document).ready(function(){	 
	$('#btns>li').on('click', function(){

		var i = $(this).index();
		var hei = $('.back>li').height();

		$('.box').stop().animate({marginLeft :(-100*i)+'%' },1000);
		$('.back').stop().animate({marginTop :-hei*i },1000);

		$('#btns>li').removeClass('on');
		$('#btns>li').eq(i).addClass('on');

		$('#txtBox>.inner>div').removeClass('on');
		$('#txtBox>.inner>div').eq(i).addClass('on');

		$('#boxGroup1>div').removeClass('on');
		$('#boxGroup1>div').eq(i).addClass('on');

	})

});