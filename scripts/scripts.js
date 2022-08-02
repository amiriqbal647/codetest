
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