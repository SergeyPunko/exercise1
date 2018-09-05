var anotherP = document.getElementById('anotherPage');  
anotherP.onclick = function() {
	document.location.href = "https://github.com/";
}

var styleP = document.getElementById('anotherStyle');
styleP.onclick = function(){
	if (document.body.style.background == "green"){
		document.body.style.background = "blue"
	} else {
		document.body.style.background = "green"
	}
}

var flexP = document.getElementById("flexPage")
flexP.onclick = function(){
	var text = ["Запомни", "Это","Лето","Таким"];
	document.body.innerHTML='';
	var parentElem = document.body
	var boxSlider = document.createElement('div');
	boxSlider.className = "slider";
	for(var i=1;i<=4;i++){
		boxSlider.innerHTML+="<div class=\"items item"+i+"\"><span>"+text[i-1]+"</span></div>";
	}
	boxSlider.innerHTML+="<a href=\"twotask.html\" id=\"home\">В начало</a>";
	parentElem.appendChild(boxSlider);
}