
/*BEGGINING OF SCROLL UP BUTTON*/
		mybutton = document.getElementById("myBtn");

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
  		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    		mybutton.style.display = "block";
  		} else {
    		mybutton.style.display = "none";
 		 }
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
  		document.body.scrollTop = 0; // For Safari
 		 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
/****************END OF SCROLL UP BUTTON********************/

/*FUNCTION FOR RESPONSIVE NAVBAR*/

const toggleButton = document.getElementsByClassName("togglbutton")[0]
const navigationlinks =document.getElementsByClassName("navlinks")[0]

toggleButton.addEventListener("click",() => {
	navigationlinks.classList.toggle("active")
})

/*****************FUNCTION FOR TYPING EFFECT*****************/

var quoteArray = ["online..."];
var textPosition = 0; 
// speed in milliseconds
var speed = 120;
typewriter = () => {
  document.querySelector("#quote").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>|</span>';
  
  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)

/**********************************************************/