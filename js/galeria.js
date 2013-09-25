$(".pic").click(function(){
	var src = ("res/galeria/" + ($(this).index() + 1) + "d.png");	
	$("#insidePic").attr("src", src);
	$("#insidePic").data("number", $(this).index() + 1);
});

$("#previousPic").click(function(){
	if ($("#insidePic").data("number") > 1) {
	var src = ("res/galeria/" + ($("#insidePic").data("number") - 1) + "d.png");
	$("#insidePic").attr("src", src);
	$("#insidePic").data("number", $("#insidePic").data("number") - 1);
	}	
	else {
	$("#insidePic").attr("src", "res/galeria/12d.png");
	$("#insidePic").data("number", 12);
	}
});

$("#nextPic").click(function(){
	if ($("#insidePic").data("number") < 12) {
	var src = ("res/galeria/" + ($("#insidePic").data("number") + 1) + "d.png");
	$("#insidePic").attr("src", src);
	$("#insidePic").data("number", $("#insidePic").data("number") + 1);
	}	
	else {
	$("#insidePic").attr("src", "res/galeria/1d.png");
	$("#insidePic").data("number", 1);
	}
});