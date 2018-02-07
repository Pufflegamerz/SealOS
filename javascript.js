var version = 0.1;
var y = 0;
var x = 0;
var popup1 = 0;
function load() {
	popup("Welcome!","Seal OS 2 has been released!");
}
function contextmenu() {
	document.getElementById('contextmenu').style.display = "block";
	document.getElementById('contextmenu').style.top = y + "px";
	document.getElementById('contextmenu').style.left = x + "px";
}
function popup(title,text,type) {
	popup1++
	if (type == null || type == "message") {
		document.getElementById('desktop').innerHTML += "<div id='popup"+popup1+"' class='popup' style='width: 300px; height: 100px;'><div class='draggy' id='draggy"+popup1+"'>"+title+"<span id='close' onclick='this.parentElement.parentElement.outerHTML = "+'""'+";'>X</span></div><br><span>"+text+"</span></div>";
		$(function() {
	    	$("#popup" + popup1).draggable({handle: "#draggy" + popup1, containment: "#desktop"});
		});
	} else if (type == "app") {
		document.getElementById('desktop').innerHTML += "<div id='popup"+popup1+"' class='popup' style='width: 500px; height: 500px;'><div class='draggy' id='draggy"+popup1+"'>"+title+"<span id='close' onclick='this.parentElement.parentElement.outerHTML = "+'""'+";'>X</span></div><br><span>"+text+"</span></div>";
		$(function() {
	    	$("#popup" + popup1).draggable({handle: "#draggy" + popup1, containment: "#desktop"});
		});
	}
	$(function() {
	    $(".popup").draggable({handle: ".draggy", containment: "#desktop"});
	});
}
function coords(event) {
    x = event.clientX;
    y = event.clientY;
}
function app(app) {
	if (app == "texteditor") {
		popup("Code Editor","test","app");
	}
}