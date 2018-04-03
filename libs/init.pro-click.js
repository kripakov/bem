$(document).ready(function(){
	$('.container__web .main-menu').find('a').each(function(i,e){
		$(e).click(function(){
			console.log($(this).attr('data-filter').split('.').join(""));
			var f = $(this).attr('data-filter');
			$('.wrap__square').css('display','none');
			if(f){
				$(f).css('display','block');
			}
		})
	});
});