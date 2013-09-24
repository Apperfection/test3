$( document ).ready(function() {

//pre setup
var previousIndex = 0;
var wantedPosition = $("#ofecie").position();
var nextCoordinates = ("0," + (wantedPosition.top)  + "px,0");
$("#currentArrow").anim({translate3d: nextCoordinates}, 0, 'none');
$(".front").css('z-index', 10);
$(".back").css('z-index', 9);
//end of pre setup

//cutton click handler
$(".panelButton").on('click', animateEle);

function animateEle(e) {

	if ($(this).index() == previousIndex) {} else {

	$(".panelButton").removeClass("theChoosenOne");
	$(this).addClass("theChoosenOne");

	hrefPage = ("content/" + $(this).data('page'));
	hrefScipt = ("js/" + $(this).data('script'));

	wantedPosition = $(this).position();
	nextCoordinates = ("0," + (wantedPosition.top)  + "px,0");
	$("#currentArrow").anim({translate3d: nextCoordinates}, 0.6, 'ease-out');

	front = $(".front");
	back = $(".back");
	$(".panelButton").off('click');

	if($(this).index() > previousIndex) { //lower
		previousIndex = $(this).index();
		//$(back).load(hrefPage, function(){
			$(back).append(document.getElementById( "gal" ));
			$(back).anim({translate3d: '0,100%,0'}, 0, 'none', function(){
				$(front).css('z-index', 9);
				$(back).css('z-index', 10);
				$(back).anim({translate3d: '0,0,0'}, 0.6, 'ease-out');
				$(front).anim({translate3d: '0,-100%,0'}, 0.6, 'ease-out', function(){
					$(front).anim({translate3d: '0,0,0'}, 0, 'none');
					$(front).removeClass("front");
					$(front).addClass("back");
					$(back).removeClass("back");
					$(back).addClass("front");
					$(front).empty();
					$(".panelButton").on('click', animateEle);
					$.getScript(hrefScipt);
				});
			});
		//});
	}

	else { //higher
		previousIndex = $(this).index();
			//$(back).load(hrefPage, function(){
			$(back).append(document.getElementById( "sp" ));
			$(back).anim({translate3d: '0,-100%,0'}, 0, 'none', function(){
				$(front).css('z-index', 9);
				$(back).css('z-index', 10);
				$(back).anim({translate3d: '0,0,0'}, 0.6, 'ease-out');
				$(front).anim({translate3d: '0,100%,0'}, 0.6, 'ease-out', function(){
					$(front).anim({translate3d: '0,0,0'}, 0, 'none');
					$(front).removeClass("front");
					$(front).addClass("back");
					$(back).removeClass("back");
					$(back).addClass("front");
					$(front).empty();
					$(".panelButton").on('click', animateEle);
					$.getScript(hrefScipt);
				});
			});
		//});
		} 
	}

}
//end of handler

});
