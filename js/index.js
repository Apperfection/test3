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

	if ($(this).index() == previousIndex) {} else {

	href = ("index.html " + $(this).data('page'));
	$(".panelButton").off('click');
	$("#loads").css('z-index', 20);
	$(".panelButton").removeClass("theChoosenOne");
	$(this).addClass("theChoosenOne");
	wantedPosition = $(this).position();
	nextCoordinates = ("0," + (wantedPosition.top)  + "px,0");
	$("#currentArrow").anim({translate3d: nextCoordinates}, 0.6, 'ease-out');
	$( ".front" ).load( href , function(){
	//$("#loads").css("visibility", "hidden");
	$(".panelButton").on('click', animateEle);
	$("#loads").css('z-index', -10);
	} );
}}
//end of handler

});
