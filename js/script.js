/* =Define the Ajax Call, then Search Form & Autocomplete
-------------------------------------------------------------- */

// Wrapping in an anonymous function
(function () {

	/* cache some initial variables */
	var searchField = document.getElementsByTagName("input")[0];
	
	var book = {
	
		search : function(event) {
		
			// stop the default behavior
            event.preventDefault();
            
            // start the Ajax call
            $.getJSON('data/contacts.json', function(data) {
	
				var searchValue = $("#search-field").val().toLowerCase(),
					addrBook = data.addressBook,
					count = addrBook.length;
				
				// clear the target area just in case there's something in it
				$('#search-results').empty();
				
				// check the count
				if (count > 0 && searchValue !== "") {
					
					// loop through the contacts
					$.each(addrBook, function (i, obj) {
					
						// search through whatever is typed to see if they match anything in our contacts lists
						var isItFound = obj.name.toLowerCase().indexOf(searchValue);
	
						// if it's not -1, then it's found some results and will output them in a div
						if(isItFound !== -1) {
					
							$('#search-results').append('<a href="mailto:' + obj.email + '"><div class="contact">' + obj.name + '<div class="contact-email"></div></div></a>').fadeIn();
							
						}
					
					}); // end each
				
				} // end count check
			
			}); // end ajax call
			
		} // end search

	} // end book	
	
	/* activate the event listeners */
    searchField.addEventListener("keyup", book.search, false);

})(); // end anonymous function