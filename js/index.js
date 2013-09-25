$( document ).ready(function() {

$("#preaload").css("visibility", "hidden");
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
	theCheck  = ($(this).data('num'));
	if (theCheck == previousIndex) {} else {
	
	hrefScipt = ("js/" + $(this).data('script'));
	href = ("index.html " + $(this).data('page'));
	$(".panelButton").off('click');
	$("#loads").css('z-index', 20);
	$(".panelButton").removeClass("theChoosenOne");
	$(this).addClass("theChoosenOne");
	wantedPosition = $(this).position();
	nextCoordinates = ("0," + (wantedPosition.top)  + "px,0");
	$("#currentArrow").anim({translate3d: nextCoordinates}, 0.6, 'ease-out');
	$( ".front" ).load( href , function(){

	$(".panelButton").on('click', animateEle);
	$("#loads").css('z-index', -10);
	$.getScript(hrefScipt);

	previousIndex = theCheck;
	} );
}}
//end of handler

});

