$(document).ready(function() {
	$('.pushy__style-0').click(function(){
		pushy(this, '.pushy-left__style-0');
		$('.pushy__style-0').fadeIn();
	});

	$('.pushy__style-1').click(function(){
		pushy(this, '.pushy-left__style-1');
	});

	function pushy(target,elem){
		if(parseFloat($(target).css('left')) === 0){
			$(target).css({'left': '300px'});
			$(elem).css({'left': '0'});
		}else{
			$(target).removeAttr('style');
			$(elem).css({'left': '-300px'});
		}
	}

})