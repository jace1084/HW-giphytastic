$(document).ready(function(){

	//first, create my original array that will (hopefully) be updated with the users choices.

	var char = ["Princess Leia", "Luke Skywalker", "Anakin Skywalker", "Yoda", "R2-D2", "C-3PO", "Han Solo", "Chubacca"];

	//Now, create a function that will display the gif buttons...loop throught the array

	function disButtons(){
		$("#buttonsView").empty();
		for(var i=0; i<char.length; i++){
			var gifButton = $("<button>");
			var gifButton.addClass("fav");
			var gifButton.addClass("btn btn-primary");
			gifButton.attr("data-name", char[i]);
			gifButton.text(char[i]);
			$("#buttonsView").append(gifButton);
		}
	}

	//Next, create a function that will display the gif buttons
	
})