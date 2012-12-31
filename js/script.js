(function () {
	/* cache some initial variables */
	var searchForm = document.getElementById("search-form"),
		searchField = document.getElementsByTagName("input")[0],
		count = addressBook.length,
		target = document.getElementById("search-results");
		
	/* define address book method */
	var book = {
	
		search : function(event) {
			// save the input value, contacts length and i to variables
			var searchValue = searchField.value,
				i;
				
			// stop the default behavior
			event.preventDefault();
			
			// clear the target area just in case there's something in it
			target.innerHTML = "";
			
			// check the count
			if (count > 0 && searchValue !== "") {
				
				// loop through the contacts
				for(i=0; i < count; i = i+1) {
					
					var obj = addressBook[i],
						isItFound = obj.name.toLowerCase().indexOf(searchValue);

					if(isItFound !== -1) {
						target.innerHTML += '<a href="mailto:' + obj.email + '"><div class="contact">' + obj.name + '<div class="contact-email"></div></div></a>';
					} // end if

				} // end for loop
			
			} // end if count
			
		} // end search

	} // end book
	
	/* activate the event listeners */
	searchField.addEventListener("keyup", book.search, false);
	
})();