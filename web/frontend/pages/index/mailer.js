//file contains scripts connected with lib.css styles.
window.onload = function(){
	//add eventHandler on active 
	Array.prototype.forEach.call(document.querySelectorAll(".input-box input"), function(elem){
		
		elem.addEventListener("focus", function(){
			elem.nextSibling.nextElementSibling.classList.add("active")
		})

		elem.addEventListener("blur", function(){
			if(elem.value == ""){
				elem.nextSibling.nextElementSibling.classList.remove("active")
			}
		})
	})
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}


function addResizeEvent(func) {
  var old = window.onresize;
  if (typeof window.onresize != 'function') {
    window.onresize = func;
  } else {
    window.onresize = function() {
      if (old) {
        old();
      }
      func();
    }
  }
}