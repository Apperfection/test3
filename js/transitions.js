$.fn.myFunction = function() { 	

function prawo()
{
var front = $(".front").attr('id');
var back = $(".back").attr('id');
$(back).load(hrefPage, function(){
	$(front).anim({translate3d: '100%,0,0'}, 0.3, 'ease-in', function(){
		$(front).empty();
		$(front).css('z-index', 0);
		$(back).css('z-index', 1);
		$(front).anim({translate3d: '0,0,0'}, 0, 'none', function(){
			$(front).addClass("back");
			$(back).addClass("front");
			$(front).removeClass("front");
			$(back).removeClass("back");
		});
	});
});
}
}
