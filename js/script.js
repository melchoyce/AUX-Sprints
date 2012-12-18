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

/* cache some initial variables */
var object = addressBook, // save the data object
	contactsCount = object.length, // counts the number of objects in your address book
	target = document.getElementById("search-results"), // where you're outputting the data
	i; // declare the "i" variable for later using in the loop
	
/* before doing anything make sure there are contacts to loop through */
if (contactsCount > 0) {

	/* loop through each JSON object item until you hit the last contact, then stop */
	for (i = 0; i < contactsCount; i = i+1) {
		
		/* inside the loop "i" is the array index */
		var item = object[i],
			name = item.name,
			email = item.email;
			
		/* insert each person's name & mailto link into the HTML */
		target.innerHTML += '<a href="mailto:' + email + '"><div class="contact">' + name + '<div class="contact-email"></div></div></a>';
		
	} // end for loop

}

