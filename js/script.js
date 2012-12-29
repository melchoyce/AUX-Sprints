var addressBook = [
	{
		name: "Mel Choyce",
		email: "melissachoyce@gmail.com"
	},
	{
		name: "Kelly Dwan",
		email: "kelly.dwan@gmail.com"
	},
	{
		name: "Sean Smevik",
		email: "smsmev@gmail.com"
	},
	{
		name: "Mat Budelman",
		email: "matbudelman@gmail.com"
	},
	{
		name: "Xin Xin",
		email: "xin@xin-squared.com"
	},
	{
		name: "Ed Healy",
		email: "ehealy@gmail.com"
	},
	{
		name: "David Levine",
		email: "dmlevi@gmail.com"
	},
	{
		name: "Geordie Kaytes",
		email: "geordie.kaytes@freshtilledsoil.com"
	},
	{
		name: "Time Wright",
		email: "tim.wright@freshtilledsoil.com"
	}
];

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