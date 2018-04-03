$(document).ready(function(){
	$('.isotope').on('click', 'a', function() {
		var filterValue = $( this ).attr('data-filter');
		//console.log(filterValue);
		$('.square').isotope({
			filter: filterValue
		});
	});
	
	/*
	$('.isotope').children().find('a').each(function(i,e){
		//console.log(i,e);
		$(e).bind('click',function(){
			var filter = $(this).attr('data-filter'),
				square = $('.square');
			console.log(filter.split('.').join(""));
			console.log('****');
			console.log($('.container__' + filter.split('.').join("")));
			$('.container__' + filter.split('.').join("")).addClass('active');
			if($('.container__' + filter.split('.').join(""))){
				$('.container__' + filter.split('.').join("")).removeClass('on-active');
			}
		});
	});
	*/
});