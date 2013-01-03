/* =Standard Ajax xhr function to check for XMLHttpRequest vs. XMLHTTP
-------------------------------------------------------------- */

function getHttpObject() {
	
	// initialize the variable
	var xhr;
	
	if (window.XMLHttpRequest) { //check for support
		
		// if it's supported, use it because it's better
		xhr = new XMLHttpRequest();
		
	} else if (window.ActiveXObject) { // check for the IE6 Ajax
		
		// save it to the xhr var
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	
	// spit out the correct one so we can use it
	return xhr;
	
}


/* =Define the Ajax Call
-------------------------------------------------------------- */

/* define the Ajax call function */
function ajaxCall(dataURL, outputElement, callback) {

	/* use our function to get the current Ajax object based on support */
	var request = getHttpObject();

	outputElement.innerHTML = "Loading...";

	// check to see if Ajax call went through
	request.onreadystatechange = function() {

		if (request.readyState === 4 && request.status === 200) {

			//console.log(request.responseText);
			// save the ajax response to a variable
			var contacts = JSON.parse(request.responseText);

			// make sure the callback is indeed a function before executing it
			if (typeof callback === "function") {

				callback(contacts);

			} // end of function check

		} // end ajax status check
		
	} // end onreadystatechange

	request.open("GET", dataURL, true);
	request.send(null);
	
} // end function


/* =Search Form & Autocomplete
-------------------------------------------------------------- */

(function () {
	/* cache some initial variables */
	var searchForm = document.getElementById("search-form"),
		searchField = document.getElementsByTagName("input")[0],
		target = document.getElementById("search-results");
		
	/* define address book method */
	var book = {
	
		search : function(event) {
		
			// start the Ajax cal
			ajaxCall("data/contacts.json", target, function(data) {
		
				// save the input value, contacts length and i to variables
				var searchValue = searchField.value.toLowerCase(),
					addrBook = data.addressBook,
					count = addrBook.length,
					i;
					
				// stop the default behavior
				event.preventDefault();
				
				// clear the target area just in case there's something in it
				target.innerHTML = "";
				
				// check the count
				if (count > 0 && searchValue !== "") {
					
					// loop through the contacts
					for(i=0; i < count; i = i+1) {
						
						var obj = addrBook[i],
							isItFound = obj.name.toLowerCase().indexOf(searchValue);
	
						if(isItFound !== -1) {
							target.innerHTML += '<a href="mailto:' + obj.email + '"><div class="contact">' + obj.name + '<div class="contact-email"></div></div></a>';
						} // end if
	
					} // end for loop
				
				} // end if count
			
			}); // end ajax call
			
		} // end search
		
	} // end book
	
	/* activate the event listeners */
	searchField.addEventListener("keyup", book.search, false);
	
})();