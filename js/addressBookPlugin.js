// enclose the plugin in its own anonymous function
(function($) {

	$.fn.addressBookPlugin = function(options) {
		
		// the default options for the plugin, which you can redefine when you call the plugin function later.
		var defaults = {
			contactsUrl: 'data/contacts.json',
			output: '#search-results'
		}; // end default options
		
		// allowing the options to be customizable
		var options = $.extend(defaults, options);
		
		// looping through each element the plugin will be attaching to
		return this.each(function() {
		
			var input = $(this),
				book = {

				search : function(event) {
		
					// stop the default behavior
					event.preventDefault();
					
					// start the Ajax call
					$.getJSON(options.contactsUrl, function(data) {
		
						var searchValue = input.val().toLowerCase(),
							addrBook = data.addressBook,
							count = addrBook.length;
		
						// clear the target area just in case there's something in it
						$(options.output).empty();
		
						// check the count
						if (count > 0 && searchValue !== "") {
		
							// loop through the contacts
							$.each(addrBook, function (i, obj) {
		
								// search through whatever is typed to see if they match anything in our contacts lists
								var isItFound = obj.name.toLowerCase().indexOf(searchValue);
		
								// if it's not -1, then it's found some results and will output them in a div
								if(isItFound !== -1) {
		
									$(options.output).append('<a href="mailto:' + obj.email + '"><div class="contact">' + obj.name + '<div class="contact-email"></div></div></a>');
		
								}
		
							}); // end each
		
						} // end count check
		
					}); // end ajax call
		
				} // end search
		
			} // end book	
		
			// activate the event listeners
			input.keyup(function(event) {
				book.search(event);
			});
		
		}); // end loop
		
	}; // end addressBookPlugin

})(jQuery); // end anonymous function