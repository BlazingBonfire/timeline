var createButton = function(text){
 	var btn = document.createElement('button');
	btn.innerHTML = text;
  return btn;
}

class Panel {
	var input;
	var text;
  var button;

  constructor(input, text, button){
  	createButton(text);

  	this.input = input
  	this.text = text;
    this.button = button;
  }

  changeText(newText){
		this.button.innerHTML = 'changed!';
	}
}

var btn = createButton("test");
var wrapper = document.getElementById("divWrapper");
wrapper.appendChild(btn);
