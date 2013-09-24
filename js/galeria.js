$(".pic").click(function(){
	var src = $(this).attr("src");
	$("#insidePic").attr("src", src);
	$("#insidePic").data("number", $(this).index() + 1);
});

$("#previousPic").click(function(){
	if ($("#insidePic").data("number") > 1) {
	var src = ("res/" + ($("#insidePic").data("number") - 1) + ".jpg");
	$("#insidePic").attr("src", src);
	$("#insidePic").data("number", $("#insidePic").data("number") - 1);
	}	
	else {
	$("#insidePic").attr("src", "res/12.jpg");
	$("#insidePic").data("number", 12);
	}
});

$("#nextPic").click(function(){
	if ($("#insidePic").data("number") < 12) {
	var src = ("res/" + ($("#insidePic").data("number") + 1) + ".jpg");
	$("#insidePic").attr("src", src);
	$("#insidePic").data("number", $("#insidePic").data("number") + 1);
	}	
	else {
	$("#insidePic").attr("src", "res/1.jpg");
	$("#insidePic").data("number", 1);
	}
});